import React, { useState, useCallback, useEffect } from 'react';
import { Wand2 } from 'lucide-react';
import { FormField } from './FormField';
import { SettingField } from './SettingField';
import { formFields } from '../config/formFields';
import { PromptFormData } from '../types/prompt';
import { suggestSettings } from '../lib/gemini/settingSuggestions';
import { Container } from './ui/Container';

interface PromptFormProps {
  onSubmit: (formData: PromptFormData) => void;
  isLoading: boolean;
}

export function PromptForm({ onSubmit, isLoading }: PromptFormProps) {
  const [formData, setFormData] = useState<PromptFormData>({
    subject1: '',
    subject2: '',
    action: '',
    angle: '',
    setting: '',
    colors: '',
    style: '',
  });

  const [settingComponents, setSettingComponents] = useState<Record<string, any>>({
    elements: []
  });

  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  // Effect to trigger AI suggestions when required fields are filled
  useEffect(() => {
    const getAISuggestions = async () => {
      if (formData.subject1 && formData.subject2 && formData.action && formData.angle) {
        setIsLoadingSuggestions(true);
        try {
          const suggestions = await suggestSettings(
            formData.subject1,
            formData.subject2,
            formData.angle
          );
          
          setSettingComponents(prev => ({
            ...prev,
            lighting: suggestions.lighting,
            atmosphere: suggestions.atmosphere
          }));
        } catch (error) {
          console.error('Error getting AI suggestions:', error);
        } finally {
          setIsLoadingSuggestions(false);
        }
      }
    };

    getAISuggestions();
  }, [formData.subject1, formData.subject2, formData.action, formData.angle]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const elementsString = settingComponents.elements.join(', ');
    const settingString = `a scene with ${settingComponents.lighting}, ${elementsString}, creating a ${settingComponents.atmosphere} atmosphere`;
    onSubmit({
      ...formData,
      setting: settingString
    });
  }, [formData, settingComponents, onSubmit]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  return (
    <Container>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {formFields.slice(0, 2).map((field) => (
            <FormField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full"
            />
          ))}
        </div>

        <div className="space-y-4">
          {formFields.slice(2, 4).map((field) => (
            <FormField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full"
            />
          ))}
        </div>

        <SettingField
          value={settingComponents}
          onChange={setSettingComponents}
          formData={{
            subject1: formData.subject1,
            subject2: formData.subject2,
            action: formData.action,
            angle: formData.angle
          }}
          isLoadingSuggestions={isLoadingSuggestions}
        />

        <button
          type="submit"
          disabled={isLoading || isLoadingSuggestions}
          className="w-full sm:w-auto flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isLoading ? (
            'Generating...'
          ) : (
            <>
              <Wand2 className="w-5 h-5 mr-2" />
              Generate Prompt
            </>
          )}
        </button>
      </form>
    </Container>
  );
}