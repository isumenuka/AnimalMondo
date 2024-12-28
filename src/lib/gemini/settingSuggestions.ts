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

Suggest the most appropriate lighting and atmosphere that would enhance this scene.

Choose from these lighting options:
${settingOptions.lighting.map(l => `- ${l.label}`).join('\n')}

And these atmosphere options:
${settingOptions.atmospheres.map(a => `- ${a.label}`).join('\n')}

Consider:
1. The nature and behavior of both subjects
2. The emotional impact of the camera angle
3. The time of day that would best suit this scene
4. The mood you want to convey

Return ONLY the values in format: lighting|atmosphere`;

  try {
    const result = await model.generateContent(prompt);
    const [lighting, atmosphere] = result.response.text().trim().split('|');
    
    // Map the generated text back to option values
    const lightingOption = settingOptions.lighting.find(l => 
      l.label.toLowerCase() === lighting.toLowerCase().trim()
    );
    const atmosphereOption = settingOptions.atmospheres.find(a => 
      a.label.toLowerCase() === atmosphere.toLowerCase().trim()
    );

    return {
      lighting: lightingOption?.value || settingOptions.lighting[0].value,
      atmosphere: atmosphereOption?.value || settingOptions.atmospheres[0].value
    };
  } catch (error) {
    console.error('Error suggesting settings:', error);
    // Fallback to default values
    return {
      lighting: settingOptions.lighting[0].value,
      atmosphere: settingOptions.atmospheres[0].value
    };
  }
}