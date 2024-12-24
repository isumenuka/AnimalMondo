import { GoogleGenerativeAI } from '@google/generative-ai';
import { templates } from './promptTemplates';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

async function generateSubPrompt(template: string, params: Record<string, string>): Promise<string> {
  const prompt = Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`{${key}}`, value),
    template
  );

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text().trim();
}

export async function generatePrompt(
  subject1: string,
  subject2: string,
  action: string,
  angle: string,
  setting: string,
  colors: string,
  style: string
): Promise<string> {
  try {
    // Only generate suggestions for empty fields
    const [suggestedAngle, suggestedSetting, suggestedColors, suggestedStyle] = await Promise.all([
      angle ? Promise.resolve(angle) : generateSubPrompt(templates.cameraAngle, { subject1, subject2, action }),
      setting ? Promise.resolve(setting) : generateSubPrompt(templates.setting, { subject1, subject2, action }),
      colors ? Promise.resolve(colors) : generateSubPrompt(templates.colors, { subject1, subject2, action, setting }),
      style ? Promise.resolve(style) : generateSubPrompt(templates.style, { subject1, subject2, action })
    ]);

    // Combine all elements into final prompt
    const finalPrompt = `Create a detailed image of ${subject1} and ${subject2}, ${action}, from ${suggestedAngle}, in ${suggestedSetting}, using ${suggestedColors}, with ${suggestedStyle} style.`;

    return finalPrompt;
  } catch (error) {
    console.error('Error generating prompt:', error);
    throw error;
  }
}