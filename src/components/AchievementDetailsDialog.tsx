import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { type Achievement, difficultyColors, difficultyLabels } from '@/data/achievements';

interface AchievementDetailsDialogProps {
  achievement: Achievement | null;
  isOpen: boolean;
  onClose: () => void;
  isCompleted?: boolean;
}

export function AchievementDetailsDialog({
  achievement,
  isOpen,
  onClose,
  isCompleted = false,
}: AchievementDetailsDialogProps) {
  if (!achievement) return null;

  const wikiUrl = `https://eu4.paradoxwikis.com/Achievements#${encodeURIComponent(achievement.name.replace(/\s+/g, '_'))}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-[800px] max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4">
            {achievement.icon && (
              <div className="relative shrink-0">
                <img
                  src={achievement.icon}
                  alt={achievement.name}
                  className={`w-16 h-16 rounded object-cover ${isCompleted ? '' : 'opacity-60 grayscale'}`}
                />
                {isCompleted && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-2xl mb-2 pr-8">
                {isCompleted && '✓ '}
                {achievement.name}
              </DialogTitle>
              <div className="flex flex-wrap gap-2 items-center">
                <Badge
                  variant="outline"
                  className={`${difficultyColors[achievement.difficulty]} border-current`}
                >
                  {difficultyLabels[achievement.difficulty]}
                </Badge>
                {achievement.version && (
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-400">
                    v{achievement.version}
                  </Badge>
                )}
                {achievement.dlc && (
                  <Badge variant="outline" className="text-blue-600 dark:text-blue-400">
                    {achievement.dlc}
                  </Badge>
                )}
                {/* Wiki Link */}
                {achievement.guideUrl ? (
                  <a
                    href={achievement.guideUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors ml-1"
                    title="View Achievement Guide"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Guide
                  </a>
                ) : (
                  <a
                    href={wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-400 transition-colors ml-1"
                    title="View on Achievements page"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Wiki
                  </a>
                )}
              </div>
            </div>
          </div>
          <DialogDescription className="text-base mt-4 whitespace-pre-line">
            {achievement.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Starting Conditions */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
              Starting Conditions
            </h3>
            <div className="text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg wiki-content">
              <ReactMarkdown 
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({...props}) => (
                    <img {...props} className="inline-block align-middle h-5 w-auto mx-0.5" loading="lazy" />
                  ),
                  ul: ({...props}) => <ul {...props} className="list-none ml-0 my-2" />,
                  li: ({...props}) => <li {...props} className="my-1" />,
                  a: ({...props}) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" />,
                }}
              >
                {achievement.startingConditions}
              </ReactMarkdown>
            </div>
          </div>

          {/* Completion Requirements */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
              Completion Requirements
            </h3>
            <div className="text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg wiki-content">
              <ReactMarkdown 
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({...props}) => (
                    <img {...props} className="inline-block align-middle h-5 w-auto mx-0.5" loading="lazy" />
                  ),
                  ul: ({...props}) => <ul {...props} className="list-none ml-0 my-2" />,
                  li: ({...props}) => <li {...props} className="my-1" />,
                  a: ({...props}) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" />,
                }}
              >
                {achievement.completionRequirements}
              </ReactMarkdown>
            </div>
          </div>

          {/* Notes */}
          {achievement.notes && (
            <div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900 dark:text-slate-100">
                Notes & Tips
              </h3>
              <div className="text-sm text-slate-700 dark:text-slate-300 bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800 wiki-content">
                <ReactMarkdown 
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  components={{
                    img: ({...props}) => (
                      <img {...props} className="inline-block align-middle h-5 w-auto mx-0.5" loading="lazy" />
                    ),
                    ul: ({...props}) => <ul {...props} className="list-none ml-0 my-2" />,
                    li: ({...props}) => <li {...props} className="my-1" />,
                    a: ({...props}) => <a {...props} className="text-blue-600 dark:text-blue-400 hover:underline" />,
                  }}
                >
                  {achievement.notes}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
