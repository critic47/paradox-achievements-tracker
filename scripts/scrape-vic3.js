import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import TurndownService from 'turndown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function scrapeAchievements() {
  console.log('🚀 Avvio scraping degli achievements da Victoria 3 Wiki...');
  
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
        src = `https://vic3.paradoxwikis.com${src}`;
      }
      
      return src ? `![${alt}](${src})` : '';
    }
  });
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('📡 Navigazione alla pagina wiki...');
    await page.goto('https://vic3.paradoxwikis.com/Achievements', {
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
      const rows = document.querySelectorAll('table tbody tr');
      
      // Funzione per normalizzare gli apostrofi UTF-8 in ASCII
      const normalizeApostrophes = (text) => {
        if (!text) return text;
        return text
          .replace(/[\u2018\u2019]/g, "'")  // ' ' → '
          .replace(/[\u201C\u201D]/g, '"')  // " " → "
          .replace(/\u2013/g, '-')          // – → -
          .replace(/\u2014/g, '--')         // — → --
          .replace(/\u2026/g, '...');       // … → ...
      };
      
      for (const row of rows) {
        const cells = row.querySelectorAll('td');
        // Victoria 3 wiki ha 6 colonne: Achievement, Potential Conditions, Requirements, Notes, DLC, Difficulty
        if (cells.length < 6) continue;
        
        const firstCell = cells[0];
        
        // Estrai il nome dall'attributo alt dell'icona
        const iconImg = firstCell.querySelector('img');
        let name = '';
        let description = '';
        let guideUrl = '';
        
        if (iconImg && iconImg.alt) {
          name = normalizeApostrophes(iconImg.alt.replace(/\s+(icon|achievement)$/i, '').trim());
          
          // Cerca un link alla guida
          const allLinks = firstCell.querySelectorAll('a[href*="/"]');
          for (const link of allLinks) {
            const linkTitle = link.getAttribute('title') || '';
            const linkHref = link.getAttribute('href') || '';
            if (linkTitle === name && linkHref && !linkHref.includes('File:') && !linkHref.includes('Achievements')) {
              guideUrl = linkHref.startsWith('http') ? linkHref : `https://vic3.paradoxwikis.com${linkHref}`;
              break;
            }
          }
          
          // La descrizione è il testo dopo il nome
          const fullText = firstCell.textContent.trim();
          const cleanName = iconImg.alt.replace(/\s+(icon|achievement)$/i, '').trim();
          const nameIndex = fullText.indexOf(cleanName);
          if (nameIndex !== -1) {
            description = normalizeApostrophes(fullText.substring(nameIndex + cleanName.length).trim());
          }
        }
        
        // Estrai URL icona
        const icon = iconImg ? iconImg.src : '';
        
        // Funzione per estrarre l'HTML da convertire dopo
        const extractCellHTML = (cell) => {
          if (!cell) return '';
          
          const clone = cell.cloneNode(true);
          
          // Rimuovi elementi indesiderati
          clone.querySelectorAll('sup, .reference, script, style').forEach(el => el.remove());
          
          // Converti URL relativi delle immagini in assoluti
          clone.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http')) {
              img.setAttribute('src', `https://vic3.paradoxwikis.com${src}`);
            }
          });
          
          return clone.innerHTML || '';
        };
        
        // Victoria 3 wiki structure: [0: Achievement, 1: Potential Conditions, 2: Requirements, 3: Notes, 4: DLC, 5: Difficulty]
        const potentialConditionsHTML = extractCellHTML(cells[1]);
        const requirementsHTML = extractCellHTML(cells[2]);
        const notesHTML = extractCellHTML(cells[3]);
        const dlc = cells[4]?.textContent.trim() || '';
        const difficulty = cells[5]?.textContent.trim() || 'M'; // Difficulty is in the last column
        
        // Valida che sia un achievement valido
        if (name && description) {
          results.push({
            id: `vic3_ach_${results.length + 1}`,
            name,
            description: description.substring(0, 200),
            icon,
            startingConditionsHTML: potentialConditionsHTML || 'None',
            completionRequirementsHTML: requirementsHTML || '',
            notesHTML: notesHTML || '',
            dlc: dlc || '',
            version: '1.0',
            difficulty: difficulty || 'M',
            guideUrl: guideUrl || '',
            game: 'vic3'
          });
        }
      }
      
      return results;
    });
    
    console.log(`✅ Estratti ${achievements.length} achievements`);
    
    // Converti HTML in Markdown per ogni achievement
    console.log('🔄 Conversione HTML in Markdown...');
    achievements.forEach(achievement => {
      achievement.startingConditions = turndownService.turndown(achievement.startingConditionsHTML || '');
      achievement.completionRequirements = turndownService.turndown(achievement.completionRequirementsHTML || '');
      achievement.notes = turndownService.turndown(achievement.notesHTML || '');
      
      // Rimuovi i campi HTML temporanei
      delete achievement.startingConditionsHTML;
      delete achievement.completionRequirementsHTML;
      delete achievement.notesHTML;
    });
    
    // Crea il contenuto del file TypeScript
    const tsContent = `import type { Achievement } from './index'

// Dati estratti automaticamente dalla Victoria 3 Wiki
// Ultimo aggiornamento: ${new Date().toISOString()}
export const achievements: Achievement[] = ${JSON.stringify(achievements, null, 2)}
`;
    
    // Salva il file
    const outputPath = join(__dirname, '../src/data/achievements/vic3.ts');
    writeFileSync(outputPath, tsContent, 'utf-8');
    
    console.log(`💾 File salvato: ${outputPath}`);
    console.log('🎉 Scraping completato con successo!');
    console.log(`📊 Totale achievements Victoria 3: ${achievements.length}`);
    
  } catch (error) {
    console.error('❌ Errore durante lo scraping:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Esegui lo script
scrapeAchievements().catch(error => {
  console.error('Script fallito:', error);
  process.exit(1);
});
