"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-bold">
          <a href="/">MyPortfolio</a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {/* Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Close icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu */}
        <ul className={`flex-col md:flex md:flex-row md:space-x-6 md:static absolute bg-primary w-full left-0 md:w-auto md:py-0 py-4 md:px-0 px-6 transition-all duration-300 ease-in ${isOpen ? "top-16" : "top-[-490px]"}`}>
          <li className="py-2 md:py-0">
            <a href="#home" className="hover:text-gray-400 block">
              Home
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#about" className="hover:text-gray-400 block">
              About
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#projects" className="hover:text-gray-400 block">
              Projects
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#contact" className="hover:text-gray-400 block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
