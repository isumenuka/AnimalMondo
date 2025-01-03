import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PromptForm } from './components/PromptForm';
import { GeneratedPrompt } from './components/GeneratedPrompt';
import { PromptHistory } from './components/PromptHistory';
import { generatePrompt } from './lib/gemini/promptGenerator';
import { PromptFormData } from './types/prompt';
import { Card } from './components/ui/Card';
import { Footer } from './components/ui/Footer';

interface Prompt {
  positive: string;
  negative: string;
}

export default function App() {
  const [generatedPrompt, setGeneratedPrompt] = useState<Prompt | null>(null);
  const [promptHistory, setPromptHistory] = useState<Prompt[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (formData: PromptFormData) => {
    setIsLoading(true);
    setError('');
    try {
      const prompt = await generatePrompt(formData);
      setGeneratedPrompt(prompt);
      setPromptHistory(prev => [prompt, ...prev.slice(0, 4)]);
    } catch (err) {
      setError('Failed to generate prompt. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (prompt: Prompt) => {
    try {
      const text = `Positive Prompt:\n${prompt.positive}\n\nNegative Prompt:\n${prompt.negative}`;
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy prompt:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-purple-600" />
              AI Prompt Generator
            </h1>
            <p className="mt-3 text-lg text-purple-700 animate-fadeIn">
              Create stunning image prompts with our AI-powered generator
            </p>
          </div>

          <Card className="transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px]">
            <PromptForm onSubmit={handleSubmit} isLoading={isLoading} />
          </Card>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg animate-fadeIn">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {generatedPrompt && (
            <div className="animate-slideUp">
              <GeneratedPrompt prompt={generatedPrompt} />
            </div>
          )}
          
          <div className="animate-fadeIn">
            <PromptHistory prompts={promptHistory} onCopy={handleCopy} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}