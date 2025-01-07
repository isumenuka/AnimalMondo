interface HabitatInfo {
  primary: string;
  biomes: string[];
  timeOfDay: string[];
  lighting: string[];
}

const animalHabitats: Record<string, HabitatInfo> = {
  lion: {
    primary: 'savanna',
    biomes: ['grassland', 'savanna', 'woodland'],
    timeOfDay: ['dawn', 'dusk', 'night'],
    lighting: ['dramatic-crepuscular-rays', 'golden-rays-piercing-through']
  },
  tiger: {
    primary: 'jungle',
    biomes: ['rainforest', 'grassland', 'mangrove'],
    timeOfDay: ['dawn', 'dusk'],
    lighting: ['diffused-sunlight-filtering-through-clouds', 'soft-ambient-twilight-glow']
  },
  wolf: {
    primary: 'forest',
    biomes: ['forest', 'tundra', 'taiga'],
    timeOfDay: ['night', 'dawn'],
    lighting: ['soft-ambient-twilight-glow', 'swirling-storm-clouds']
  },
  bear: {
    primary: 'forest',
    biomes: ['forest', 'mountain', 'tundra'],
    timeOfDay: ['day', 'dawn'],
    lighting: ['diffused-sunlight-filtering-through-clouds', 'golden-rays-piercing-through']
  },
  elephant: {
    primary: 'savanna',
    biomes: ['savanna', 'forest', 'grassland'],
    timeOfDay: ['day', 'dawn', 'dusk'],
    lighting: ['dramatic-crepuscular-rays', 'diffused-sunlight-filtering-through-clouds']
  }
};

const defaultHabitat: HabitatInfo = {
  primary: 'mixed',
  biomes: ['grassland', 'forest'],
  timeOfDay: ['day'],
  lighting: ['diffused-sunlight-filtering-through-clouds']
};

export function getAnimalHabitat(animal: string): HabitatInfo {
  const lowercaseAnimal = animal.toLowerCase();
  return animalHabitats[lowercaseAnimal] || defaultHabitat;
}