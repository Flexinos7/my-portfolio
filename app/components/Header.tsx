"use client";
import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Header() {
  const [showResume, setShowResume] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-black/20">
      <div className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="font-heading text-xl md:text-2xl font-semibold text-white cursor-pointer transform transition-transform duration-200 hover:scale-105"
          >
            Felix Cherian
          </button>
          {/* Desktop nav links (add your links here) */}
          <div className="hidden md:flex space-x-6">
            {/* Example: <a href="#about" className="text-white">About</a> */}
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open mobile menu">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-center space-y-4 md:hidden z-50">
            {/* Example: <a href="#about" className="text-black text-xl" onClick={() => setMobileMenuOpen(false)}>About</a> */}
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 p-2">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </header>
  );
}