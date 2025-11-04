/**
 * Utility functions for Steam achievement mapping
 */

/**
 * Minor words that should not be capitalized in title case (except at the beginning)
 */
export const MINOR_WORDS = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'from',
  'in',
  'into',
  'of',
  'on',
  'or',
  'the',
  'to',
  'up',
  'with',
] as const

/**
 * Converts a snake_case string to Title Case
 * @param str - The snake_case string to convert
 * @returns The Title Case string
 *
 * @example
 * toTitleCase('hello_world') // 'Hello World'
 * toTitleCase('the_great_war') // 'The Great War'
 */
export function toTitleCase(str: string): string {
  return str
    .split('_')
    .map((word, index) => {
      const lowerWord = word.toLowerCase()
      // Always capitalize first word, or words not in minor words list
      if (index === 0 || !(MINOR_WORDS as readonly string[]).includes(lowerWord)) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
      return lowerWord
    })
    .join(' ')
}

/**
 * Match type for Steam to Wiki achievement matching
 */
export type MatchType = 'mapping' | 'auto'

/**
 * Result of matching a Steam achievement to a Wiki achievement
 */
export interface MatchResult {
  matched: boolean
  wikiName: string
  matchType: MatchType
}

/**
 * Attempts to match a Steam achievement name to a Wiki achievement name
 * First checks the manual mapping, then falls back to auto-conversion
 *
 * @param steamName - The Steam achievement name (without 'achievement_' prefix)
 * @param wikiNames - Array of all wiki achievement names
 * @param mapping - Manual mapping object from Steam names to Wiki names
 * @returns Match result with wiki name and match type
 *
 * @example
 * const result = matchSteamToWiki('hello_world', ['Hello World'], {});
 * // { matched: true, wikiName: 'Hello World', matchType: 'auto' }
 */
export function matchSteamToWiki(steamName: string, wikiNames: string[], mapping: Record<string, string>): MatchResult {
  // First check manual mapping
  if (mapping[steamName]) {
    const wikiName = mapping[steamName]
    const matched = wikiNames.includes(wikiName)
    return {
      matched,
      wikiName,
      matchType: 'mapping',
    }
  }

  // Fall back to auto-conversion
  const wikiName = toTitleCase(steamName)
  const matched = wikiNames.includes(wikiName)
  return {
    matched,
    wikiName,
    matchType: 'auto',
  }
}

/**
 * Finds similar wiki names for a given search string
 * Useful for debugging and suggesting manual mappings
 *
 * @param searchStr - The string to search for
 * @param wikiNames - Array of all wiki achievement names
 * @param minLength - Minimum substring length to match (default: 5)
 * @param maxResults - Maximum number of results to return (default: 3)
 * @returns Array of similar wiki names
 */
export function findSimilarWikiNames(
  searchStr: string,
  wikiNames: string[],
  minLength: number = 5,
  maxResults: number = 3
): string[] {
  const searchLower = searchStr.toLowerCase()
  const searchSubstr = searchLower.substring(0, Math.max(minLength, searchLower.length))

  return wikiNames
    .filter((wiki) => {
      const wikiLower = wiki.toLowerCase()
      return (
        wikiLower.includes(searchSubstr) ||
        searchLower.includes(wikiLower.substring(0, Math.max(minLength, wikiLower.length)))
      )
    })
    .slice(0, maxResults)
}
