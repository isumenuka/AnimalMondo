export const generatePresetPrompts = () => {
  const prompts = [
    {
      subject1: "lion",
      subject2: "tiger",
      action: "facing each other in an intense standoff",
      angle: "from a low, dramatic angle with extreme close-up on their faces",
      setting: "ancient stone ruins covered in vines",
      colors: "golden hour lighting with warm oranges and deep shadows",
      style: "cinematic photorealistic style with sharp detail and dramatic lighting"
    },
    {
      subject1: "grizzly bear",
      subject2: "wolf pack alpha",
      action: "with the bear rising to full height against the wolf",
      angle: "from a low angle close-up emphasizing the bear's massive size",
      setting: "misty mountain forest clearing at dawn",
      colors: "cool blues and greens with morning mist diffusing the light",
      style: "naturalistic photorealistic style with atmospheric depth"
    },
    {
      subject1: "rhinoceros",
      subject2: "elephant",
      action: "in a tense confrontation at a waterhole",
      angle: "from a low, ground-level perspective with close focus on their massive forms",
      setting: "drought-stricken African savanna",
      colors: "harsh sunlight with dusty earth tones and stark shadows",
      style: "high contrast photorealistic style with textural detail"
    }
  ];

  return prompts.map(p => 
    `${p.subject1} and ${p.subject2}, ${p.action}, ${p.angle}, in a ${p.setting}, using ${p.colors}, with ${p.style}, photorealistic.`
  );
};