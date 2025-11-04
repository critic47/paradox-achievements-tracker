import { type GameInfo } from '@/types/games';

interface GameHeaderProps {
  game: GameInfo;
  achievementCount: number;
  completedCount: number;
  isSteamConnected: boolean;
}

export function GameHeader({ game, achievementCount, completedCount, isSteamConnected }: GameHeaderProps) {
  const completionPercentage = achievementCount > 0 
    ? Math.round((completedCount / achievementCount) * 100) 
    : 0;

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
      {/* Background Image with Overlay */}
      <div className="relative">
        {/* Hero Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${game.heroImageUrl})` }}
        />
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/50" />
        
        {/* Content */}
        <div className="relative z-10 p-6 md:p-8">
          {/* Game Title */}
          <div className="flex items-center gap-3 mb-4">
            {/* Game Icon - Use Steam client icon if available, fallback to emoji */}
            {game.clientIconUrl ? (
              <img 
                src={game.clientIconUrl} 
                alt={`${game.name} icon`}
                className="w-14 h-14 drop-shadow-lg"
                onError={(e) => {
                  // Fallback to emoji if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'inline';
                }}
              />
            ) : null}
            <span 
              className="text-5xl drop-shadow-lg"
              style={{ display: game.clientIconUrl ? 'none' : 'inline' }}
            >
              {game.icon}
            </span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
                {game.fullName}
              </h1>
              <p className="text-white/90 text-sm md:text-base mt-1">
                Achievement Tracker
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-4 mt-6">
            {/* Total Achievements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[140px]">
              <div className="text-white/80 text-xs font-medium uppercase tracking-wide mb-1">
                Total
              </div>
              <div className="text-2xl font-bold text-white">
                {achievementCount}
              </div>
            </div>

            {/* Completed Achievements */}
            {isSteamConnected && (
              <>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[140px]">
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wide mb-1">
                    Completed
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {completedCount}
                  </div>
                </div>

                {/* Progress Percentage */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[140px]">
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wide mb-1">
                    Progress
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {completionPercentage}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 min-w-[200px] bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <div className="text-white/80 text-xs font-medium uppercase tracking-wide mb-2">
                    Completion
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Steam Connection Hint */}
          {!isSteamConnected && (
            <div className="mt-4 text-white/80 text-sm">
              💡 Connect your Steam account to track your progress
            </div>
          )}
        </div>
      </div>

      {/* Decorative Border at Bottom */}
      <div className={`h-1 bg-linear-to-r ${game.gradient}`} />
    </div>
  );
}
