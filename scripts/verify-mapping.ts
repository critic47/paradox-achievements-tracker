/**
 * Verify that all Steam achievements for a game can be matched to Wiki achievements
 * This script checks both manual mappings and auto-conversion
 */

import { matchSteamToWiki, findSimilarWikiNames } from '../src/utils/steamMapping.js'
import { eu4SteamToWikiMapping } from '../src/data/achievements/eu4Mapping.js'
import { eu5SteamToWikiMapping } from '../src/data/achievements/eu5Mapping.js'
import { vic3SteamToWikiMapping } from '../src/data/achievements/vic3Mapping.js'
import { ck3SteamToWikiMapping } from '../src/data/achievements/ck3Mapping.js'
import { hoi4SteamToWikiMapping } from '../src/data/achievements/hoi4Mapping.js'
import { achievements as eu4Achievements } from '../src/data/achievements/eu4.js'
import { achievements as eu5Achievements } from '../src/data/achievements/eu5.js'
import { achievements as vic3Achievements } from '../src/data/achievements/vic3.js'
import { achievements as ck3Achievements } from '../src/data/achievements/ck3.js'
import { achievements as hoi4Achievements } from '../src/data/achievements/hoi4.js'

interface SteamAchievement {
  name: string
  displayName: string
}

interface SteamApiResponse {
  game: {
    availableGameStats: {
      achievements: SteamAchievement[]
    }
  }
}

interface MatchedAchievement {
  steam: string
  wiki: string
  matchType: 'mapping' | 'auto'
}

interface UnmatchedAchievement {
  steam: string
  converted: string
  matchType: 'mapping' | 'auto'
  similar: string[]
}

const STEAM_API_KEY = process.env.STEAM_API_KEY

if (!STEAM_API_KEY) {
  console.error('❌ STEAM_API_KEY environment variable is required')
  console.error('💡 Create a .env file with: STEAM_API_KEY=your_key_here')
  console.error('🔑 Get your key from: https://steamcommunity.com/dev/apikey')
  process.exit(1)
}

const GAMES = {
  vic3: {
    appId: '529340',
    name: 'Victoria 3',
    mapping: vic3SteamToWikiMapping,
    achievements: vic3Achievements,
    mappingFile: 'vic3Mapping.ts',
  },
  eu4: {
    appId: '236850',
    name: 'Europa Universalis IV',
    mapping: eu4SteamToWikiMapping,
    achievements: eu4Achievements,
    mappingFile: 'eu4Mapping.ts',
  },
  eu5: {
    appId: '3450310',
    name: 'Europa Universalis 5',
    mapping: eu5SteamToWikiMapping,
    achievements: eu5Achievements,
    mappingFile: 'eu5Mapping.ts',
  },
  ck3: {
    appId: '1158310',
    name: 'Crusader Kings III',
    mapping: ck3SteamToWikiMapping,
    achievements: ck3Achievements,
    mappingFile: 'ck3Mapping.ts',
  },
  hoi4: {
    appId: '394360',
    name: 'Hearts of Iron IV',
    mapping: hoi4SteamToWikiMapping,
    achievements: hoi4Achievements,
    mappingFile: 'hoi4Mapping.ts',
  },
} as const

type GameId = keyof typeof GAMES

/**
 * Verify mapping for a specific game
 */
async function verifyGameMapping(gameId: GameId): Promise<void> {
  const game = GAMES[gameId]

  console.log(`🔍 Verifica mapping completo ${game.name}...\n`)

  const wikiAchievements = game.achievements.map((a) => a.name)

  console.log(`📚 Wiki achievements: ${wikiAchievements.length}`)
  console.log(`🗺️  Mappings manuali: ${Object.keys(game.mapping).length}\n`)

  // Fetch all achievements from Steam
  console.log('🎮 Scaricamento TUTTI gli achievement da Steam...\n')
  const schemaUrl = `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?appid=${game.appId}&key=${STEAM_API_KEY}`

  const response = await fetch(schemaUrl)

  if (!response.ok) {
    throw new Error(`Steam API returned status ${response.status}`)
  }

  const data = (await response.json()) as SteamApiResponse
  const steamAchievements = data.game.availableGameStats.achievements

  console.log(`✅ Achievement da Steam: ${steamAchievements.length}\n`)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

  const matched: MatchedAchievement[] = []
  const notMatched: UnmatchedAchievement[] = []

  steamAchievements.forEach((steamAch) => {
    const nameWithoutPrefix = steamAch.name.replace(/^achievement_/, '')

    const result = matchSteamToWiki(nameWithoutPrefix, wikiAchievements, game.mapping)

    if (result.matched) {
      matched.push({
        steam: nameWithoutPrefix,
        wiki: result.wikiName,
        matchType: result.matchType,
      })
    } else {
      const similar = findSimilarWikiNames(result.wikiName, wikiAchievements)
      notMatched.push({
        steam: nameWithoutPrefix,
        converted: result.wikiName,
        matchType: result.matchType,
        similar,
      })
    }
  })

  console.log(`✅ MATCHATI (${matched.length}/${steamAchievements.length}):\n`)

  // Group by type
  const byMapping = matched.filter((m) => m.matchType === 'mapping')
  const byAuto = matched.filter((m) => m.matchType === 'auto')

  console.log(`   📋 Via mapping manuale: ${byMapping.length}`)
  console.log(`   🤖 Via auto-conversion: ${byAuto.length}\n`)

  if (notMatched.length > 0) {
    console.log(`\n❌ NON MATCHATI (${notMatched.length}):\n`)
    notMatched.forEach((item, index) => {
      console.log(`${index + 1}. Steam: "${item.steam}"`)
      console.log(`   Converted: "${item.converted}"`)
      console.log(`   Type: ${item.matchType}`)

      if (item.similar.length > 0) {
        console.log(`   Similar in wiki: ${item.similar.join(', ')}`)
      }
      console.log('')
    })

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log(`\n💡 Aggiungi questi mapping a ${game.mappingFile}:\n`)
    notMatched.forEach((item) => {
      if (item.similar.length > 0) {
        console.log(`  '${item.steam}': '${item.similar[0]}',`)
      } else {
        console.log(`  // '${item.steam}': 'TODO - Nome corretto dalla wiki',`)
      }
    })
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(`\n📊 Risultato finale: ${matched.length}/${steamAchievements.length} matchati`)

  if (matched.length === steamAchievements.length) {
    console.log('✅ PERFETTO! Tutti gli achievement sono matchati correttamente!')
  } else {
    const percentage = ((matched.length / steamAchievements.length) * 100).toFixed(1)
    console.log(`⚠️  Copertura: ${percentage}%`)
    console.log(`⚠️  Mancano ${notMatched.length} mapping da aggiungere`)
  }
}

// Main execution
const gameArg = process.argv[2] as GameId | undefined

if (!gameArg || !(gameArg in GAMES)) {
  console.error('Usage: tsx scripts/verify-mapping.ts <game>')
  console.error(`Available games: ${Object.keys(GAMES).join(', ')}`)
  process.exit(1)
}

verifyGameMapping(gameArg).catch((error) => {
  console.error('❌ Errore:', error.message)
  process.exit(1)
})
