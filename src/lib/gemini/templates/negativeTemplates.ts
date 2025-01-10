export const negativeTemplates = {
  base: `Given a scene with {subject1} and {subject2} {action}, suggest 8-10 specific negative prompt terms to avoid unrealistic or poor quality animal representations. Focus on anatomical accuracy, natural behaviors, and photorealistic quality.
Example: "incorrect muscle anatomy, unnatural eye placement, wrong scale ratio between animals, unrealistic fur texture, anatomically incorrect paws, misaligned joints, disproportionate body parts, incorrect species markings"
Return ONLY the negative prompt terms, separated by commas.`,

  defaultNegatives: [
    // Anatomical Issues
    "deformed anatomy",
    "incorrect muscle structure",
    "misshapen limbs",
    "wrong skeletal proportions",
    "unrealistic joints",
    "malformed paws",
    "incorrect facial features",
    "wrong body proportions",
    "anatomically incorrect teeth",
    "unrealistic bone structure",
    
    // Texture and Detail Issues
    "blurry fur texture",
    "incorrect fur patterns",
    "unrealistic skin texture",
    "wrong scale textures",
    "poor feather detail",
    "unnatural hide texture",
    "incorrect surface details",
    
    // Color and Lighting Issues
    "oversaturated colors",
    "unrealistic lighting",
    "wrong color patterns",
    "incorrect species coloring",
    "unnatural shadows",
    "incorrect ambient occlusion",
    "wrong subsurface scattering",
    
    // Composition Issues
    "wrong scale between animals",
    "incorrect environmental scale",
    "unrealistic perspective",
    "bad composition",
    "poor depth perception",
    "incorrect spatial relationships",
    
    // Quality Issues
    "low resolution",
    "pixelated",
    "jpeg artifacts",
    "poor detail",
    "blurry",
    "out of focus",
    "noisy image",
    "overexposed",
    "underexposed",
    
    // Style Issues
    "cartoon style",
    "anime style",
    "illustration style",
    "3d render look",
    "painting style",
    "sketch style",
    "digital art look",
    
    // Behavioral Issues
    "unnatural pose",
    "incorrect behavioral pose",
    "wrong species interaction",
    "unrealistic motion",
    "impossible body position",
    
    // Technical Issues
    "watermark",
    "text",
    "signature",
    "frame border",
    "color noise",
    "chromatic aberration",
    "lens distortion",
    
    // Specific Animal Issues
    "wrong muscle definition",
    "incorrect predator features",
    "unrealistic claw detail",
    "wrong fang structure",
    "incorrect eye placement",
    "wrong ear shape",
    "unrealistic tail position",
    "incorrect muzzle shape"
  ].join(", ")
};