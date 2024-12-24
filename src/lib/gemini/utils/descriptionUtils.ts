import { actionOptions } from '../../../config/actions';
import { angleOptions } from '../../../config/angles';
import { settingOptions } from '../../../config/settings';

export function getActionDescription(action: string, subject1: string, subject2: string): string {
  const actionOption = actionOptions.find(opt => opt.value === action);
  if (!actionOption) return action;
  
  return actionOption.description
    .replace(/\[Subject 1\]/g, subject1)
    .replace(/\[Subject 2\]/g, subject2);
}

export function getAngleDescription(angle: string, subject1: string, subject2: string): string {
  const angleOption = angleOptions.find(opt => opt.value === angle);
  if (!angleOption) return angle;
  
  return angleOption.description
    .replace(/\[Subject 1\]/g, subject1)
    .replace(/\[Subject 2\]/g, subject2);
}

export function getSettingDescription(setting: string): string {
  const settingOption = settingOptions.find(opt => opt.value === setting);
  return settingOption?.description || setting;
}