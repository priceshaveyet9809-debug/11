import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  // Guidelines: API key must be obtained exclusively from process.env.API_KEY.
  // We initialize the GoogleGenAI instance right before the call.
  async askAssistant(question: string): Promise<string> {
    try {
      // Guideline: Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an expert Luxury Real Estate Media Strategist at "PREES Media". 
        A potential client (Real Estate Agent, Broker, or Developer) is asking: "${question}". 
        Answer professionally in English, focusing on how PREES can elevate their property value through cinematic 4K HDR video, 3D tracking, bespoke sound design, and social media growth strategies. 
        Use a sophisticated, modern, and high-energy tone suitable for the USA luxury market. Be concise and persuasive.`,
      });
      // response.text is a property, not a method
      return response.text || "I'm sorry, I couldn't process your request at this moment.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "Our creative team is currently polishing a masterpiece. Please try again in a moment!";
    }
  }
}

export const geminiService = new GeminiService();
