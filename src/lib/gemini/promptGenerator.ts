import { templates } from './promptTemplates';
import { PromptFormData } from '../../types/prompt';
import { generateSubPrompt } from './utils/templateUtils';
import { 
  getActionDescription, 
  getAngleDescription, 
  getSettingDescription 
} from './utils/descriptionUtils';

export async function generatePrompt({
  subject1,
  subject2,
  action,
  angle,
  setting,
  colors,
  style
}: PromptFormData): Promise<string> {
  try {
    const actionDescription = getActionDescription(action, subject1, subject2);
    const angleDescription = getAngleDescription(angle, subject1, subject2);
    const settingDescription = getSettingDescription(setting);

    // Generate missing components if not provided
    const [finalColors, finalStyle] = await Promise.all([
      colors ? Promise.resolve(colors) : generateSubPrompt(templates.colors, { subject1, subject2, action: actionDescription }),
      style ? Promise.resolve(style) : generateSubPrompt(templates.style, { subject1, subject2, action: actionDescription })
    ]);

    // Format the prompt according to the specified formula
    return `${subject1} and ${subject2}, ${actionDescription}, from a ${angleDescription}, in ${settingDescription}, using ${finalColors}, with ${finalStyle} photorealistic.`;
  } catch (error) {
    console.error('Error generating prompt:', error);
    throw error;
  }
}