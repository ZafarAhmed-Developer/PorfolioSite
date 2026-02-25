import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <a
          href="#home"
          className="block py-2 hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="block py-2 hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className="block py-2 hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#resume"
          className="block py-2 hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Resume
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="block py-2 hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="block py-2 hover:text-blue-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#home">Portfolio</a>
        </div>

        <ul className="hidden md:flex space-x-6">{navLinks}</ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`
          md:hidden bg-gray-800 absolute w-full
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"}
        `}
      >
        <ul className="px-6 pb-4 flex flex-col space-y-2">{navLinks}</ul>
      </div>
    </header>
  );
}
