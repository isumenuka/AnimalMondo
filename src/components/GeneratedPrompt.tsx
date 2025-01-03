import React from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

interface GeneratedPromptProps {
  prompt: {
    positive: string;
    negative: string;
  };
}

export function GeneratedPrompt({ prompt }: GeneratedPromptProps) {
  const [copiedPositive, setCopiedPositive] = React.useState(false);
  const [copiedNegative, setCopiedNegative] = React.useState(false);

  const handleCopy = async (text: string, setCopied: (copied: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <Card className="transition-all duration-300">
      <div className="space-y-6">
        {/* Positive Prompt */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-purple-900">Positive Prompt</h2>
            <Button
              onClick={() => handleCopy(prompt.positive, setCopiedPositive)}
              variant="secondary"
              icon={copiedPositive ? <Check className="w-4 h-4 mr-1.5" /> : <Copy className="w-4 h-4 mr-1.5" />}
            >
              {copiedPositive ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 transition-colors duration-200 hover:bg-purple-100">
            <p className="text-purple-800 whitespace-pre-wrap">{prompt.positive}</p>
          </div>
        </div>

        {/* Negative Prompt */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-purple-900">Negative Prompt</h2>
              <AlertCircle className="w-5 h-5 text-purple-600" />
            </div>
            <Button
              onClick={() => handleCopy(prompt.negative, setCopiedNegative)}
              variant="secondary"
              icon={copiedNegative ? <Check className="w-4 h-4 mr-1.5" /> : <Copy className="w-4 h-4 mr-1.5" />}
            >
              {copiedNegative ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="bg-red-50 rounded-lg p-4 transition-colors duration-200 hover:bg-red-100">
            <p className="text-red-800 whitespace-pre-wrap">{prompt.negative}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}