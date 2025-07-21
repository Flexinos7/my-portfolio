"use client";
import React from "react";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center">
      <div className="relative w-[90vw] h-[90vh] max-w-3xl max-h-[90vh] bg-[#2c2c2c] rounded-xl shadow-xl flex flex-col justify-center items-center mt-24">
        {/* Controls overlay */}
        <div className="absolute top-4 right-4 flex space-x-3 z-10">
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-3 bg-white rounded-full shadow border border-gray-200 hover:bg-blue-50 hover:scale-110 transition-transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <a
            href="/resume.pdf"
            download
            aria-label="Download"
            className="p-3 bg-white rounded-full shadow border border-gray-200 hover:bg-blue-50 hover:scale-110 transition-transform duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16l-4-4m4 4l4-4m-4 4V4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16" />
            </svg>
          </a>
        </div>
        {/* embedded PDF */}
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0"
          className="aspect-[8.5/11] w-full max-w-2xl max-h-[80vh] rounded-xl mx-auto"
          title="Resume PDF"
        />
      </div>
    </div>
  );
} 