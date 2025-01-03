import { baseTemplates } from './templates/baseTemplates';
import { negativeTemplates } from './templates/negativeTemplates';

export const templates = {
  ...baseTemplates,
  negativePrompt: negativeTemplates.base,
  defaultNegatives: negativeTemplates.defaultNegatives
};