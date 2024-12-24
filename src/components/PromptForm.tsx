import React, { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { FormField } from './FormField';
import { SettingField } from './SettingField';
import { formFields } from '../config/formFields';
import { PromptFormData } from '../types/prompt';
import { SettingComponents } from '../types/settingTypes';

interface PromptFormProps {
  onSubmit: (formData: PromptFormData) => void;
  isLoading: boolean;
}

const DEFAULT_STYLE = 'cinematic photorealistic rendering with dramatic lighting and rich, slightly desaturated colors';

export function PromptForm({ onSubmit, isLoading }: PromptFormProps) {
  const [formData, setFormData] = useState<PromptFormData>({
    subject1: '',
    subject2: '',
    action: '',
    angle: '',
    setting: '',
    colors: '',
    style: DEFAULT_STYLE,
  });

  const [settingComponents, setSettingComponents] = useState<Record<string, any>>({
    elements: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const elementsString = settingComponents.elements.join(', ');
    const settingString = `a ${settingComponents.adjective} ${settingComponents.landscapeType} with ${settingComponents.lighting}, ${elementsString}, creating a ${settingComponents.atmosphere} atmosphere`;
    onSubmit({
      ...formData,
      setting: settingString
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nonSettingFields = formFields.filter(field => field.name !== 'setting');

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formFields.slice(0, 2).map((field) => (
          <FormField
            key={field.name}
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}
      </div>

      {nonSettingFields.slice(2).map((field) => (
        field.name !== 'setting' && (
          <FormField
            key={field.name}
            {...field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        )
      ))}

      <SettingField
        value={settingComponents}
        onChange={setSettingComponents}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          'Generating...'
        ) : (
          <>
            <Wand2 className="w-4 h-4 mr-2" />
            Generate Prompt
          </>
        )}
      </button>
    </form>
  );
}