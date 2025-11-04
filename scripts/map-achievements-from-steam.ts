/**
 * Script to automatically map Steam achievements to Wiki achievement names
 * Uses Steam's GetSchemaForGame API to get the official display names
 * and matches them with the wiki achievement names
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { achievements as eu4Achievements } from '../src/data/achievements/eu4.js'
import { achievements as eu5Achievements } from '../src/data/achievements/eu5.js'
import { achievements as vic3Achievements } from '../src/data/achievements/vic3.js'
import { achievements as ck3Achievements } from '../src/data/achievements/ck3.js'
import { achievements as hoi4Achievements } from '../src/data/achievements/hoi4.js'

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Steam API configuration
const STEAM_API_KEY = process.env.STEAM_API_KEY

if (!STEAM_API_KEY) {
  console.error('❌ STEAM_API_KEY environment variable is required')
  console.error('💡 Create a .env file with: STEAM_API_KEY=your_key_here')
  console.error('🔑 Get your key from: https://steamcommunity.com/dev/apikey')
  process.exit(1)
}

// Game configurations
const GAMES = {
  eu4: {
    appId: '236850',
    name: 'Europa Universalis IV',
    achievements: eu4Achievements,
    mappingFile: '../src/data/achievements/eu4Mapping.ts',
    hasAchievementPrefix: true, // EU4 has "achievement_" prefix in Steam API
    manualOverrides: {} as Record<string, string>, // Manual overrides for difficult matches
  },
  eu5: {
    appId: '3450310',
    name: 'Europa Universalis 5',
    achievements: eu5Achievements,
    mappingFile: '../src/data/achievements/eu5Mapping.ts',
    hasAchievementPrefix: true, // EU5 has "achievement_" prefix in Steam API (assumption)
    manualOverrides: {} as Record<string, string>,
  },
  vic3: {
    appId: '529340',
    name: 'Victoria 3',
    achievements: vic3Achievements,
    mappingFile: '../src/data/achievements/vic3Mapping.ts',
    hasAchievementPrefix: true, // VIC3 has "achievement_" prefix in Steam API
    manualOverrides: {} as Record<string, string>,
  },
  ck3: {
    appId: '1158310',
    name: 'Crusader Kings III',
    achievements: ck3Achievements,
    mappingFile: '../src/data/achievements/ck3Mapping.ts',
    hasAchievementPrefix: false, // CK3 does NOT have prefix
    // Manual overrides for Steam display name -> Wiki name when automatic matching fails
    manualOverrides: {
      'A Thousand and One Night': 'A Thousand & One Nights', // ep2_08
      'Lions and Tigers and Bears, Oh My!': 'Lions & Tigers & Bears, Oh My!', // ep2_11
      'A.E.I.O.U. and Me': 'A.E.I.O.U. & Me', // ep2_19
      "I'm in my Element(s)": 'In My Element(s)', // ep2_15
      'They Belong in a Museum': 'They Belong in a Museum!', // ep1_17
      'The old man of the mountain': 'The Old Man of the Mountain', // ep3_01
      'Kingdom of Heaven': 'Regnum Dei', // ep3_07 - completely different names
    } as Record<string, string>,
  },
  hoi4: {
    appId: '394360',
    name: 'Hearts of Iron IV',
    achievements: hoi4Achievements,
    mappingFile: '../src/data/achievements/hoi4Mapping.ts',
    hasAchievementPrefix: false, // HOI4 does NOT have prefix
    manualOverrides: {} as Record<string, string>,
  },
}

interface SteamAchievement {
  name: string // API name
  displayName: string // Display name shown in Steam
  description?: string
  icon?: string
  icongray?: string
  hidden?: number
}

interface WikiAchievement {
  name: string
  description: string
  [key: string]: string | number | boolean | undefined
}

/**
 * Normalize a string for comparison (lowercase, remove special chars, etc.)
 */
function normalizeForComparison(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD') // Decompose Unicode characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim()
}

/**
 * Calculate similarity between two strings (0-1)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const norm1 = normalizeForComparison(str1)
  const norm2 = normalizeForComparison(str2)

  if (norm1 === norm2) return 1.0

  // Levenshtein distance-based similarity
  const longer = norm1.length > norm2.length ? norm1 : norm2
  const shorter = norm1.length > norm2.length ? norm2 : norm1

  if (longer.length === 0) return 1.0

  const editDistance = levenshteinDistance(longer, shorter)
  return (longer.length - editDistance) / longer.length
}

/**
 * Calculate Levenshtein distance between two strings
 */
function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = []

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1 // deletion
        )
      }
    }
  }

  return matrix[str2.length][str1.length]
}

/**
 * Fetch Steam achievement schema
 */
async function fetchSteamSchema(appId: string): Promise<SteamAchievement[]> {
  const url = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?appid=${appId}&key=${STEAM_API_KEY}`

  console.log(`  Fetching Steam schema from API...`)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Steam API error: ${response.status}`)
  }

  const data = await response.json()

  if (!data.game?.availableGameStats?.achievements) {
    throw new Error('No achievements found in Steam API response')
  }

  return data.game.availableGameStats.achievements
}

/**
 * Match Steam achievements to Wiki achievements
 */
