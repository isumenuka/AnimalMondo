import { model } from './client';
import { settingOptions } from '../../types/settingTypes';
import { angleOptions } from '../../config/angles';

export async function suggestSettings(
  subject1: string, 
  subject2: string,
  angle: string
): Promise<{
  lighting: string;
  atmosphere: string;
}> {
  const selectedAngle = angleOptions.find(a => a.value === angle)?.description || angle;
  
  const prompt = `Given:
- Subject 1: "${subject1}"
- Subject 2: "${subject2}"
- Camera angle: "${selectedAngle}"

Choose exactly one lighting and one atmosphere option that would create the most dramatic and cohesive scene.

Lighting options (choose ONE):
${settingOptions.lighting.map(l => `- ${l.value}`).join('\n')}

Atmosphere options (choose ONE):
${settingOptions.atmospheres.map(a => `- ${a.value}`).join('\n')}

Return ONLY the values in format: lighting|atmosphere`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text().trim();
    const [lighting, atmosphere] = response.split('|').map(s => s.trim());
    
    // Validate the responses match our options
    const validLighting = settingOptions.lighting.find(l => l.value === lighting)?.value;
    const validAtmosphere = settingOptions.atmospheres.find(a => a.value === atmosphere)?.value;

    if (!validLighting || !validAtmosphere) {
      throw new Error('Invalid AI response');
    }

    return {
      lighting: validLighting,
      atmosphere: validAtmosphere
    };
  } catch (error) {
    console.error('Error suggesting settings:', error);
    // Fallback to first options as default
    return {
      lighting: settingOptions.lighting[0].value,
      atmosphere: settingOptions.atmospheres[0].value
    };
  }
}