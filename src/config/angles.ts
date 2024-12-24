import { AngleOption } from '../types/prompt';

export const angleOptions: AngleOption[] = [
  {
    value: 'low-angle-up',
    label: 'Low Angle Up',
    description: 'Low-angle shot, looking up at [Subject 1]. [Subject 2] is in the foreground, slightly lower than camera position'
  },
  {
    value: 'eye-level-standing',
    label: 'Eye Level Standing',
    description: 'Eye-level shot. [Subject 1] is standing in the background. [Subject 2] is laying down in the foreground'
  },
  {
    value: 'medium-above',
    label: 'Medium Above',
    description: 'Medium-angle shot, slightly above eye-level. [Subject 1] is standing in the background. [Subject 2] is laying down in the foreground'
  },
  {
    value: 'low-angle-up-close',
    label: 'Low Angle Up Close',
    description: 'Low-angle shot, looking up at [Subject 1]. [Subject 2] is laying down in the foreground'
  },
  {
    value: 'medium-top',
    label: 'Medium Top View',
    description: 'Medium-angle shot, slightly above eye-level. [Subject 1] is on top of [Subject 2]'
  },
  {
    value: 'high-angle-down',
    label: 'High Angle Down',
    description: 'High-angle shot, looking down at [Subject 2]. [Subject 1] is standing behind [Subject 2]'
  },
  {
    value: 'eye-level-behind',
    label: 'Eye Level Behind',
    description: 'Eye-level shot. [Subject 1] is standing behind [Subject 2]'
  }
];