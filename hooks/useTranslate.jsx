import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Make sure to have the correct API key in the .env file
const apiKey = process.env.GEMINI_API_KEY || 'your_api_key';

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleTranslate = async () => {
      // Ensure the API key is valid before proceeding
      if (!apiKey) {
        console.error("API key is missing.");
        return;
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
      });
      
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      // Starting the chat session
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [{ text: `Translate this sentence to ${selectedLanguage}: ${sourceText}` }],
          },
        ],
      });

      setIsLoading(true);

      try {
        const result = await chatSession.sendMessage(""); 
        const translatedText = await result.response.text(); 
        setTargetText(translatedText);
      } catch (error) {
        console.error("Error during translation:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate();
      }, 500); 

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return { targetText, isLoading };
};

export default useTranslate;
