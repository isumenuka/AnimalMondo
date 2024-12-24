import React from 'react';
import { ElementOption } from '../../types/settingTypes';

interface ElementsSelectorProps {
  options: ElementOption[];
  selectedElements: string[];
  onChange: (elements: string[]) => void;
}

export function ElementsSelector({ options, selectedElements, onChange }: ElementsSelectorProps) {
  const handleElementToggle = (value: string) => {
    const newElements = selectedElements.includes(value)
      ? selectedElements.filter(e => e !== value)
      : [...selectedElements, value];
    onChange(newElements);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Elements (Select multiple)
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              relative flex items-start p-3 rounded-lg border cursor-pointer
              ${selectedElements.includes(option.value)
                ? 'border-purple-500 bg-purple-50'
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