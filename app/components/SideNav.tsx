"use client";
import { useState } from "react";
import { sections } from "../data/sections";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function SideNav() {
  const activeSection = useScrollSpy(sections.map(s => s.id), { rootMargin: "-50% 0px -50% 0px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <div
            key={section.id}
            className="relative group flex items-center"
          >
            {/* Dot */}
            <button
              className={`w-4 h-4 rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                ${isActive ? "bg-blue-600 border-blue-600 scale-110" : "bg-gray-300 border-gray-400 group-hover:bg-gray-400"}
              `}
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              aria-label={`Scroll to ${section.label} section`}
              onMouseEnter={() => setHovered(section.id)}
              onMouseLeave={() => setHovered(null)}
              tabIndex={0}
            />
            {/* Sliding Label */}
            <div
              className={`pointer-events-none absolute right-full mr-2
                opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                transition-all duration-200
                bg-white/30 backdrop-blur-md border border-white/50
                rounded-full px-3 py-1 text-sm text-black
                ${isActive || hovered === section.id ? "opacity-100 translate-x-0" : ""}
              `}
            >
              {section.label}
            </div>
          </div>
        );
      })}
    </nav>
  );
} 