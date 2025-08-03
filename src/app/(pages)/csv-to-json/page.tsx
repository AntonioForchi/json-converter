"use client";

import React from "react";
import { FileText, CircleCheckBig } from "lucide-react";
import { csvToJson } from "@/lib/csvToJson";
import { useState } from "react";
import FileInput from "@/components/fileInput";
import { Bounce, toast } from "react-toastify";

const CsvToJson = () => {
  const [csvInput, setCsvInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [separator, setSeparator] = useState(",");
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setCsvFile(file);
  };

  const readCsvFile = (file: File) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;

      try {
        const json = csvToJson(text, separator);
        setJsonOutput(JSON.stringify(json, null, 2));
      } catch (err) {
        toast.error("Error parsing CSV file. Please check the file format.", {
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

    reader.readAsText(file);
  };

  const handleConvert = () => {
    try {
      if (csvFile && csvInput) {
        toast.error(
          "Please select either a file or paste CSV data, not both.",
          {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          }
        );
        return;
      }

      if (csvFile) {
        readCsvFile(csvFile);
        return;
      }

      if (csvInput) {
        const json = csvToJson(csvInput, separator);
        setJsonOutput(JSON.stringify(json, null, 2));
        return;
      }

      setJsonOutput('');
      toast.error("No input CSV file or data provided.", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Error converting CSV to JSON. Please check your input.", {
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
          CSV to JSON Converter
        </h1>
        <h2 className="mt-8 text-gray-400 font-medium text-lg tablet:text-xl laptopM:text-2xl w-5xs tablet:w-xl laptopM:w-3xl text-center">
          Convert your CSV data to JSON format with ease
        </h2>

        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-8 mt-12 w-full max-w-7xl">
          <div className="w-full h-full bg-white/1 backdrop-blur-xl border transition duration-300 border-white/10 py-4 px-8 rounded-xl shadow-lg shadow-black/60 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-white" />
              <span className="text-2xl font-semibold">CSV Input</span>
            </div>
            <p className="text-gray-400">
              Upload a CSV file or paste your CSV data below
            </p>

            {/* File input */}
            <FileInput onFileChange={handleFileSelect} />

            {/* Separator */}
            <p className="text-white mt-4">Or paste CSV data:</p>
            <select
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value=",">Comma (,)</option>
              <option value=";">Semicolon (;)</option>
              <option value="\t">Tab (\t)</option>
              <option value="|">Pipe (|)</option>
            </select>
            {/* Text Input */}
            <p className="text-white mt-4">Or paste CSV data:</p>
            <textarea
              name=""
              id=""
              value={csvInput}
              onChange={(e) => setCsvInput(e.target.value)}
              placeholder="Paste your CSV data here..."
              className="bg-white/3 backdrop-blur-xl border border-white/10 py-2 px-4 rounded-xl h-52 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            ></textarea>
            {/* Convert Button */}
            <button
              className="w-full my-2 bg-gradient-to-l from-purple-600 via-pink-400 to-purple-600 text-black rounded-lg p-2 flex gap-2 items-center justify-center font-semibold group-button shadow-black/60 shadow-lg hover:shadow-xl"
              onClick={handleConvert}
            >
              Convert to JSON
            </button>
          </div>

          <div className="w-full h-full bg-white/1 backdrop-blur-xl border transition duration-300 border-white/10 py-4 px-8 rounded-xl shadow-lg shadow-black/60 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CircleCheckBig className="w-5 h-5 text-white" />
              <span className="text-2xl font-semibold">JSON Output</span>
            </div>
            <p className="text-gray-400">
              Your converted JSON will appear here
            </p>
            {/* Json Output */}
            <textarea
              name=""
              value={jsonOutput}
              readOnly
              placeholder="Converted JSON will appear here..."
              id=""
              className="bg-white/3 backdrop-blur-xl border py-2 px-4 border-white/10 p-2 rounded-xl h-full my-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CsvToJson;
