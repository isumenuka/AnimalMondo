import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '../ui/Button';
import { settingOptions } from '../../types/settingTypes';

interface AISuggestionsProps {
  lighting: string;
  atmosphere: string;
  onRefresh: () => void;
}

export function AISuggestions({ lighting, atmosphere, onRefresh }: AISuggestionsProps) {
  // Memoize label lookups
  const lightingLabel = React.useMemo(() => 
    settingOptions.lighting.find(l => l.value === lighting)?.label,
    [lighting]
  );
  
  const atmosphereLabel = React.useMemo(() => 
    settingOptions.atmospheres.find(a => a.value === atmosphere)?.label,
    [atmosphere]
  );

  // Memoize refresh handler
  const handleRefresh = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onRefresh();
  }, [onRefresh]);

  return (
    <div className="bg-purple-50 p-4 rounded-md relative transform transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-medium text-purple-800">AI Suggested Settings</h4>
        <Button
          variant="secondary"
          onClick={handleRefresh}
          className="p-1.5 h-8 bg-purple-100 hover:bg-purple-200 border-purple-200 transition-all duration-200"
          icon={<RefreshCw className="w-4 h-4" />}
          aria-label="Refresh suggestions"
        >
          Refresh
        </Button>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-purple-700 flex items-center justify-between">
          <span className="font-medium">Lighting:</span>
          <span className="text-purple-900 transition-all duration-200">
            {lightingLabel || 'Select lighting'}
          </span>
        </p>
        <p className="text-sm text-purple-700 flex items-center justify-between">
          <span className="font-medium">Atmosphere:</span>
          <span className="text-purple-900 transition-all duration-200">
            {atmosphereLabel || 'Select atmosphere'}
          </span>
        </p>
      </div>
    </div>
  );
}