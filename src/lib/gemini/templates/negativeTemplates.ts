export const negativeTemplates = {
  base: `Given a scene with {subject1} and {subject2} {action}, suggest 5-7 specific negative prompt terms to avoid unrealistic or poor quality animal representations. Focus on anatomical and behavioral accuracy.
Example: "misshapen paws, unrealistic muscle definition, incorrect species coloring, unnatural posture, wrong scale between animals"
Return ONLY the negative prompt terms, separated by commas.`,

  defaultNegatives: [
    "Deformed",
    "malnourished",
    "ugly",
    "cartoonish",
    "pixelated",
    "blurry",
    "anatomically incorrect",
    "gory",
    "text",
    "Missing limbs",
    "extra limbs",
    "fused limbs",
    "malformed features",
    "unnatural colors",
    "unrealistic fur patterns",
    "incorrect anatomy",
    "distorted proportions",
    "3D render",
    "illustration",
    "painting",
    "sketch",
    "low resolution",
    "out of focus",
    "unrealistic lighting"
  ].join(", ")
};