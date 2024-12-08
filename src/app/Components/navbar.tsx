"use client";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample shopping items for the dropdown
  const shoppingItems = [
    "Plant Pots",
    "Ceramics",
    "Tables",
    "Chairs",
    "Crockery",
    "Cutlery",
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo, Links, and Icons */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-semibold text-gray-800">
            <Link href="/">Avion</Link>
          </h1>

          {/* Toggle Button for Mobile Menu */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-700 absolute left-1/2 transform -translate-x-1/2"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden md:flex space-x-10 text-gray-600 mr-6 ml-auto">
            <Link href="/" className="hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-900 transition">
              About Us
            </Link>
            <Link href="/items" className="hover:text-gray-900 transition">
              New Items
            </Link>
            <Link href="/blog" className="hover:text-gray-900 transition">
              Blog
            </Link>
          </div>

          <div className="flex items-center space-x-6 ml-6">
            {/* Search Icon with Dropdown */}
            <div className="relative">
              <button
                className="text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FiSearch />
              </button>
              {isSearchOpen && (
                <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg w-48 z-40">
                  <ul className="text-gray-700">
                    {shoppingItems.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Shopping Cart Icon with Link and Item Count */}
            <Link href="/cart">
              <button className="relative text-gray-500 hover:text-gray-700 text-xl">
                <FiShoppingCart />
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 inline-block bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </Link>

            {/* Profile Icon */}
            <button className="text-gray-500 hover:text-gray-700 text-xl">
              <CgProfile />
            </button>
          </div>
        </div>

        {/* Line Between Top and Bottom Row */}
        <div className="border-t border-gray-200 w-full"></div>

        {/* Bottom Row: Categories for Larger Screens */}
        <div className="hidden md:flex justify-center space-x-12 text-lg text-gray-600 my-2">
          {[
            "Plant pots",
            "Ceramics",
            "Tables",
            "Chairs",
            "Crockery",
            "Tableware",
            "Cutlery",
          ].map((category, index) => (
            <Link
              key={index}
              href={`/${category.toLowerCase().replace(" ", "-")}`}
              className="hover:text-gray-900 transition"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-4 text-sm text-gray-600 z-30 bg-white shadow-lg">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2 px-6">
              <Link
                href="/"
                className="hover:text-gray-900 transition px-6 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-900 transition px-6 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/items"
                className="hover:text-gray-900 transition px-6 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                New Items
              </Link>
              <Link
                href="/blog"
                className="hover:text-gray-900 transition px-6 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
