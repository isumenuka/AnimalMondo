import { GoogleGenerativeAI } from '@google/generative-ai';

export const genAI = new GoogleGenerativeAI('AIzaSyC_eWaEBXhkTxykQrF7pasV4R-z-zR-uU0');
export const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
export const visionModel = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-002' });