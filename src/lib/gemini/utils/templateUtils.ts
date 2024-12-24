import { model } from '../client';

export async function generateSubPrompt(template: string, params: Record<string, string>): Promise<string> {
  const prompt = Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, value),
    template
  );

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text().trim();
}