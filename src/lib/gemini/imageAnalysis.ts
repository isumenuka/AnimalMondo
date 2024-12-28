import { visionModel } from './client';
import { ImageAnalysis } from '../../types/imageTypes';

export async function analyzeImage(imageUrl: string): Promise<ImageAnalysis> {
  try {
    const [header, base64Data] = imageUrl.split(',');
    const mimeType = header.match(/data:(.*?);/)?.[1];

    const prompt = `Analyze this image and provide:
1. A single atmospheric descriptor (ethereal, intense, mystical, ominous, or primordial)
2. A single scene adjective (misty, sun-drenched, twilight, windswept, or stormy)
3. A lighting description that matches the image's mood and lighting conditions

Format the response exactly as: atmosphere|adjective|lighting`;

    const result = await visionModel.generateContent([
      {
        inlineData: {
          mimeType,
          data: base64Data
        }
      },
      {
        text: prompt
      }
    ]);

    const text = result.response.text().trim();
    const [atmosphere, adjective, lighting] = text.split('|').map(s => s.trim());
    
    return { atmosphere, adjective, lighting };
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw new Error('Failed to analyze image');
  }
}