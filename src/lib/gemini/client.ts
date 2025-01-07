import { GoogleGenerativeAI } from '@google/generative-ai';

// Use the environment variable for the API key
export const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
export const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
export const visionModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-002' });