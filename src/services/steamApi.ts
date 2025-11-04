// Always use the proxy to avoid CORS issues
// In development: Vite proxy handles it (/steam-api -> https://api.steampowered.com)
// In production: Vercel Edge Function handles it (/api/steam-api)
const STEAM_API_BASE = import.meta.env.DEV ? '/steam-api' : '/api/steam-api'

export interface SteamAchievement {
  apiname: string
  achieved: number
  unlocktime: number
}

export interface SteamAchievementsResponse {
  playerstats: {
    steamID: string
    gameName: string
    achievements?: SteamAchievement[]
    success: boolean
    error?: string
  }
}

export async function fetchSteamAchievements(
  apiKey: string,
  steamId: string,
  appId: string = '236850' // EU4 default
): Promise<SteamAchievement[]> {
  const url = `${STEAM_API_BASE}/ISteamUserStats/GetPlayerAchievements/v1/?appid=${appId}&key=${apiKey}&steamid=${steamId}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Steam API error: ${response.status} ${response.statusText}`)
    }

    const data: SteamAchievementsResponse = await response.json()

    if (!data.playerstats.success) {
      throw new Error(data.playerstats.error || 'Failed to fetch achievements from Steam')
    }

    return data.playerstats.achievements || []
  } catch (error) {
    console.error('Error fetching Steam achievements:', error)
    throw error
  }
}

export function validateSteamId(steamId: string): boolean {
  // Steam ID deve essere un numero di 17 cifre
  return /^\d{17}$/.test(steamId)
}

export function validateApiKey(apiKey: string): boolean {
  // API key è una stringa esadecimale di 32 caratteri
  return /^[A-Fa-f0-9]{32}$/.test(apiKey)
}
