import { lightingToElements, atmosphereToElements } from './elementMappings';

export function getSuggestedElements(lighting: string, atmosphere: string): string[] {
  // Get elements that match both lighting and atmosphere
  const lightingElements = lightingToElements[lighting as keyof typeof lightingToElements] || [];
  const atmosphereElements = atmosphereToElements[atmosphere as keyof typeof atmosphereToElements] || [];
  
  // Find common elements that work well with both conditions
  const commonElements = lightingElements.filter(element => 
    atmosphereElements.includes(element)
  );
  
  // If we have enough common elements, use those
  if (commonElements.length >= 3) {
    return commonElements.slice(0, 4);
  }
  
  // Otherwise, combine unique elements from both sets
  const uniqueElements = Array.from(new Set([...lightingElements, ...atmosphereElements]));
  return uniqueElements.slice(0, 4);
}