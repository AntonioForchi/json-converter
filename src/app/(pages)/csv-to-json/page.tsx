import React from "react";
import { FileText, CircleCheckBig, Upload } from "lucide-react";

const CsvToJson = () => {
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
            <div className="w-full h-52 mt-2 gap-2 border-2 border-gray-400 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-purple-400 transition-colors">
              <Upload className="w-10 h-10 text-gray-400"></Upload>
              <p className="text-gray-400">Drop you CSV file here or</p>
              <button className="border p-2 rounded-lg border-gray-400 hover:bg-white/5 transition-colors text-white flex items-center gap-2 mt-2">
                <span>Choose File</span>
              </button>
            </div>
            <p className="text-white mt-4">Or paste CSV data:</p>
            <textarea
              name=""
              id=""
              placeholder="Paste your CSV data here..."
              className="bg-white/3 backdrop-blur-xl border border-white/10 py-2 px-4 rounded-xl h-52"
            ></textarea>
            <button className="w-full my-2 bg-gradient-to-l from-purple-600 via-pink-400 to-purple-600 text-black rounded-lg p-2 flex gap-2 items-center justify-center font-semibold group-button shadow-black/60 shadow-lg hover:shadow-xl">
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
            <textarea
              name=""
              placeholder="Converted JSON will appear here..."
              id=""
              className="bg-white/3 backdrop-blur-xl border py-2 px-4 border-white/10 p-2 rounded-xl h-full my-2"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CsvToJson;
