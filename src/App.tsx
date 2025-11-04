import { useMemo, useState, useCallback } from 'react';
import { AchievementsTable } from '@/components/AchievementsTable';
import { AchievementFilters } from '@/components/AchievementFilters';
import { AchievementStats } from '@/components/AchievementStats';
import { SteamConfig } from '@/components/SteamConfig';
import { GameSelector } from '@/components/GameSelector';
import { GameHeader } from '@/components/GameHeader';
import { useSteamAchievements } from '@/hooks/useSteamAchievements';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getAchievementsByGame, type DifficultyLevel } from '@/data/achievements/index';
import { eu4SteamToWikiMapping } from '@/data/achievements/eu4Mapping';
import { eu5SteamToWikiMapping } from '@/data/achievements/eu5Mapping';
import { vic3SteamToWikiMapping } from '@/data/achievements/vic3Mapping';
import { hoi4SteamToWikiMapping } from '@/data/achievements/hoi4Mapping';
import { ck3SteamToWikiMapping } from '@/data/achievements/ck3Mapping';
import { matchSteamToWiki } from '@/utils/steamMapping';
import { GAMES, type GameId } from '@/types/games';

function App() {
  const [selectedGame, setSelectedGame] = useState<GameId>('eu4');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [completionFilter, setCompletionFilter] = useState<'all' | 'completed' | 'incomplete'>('all');
  const [steamApiKey, setSteamApiKey] = useState<string | null>(() => localStorage.getItem('steamApiKey'));
  const [steamId, setSteamId] = useState<string | null>(() => localStorage.getItem('steamId'));

  const currentGame = GAMES[selectedGame];
  const achievements = useMemo(() => getAchievementsByGame(selectedGame), [selectedGame]);

  // Fetch Steam achievements
  const { data: steamAchievements, isLoading: isLoadingSteam, error: steamError } = useSteamAchievements(
    steamApiKey,
    steamId,
    currentGame.steamAppId
  );

  // Create a Set of completed achievement names for fast lookup
  // Steam API names are in format "achievement_name_with_underscores"
  // Wiki names are in format "Name With Spaces" using title case
  // We need to convert Steam format to Wiki format for matching
  const completedAchievements = useMemo(() => {
    if (!steamAchievements) return new Set<string>();
    
    // Select the correct mapping based on the current game
    const getCurrentMapping = (): Record<string, string> => {
      switch (selectedGame) {
        case 'vic3':
          return vic3SteamToWikiMapping;
        case 'eu4':
          return eu4SteamToWikiMapping;
        case 'eu5':
          return eu5SteamToWikiMapping;
        case 'hoi4':
          return hoi4SteamToWikiMapping;
        case 'ck3':
          return ck3SteamToWikiMapping;
        default:
          return {}; // No mapping for other games yet
      }
    };
    
    const currentMapping = getCurrentMapping();
    
    const completedNames = new Set<string>();
    steamAchievements
      .filter(a => a.achieved === 1)
      .forEach(steamAch => {
        // For EU4, EU5 and VIC3, Steam API returns names with "achievement_" prefix
        // For CK3 and HOI4, names are already in the final format without prefix
        const nameWithoutPrefix = (selectedGame === 'ck3' || selectedGame === 'hoi4')
          ? steamAch.apiname 
          : steamAch.apiname.replace(/^achievement_/, '');
        
        // Use the utility function to match Steam to Wiki names
        const result = matchSteamToWiki(
          nameWithoutPrefix,
          achievements.map(a => a.name), // All wiki achievement names
          currentMapping
        );
        
        completedNames.add(result.wikiName);
      });
    
    return completedNames;
  }, [steamAchievements, selectedGame, achievements]);

  const handleSteamConfig = (apiKey: string, newSteamId: string) => {
    localStorage.setItem('steamApiKey', apiKey);
    localStorage.setItem('steamId', newSteamId);
    setSteamApiKey(apiKey);
    setSteamId(newSteamId);
  };

  // Filter achievements based on search, difficulty, and completion status
  const filteredAchievements = useMemo(() => {
    return achievements.filter((achievement) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === '' ||
        achievement.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        achievement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        achievement.notes.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by difficulty
      const matchesDifficulty =
        selectedDifficulty === 'all' || achievement.difficulty === selectedDifficulty;

      // Filter by completion status (only if Steam is connected)
      let matchesCompletion = true;
      if (completionFilter !== 'all' && steamApiKey && steamId) {
        const isCompleted = completedAchievements.has(achievement.name);
        matchesCompletion = completionFilter === 'completed' ? isCompleted : !isCompleted;
      }

      return matchesSearch && matchesDifficulty && matchesCompletion;
    });
  }, [achievements, searchQuery, selectedDifficulty, completionFilter, completedAchievements, steamApiKey, steamId]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedDifficulty('all');
    setCompletionFilter('all');
  };

  const isSteamConnected = !!steamApiKey && !!steamId;

  // Create a helper to check if an achievement is completed
  const isAchievementCompleted = useCallback((achievementName: string): boolean => {
    return completedAchievements.has(achievementName);
  }, [completedAchievements]);

  // Create a Set of completed achievement names (using the wiki format) for the table
  const completedAchievementsForTable = useMemo(() => {
    if (completedAchievements.size === 0) return new Set<string>();
    return new Set(
      achievements
        .filter(ach => isAchievementCompleted(ach.name))
        .map(ach => ach.name)
    );
  }, [achievements, completedAchievements.size, isAchievementCompleted]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4 py-6 max-w-[1600px]">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Paradox Achievements
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Track your grand strategy progress
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            {/* Steam Configuration */}
            <SteamConfig
              onConfigSaved={handleSteamConfig}
              currentApiKey={steamApiKey || undefined}
              currentSteamId={steamId || undefined}
            />
            
            {/* Statistics Dropdown */}
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 shadow-sm hover:shadow">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Statistics
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <AchievementStats
                  achievements={achievements}
                  completedAchievements={completedAchievementsForTable}
                  gameName={currentGame.fullName}
                />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Game Selector */}
        <GameSelector selectedGame={selectedGame} onGameChange={setSelectedGame} />

        {/* Game Header with Stats */}
        <GameHeader
          game={currentGame}
          achievementCount={achievements.length}
          completedCount={completedAchievements.size}
          isSteamConnected={isSteamConnected}
        />

        {/* Filters Bar */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700 p-4 shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <AchievementFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={setSelectedDifficulty}
              completionFilter={completionFilter}
              onCompletionFilterChange={setCompletionFilter}
              steamConnected={isSteamConnected}
              onReset={handleReset}
              totalCount={achievements.length}
              filteredCount={filteredAchievements.length}
            />
          </div>
        </div>

        {/* Steam Connection Status */}
        {isSteamConnected && isLoadingSteam && (
          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent"></div>
              <p className="text-blue-700 dark:text-blue-300 font-medium">
                Syncing achievements from Steam...
              </p>
            </div>
          </div>
        )}
        
        {isSteamConnected && steamError && (
          <div className="mb-4 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="text-red-600 dark:text-red-400 text-xl">⚠️</span>
              <p className="text-red-700 dark:text-red-300 font-medium">
                Error loading Steam achievements. Please check your API Key and Steam ID.
              </p>
            </div>
          </div>
        )}

        {/* Achievements Table */}
        <AchievementsTable 
          achievements={filteredAchievements} 
          completedAchievements={completedAchievementsForTable}
        />

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-300 dark:border-slate-700">
          <div className="text-center space-y-3">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Achievement data sourced from{' '}
              <a
                href={currentGame.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors"
              >
                {currentGame.name} Paradox Wiki
              </a>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Connect your Steam account to track your progress • Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              Made with ❤️ for Paradox Grand Strategy fans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
