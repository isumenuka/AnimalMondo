import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PromptForm } from './components/PromptForm';
import { GeneratedPrompt } from './components/GeneratedPrompt';
import { PromptHistory } from './components/PromptHistory';
import { generatePrompt } from './lib/gemini/promptGenerator';
import { PromptFormData } from './types/prompt';

export default function App() {
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [promptHistory, setPromptHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (formData: PromptFormData) => {
    setIsLoading(true);
    setError('');
    try {
      const prompt = await generatePrompt(formData);
      setGeneratedPrompt(prompt);
      setPromptHistory(prev => [prompt, ...prev.slice(0, 4)]); // Keep only last 5 prompts
    } catch (err) {
      setError('Failed to generate prompt. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (prompt: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            AI Prompt Generator
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Create stunning image prompts with our AI-powered generator
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <PromptForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {generatedPrompt && <GeneratedPrompt prompt={generatedPrompt} />}
        <PromptHistory prompts={promptHistory} onCopy={handleCopy} />
      </div>
    </div>
  );
}