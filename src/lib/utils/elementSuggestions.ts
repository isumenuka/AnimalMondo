import { lightingToElements, atmosphereToElements, getElementsForAnimal } from './elementMappings';

export function getSuggestedElements(
  lighting: string,
  atmosphere: string,
  subject1?: string,
  subject2?: string
): string[] {
  // Get elements based on animals
  const animal1Elements = subject1 ? getElementsForAnimal(subject1) : [];
  const animal2Elements = subject2 ? getElementsForAnimal(subject2) : [];
  
  // Get elements that match lighting and atmosphere
  const lightingElements = lightingToElements[lighting as keyof typeof lightingToElements] || [];
  const atmosphereElements = atmosphereToElements[atmosphere as keyof typeof atmosphereToElements] || [];
  
  // Combine all relevant elements
  const allRelevantElements = [
    ...new Set([
      ...animal1Elements,
      ...animal2Elements,
      ...lightingElements,
      ...atmosphereElements
    ])
  ];
  
  // Select 2-3 elements that best match the scene
  const targetCount = 2 + Math.floor(Math.random() * 2); // Returns either 2 or 3
  return shuffleArray(allRelevantElements).slice(0, targetCount);
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}