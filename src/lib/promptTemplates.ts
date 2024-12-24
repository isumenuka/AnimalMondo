// Templates for generating sub-prompts
export const templates = {
  cameraAngle: `Suggest an appropriate camera angle for a scene with {subject1} and {subject2} {action}.
Consider these options:
- Low angle (for power/dominance)
- Eye-level (for neutral/documentary)
- Slightly high angle (for vulnerability/overview)
Focus on photorealistic imagery. Return ONLY the camera angle description, nothing else.`,

  setting: `Suggest an appropriate setting for a scene with {subject1} and {subject2} {action}.
Focus on creating a realistic and atmospheric environment that complements the subjects and action.
Return ONLY the setting description, nothing else.`,

  colors: `Suggest appropriate colors for a scene with {subject1} and {subject2} {action} in a {setting}.
Consider:
- Color palette (warm/cool tones)
- Lighting effects
- Mood and atmosphere
Focus on photorealistic colors. Return ONLY the color scheme description, nothing else.`,

  style: `Suggest an appropriate photorealistic style for a scene with {subject1} and {subject2} {action}.
Consider:
- Photorealism
- Cinematic quality
- Lighting and contrast
- Natural elements
Focus on creating a professional look. Return ONLY the style description, nothing else.`
};