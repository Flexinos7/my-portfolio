'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About Me' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'experience', name: 'Experience' },
  { id: 'education', name: 'Education' },
  { id: 'contact', name: 'Contact' }
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is 50% visible
        threshold: 0.1
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            whileHover={{ scale: 1.2 }}
            className="relative flex items-center"
          >
            <button
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-primary scale-110'
                  : 'bg-gray-300 hover:bg-primary'
              }`}
              aria-label={section.name}
            />
            <AnimatePresence>
              {hoveredSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="absolute right-6 px-3 py-1 rounded-full bg-white shadow-lg border border-gray-200 text-text whitespace-nowrap"
                  style={{ pointerEvents: 'none' }}
                >
                  <span className="text-sm font-medium">{section.name}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </nav>
  );
} 