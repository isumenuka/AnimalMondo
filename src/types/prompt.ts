export interface PromptFormData {
  subject1: string;
  subject2: string;
  action: ActionType;
  angle: AngleType;
  setting: SettingType;
  colors: string;
  style: string;
}

export interface PromptField {
  name: keyof PromptFormData;
  label: string;
  required: boolean;
  placeholder: string;
  type?: 'text' | 'select';
  options?: ActionOption[] | AngleOption[] | SettingOption[];
}

export type ActionType = 
  | 'Standing Over'
  | 'Standing Behind'
  | 'Lying Down'
  | 'Standing Open Mouth'
  | 'Crouching'
  | 'Snarling'
  | 'Open Mouth'
  | 'Snarling/Sitting';

export type AngleType =
  | 'low-angle-up'
  | 'eye-level-standing'
  | 'medium-above'
  | 'low-angle-up-close'
  | 'medium-top'
  | 'high-angle-down'
  | 'eye-level-behind';

export type SettingType =
  | 'misty-alpine'
  | 'savanna-sunset'
  | 'twilight-forest'
  | 'desert-storm'
  | 'jungle-dawn';

export interface ActionOption {
  value: ActionType;
  label: ActionType;
  description: string;
}

export interface AngleOption {
  value: AngleType;
  label: string;
  description: string;
}

export interface SettingOption {
  value: SettingType;
  label: string;
  description: string;
}