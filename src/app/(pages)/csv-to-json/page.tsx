import React from "react";

const CsvToJson = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-screen text-white px-8">
        <h1 className="text-4xl text-center tablet:text-5xl laptopM:text-6xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          CSV to JSON Converter
        </h1>
        <h2 className="mt-8 text-gray-400 font-medium text-lg tablet:text-xl laptopM:text-2xl w-5xs tablet:w-xl laptopM:w-3xl text-center">
          Convert your CSV data to JSON format with ease
        </h2>

        <div className="grid grid-cols-2 gap-8 mt-12 max-w-7xl">
          <div className="w-full h-full bg-white/2 backdrop-blur-xl border transition duration-300 border-white/10 p-8 rounded-xl shadow-lg shadow-black/60 hover:scale-105 group hover:shadow-xl flex items-center justify-center">

          </div>
          <div className="w-full h-full bg-white/2 backdrop-blur-xl border transition duration-300 border-white/10 p-8 rounded-xl shadow-lg shadow-black/60 hover:scale-105 group hover:shadow-xl flex items-center justify-center">

          </div>
        </div>
      </div>
    </>
  );
};

export default CsvToJson;
