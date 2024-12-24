import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { analyzeImage } from '../lib/gemini/imageAnalysis';
import { ImageAnalysis } from '../types/imageTypes';

interface ImageUploaderProps {
  onImageAnalyzed: (analysis: ImageAnalysis) => void;
}

export function ImageUploader({ onImageAnalyzed }: ImageUploaderProps) {
  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageUrl = reader.result as string;
        const analysis = await analyzeImage(imageUrl);
        onImageAnalyzed(analysis);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }, [onImageAnalyzed]);

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Upload an image for setting suggestions
      </label>
      <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-purple-500 transition-colors">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500">
              <span>Upload a file</span>
              <input
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}