import { Badge } from '@/components/ui/badge';
import { type Achievement, type DifficultyLevel, difficultyLabels, difficultyColors } from '@/data/achievements';

interface AchievementStatsProps {
  achievements: Achievement[];
  completedAchievements: Set<string>;
  gameName: string;
}

export function AchievementStats({ achievements, completedAchievements, gameName }: AchievementStatsProps) {
  // Count achievements by difficulty (total and completed)
  const difficultyCounts: Record<DifficultyLevel, { total: number; completed: number }> = {
    VE: { total: 0, completed: 0 },
    E: { total: 0, completed: 0 },
    M: { total: 0, completed: 0 },
    H: { total: 0, completed: 0 },
    VH: { total: 0, completed: 0 },
    I: { total: 0, completed: 0 },
    UC: { total: 0, completed: 0 },
  };

  achievements.forEach((achievement) => {
    difficultyCounts[achievement.difficulty].total++;
    if (completedAchievements.has(achievement.name)) {
      difficultyCounts[achievement.difficulty].completed++;
    }
  });

  const difficultyOrder: DifficultyLevel[] = ['VE', 'E', 'M', 'H', 'VH', 'I', 'UC'];
  const sortedDifficulties = difficultyOrder.filter((diff) => difficultyCounts[diff].total > 0);

  const totalCompleted = achievements.filter(a => completedAchievements.has(a.name)).length;
  const totalAchievements = achievements.length;
  const completionPercentage = totalAchievements > 0 ? Math.round((totalCompleted / totalAchievements) * 100) : 0;

  return (
    <div className="p-5 space-y-5">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-700 pb-3">
        <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-1">
          {gameName}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Achievement Statistics
        </p>
      </div>

      <div className="space-y-3">
        {/* Total with Progress Bar */}
        <div className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
              Total Progress
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-base px-3 py-1 font-bold">
                {totalCompleted} / {totalAchievements}
              </Badge>
              {completedAchievements.size > 0 && (
                <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-white font-bold">
                  {completionPercentage}%
                </Badge>
              )}
            </div>
          </div>
          {completedAchievements.size > 0 && (
            <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-linear-to-r from-green-500 to-green-600 transition-all duration-500 ease-out"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          )}
        </div>

        {/* By Difficulty */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-3">
            By Difficulty Level
          </p>
          <div className="space-y-2.5">
            {sortedDifficulties.map((difficulty) => {
              const count = difficultyCounts[difficulty];
              const percentage = count.total > 0 ? Math.round((count.completed / count.total) * 100) : 0;
              
              return (
                <div key={difficulty} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 border border-slate-200 dark:border-slate-700 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className={`${difficultyColors[difficulty]} text-xs font-semibold`}
                    >
                      {difficultyLabels[difficulty]}
                    </Badge>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-100 tabular-nums">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">
                          {count.completed}
                        </span>
                        <span className="text-slate-400 mx-1">/</span>
                        <span className="font-semibold">
                          {count.total}
                        </span>
                      </span>
                      {count.completed > 0 && (
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                          {percentage}%
                        </span>
                      )}
                    </div>
                  </div>
                  {count.completed > 0 && (
                    <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-linear-to-r from-blue-500 to-blue-600 transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
