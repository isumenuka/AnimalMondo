import { ElementOption } from '../../types/settingTypes';

// Map animal types to relevant environmental elements
const animalEnvironments: Record<string, string[]> = {
  savanna: [
    'scattered-acacia-trees',
    'weathered-rocks',
    'rippled-dunes',
    'soaring-birds-of-prey'
  ],
  jungle: [
    'dense-vegetation',
    'crystal-clear-stream',
    'ancient-redwood-trees',
    'moss-covered-log'
  ],
  forest: [
    'sunlight-dappling',
    'autumn-canopy',
    'luminous-mushrooms',
    'moss-covered-stones'
  ],
  mountain: [
    'weathered-rocks',
    'morning-mist',
    'crystal-clear-stream',
    'misty-waterfall'
  ],
  desert: [
    'rippled-dunes',
    'weathered-rocks',
    'scattered-acacia-trees'
  ]
};

// Mapping of lighting conditions to relevant elements
export const lightingToElements: Record<string, string[]> = {
  'diffused-sunlight-filtering-through-clouds': [
    'morning-mist',
    'dew-covered-grass',
    'moss-covered-stones',
    'flowering-wildflowers'
  ],
  'dramatic-crepuscular-rays': [
    'soaring-birds-of-prey',
    'scattered-acacia-trees',
    'weathered-rocks',
    'rippled-dunes'
  ],
  'soft-ambient-twilight-glow': [
    'luminous-mushrooms',
    'moss-covered-log',
    'crystal-clear-stream',
    'dense-vegetation'
  ],
  'swirling-storm-clouds': [
    'weathered-rocks',
    'rippled-dunes',
    'soaring-birds-of-prey',
    'morning-mist'
  ],
  'golden-rays-piercing-through': [
    'sunlight-dappling',
    'autumn-canopy',
    'sun-dappled-forest-floor',
    'scattered-acacia-trees'
  ]
};

// Mapping of atmospheres to relevant elements
export const atmosphereToElements: Record<string, string[]> = {
  'ethereal': [
    'morning-mist',
    'luminous-mushrooms',
    'crystal-clear-stream',
    'sunlight-dappling'
  ],
  'intense': [
    'soaring-birds-of-prey',
    'weathered-rocks',
    'rippled-dunes',
    'scattered-acacia-trees'
  ],
  'mystical': [
    'luminous-mushrooms',
    'moss-covered-stones',
    'misty-waterfall',
    'autumn-canopy'
  ],
  'ominous': [
    'weathered-rocks',
    'dense-vegetation',
    'soaring-birds-of-prey',
    'morning-mist'
  ],
  'primordial': [
    'ancient-redwood-trees',
    'moss-covered-stones',
    'dense-vegetation',
    'crystal-clear-stream'
  ]
};

export function getElementsForAnimal(animal: string): string[] {
  const animalType = animal.toLowerCase();
  let environment = 'savanna'; // default

  // Determine environment based on animal
  if (animalType.includes('lion') || animalType.includes('elephant')) {
    environment = 'savanna';
  } else if (animalType.includes('tiger')) {
    environment = 'jungle';
  } else if (animalType.includes('wolf') || animalType.includes('bear')) {
    environment = 'forest';
  } else if (animalType.includes('snow') || animalType.includes('mountain')) {
    environment = 'mountain';
  }

  return animalEnvironments[environment] || animalEnvironments.savanna;
}