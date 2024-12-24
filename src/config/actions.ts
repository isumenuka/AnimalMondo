import { ActionOption } from '../types/prompt';

export const actionOptions: ActionOption[] = [
  {
    value: 'Standing Over',
    label: 'Standing Over',
    description: '[Subject 1] stands over [Subject 2], its massive form towering while [Subject 2] lies prone beneath it'
  },
  {
    value: 'Standing Behind',
    label: 'Standing Behind',
    description: '[Subject 1] stands behind [Subject 2], its neck reaching skyward as [Subject 2] lies still on the ground'
  },
  {
    value: 'Lying Down',
    label: 'Lying Down',
    description: '[Subject 2] is lying down on the ground, defeated, while [Subject 1] stands over it'
  },
  {
    value: 'Standing Open Mouth',
    label: 'Standing Open Mouth',
    description: '[Subject 1] is standing with its open mouth, its teeth bared in a fearsome display as [Subject 2] lays motionless before it'
  },
  {
    value: 'Crouching',
    label: 'Crouching',
    description: '[Subject 1] is crouching low to the ground, preparing to pounce as [Subject 2] is completely unaware'
  },
  {
    value: 'Snarling',
    label: 'Snarling',
    description: '[Subject 1] is snarling, its lips curled back to reveal its fangs while [Subject 2] lays defeated on the ground'
  },
  {
    value: 'Open Mouth',
    label: 'Open Mouth',
    description: '[Subject 1] has its open mouth, revealing its large teeth as [Subject 2] lies motionless'
  },
  {
    value: 'Snarling/Sitting',
    label: 'Snarling/Sitting',
    description: '[Subject 1] is snarling while sitting on [Subject 2], its claws digging into its prey as [Subject 2] tries to struggle beneath'
  }
];