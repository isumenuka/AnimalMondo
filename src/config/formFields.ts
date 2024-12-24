import { PromptField } from '../types/prompt';
import { actionOptions } from './actions';
import { angleOptions } from './angles';
import { settingOptions } from './settings';

export const formFields: PromptField[] = [
  {
    name: 'subject1',
    label: 'Subject 1',
    required: true,
    placeholder: 'Type subject 1',
    type: 'text'
  },
  {
    name: 'subject2',
    label: 'Subject 2',
    required: true,
    placeholder: 'Type subject 2',
    type: 'text'
  },
  {
    name: 'action',
    label: 'Action',
    required: true,
    placeholder: 'Select an action',
    type: 'select',
    options: actionOptions
  },
  {
    name: 'angle',
    label: 'Camera Angle',
    required: true,
    placeholder: 'Select a camera angle',
    type: 'select',
    options: angleOptions
  },
  {
    name: 'setting',
    label: 'Setting',
    required: true,
    placeholder: 'Select a setting',
    type: 'select',
    options: settingOptions
  },
  {
    name: 'colors',
    label: 'Colors',
    required: false,
    placeholder: 'e.g., warm earth tones',
    type: 'text'
  },
  {
    name: 'style',
    label: 'Style',
    required: false,
    placeholder: 'e.g., cinematic photorealistic',
    type: 'text'
  }
];