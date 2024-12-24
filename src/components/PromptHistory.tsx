import React, { useState } from 'react';
import { Copy, Check, Clock } from 'lucide-react';

interface PromptHistoryProps {
  prompts: string[];
  onCopy: (prompt: string) => void;
}

export function PromptHistory({ prompts, onCopy }: PromptHistoryProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (prompt: string, index: number) => {
    onCopy(prompt);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (prompts.length === 0) return null;

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-purple-600" />
        <h2 className="text-lg font-medium text-gray-900">Previous Prompts</h2>
      </div>
      <div className="space-y-4">
        {prompts.map((prompt, index) => (
          <div key={index} className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
            <p className="text-gray-700 pr-12">{prompt}</p>
            <button
              onClick={() => handleCopy(prompt, index)}
              className="absolute right-4 top-4 p-1.5 rounded-md text-gray-500 hover:text-purple-600 hover:bg-white transition-colors"
              title="Copy to clipboard"
            >
              {copiedIndex === index ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}