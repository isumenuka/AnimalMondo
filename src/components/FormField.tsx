import React from 'react';
import { PromptField } from '../types/prompt';

interface FormFieldProps extends PromptField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function FormField({ 
  name, 
  label, 
  required, 
  placeholder, 
  type = 'text',
  options = [],
  value, 
  onChange 
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && '*'}
        {!required && ' (optional - AI will suggest if empty)'}
      </label>
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required={required}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value} title={option.description}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}