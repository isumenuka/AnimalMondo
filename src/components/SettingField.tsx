import React from 'react';
import { settingOptions } from '../types/settingTypes';
import { ElementsSelector } from './elements/ElementsSelector';
import { elementOptions } from '../config/elementOptions';
import { ImageUploader } from './ImageUploader';

interface SettingFieldProps {
  value: Record<string, any>;
  onChange: (settingComponents: Record<string, any>) => void;
}

export function SettingField({ value, onChange }: SettingFieldProps) {
  const handleComponentChange = (component: string, selectedValue: string) => {
    onChange({ ...value, [component]: selectedValue });
  };

  const handleImageAnalysis = (analysis: { atmosphere: string; adjective: string; lighting: string }) => {
    onChange({
      ...value,
      atmosphere: analysis.atmosphere,
      adjective: analysis.adjective,
      lighting: analysis.lighting
    });
  };

  const renderSelect = (
    label: string,
    component: string,
    options: Array<{ value: string; label: string }>
  ) => (
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value[component] || ''}
        onChange={(e) => handleComponentChange(component, e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Setting Components</h3>
      
      <ImageUploader onImageAnalyzed={handleImageAnalysis} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderSelect('Landscape Type', 'landscapeType', settingOptions.landscapeTypes)}
      </div>

      <ElementsSelector
        options={elementOptions}
        selectedElements={value.elements || []}
        onChange={(elements) => handleComponentChange('elements', elements)}
      />
    </div>
  );
}