function matchAchievements(
  steamAchievements: SteamAchievement[],
  wikiAchievements: WikiAchievement[],
  hasPrefix: boolean,
  manualOverrides: Record<string, string> = {}
): Map<string, { wikiName: string; steamDisplayName: string; confidence: number }> {
  const mapping = new Map<string, { wikiName: string; steamDisplayName: string; confidence: number }>()
  const usedWikiNames = new Set<string>()

  console.log(`\n  Matching ${steamAchievements.length} Steam achievements to wiki...`)

  for (const steamAch of steamAchievements) {
    // Get the API name (remove prefix if needed)
    const apiName = hasPrefix ? steamAch.name.replace(/^achievement_/, '') : steamAch.name

    // Check if there's a manual override first
    if (manualOverrides[steamAch.displayName]) {
      const overrideName = manualOverrides[steamAch.displayName]
      mapping.set(apiName, {
        wikiName: overrideName,
        steamDisplayName: steamAch.displayName,
        confidence: 1.0, // Perfect match via manual override
      })
      usedWikiNames.add(overrideName)
      console.log(`    ✓ Manual override: "${steamAch.displayName}" -> "${overrideName}"`)
      continue
    }

    // Find best match in wiki achievements
    let bestMatch: WikiAchievement | null = null
    let bestScore = 0

    for (const wikiAch of wikiAchievements) {
      if (usedWikiNames.has(wikiAch.name)) continue

      // Compare Steam display name with wiki name
      const score = calculateSimilarity(steamAch.displayName, wikiAch.name)

      if (score > bestScore) {
        bestScore = score
        bestMatch = wikiAch
      }
    }

    if (bestMatch && bestScore > 0.8) {
      // 80% confidence threshold
      mapping.set(apiName, {
        wikiName: bestMatch.name,
        steamDisplayName: steamAch.displayName,
        confidence: bestScore,
      })
      usedWikiNames.add(bestMatch.name)
    } else if (bestMatch) {
      // Lower confidence - report for manual review
      console.log(
        `    ⚠️  Low confidence (${(bestScore * 100).toFixed(1)}%): "${steamAch.displayName}" -> "${bestMatch?.name}"`
      )
      mapping.set(apiName, {
        wikiName: bestMatch.name,
        steamDisplayName: steamAch.displayName,
        confidence: bestScore,
      })
      usedWikiNames.add(bestMatch.name)
    } else {
      console.log(`    ❌ No match found for: "${steamAch.displayName}" (${apiName})`)
    }
  }

  return mapping
}

/**
 * Generate TypeScript mapping file
 */
function generateMappingFile(
  mapping: Map<string, { wikiName: string; steamDisplayName: string; confidence: number }>,
  gameId: string,
  gameName: string,
  outputFile: string
): void {
  const fullPath = path.join(__dirname, outputFile)

  let content = `/**
 * Mapping between Steam API names and Wiki achievement names for ${gameName}
 * Auto-generated using Steam's GetSchemaForGame API
 * 
 * Format: Steam API name (without "achievement_" prefix for EU4/VIC3) -> Wiki name
 */
export const ${gameId}SteamToWikiMapping: Record<string, string> = {\n`

  // Sort by key for consistent output
  const sortedEntries = Array.from(mapping.entries()).sort((a, b) => a[0].localeCompare(b[0]))

  for (const [apiName, { wikiName, steamDisplayName, confidence }] of sortedEntries) {
    // Add comment with Steam display name for reference
    if (confidence < 0.95) {
      content += `  // Steam: "${steamDisplayName}" (${(confidence * 100).toFixed(1)}% confidence)\n`
    }
    // Quote keys that start with numbers or contain special chars
    const needsQuotes = /^[0-9]/.test(apiName) || /[^a-zA-Z0-9_]/.test(apiName)
    const key = needsQuotes ? `'${apiName}'` : apiName
    content += `  ${key}: '${wikiName.replace(/'/g, "\\'")}',\n`
  }

  content += '};\n'

  fs.writeFileSync(fullPath, content, 'utf-8')
  console.log(`  ✅ Generated mapping file: ${outputFile}`)
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2)
  const gameId = args[0] as keyof typeof GAMES

  if (!gameId || !GAMES[gameId]) {
    console.log('Usage: npm run map-achievements <game>')
    console.log('Available games:', Object.keys(GAMES).join(', '))
    console.log('\nExample: npm run map-achievements ck3')
    process.exit(1)
  }

  const game = GAMES[gameId]

  console.log(`\n🎮 Mapping achievements for ${game.name}...\n`)

  try {
    // Fetch Steam achievements
    const steamAchievements = await fetchSteamSchema(game.appId)
    console.log(`  ✅ Found ${steamAchievements.length} achievements on Steam`)

    // Use wiki achievements from imported data
    const wikiAchievements = game.achievements.map((a) => ({
      name: a.name,
      description: a.description,
    }))
    console.log(`  ✅ Found ${wikiAchievements.length} achievements in wiki`)

    // Match achievements
    const mapping = matchAchievements(
      steamAchievements,
      wikiAchievements,
      game.hasAchievementPrefix,
      game.manualOverrides
    )
    console.log(`  ✅ Matched ${mapping.size}/${steamAchievements.length} achievements`)

    // Generate mapping file
    generateMappingFile(mapping, gameId, game.name, game.mappingFile)

    // Summary
    const unmatchedCount = steamAchievements.length - mapping.size
    const lowConfidenceCount = Array.from(mapping.values()).filter((m) => m.confidence < 0.95).length

    console.log(`\n📊 Summary:`)
    console.log(`   Total Steam achievements: ${steamAchievements.length}`)
    console.log(`   Successfully matched: ${mapping.size}`)
    console.log(`   Unmatched: ${unmatchedCount}`)
    console.log(`   Low confidence matches: ${lowConfidenceCount}`)

    if (unmatchedCount > 0 || lowConfidenceCount > 0) {
      console.log(`\n⚠️  Please review the mapping file and adjust manually if needed`)
    } else {
      console.log(`\n✅ Perfect! All achievements mapped with high confidence`)
    }
  } catch (error) {
    console.error('\n❌ Error:', error instanceof Error ? error.message : error)
    process.exit(1)
  }
}

main()
