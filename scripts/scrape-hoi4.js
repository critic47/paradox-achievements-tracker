import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import TurndownService from 'turndown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function scrapeAchievements() {
  console.log('🚀 Avvio scraping degli achievements da HOI4 Wiki...');
  
  // Configura Turndown per convertire HTML in Markdown
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    emDelimiter: '*',
  });
  
  // Regola personalizzata per le immagini - converti URL relativi in assoluti
  turndownService.addRule('images', {
    filter: 'img',
    replacement: (content, node) => {
      const alt = node.getAttribute('alt') || '';
      let src = node.getAttribute('src') || '';
      
      // Converti URL relativi in assoluti
      if (src && !src.startsWith('http')) {
        src = `https://hoi4.paradoxwikis.com${src}`;
      }
      
      return src ? `![${alt}](${src})` : '';
    }
  });
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('📡 Navigazione alla pagina wiki...');
    await page.goto('https://hoi4.paradoxwikis.com/Achievements', {
      waitUntil: 'networkidle',
      timeout: 60000
    });
    
    console.log('⏳ Attesa caricamento tabella...');
    await page.waitForSelector('table tbody tr', { timeout: 30000 });
    
    // Scorri tutta la pagina per assicurarsi che tutti gli elementi siano caricati
    console.log('📜 Scrolling per caricare tutti gli achievements...');
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 500;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    
    // Aspetta un po' per assicurarsi che tutto sia caricato
    await page.waitForTimeout(2000);
    
    console.log('🔍 Estrazione dati...');
    const achievements = await page.evaluate(() => {
      const results = [];
      const rows = document.querySelectorAll('table tr');
      
      // Funzione per normalizzare gli apostrofi UTF-8 in ASCII
      const normalizeApostrophes = (text) => {
        if (!text) return text;
        return text
          .replace(/[\u2018\u2019]/g, "'")  // ' ' → '
          .replace(/[\u201C\u201D]/g, '"')  // " " → "
          .replace(/[\u200B-\u200D\uFEFF]/g, ''); // Rimuovi zero-width chars
      };
      
      console.log(`Found ${rows.length} rows`);
      
      rows.forEach((row, index) => {
        try {
          const cells = row.querySelectorAll('td');
          
          // Skip header rows
          if (cells.length === 0) return;
          
          // HOI4 wiki structure from first cell:
          // <div style="display:flex">
          //   <img> (icon)
          //   <div>
          //     <div style="font-weight: bold">Name</div>
          //     <div style="font-style: italic">Description</div>
          //   </div>
          // </div>
          
          if (cells.length >= 4) {
            const firstCell = cells[0];
            
            // Estrai nome e descrizione dalla struttura div
            let name = '';
            let description = '';
            
            // Cerca il div con font-weight: bold per il nome
            const nameDiv = firstCell.querySelector('div[style*="font-weight"] div[style*="bold"], div[style*="font-weight: bold"]');
            if (nameDiv) {
              name = nameDiv.textContent.trim();
            }
            
            // Cerca il div con font-style: italic per la descrizione  
            const descDiv = firstCell.querySelector('div[style*="font-style"] div[style*="italic"], div[style*="font-style: italic"]');
            if (descDiv) {
              description = descDiv.textContent.trim();
            }
            
            // Estrai icona
            const iconImg = firstCell.querySelector('img');
            let icon = '';
            if (iconImg) {
              let src = iconImg.getAttribute('src') || iconImg.getAttribute('data-src') || '';
              if (src && !src.startsWith('http')) {
                src = `https://hoi4.paradoxwikis.com${src}`;
              }
              icon = src;
            }
            
            // Estrai le altre colonne (come HTML per convertirle dopo)
            const startingConditionsHtml = cells.length > 1 ? cells[1].innerHTML : '';
            const requirementsHtml = cells.length > 2 ? cells[2].innerHTML : '';
            const notesHtml = cells.length > 3 ? cells[3].innerHTML : '';
            
            // DLC (colonna 4 - può essere icona o testo)
            let dlc = '';
            if (cells.length > 4 && cells[4].textContent.trim()) {
              const dlcImg = cells[4].querySelector('img');
              if (dlcImg) {
                dlc = dlcImg.getAttribute('alt') || dlcImg.getAttribute('title') || '';
              } else {
                dlc = cells[4].textContent.trim();
              }
            }
            
            // Version (colonna 5)
            const version = cells.length > 5 ? cells[5].textContent.trim() : '1.0';
            
            // Difficulty (colonna 6)
            let difficulty = cells.length > 6 ? cells[6].textContent.trim() : 'UC';
            
            // Normalizza difficulty
            difficulty = difficulty.toUpperCase().trim();
            if (!['VE', 'E', 'M', 'H', 'VH', 'I', 'UC'].includes(difficulty)) {
              difficulty = 'UC';
            }
            
            // Normalizza gli apostrofi in tutti i campi di testo
            name = normalizeApostrophes(name);
            description = normalizeApostrophes(description);
            
            // Validazione: deve avere almeno un nome e un'icona
            if (name && icon) {
              results.push({
                name,
                description,
                icon,
                startingConditionsHtml,
                requirementsHtml,
                notesHtml,
                dlc,
                version,
                difficulty
              });
            }
          }
        } catch (error) {
          console.error(`Error processing row ${index}:`, error.message);
        }
      });
      
      return results;
    });
    
    console.log(`✅ Estratti ${achievements.length} achievements`);
    
    if (achievements.length === 0) {
      throw new Error('Nessun achievement trovato! Verifica la struttura della tabella.');
    }
    
    // Converti HTML in Markdown per ogni achievement
    console.log('📝 Conversione HTML in Markdown...');
    achievements.forEach(ach => {
      ach.startingConditions = turndownService.turndown(ach.startingConditionsHtml || '').trim();
      ach.completionRequirements = turndownService.turndown(ach.requirementsHtml || '').trim();
      ach.notes = turndownService.turndown(ach.notesHtml || '').trim();
      
      // Rimuovi i campi HTML temporanei
      delete ach.startingConditionsHtml;
      delete ach.requirementsHtml;
      delete ach.notesHtml;
    });
    
    // Genera il file TypeScript
    console.log('📝 Generazione file TypeScript...');
    
    const output = `import type { Achievement } from './index'
/**
 * HOI4 Achievements
 * Scraped from https://hoi4.paradoxwikis.com/Achievements
 * Total: ${achievements.length} achievements
 * Last updated: ${new Date().toISOString()}
 */
export const achievements: Achievement[] = ${JSON.stringify(achievements.map((a, index) => ({
  id: `hoi4_ach_${index + 1}`,
  ...a,
  game: 'hoi4'
})), null, 2)};
`;
    
    const outputPath = join(__dirname, '../src/data/achievements/hoi4.ts');
    writeFileSync(outputPath, output, 'utf-8');
    
    console.log(`✅ File salvato in: ${outputPath}`);
    console.log(`📊 Statistiche:`);
    console.log(`   - Totale achievements: ${achievements.length}`);
    console.log(`   - Con DLC: ${achievements.filter(a => a.dlc).length}`);
    console.log(`   - Base game: ${achievements.filter(a => !a.dlc).length}`);
    
    const difficultyStats = achievements.reduce((acc, a) => {
      acc[a.difficulty] = (acc[a.difficulty] || 0) + 1;
      return acc;
    }, {});
    console.log(`   - Per difficoltà:`, difficultyStats);
    
  } catch (error) {
    console.error('❌ Errore durante lo scraping:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

scrapeAchievements().catch(console.error);
