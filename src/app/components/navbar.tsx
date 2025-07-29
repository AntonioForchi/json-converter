"use client";

import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white/3 backdrop-blur-3xl border-b border-white/20 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-8 laptopM:px-4">
        <h1 className="text-3xl font-semibold bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          ToJson
        </h1>

        <ul className="laptop:flex gap-12 font-semibold hidden ">
          <li>
            <a className="hover:text-purple-400" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-purple-400" href="/about">Tools</a>
          </li>
          <li>
            <a className="hover:text-purple-400" href="/about">Api Docs</a>
          </li>
        </ul>

        <div className="laptop:hidden">
          <button
            className="p-2 rounded-md hover:bg-white/10 transition duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-br from-gray-950 to-gray-900 border-b border-white/20 px-4 py-6 flex flex-col gap-4 laptop:hidden z-50 text-center">
          <a
            href="#home"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#tools"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Tools
          </a>
          <a
            href="#docs"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            API Docs
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
