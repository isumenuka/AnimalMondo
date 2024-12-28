import React from 'react';
import { settingOptions } from '../types/settingTypes';
import { ElementsSelector } from './elements/ElementsSelector';
import { elementOptions } from '../config/elementOptions';
import { AISuggestions } from './settings/AISuggestions';
import { getSuggestedElements } from '../lib/utils/elementSuggestions';

interface SettingFieldProps {
  value: Record<string, any>;
  onChange: (settingComponents: Record<string, any>) => void;
}

export function SettingField({ value, onChange }: SettingFieldProps) {
  // Handle component changes
  const handleComponentChange = React.useCallback((component: string, selectedValue: string | string[]) => {
    onChange(prev => ({ ...prev, [component]: selectedValue }));
  }, [onChange]);

  // Handle refresh suggestions
  const handleRefreshSuggestions = React.useCallback(() => {
    if (value.lighting && value.atmosphere) {
      const suggestedElements = getSuggestedElements(value.lighting, value.atmosphere);
      onChange(prev => ({ ...prev, elements: suggestedElements }));
    }
  }, [value.lighting, value.atmosphere, onChange]);

  // Update elements when lighting or atmosphere changes
  React.useEffect(() => {
    if (value.lighting && value.atmosphere) {
      const suggestedElements = getSuggestedElements(value.lighting, value.atmosphere);
      onChange(prev => ({ ...prev, elements: suggestedElements }));
    }
  }, [value.lighting, value.atmosphere, onChange]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Setting Components</h3>
      
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Lighting
        </label>
        <select
          value={value.lighting || ''}
          onChange={(e) => handleComponentChange('lighting', e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
        >
          <option value="">Select Lighting</option>
          {settingOptions.lighting.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Atmosphere
        </label>
        <select
          value={value.atmosphere || ''}
          onChange={(e) => handleComponentChange('atmosphere', e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-200"
        >
          <option value="">Select Atmosphere</option>
          {settingOptions.atmospheres.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {value.lighting && value.atmosphere && (
        <div className="space-y-4 animate-fadeIn">
          <AISuggestions
            lighting={value.lighting}
            atmosphere={value.atmosphere}
            onRefresh={handleRefreshSuggestions}
          />

          <ElementsSelector
            options={elementOptions}
            selectedElements={value.elements || []}
            onChange={(elements) => handleComponentChange('elements', elements)}
            onSuggest={handleRefreshSuggestions}
          />
        </div>
      )}
    </div>
  );
}