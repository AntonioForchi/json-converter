"use client";

import React from "react";
import { useState } from "react";
import { Code, AlertCircle, CircleCheckBig, Copy } from "lucide-react";
import { formatJSON, isValidJSON } from "@/lib/jsonValidate";
import { Bounce, toast } from "react-toastify";

const JsonValidator = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [validationResult, setValidationResult] = useState(false);
  const [formattedJson, setFormattedJson] = useState("");
  const [validationStarted, setValidationStarted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleValidate = () => {
    try { 
      if (!jsonInput) {
        setFormattedJson('');
        setValidationStarted(false);
        setValidationResult(false);

        toast.error("Please enter valid JSON data", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        return;
      }

      setValidationStarted(true);

      if (isValidJSON(jsonInput).valid) {
        setValidationResult(true);
        const formatted = formatJSON(jsonInput);
        setFormattedJson(formatted);
      }else{
        setValidationResult(false);
        setErrorMessage(isValidJSON(jsonInput).error || "");
        setFormattedJson('');
      }

    } catch (error) {
      toast.error("Invalid JSON format. Please check your input", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen text-white px-8 mb-4">
        <h1 className="text-4xl text-center tablet:text-5xl laptopM:text-6xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          JSON Validator
        </h1>
        <h2 className="mt-8 text-gray-400 font-medium text-lg tablet:text-xl laptopM:text-2xl w-5xs tablet:w-xl laptopM:w-3xl text-center">
          Validate and format your JSON with detailed error reporting
        </h2>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 mt-12 w-full max-w-7xl">
          <div className="w-full h-full bg-white/1 backdrop-blur-xl border transition duration-300 border-white/10 py-4 px-8 rounded-xl shadow-lg shadow-black/60 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-white" />
              <span className="text-2xl font-semibold">JSON Input</span>
            </div>
            <p className="text-gray-400">
              Paste your JSON data below to validate and format
            </p>
            <textarea
              name=""
              id=""
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder='{"name": "John Doe", "email": "john@example.com", "age": 30}'
              className="bg-white/3 backdrop-blur-xl border border-white/10 py-2 px-4 rounded-xl h-96"
            ></textarea>
            <button
              onClick={handleValidate}
              className="w-full my-2 bg-gradient-to-l from-purple-600 via-pink-400 to-purple-600 text-black rounded-lg p-2 flex gap-2 items-center justify-center font-semibold group-button shadow-black/60 shadow-lg hover:shadow-xl"
            >
              Validate JSON
            </button>
          </div>

          <div className="w-full h-full bg-white/1 backdrop-blur-xl border transition duration-300 border-white/10 py-4 px-8 rounded-xl shadow-lg shadow-black/60 flex flex-col gap-2 relative">
            <div className="hidden absolute top-4 right-4 laptop:top-6 laptop:right-6 z-10 border p-2 rounded-lg bg-white/1 backdrop-blur-xl hover:bg-white/10 transition duration-300 cursor-pointer">
              <Copy className="w-5 h-5 text-white/60 hover:text-white" />
            </div>

            <div className="flex items-center gap-2">
              {validationResult ? (
                <CircleCheckBig className="w-5 h-5 text-green-400" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400" />
              )}
              <span className="text-2xl font-semibold">Validation Result</span>
            </div>
            <p className="text-gray-400 mb-4">
              Validation status and formatted output
            </p>

            <div className={`${validationStarted ? "" : "hidden"}`}>
              <div
                className={`w-full h-12 flex gap-2 items-center border ${
                  validationResult
                    ? "border-green-400 bg-green-400/20"
                    : "border-red-400 bg-red-400/20"
                } rounded-lg p-4`}
              >
                {validationResult ? (
                  <CircleCheckBig className="w-5 h-5 text-green-400" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-400" />
                )}
                <p
                  className={` ${
                    validationResult ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {validationResult
                    ? "Valid JSON! Your JSON has been formatted below."
                    : `Invalid JSON format. ${errorMessage}`}
                </p>
              </div>
              <div className={`${validationResult ? "" : "hidden"}`}>
                <p className="text-gray-400 my-2">Formatted JSON:</p>
                <textarea
                  name=""
                  id=""
                  readOnly
                  value={formattedJson}
                  className="bg-white/3 backdrop-blur-xl border border-white/10 py-2 px-4 rounded-xl max-h-82 h-82 w-full"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JsonValidator;
