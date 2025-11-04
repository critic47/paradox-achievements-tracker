import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import TurndownService from 'turndown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function scrapeAchievements() {
  console.log('🚀 Avvio scraping degli achievements da EU4 Wiki...');
  
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
        src = `https://eu4.paradoxwikis.com${src}`;
      }
      
      return src ? `![${alt}](${src})` : '';
    }
  });
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  try {
    console.log('📡 Navigazione alla pagina wiki...');
    await page.goto('https://eu4.paradoxwikis.com/Achievements', {
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
        // Sostituisce vari tipi di apostrofi/virgolette UTF-8 con apostrofo ASCII standard
        return text
          .replace(/[\u2018\u2019]/g, "'")  // ' ' → '
          .replace(/[\u201C\u201D]/g, '"')  // " " → "
          .replace(/\u2013/g, '-')          // – → -
          .replace(/\u2014/g, '--')         // — → --
          .replace(/\u2026/g, '...');       // … → ...
      };
      
      for (const row of rows) {
        const cells = row.querySelectorAll('td');
        if (cells.length < 7) continue;
        
        const firstCell = cells[0];
        
        // Estrai il nome dall'attributo alt dell'icona (più affidabile)
        const iconImg = firstCell.querySelector('img');
        let name = '';
        let description = '';
        let guideUrl = '';
        
        if (iconImg && iconImg.alt) {
          // Il nome è nell'alt text, rimuovi " icon" alla fine
          name = normalizeApostrophes(iconImg.alt.replace(/\s+icon$/i, '').trim());
          
          // Cerca un link alla guida (cerca tutti i link nella cella e trova quello con il titolo corrispondente)
          const allLinks = firstCell.querySelectorAll('a[href*="/"]');
          for (const link of allLinks) {
            const linkTitle = link.getAttribute('title') || '';
            const linkHref = link.getAttribute('href') || '';
            // Il link alla guida ha il titolo uguale al nome e punta a una pagina (non a File: o Achievements)
            if (linkTitle === name && linkHref && !linkHref.includes('File:') && !linkHref.includes('Achievements')) {
              guideUrl = linkHref.startsWith('http') ? linkHref : `https://eu4.paradoxwikis.com${linkHref}`;
              break;
            }
          }
          
          // La descrizione è il testo dopo il nome
          const fullText = firstCell.textContent.trim();
          const nameIndex = fullText.indexOf(iconImg.alt.replace(/\s+icon$/i, '').trim());
          if (nameIndex !== -1) {
            description = normalizeApostrophes(fullText.substring(nameIndex + iconImg.alt.replace(/\s+icon$/i, '').trim().length).trim());
          }
        }
        
        // Estrai URL icona
        const icon = iconImg ? iconImg.src : '';
        
        const difficulty = cells[6].textContent.trim();
        
        // Funzione per estrarre l'HTML da convertire dopo
        const extractCellHTML = (cell) => {
          if (!cell) return '';
          
          // Clone per non modificare l'originale
          const clone = cell.cloneNode(true);
          
          // Rimuovi elementi indesiderati
          clone.querySelectorAll('sup, .reference, script, style').forEach(el => el.remove());
          
          // Converti URL relativi delle immagini in assoluti
          clone.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http')) {
              img.setAttribute('src', `https://eu4.paradoxwikis.com${src}`);
            }
          });
          
          return clone.innerHTML || '';
        };
        
        // Valida che sia un achievement valido
        if (name && difficulty && ['VE', 'E', 'M', 'H', 'VH', 'I', 'UC'].includes(difficulty)) {
          results.push({
            id: `ach_${results.length + 1}`,
            name,
            description: description.substring(0, 200),
            icon,
            startingConditionsHTML: extractCellHTML(cells[1]) || 'None',
            completionRequirementsHTML: extractCellHTML(cells[2]),
            notesHTML: extractCellHTML(cells[3]) || '',
            dlc: cells[4].textContent.trim() || '',
            version: cells[5].textContent.trim() || '1.0',
            difficulty,
            guideUrl: guideUrl || ''
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
    const tsContent = `export type DifficultyLevel = 'VE' | 'E' | 'M' | 'H' | 'VH' | 'I' | 'UC'

export interface Achievement {
  id: string
  name: string
  description: string
  icon?: string
  startingConditions: string
  completionRequirements: string
  notes: string
  dlc?: string
  version: string
  difficulty: DifficultyLevel
  guideUrl?: string
}

export const difficultyLabels: Record<DifficultyLevel, string> = {
  VE: 'Very Easy',
  E: 'Easy',
  M: 'Medium',
  H: 'Hard',
  VH: 'Very Hard',
  I: 'Insane',
  UC: 'Uncategorized',
}

export const difficultyColors: Record<DifficultyLevel, string> = {
  VE: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  E: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  M: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  H: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  VH: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  I: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  UC: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200',
}

export const difficultyBgColors: Record<DifficultyLevel, string> = {
  VE: 'bg-green-500',
  E: 'bg-blue-500',
  M: 'bg-yellow-500',
  H: 'bg-orange-500',
  VH: 'bg-red-500',
  I: 'bg-purple-500',
  UC: 'bg-slate-400',
}

// Dati estratti automaticamente dalla EU4 Wiki
// Ultimo aggiornamento: ${new Date().toISOString()}
export const achievements: Achievement[] = ${JSON.stringify(achievements, null, 2)}
`;
    
    // Salva il file
    const outputPath = join(__dirname, '../src/data/achievements.ts');
    writeFileSync(outputPath, tsContent, 'utf-8');
    
    console.log(`💾 File salvato: ${outputPath}`);
    console.log('🎉 Scraping completato con successo!');
    
    // Statistiche
    const stats = achievements.reduce((acc, ach) => {
      acc[ach.difficulty] = (acc[ach.difficulty] || 0) + 1;
      return acc;
    }, {});
    
    console.log('\n📊 Statistiche per difficoltà:');
    Object.entries(stats).forEach(([diff, count]) => {
      console.log(`  ${difficultyLabels[diff]}: ${count}`);
    });
    
  } catch (error) {
    console.error('❌ Errore durante lo scraping:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

const difficultyLabels = {
  VE: 'Very Easy',
  E: 'Easy',
  M: 'Medium',
  H: 'Hard',
  VH: 'Very Hard',
  I: 'Insane',
  UC: 'Uncategorized'
};

// Esegui lo script
scrapeAchievements().catch(error => {
  console.error('Script fallito:', error);
  process.exit(1);
});
