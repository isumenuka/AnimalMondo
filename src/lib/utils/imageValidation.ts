export const IMAGE_SIZE_LIMIT = 10 * 1024 * 1024; // 10MB
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

export function validateImageFile(file: File): { isValid: boolean; error?: string } {
  if (!file) {
    return { isValid: false, error: 'No file provided' };
  }

  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    return { 
      isValid: false, 
      error: 'Please upload a valid image file (JPG, PNG, or GIF)' 
    };
  }

  if (file.size > IMAGE_SIZE_LIMIT) {
    return { 
      isValid: false, 
      error: 'Image size must be less than 10MB' 
    };
  }

  return { isValid: true };
}

export function isValidBase64Image(header: string, base64Data: string): boolean {
  if (!header || !base64Data) {
    return false;
  }

  const mimeTypeMatch = header.match(/^data:image\/(jpeg|png|gif);base64$/);
  if (!mimeTypeMatch) {
    return false;
  }

  try {
    return btoa(atob(base64Data)) === base64Data;
  } catch {
    return false;
  }
}