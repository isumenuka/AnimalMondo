import { lightingToElements, atmosphereToElements } from './elementMappings';

export function getSuggestedElements(lighting: string, atmosphere: string): string[] {
  // Get elements that match both lighting and atmosphere
  const lightingElements = lightingToElements[lighting as keyof typeof lightingToElements] || [];
  const atmosphereElements = atmosphereToElements[atmosphere as keyof typeof atmosphereToElements] || [];
  
  // Find common elements between lighting and atmosphere
  const commonElements = lightingElements.filter(element => 
    atmosphereElements.includes(element)
  );
  
  // Always return exactly 2-3 elements
  const targetCount = 2 + Math.floor(Math.random() * 2); // Returns either 2 or 3
  
  if (commonElements.length >= targetCount) {
    // If we have enough common elements, randomly select from them
    return shuffleArray(commonElements).slice(0, targetCount);
  }
  
  // If we don't have enough common elements, combine unique elements from both sets
  const allElements = [...new Set([...lightingElements, ...atmosphereElements])];
  return shuffleArray(allElements).slice(0, targetCount);
}

// Fisher-Yates shuffle algorithm for better randomization
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}