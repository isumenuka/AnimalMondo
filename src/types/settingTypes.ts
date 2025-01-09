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
    // Original options
    { value: 'diffused-sunlight', label: 'Diffused Sunlight Through Clouds' },
    { value: 'dramatic-crepuscular', label: 'Dramatic Crepuscular Rays' },
    { value: 'soft-ambient', label: 'Soft Ambient Twilight Glow' },
    { value: 'storm-clouds', label: 'Swirling Storm Clouds' },
    { value: 'golden-rays', label: 'Golden Rays Piercing Through' },
    // Additional lighting options
    { value: 'moonlit-night', label: 'Moonlit Night' },
    { value: 'dawn-mist', label: 'Dawn Mist with First Light' },
    { value: 'dusk-shadows', label: 'Long Dusk Shadows' },
    { value: 'overcast-diffused', label: 'Overcast Diffused Light' },
    { value: 'dramatic-backlight', label: 'Dramatic Backlight' },
    { value: 'rim-lighting', label: 'Natural Rim Lighting' },
    { value: 'foggy-rays', label: 'Foggy Light Rays' },
    { value: 'starlit-night', label: 'Starlit Night Sky' },
    { value: 'rainbow-light', label: 'Post-Storm Rainbow Light' },
    { value: 'aurora-glow', label: 'Aurora Borealis Glow' }
  ],
  atmospheres: [
    // Original options
    { value: 'ethereal', label: 'Ethereal' },
    { value: 'intense', label: 'Intense' },
    { value: 'mystical', label: 'Mystical' },
    { value: 'ominous', label: 'Ominous' },
    { value: 'primordial', label: 'Primordial' },
    // Additional atmosphere options
    { value: 'serene', label: 'Serene' },
    { value: 'dramatic', label: 'Dramatic' },
    { value: 'mysterious', label: 'Mysterious' },
    { value: 'tranquil', label: 'Tranquil' },
    { value: 'foreboding', label: 'Foreboding' },
    { value: 'majestic', label: 'Majestic' },
    { value: 'haunting', label: 'Haunting' },
    { value: 'enchanted', label: 'Enchanted' },
    { value: 'savage', label: 'Savage' },
    { value: 'peaceful', label: 'Peaceful' }
  ]
};