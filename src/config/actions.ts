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
  },
  {
    value: 'Lunging Attack',
    label: 'Lunging Attack',
    description: '[Subject 1] is mid-leap towards [Subject 2], claws extended and fangs bared for the kill'
  },
  {
    value: 'Death Grip',
    label: 'Death Grip',
    description: '[Subject 1] has [Subject 2] in a lethal grip, fangs locked onto the vital areas'
  },
  {
    value: 'Ambush Strike',
    label: 'Ambush Strike',
    description: '[Subject 1] emerges from cover, catching [Subject 2] completely off guard in a deadly strike'
  },
  {
    value: 'Fatal Blow',
    label: 'Fatal Blow',
    description: '[Subject 1] delivers the killing strike to [Subject 2], displaying raw predatory power'
  },
  {
    value: 'Crushing Bite',
    label: 'Crushing Bite',
    description: '[Subject 1] applies a devastating bite to [Subject 2], demonstrating lethal force'
  },
  {
    value: 'Victory Stance',
    label: 'Victory Stance',
    description: '[Subject 1] stands triumphant over [Subject 2], having claimed its prey'
  },
  {
    value: 'Pack Attack',
    label: 'Pack Attack',
    description: '[Subject 1] leads the final assault on [Subject 2], coordinating the killing blow'
  },
  {
    value: 'Throat Strike',
    label: 'Throat Strike',
    description: '[Subject 1] targets the throat of [Subject 2] with deadly precision'
  },
  {
    value: 'Lethal Chase',
    label: 'Lethal Chase',
    description: '[Subject 1] runs down [Subject 2] in a final burst of speed before the kill'
  }
];