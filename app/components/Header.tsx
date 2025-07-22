"use client";
import React, { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Header() {
  const [showResume, setShowResume] = useState(false);

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
          <button
            onClick={() => setShowResume(true)}
            className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md"
          >
            My Resume
          </button>
        </div>
      </div>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </header>
  );
}