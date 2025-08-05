import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
      <Link to="/">
        {/* Logo */}
        <svg
          width="157"
          height="40"
          viewBox="0 0 157 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Use your actual logo or SVG here */}
          <text x="0" y="25" fill="white" fontSize="20">
            MyLogo
          </text>
        </svg>
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

      <button
        type="button"
        className="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      {/* Mobile Menu Button */}
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
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            <li>
              <Link to="/" className="text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-sm">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-sm">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-sm">
                Pricing
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="bg-white text-gray-700 mt-6 text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
