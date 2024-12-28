import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

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
    <Card className="transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-purple-900">Generated Prompt</h2>
        <Button
          onClick={handleCopy}
          variant="secondary"
          icon={copied ? <Check className="w-4 h-4 mr-1.5" /> : <Copy className="w-4 h-4 mr-1.5" />}
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>
      <div className="bg-purple-50 rounded-lg p-4 transition-colors duration-200 hover:bg-purple-100">
        <p className="text-purple-800 whitespace-pre-wrap">{prompt}</p>
      </div>
    </Card>
  );
}