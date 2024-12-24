import React from 'react';
import { Copy, Check } from 'lucide-react';

interface GeneratedPromptProps {
  prompt: string;
}

export function GeneratedPrompt({ prompt }: GeneratedPromptProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">Generated Prompt</h2>
        <button
          onClick={handleCopy}
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <p className="text-gray-700 whitespace-pre-wrap">{prompt}</p>
      </div>
    </div>
  );
}