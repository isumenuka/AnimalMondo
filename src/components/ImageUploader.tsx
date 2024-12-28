import React, { useCallback, useState } from 'react';
import { Upload, Loader2, X } from 'lucide-react';
import { analyzeImage } from '../lib/gemini/imageAnalysis';
import { validateImageFile } from '../lib/utils/imageValidation';
import { readFileAsDataURL } from '../lib/utils/fileReader';
import { ImageAnalysis } from '../types/imageTypes';

interface ImageUploaderProps {
  onImageAnalyzed: (analysis: ImageAnalysis) => void;
}

export function ImageUploader({ onImageAnalyzed }: ImageUploaderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError(null);

    try {
      // Validate file
      const validation = validateImageFile(file);
      if (!validation.isValid) {
        throw new Error(validation.error);
      }

      // Read and show preview
      const imageUrl = await readFileAsDataURL(file);
      setPreview(imageUrl);

      // Analyze image
      const analysis = await analyzeImage(imageUrl);
      onImageAnalyzed(analysis);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to process image';
      console.error('Image processing error:', message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [onImageAnalyzed]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file) {
      const input = document.createElement('input');
      input.files = e.dataTransfer.files;
      handleImageUpload({ target: input } as any);
    }
  }, [handleImageUpload]);

  const clearImage = () => {
    setPreview(null);
    setError(null);
  };

  return (
    <div className="mt-4 space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        AI will analyze the scene and suggest appropriate settings
      </label>
      
      <div
        className={`relative flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-colors ${
          isLoading ? 'border-purple-300 bg-purple-50' : 'border-gray-300 hover:border-purple-500'
        }`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {preview ? (
          <div className="relative w-full">
            <button
              onClick={clearImage}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
              title="Remove image"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
            <img
              src={preview}
              alt="Preview"
              className="max-h-48 mx-auto object-contain rounded-md"
            />
          </div>
        ) : (
          <div className="space-y-2 text-center">
            {isLoading ? (
              <Loader2 className="mx-auto h-12 w-12 text-purple-500 animate-spin" />
            ) : (
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
            )}
            
            <div className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer rounded-md font-medium text-purple-600 hover:text-purple-500">
                <span>{isLoading ? 'Analyzing...' : 'Upload a reference image'}</span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isLoading}
                />
              </label>
            </div>
            
            <p className="text-xs text-gray-500">
              Drop your image here or click to upload
              <br />
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}
    </div>
  );
}