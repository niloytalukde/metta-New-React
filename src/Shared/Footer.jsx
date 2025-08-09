import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/Facebook.png";
import youtube from "../assets/Youtube.png";
import instagram from "../assets/Insttagram.png";
const logo = [facebook, youtube, instagram];

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
          to="/Blogs"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Blogs
        </Link>
        <Link
          to="/News"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          News
        </Link>
        <Link
          to="/contact"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="font-medium text-gray-500 hover:text-black transition-all"
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4 mt-8 text-indigo-500">
        {/** Replace `#` with actual links if needed */}
        {logo.map((link, index) => (
          <a
            key={index}
            href={link}
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <img src={link} alt="icon" width={24} height={24} />
          </a>
        ))}
      </div>

      <p className="mt-8 text-center">
        © 2025{" "}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Metta Dhamma
        </a>
        . All rights reserved. Designed by{" "}
        <a
          href="https://makeupcoders.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          makeupcoders
        </a>
      </p>
    </footer>
  );
};

export default Footer;
