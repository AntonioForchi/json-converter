"use client";

import React from "react";
import { useState } from "react";
import { Zap, Stars } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const AiJsonGenerator = () => {
  const [inputPromt, setInputPromt] = useState("");
  const [generatedJson, setGeneratedJson] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  const ai = new GoogleGenAI({ apiKey });

  const handleGenerateJson = async () => {
    setLoading(true);
    setError("");
    setGeneratedJson("");

    const fullPrompt = `
      You are a JSON formatter. Rules:
      1. Receive an instruction and respond ONLY with valid JSON.
      2. No explanation, only the JSON object.
      User prompt: ${inputPromt}
    `;

    try {
      async function main() {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: fullPrompt,
        });
        console.log(response.text);
        setGeneratedJson(response.text || "");
      }

      await main();

    } catch (err: any) {
      setError(err.message || "Errore sconosciuto");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen text-white px-8 mb-4">
        <h1 className="text-4xl text-center tablet:text-5xl laptopM:text-6xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          AI JSON Generator
        </h1>
        <h2 className="mt-8 text-gray-400 font-medium text-lg tablet:text-xl laptopM:text-2xl w-5xs tablet:w-xl laptopM:w-3xl text-center">
          Generate complex JSON structures using natural language prompts
        </h2>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 mt-12 w-full max-w-7xl">
          <div className="w-full h-full bg-white/1 backdrop-blur-xl border transition duration-300 border-white/10 py-4 px-8 rounded-xl shadow-lg shadow-black/60 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Stars className="w-5 h-5 text-white" />
              <span className="text-2xl font-semibold">Prompt Input</span>
            </div>
            <p className="text-gray-400">
              Describe the JSON structure you want to generate
            </p>
            <p className="mt-4 text-white">Enter your prompt:</p>
            <textarea
              name=""
              id=""
              value={inputPromt}
              onChange={(e) => setInputPromt(e.target.value)}
              placeholder="Generate a list of user with name, email, age and address information"
              className="bg-white/3 backdrop-blur-xl border border-white/10 py-2 px-4 rounded-xl h-96"
            ></textarea>
            <button
              onClick={handleGenerateJson}
              className="w-full my-2 bg-gradient-to-l from-purple-600 via-pink-400 to-purple-600 text-black rounded-lg p-2 flex gap-2 items-center justify-center font-semibold group-button shadow-black/60 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5"></Zap>
              Generate JSON
            </button>
          </div>

          <div className="w-full h-full bg-white/1 backdrop-blur-xl border transition duration-300 border-white/10 py-4 px-8 rounded-xl shadow-lg shadow-black/60 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-2xl font-semibold">Generated JSON</span>
            </div>
            <p className="text-gray-400">
              Your AI-generated JSON will appear here
            </p>

            <textarea
              name=""
              id=""
              value={generatedJson}
              readOnly
              className="bg-white/3 backdrop-blur-xl border border-white/10 py-2 px-4 rounded-xl h-full my-2"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiJsonGenerator;
