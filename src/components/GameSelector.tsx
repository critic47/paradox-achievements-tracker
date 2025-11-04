import { GAMES, type GameId } from '@/types/games';
import { cn } from '@/lib/utils';

interface GameSelectorProps {
  selectedGame: GameId;
  onGameChange: (game: GameId) => void;
}

export function GameSelector({ selectedGame, onGameChange }: GameSelectorProps) {
  return (
    <div className="mb-6">
      <h2 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
        Select Game
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.values(GAMES).map((game) => {
          const isSelected = selectedGame === game.id;
          return (
            <button
              key={game.id}
              onClick={() => onGameChange(game.id)}
              className={cn(
                'group relative overflow-hidden rounded-lg p-4 transition-all duration-300',
                'border-2 hover:scale-105 hover:shadow-lg',
                isSelected
                  ? 'border-transparent shadow-lg'
                  : 'border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600'
              )}
              style={{
                ...(isSelected && {
                  background: `linear-gradient(135deg, ${game.color}, ${game.colorDark})`,
                }),
              }}
            >
              {/* Background Pattern */}
              {isSelected && (
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px',
                  }} />
                </div>
              )}
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                {/* Game Logo */}
                <div className={cn(
                  'w-full aspect-460/215 rounded overflow-hidden transition-all',
                  'group-hover:scale-105',
                  isSelected ? 'shadow-lg ring-2 ring-white/50' : 'opacity-80 group-hover:opacity-100'
                )}>
                  <img
                    src={game.logoUrl}
                    alt={game.fullName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Game Name */}
                <span className={cn(
                  'text-sm font-bold transition-colors',
                  isSelected
                    ? 'text-white drop-shadow'
                    : 'text-slate-700 dark:text-slate-300'
                )}>
                  {game.name}
                </span>
              </div>
              
              {/* Selected Indicator */}
              {isSelected && (
                <div className="absolute top-2 right-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
