import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import { type Achievement, difficultyColors, difficultyLabels } from '@/data/achievements';
import { AchievementDetailsDialog } from './AchievementDetailsDialog';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface AchievementsTableProps {
  achievements: Achievement[];
  completedAchievements?: Set<string>;
}

export function AchievementsTable({ achievements, completedAchievements }: AchievementsTableProps) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDetails = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Delay clearing the achievement to allow dialog animation to complete
    setTimeout(() => setSelectedAchievement(null), 200);
  };

  if (achievements.length === 0) {
    return (
      <div className="py-12 text-center text-slate-500 dark:text-slate-400">
        <p className="text-lg font-medium">No achievements found</p>
        <p className="text-sm mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border overflow-hidden bg-white dark:bg-slate-900">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b-2 border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="grid grid-cols-[32px_320px_1fr_1fr_64px] gap-4 px-4 py-3 font-semibold text-sm text-slate-700 dark:text-slate-300">
            <div>&nbsp;</div>
            <div>Achievement</div>
            <div>Starting Conditions</div>
            <div>Requirements</div>
            <div className="text-center">Details</div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="h-[600px] overflow-auto">
          {achievements.map((achievement) => {
            const isCompleted = completedAchievements?.has(achievement.name);
            
            return (
              <div
                key={achievement.id}
                className={`grid grid-cols-[32px_320px_1fr_1fr_64px] gap-4 px-4 py-3 border-b border-slate-200 dark:border-slate-700 transition-colors ${
                  isCompleted 
                    ? 'bg-green-50/50 dark:bg-green-950/20 hover:bg-green-100/50 dark:hover:bg-green-950/30' 
                    : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {/* Difficulty */}
                <div className={`flex items-center justify-center text-xs font-bold ${difficultyColors[achievement.difficulty]}`} title={difficultyLabels[achievement.difficulty]}>
                  {achievement.difficulty}
                </div>

                {/* Achievement */}
                <div className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      {achievement.icon && (
                        <img 
                          src={achievement.icon} 
                          alt={achievement.name}
                          className={`w-12 h-12 rounded object-cover ${isCompleted ? '' : 'opacity-60 grayscale'}`}
                        />
                      )}
                      {isCompleted && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold whitespace-normal wrap-break-word ${isCompleted ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`} title={achievement.name}>
                        {isCompleted && '✓ '}
                        {achievement.name}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 whitespace-normal wrap-break-word" title={achievement.description}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Starting Conditions */}
                <div className="text-sm text-slate-700 dark:text-slate-300 wiki-content">
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({...props}) => (
                        <img {...props} className="inline-block align-middle h-[18px] w-auto mx-0.5" loading="lazy" />
                      ),
                      p: ({...props}) => <span {...props} />,
                      ul: ({...props}) => <ul {...props} className="list-none m-0 p-0" />,
                      li: ({...props}) => <li {...props} />,
                      a: ({...props}) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" />,
                    }}
                  >
                    {achievement.startingConditions}
                  </ReactMarkdown>
                </div>

                {/* Requirements */}
                <div className="text-sm text-slate-700 dark:text-slate-300 wiki-content">
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    components={{
                      img: ({...props}) => (
                        <img {...props} className="inline-block align-middle h-[18px] w-auto mx-0.5" loading="lazy" />
                      ),
                      p: ({...props}) => <span {...props} />,
                      ul: ({...props}) => <ul {...props} className="list-none m-0 p-0" />,
                      li: ({...props}) => <li {...props} />,
                      a: ({...props}) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" />,
                    }}
                  >
                    {achievement.completionRequirements}
                  </ReactMarkdown>
                </div>

                {/* Details Button */}
                <div className="flex items-center justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleOpenDetails(achievement)}
                    className="h-8 w-8 p-0 hover:bg-slate-200 dark:hover:bg-slate-700"
                    title="View details"
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AchievementDetailsDialog
        achievement={selectedAchievement}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        isCompleted={selectedAchievement ? completedAchievements?.has(selectedAchievement.name) : false}
      />
    </>
  );
}
