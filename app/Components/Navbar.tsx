"use client";
import { Sparkles, Menu, X, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CareerAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link
                href="/#features"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Features
              </Link>
              <Link
                href="/#how"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                How it Works
              </Link>
              <Link
                href="/#testimonials"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
              >
                Testimonials
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-5 space-y-4">
            <Link
              href="/#features"
              className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#how"
              className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="/#testimonials"
              className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                href="/login"
                className="block w-full text-center py-3 text-gray-700 hover:text-indigo-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;