export interface SettingComponents {
  adjective: string;
  landscapeType: string;
  lighting: string;
  elements: string[];
  atmosphere: string;
}

export interface ElementOption {
  value: string;
  label: string;
}

export const settingOptions = {
  adjectives: [
    { value: 'misty', label: 'Misty' },
    { value: 'sun-drenched', label: 'Sun-drenched' },
    { value: 'twilight', label: 'Twilight' },
    { value: 'windswept', label: 'Windswept' },
    { value: 'stormy', label: 'Stormy' }
  ],
  landscapeTypes: [
    { value: 'cloud-forest', label: 'Cloud Forest' },
    { value: 'tundra', label: 'Tundra' },
    { value: 'steppe', label: 'Steppe' },
    { value: 'grassland', label: 'Grassland' },
    { value: 'glacier', label: 'Glacier' },
    { value: 'badlands', label: 'Badlands' },
    { value: 'downland', label: 'Downland' },
    { value: 'karst', label: 'Karst' },
    { value: 'savanna', label: 'Savanna' },
    { value: 'desert', label: 'Desert' },
    { value: 'jungle', label: 'Jungle' }
  ],
  lighting: [
    { value: 'diffused-sunlight-filtering-through-clouds', label: 'Diffused Sunlight Through Clouds' },
    { value: 'dramatic-crepuscular-rays', label: 'Dramatic Crepuscular Rays' },
    { value: 'soft-ambient-twilight-glow', label: 'Soft Ambient Twilight Glow' },
    { value: 'swirling-storm-clouds', label: 'Swirling Storm Clouds' },
    { value: 'golden-rays-piercing-through', label: 'Golden Rays Piercing Through' }
  ],
  atmospheres: [
    { value: 'ethereal', label: 'Ethereal' },
    { value: 'intense', label: 'Intense' },
    { value: 'mystical', label: 'Mystical' },
    { value: 'ominous', label: 'Ominous' },
    { value: 'primordial', label: 'Primordial' }
  ]
};