"use client";

import { useAuth } from "context/AuthContext";
import Link from "next/link";
import { useState } from "react";

export default function NavbarComponent() {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-green-600 text-white px-4 py-3 flex justify-between items-center">
      {/* Brand */}
      <div className="text-2xl font-bold">
        <Link href="/" onClick={handleLinkClick}>
          Recycling APP
        </Link>
      </div>

      {/* Hamburger Menu (for smaller screens) */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18M3 12h18m-9 6h9"
            />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`absolute md:relative top-14 left-0 md:top-0 md:left-0 w-full md:w-auto bg-green-600 md:bg-transparent flex flex-col md:flex-row items-center gap-4 md:gap-6 md:static transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        {!isLoggedIn ? (
          <>
            <Link
              href="/"
              className="hover:underline text-lg px-4 py-2"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:underline text-lg px-4 py-2"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              href="/events_"
              className="hover:underline text-lg px-4 py-2"
              onClick={handleLinkClick}
            >
              Events
            </Link>
            <Link
              href="/auth/register"
              className="hover:underline text-lg px-4 py-2"
              onClick={handleLinkClick}
            >
              Register
            </Link>
            <Link
              href="/auth/login"
              className="hover:underline text-lg px-4 py-2"
              onClick={handleLinkClick}
            >
              Login
            </Link>
          </>
        ) : null}
      </div>
    </nav>
  );
}
