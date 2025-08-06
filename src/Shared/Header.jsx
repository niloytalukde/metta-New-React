import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all shadow-md">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Metta Dhamma Logo" className="h-16" />
      </Link>

      {/* Desktop Menu */}
      <ul className="text-white md:flex hidden items-center gap-10">
        <li>
          <Link className="hover:text-white/70 transition" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/70 transition" to="/blogs">
            Blogs
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/70 transition" to="/news">
            News
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/70 transition" to="/about-us">
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-white/70 transition" to="/contact-us">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <button
        type="button"
        className="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get Started
      </button>

      {/* Mobile Menu Toggle */}
      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#fff"
          viewBox="0 0 30 30"
        >
          <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden z-40">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li>
              <Link
                to="/"
                className="text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="bg-white text-gray-700 mt-6 text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
