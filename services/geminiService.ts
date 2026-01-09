import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are a professional senior hair stylist at "WHO LOOK", a premium salon in Seongsu-dong, Seoul. 
Your name is "AI Stylist".
Your tone is trendy, polite, and professional, targeting fashion-conscious people in their 20s and 30s.
You specialize in suggesting hairstyles based on face shape, hair texture, and desired vibe.
Briefly explain why a style suits the user.
Mention our signature styles: "Layered Cut" and "Hippie Perm" if they fit the user's request.
Keep responses concise (under 300 characters mostly) and encouraging.
Language: Korean (primary) or English (if user speaks English).
`;

export const getStyleConsultation = async (userInput: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "죄송합니다. 현재 스타일 추천 서비스를 이용할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};