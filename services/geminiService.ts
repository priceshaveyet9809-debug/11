
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  async askAssistant(question: string): Promise<string> {
    try {
      // Must use a named parameter and process.env.API_KEY directly as per developer rules
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert Luxury Real Estate Media Strategist at "PREES Media". 
        A potential client is asking: "${question}". 
        Answer professionally in English, focusing on cinematic 4K video, 3D tracking, and sound design. 
        Be sophisticated, concise, and persuasive.`,
      });
      // response.text is a property getter, not a method
      return response.text || "I'm sorry, I couldn't process your request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Something went wrong. Please try again soon!";
    }
  }
}

export const geminiService = new GeminiService();
