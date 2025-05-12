import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-4 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center md:text-left gap-6">
        {/* Copyright */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">MyPortfolio</span>. All rights
            reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0 md:ml-6 ">
          <Link
            href="https://github.com/CokdePutra"
            className="transition duration-300 ease-in dark:text-white rounded-[50px] p-[8px] hover:bg-primary hover:scale-120 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillGithub size="2rem" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cokorda-gde-putra-widnyana-surya-648696276"
            className="transition duration-300 ease-in dark:text-white rounded-[50px] p-[8px] hover:bg-primary hover:scale-120 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillLinkedin size="2rem" />
          </Link>
          <Link
            href="https://www.instagram.com/cokde_putraws"
            className="transition duration-300 ease-in dark:text-white rounded-[50px] p-[8px] hover:bg-primary hover:scale-120 hover:cursor-pointer"
            target="_blank"
            rel="noopener noreferrer">
            <AiFillInstagram size="2rem" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
