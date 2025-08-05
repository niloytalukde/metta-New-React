import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-slate-50 items-center justify-around w-full py-16 text-sm text-gray-800/70">
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          About
        </Link>
        <Link
          to="/services"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Contact
        </Link>
        <Link
          to="/help"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Help
        </Link>
      </div>

      <div className="flex items-center gap-4 mt-8 text-indigo-500">
        {/** Replace `#` with actual links if needed */}
        {["#", "#", "#", "#", "#"].map((link, index) => (
          <a
            key={index}
            href={link}
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Replace with actual SVG icons or use react-icons */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </a>
        ))}
      </div>

      <p className="mt-8 text-center">
        Copyright © 2025{" "}
        <a
          href="https://prebuiltui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          PrebuiltUI
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
