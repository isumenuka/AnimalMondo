import React from 'react';
import { PromptField } from '../types/prompt';

interface FormFieldProps extends PromptField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  className?: string;
}

export function FormField({ 
  name, 
  label, 
  required, 
  placeholder, 
  type = 'text',
  options = [],
  value, 
  onChange,
  className = ''
}: FormFieldProps) {
  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm";
  
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
        {!required && (
          <span className="text-xs text-gray-500 ml-1">
            (optional - AI will suggest)
          </span>
        )}
      </label>
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
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
          className={inputClasses}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}