import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-white/5 backdrop-blur-3xl border-b border-white/20 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <h1 className="text-3xl font-semibold bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
          ToJson
        </h1>

        <ul className="flex gap-12 font-semibold">
          <li>
            <a className="" href="/">Home</a>
          </li>
          <li>
            <a href="/about">Tools</a>
          </li>
          <li>
            <a href="/about">Api Docs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
