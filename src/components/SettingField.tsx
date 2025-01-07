import React, { useState, useCallback, useEffect } from 'react';
import { settingOptions } from '../types/settingTypes';
import { ElementsSelector } from './elements/ElementsSelector';
import { elementOptions } from '../config/elementOptions';
import { getAISuggestedElements } from '../lib/gemini/elementSuggestions';

interface SettingFieldProps {
  value: Record<string, any>;
  onChange: (settingComponents: Record<string, any>) => void;
  formData: {
    subject1: string;
    subject2: string;
    action: string;
    angle: string;
  };
}

export function SettingField({ value, onChange, formData }: SettingFieldProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [hasInitialSuggestion, setHasInitialSuggestion] = useState(false);

  const handleComponentChange = useCallback((component: string, selectedValue: string | string[]) => {
    onChange(prev => ({ ...prev, [component]: selectedValue }));
  }, [onChange]);

  const handleRefreshSuggestions = useCallback(async () => {
    if (!formData.subject1 || !formData.subject2 || !value.lighting || !value.atmosphere) return;
    
    setIsRefreshing(true);
    try {
      const elements = await getAISuggestedElements(
        formData.subject1,
        formData.subject2,
        value.lighting,
        value.atmosphere,
        formData.action,
        formData.angle
      );
      onChange(prev => ({ ...prev, elements }));
    } catch (error) {
      console.error('Error refreshing suggestions:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, [formData, value.lighting, value.atmosphere, onChange]);

  useEffect(() => {
    if (!hasInitialSuggestion && 
        value.lighting && 
        value.atmosphere && 
        formData.subject1 && 
        formData.subject2) {
      setHasInitialSuggestion(true);
      handleRefreshSuggestions();
    }
  }, [value.lighting, value.atmosphere, formData.subject1, formData.subject2, hasInitialSuggestion, handleRefreshSuggestions]);

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
          <ElementsSelector
            options={elementOptions}
            selectedElements={value.elements || []}
            onChange={(elements) => handleComponentChange('elements', elements)}
            onSuggest={handleRefreshSuggestions}
            isRefreshing={isRefreshing}
          />
        </div>
      )}
    </div>
  );
}