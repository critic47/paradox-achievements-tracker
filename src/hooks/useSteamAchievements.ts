import { useQuery } from '@tanstack/react-query'
import { fetchSteamAchievements } from '@/services/steamApi'

export function useSteamAchievements(
  apiKey: string | null,
  steamId: string | null,
  appId: string = '236850' // EU4 default
) {
  return useQuery({
    queryKey: ['steamAchievements', apiKey, steamId, appId],
    queryFn: () => {
      if (!apiKey || !steamId) {
        throw new Error('API Key and Steam ID are required')
      }
      return fetchSteamAchievements(apiKey, steamId, appId)
    },
    enabled: !!apiKey && !!steamId,
    staleTime: 5 * 60 * 1000, // 5 minuti
    retry: 1,
  })
}
