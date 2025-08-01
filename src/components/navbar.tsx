"use client";

import React from "react";
import Link from 'next/link'
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, FileText, Code, Zap } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white/3 backdrop-blur-3xl border-b border-white/20 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-8 laptopM:px-4">
        <Link href="/">
        <h1 className="text-3xl font-semibold bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          ToJson
        </h1>
        </Link>

        <ul className="laptop:flex gap-10 font-semibold hidden ">
          <li>
            <Link href="/" className="hover:text-purple-400">
              Home
            </Link>
          </li>

          <li>
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-purple-400 cursor-pointer">
                <span className="">
                Tools
              </span>
              {isDropdownOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/3 backdrop-blur-3xl border-b border-white/20 text-white shadow-md">
                <DropdownMenuItem className="flex items-center gap-2 hover:text-purple-400 cursor-pointer ">
                  <FileText className="text-white"></FileText>
                  <Link href="/csv-to-json">
                    CSV to JSON
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem className="flex items-center gap-2 hover:text-purple-400 cursor-pointer ">
                  <Code className="text-white"></Code>
                  <Link href="/json-validator">
                    JSON Validator
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem className="flex items-center gap-2 hover:text-purple-400 cursor-pointer ">
                  <Zap className="text-white"></Zap>
                  <Link href="/ai-json-generator">
                    AI JSON Generator
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <Link href="/api-docs" className="hover:text-purple-400">
              Api Docs
            </Link>
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
          <Link
            href="/"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/csv-to-json"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            CSV to JSON
          </Link>
          <Link
            href="/json-validator"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            JSON Validator
          </Link>
          <Link
            href="/ai-json-generator"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Ai JSON Generator
          </Link>
          <Link
            href="/api-docs"
            className="text-white hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            API Docs
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
