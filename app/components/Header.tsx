"use client";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="font-heading text-xl md:text-2xl font-semibold text-text">
            Felix Cherian
          </span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium"
          >
            My Resume
          </a>
        </div>
      </div>
    </header>
  );
}