"use client";

import React from "react";
import { useState } from "react";
import { FileText, Upload, X } from "lucide-react";

interface FileInputProps {
  onFileChange: (file: File | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const [csvFile, setCsvFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "text/csv") {
      setCsvFile(file);
    } else {
      console.error("File non valido.");
    }
  };

  const updateFile = (file: File | null) => {
    setCsvFile(file);
    onFileChange(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "text/csv") {
      updateFile(file);
    } else {
      console.error("File non valido.");
    }
  };

  const removeFileSelection = () => {
    updateFile(null);
  };

  return (
    <>
      <div
        className={`w-full h-52 mt-2 gap-2 border-2 border-gray-400 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-500 ${
          csvFile
            ? "border-green-500 hover:border-green-400"
            : "hover:border-purple-400"
        }  transition-colors`}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => e.preventDefault()}
      >
        {!csvFile ? (
          <Upload className="w-10 h-10 text-gray-400"></Upload>
        ) : (
          <FileText className="w-10 h-10 text-green-400"></FileText>
        )}
        <p className="text-gray-400">
          {!csvFile ? "Drop you CSV file here or" : csvFile.name}
        </p>
        {csvFile ? (
          <X
            className="w-5 h-5 text-red-400 mt-2"
            onClick={removeFileSelection}
          ></X>
        ) : (
          <label className="border p-2 rounded-lg border-gray-400 hover:bg-white/5 transition-colors text-white cursor-pointer mt-2">
            Choose File
            <input
              type="file"
              accept=".csv"
              onChange={handleFileInput}
              className="hidden"
            />
          </label>
        )}
      </div>
    </>
  );
};

export default FileInput;
