import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { type DifficultyLevel, difficultyLabels } from '@/data/achievements';

interface AchievementFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedDifficulty: DifficultyLevel | 'all';
  onDifficultyChange: (value: DifficultyLevel | 'all') => void;
  completionFilter: 'all' | 'completed' | 'incomplete';
  onCompletionFilterChange: (value: 'all' | 'completed' | 'incomplete') => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  steamConnected: boolean;
}

export function AchievementFilters({
  searchQuery,
  onSearchChange,
  selectedDifficulty,
  onDifficultyChange,
  completionFilter,
  onCompletionFilterChange,
  onReset,
  totalCount,
  filteredCount,
  steamConnected,
}: AchievementFiltersProps) {
  const difficulties: Array<{ value: DifficultyLevel | 'all'; label: string }> = [
    { value: 'all', label: 'All Difficulties' },
    { value: 'VE', label: difficultyLabels.VE },
    { value: 'E', label: difficultyLabels.E },
    { value: 'M', label: difficultyLabels.M },
    { value: 'H', label: difficultyLabels.H },
    { value: 'VH', label: difficultyLabels.VH },
    { value: 'I', label: difficultyLabels.I },
    { value: 'UC', label: difficultyLabels.UC },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-end flex-1">
      {/* Search */}
      <div className="space-y-2 flex-1 min-w-64">
        <Label htmlFor="search">Search achievements</Label>
        <Input
          id="search"
          type="text"
          placeholder="Search by name, description, or notes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Difficulty Filter */}
      <div className="space-y-2 w-full md:w-64">
        <Label htmlFor="difficulty">Difficulty level</Label>
        <Select value={selectedDifficulty} onValueChange={onDifficultyChange}>
          <SelectTrigger id="difficulty">
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>
          <SelectContent>
            {difficulties.map((diff) => (
              <SelectItem key={diff.value} value={diff.value}>
                {diff.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Completion Filter (only visible when Steam is connected) */}
      {steamConnected && (
        <div className="space-y-2 w-full md:w-64">
          <Label htmlFor="completion">Status</Label>
          <Select value={completionFilter} onValueChange={onCompletionFilterChange}>
            <SelectTrigger id="completion">
              <SelectValue placeholder="All achievements" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Achievements</SelectItem>
              <SelectItem value="completed">✓ Completed</SelectItem>
              <SelectItem value="incomplete">○ Not Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Results Badge */}
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="text-sm px-3 py-2 h-10">
          {filteredCount} / {totalCount}
        </Badge>
        {(searchQuery || selectedDifficulty !== 'all' || completionFilter !== 'all') && (
          <Button
            onClick={onReset}
            variant="outline"
            size="sm"
            className="h-10"
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
