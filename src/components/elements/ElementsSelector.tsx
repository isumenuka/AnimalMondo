import React from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { ElementOption } from '../../types/settingTypes';
import { Button } from '../ui/Button';

interface ElementsSelectorProps {
  options: ElementOption[];
  selectedElements: string[];
  onChange: (elements: string[]) => void;
  onSuggest: () => void;
  isRefreshing?: boolean;
}

export function ElementsSelector({ 
  options, 
  selectedElements, 
  onChange, 
  onSuggest,
  isRefreshing = false 
}: ElementsSelectorProps) {
  const handleElementToggle = (value: string) => {
    if (selectedElements.includes(value)) {
      onChange(selectedElements.filter(e => e !== value));
    } else if (selectedElements.length < 3) {
      onChange([...selectedElements, value]);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-gray-700">
          Elements (Select up to 3)
        </label>
        <Button
          variant="secondary"
          onClick={onSuggest}
          disabled={isRefreshing}
          className="p-1.5 h-8 bg-purple-100 hover:bg-purple-200 border-purple-200"
          icon={isRefreshing ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Wand2 className="w-4 h-4 mr-1" />}
        >
          {isRefreshing ? 'Suggesting...' : 'Suggest Elements'}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map((option) => {
          const isSelected = selectedElements.includes(option.value);
          const isDisabled = selectedElements.length >= 3 && !isSelected;

          return (
            <label
              key={option.value}
              className={`
                relative flex items-start p-3 rounded-lg border cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'border-purple-500 bg-purple-50 transform scale-[1.02]' 
                  : isDisabled
                    ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                    : 'border-gray-200 hover:bg-gray-50'
                }
              `}
            >
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => handleElementToggle(option.value)}
                  className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500 disabled:opacity-50"
                />
              </div>
              <div className="ml-3 text-sm">
                <span className={`font-medium ${isDisabled ? 'text-gray-400' : 'text-gray-700'}`}>
                  {option.label}
                </span>
              </div>
            </label>
          );
        })}
      </div>
      
      {selectedElements.length >= 3 && (
        <p className="text-sm text-purple-600 mt-2">
          Maximum of 3 elements selected
        </p>
      )}
    </div>
  );
}