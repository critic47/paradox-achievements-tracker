import type { GameId } from '@/types/games'

export type DifficultyLevel = 'VE' | 'E' | 'M' | 'H' | 'VH' | 'I' | 'UC'

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
  game: GameId
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

// Import achievements from each game
import { achievements as eu4Achievements } from './eu4'
import { achievements as eu5Achievements } from './eu5'
import { achievements as vic3Achievements } from './vic3'
import { achievements as hoi4Achievements } from './hoi4'
import { achievements as ck3Achievements } from './ck3'

export const allAchievements: Achievement[] = [
  ...eu4Achievements,
  ...eu5Achievements,
  ...vic3Achievements,
  ...hoi4Achievements,
  ...ck3Achievements,
]

export const getAchievementsByGame = (gameId: GameId): Achievement[] => {
  return allAchievements.filter((a) => a.game === gameId)
}

// Export per backward compatibility
export const achievements = eu4Achievements
