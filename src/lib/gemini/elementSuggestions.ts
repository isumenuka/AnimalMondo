import { model } from './client';
import { elementOptions } from '../../config/elementOptions';

export async function getAISuggestedElements(
  subject1: string,
  subject2: string,
  lighting: string,
  atmosphere: string,
  action: string,
  angle: string
): Promise<string[]> {
  const prompt = `Given a scene with:
- Subject 1: "${subject1}"
- Subject 2: "${subject2}"
- Action: "${action}"
- Camera Angle: "${angle}"
- Lighting: "${lighting}"
- Atmosphere: "${atmosphere}"

Choose exactly 3 most appropriate environmental elements from this list that would enhance the scene and match the mood:
${elementOptions.map(e => `- ${e.value}`).join('\n')}

Consider:
1. The natural habitats of both animals
2. The dramatic impact of the action and angle
3. How the lighting and atmosphere affect visibility
4. What elements would enhance the composition
5. Environmental authenticity

Return ONLY the element values separated by '|' (exactly 3 elements).
Example: "weathered-rocks|morning-mist|dense-vegetation"`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text().trim();
    const elements = response.split('|').map(e => e.trim());
    
    // Validate elements exist in our options
    const validElements = elements
      .filter(e => elementOptions.some(opt => opt.value === e))
      .slice(0, 3);
    
    return validElements.length === 3 ? validElements : getDefaultElements(subject1, subject2);
  } catch (error) {
    console.error('Error getting AI suggested elements:', error);
    return getDefaultElements(subject1, subject2);
  }
}

function getDefaultElements(subject1: string, subject2: string): string[] {
  return ['weathered-rocks', 'morning-mist', 'dense-vegetation'];
}