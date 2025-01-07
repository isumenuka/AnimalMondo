import { model } from './client';
import { settingOptions } from '../../types/settingTypes';
import { angleOptions } from '../../config/angles';
import { getAnimalHabitat } from '../utils/animalHabitats';

export async function suggestSettings(
  subject1: string, 
  subject2: string,
  angle: string
): Promise<{
  lighting: string;
  atmosphere: string;
}> {
  const habitat1 = getAnimalHabitat(subject1);
  const habitat2 = getAnimalHabitat(subject2);
  const selectedAngle = angleOptions.find(a => a.value === angle)?.description || angle;
  
  const prompt = `Given:
- Subject 1: "${subject1}" (habitat: ${habitat1})
- Subject 2: "${subject2}" (habitat: ${habitat2})
- Camera angle: "${selectedAngle}"

Based on these animals' natural habitats and behaviors, choose the most appropriate lighting and atmosphere.

Lighting options (choose ONE):
${settingOptions.lighting.map(l => `- ${l.value}: ${l.description}`).join('\n')}

Atmosphere options (choose ONE):
${settingOptions.atmospheres.map(a => `- ${a.value}: ${a.description}`).join('\n')}

Return ONLY the values in format: lighting|atmosphere`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text().trim();
    const [lighting, atmosphere] = response.split('|').map(s => s.trim());
    
    return {
      lighting: validateOption(lighting, settingOptions.lighting) || settingOptions.lighting[0].value,
      atmosphere: validateOption(atmosphere, settingOptions.atmospheres) || settingOptions.atmospheres[0].value
    };
  } catch (error) {
    console.error('Error suggesting settings:', error);
    return {
      lighting: settingOptions.lighting[0].value,
      atmosphere: settingOptions.atmospheres[0].value
    };
  }
}

function validateOption(value: string, options: Array<{ value: string }>): string | null {
  return options.find(o => o.value === value)?.value || null;
}