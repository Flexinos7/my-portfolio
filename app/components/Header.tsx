"use client";
import React from "react";

import Link from 'next/link';

export default function Header() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Name as Home Button */}
          <button 
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="font-heading text-xl md:text-2xl font-semibold text-text cursor-pointer transform transition-transform duration-200 hover:scale-105"
          >
            Felix Cherian
          </button>

          {/* Resume Button */}
          <Link
            href="/resume"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium"
          >
            My Resume
          </Link>
        </div>
      </div>
    </header>
  );
}