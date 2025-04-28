"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Explicitly typed

  // Close hamburger jika klik di luar menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/">My Profile</a>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none">
            {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Menu */}
        <div
          ref={menuRef} // Attach the ref to the menu div
          className={`background-nav bg-primary flex-col md:flex md:flex-row md:items-center md:space-x-6 md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:px-0 px-6 transition-all duration-700 ease-in-out z-50 ${
            isOpen ? "top-16 left-0 " : "top-[-490px]"
          }`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 text-gray-400 font-semibold">
            <li className="py-2 md:py-0">
              <Link
                href="#home"
                className="hover:text-gray-400 block transition-all duration-400 ease-in-out">
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="#about"
                className="hover:text-gray-400 block transition-all duration-400 ease-in-out">
                About
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="#projects"
                className="hover:text-gray-400 block transition-all duration-400 ease-in-out">
                Projects
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="#contact"
                className="hover:text-gray-400 block transition-all duration-400 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>

          {/* Sosmed Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0 md:ml-6">
            <Link
              href="https://github.com/CokdePutra"
              className="transition duration-300 ease-in text-white rounded-[50px] p-[8px] hover:bg-primary hover:scale-120 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillGithub size="2rem" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="transition duration-300 ease-in text-white rounded-[50px] p-[8px] hover:bg-primary hover:scale-120 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillLinkedin size="2rem" />
            </Link>
            <Link
              href="https://www.instagram.com/cokde_putraws"
              className="transition duration-300 ease-in text-white rounded-[50px] p-[8px] hover:bg-primary hover:scale-120 hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillInstagram size="2rem" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
