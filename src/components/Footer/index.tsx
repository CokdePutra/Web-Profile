import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;