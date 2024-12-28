import React from 'react';
import { Wand2 } from 'lucide-react';
import { ElementOption } from '../../types/settingTypes';
import { Button } from '../ui/Button';

interface ElementsSelectorProps {
  options: ElementOption[];
  selectedElements: string[];
  onChange: (elements: string[]) => void;
  onSuggest: () => void;
}

export function ElementsSelector({ options, selectedElements, onChange, onSuggest }: ElementsSelectorProps) {
  const handleElementToggle = (value: string) => {
    const newElements = selectedElements.includes(value)
      ? selectedElements.filter(e => e !== value)
      : [...selectedElements, value];
    onChange(newElements);
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Elements (Select multiple)
        </label>
        <Button
          variant="secondary"
          onClick={onSuggest}
          className="p-1.5 h-8 bg-purple-100 hover:bg-purple-200 border-purple-200"
          icon={<Wand2 className="w-4 h-4 mr-1" />}
        >
          Suggest Elements
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              relative flex items-start p-3 rounded-lg border cursor-pointer transition-all duration-200
              ${selectedElements.includes(option.value)
                ? 'border-purple-500 bg-purple-50 transform scale-[1.02]'
                : 'border-gray-200 hover:bg-gray-50'}
            `}
          >
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={selectedElements.includes(option.value)}
                onChange={() => handleElementToggle(option.value)}
                className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <span className="font-medium text-gray-700">{option.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}