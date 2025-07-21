"use client";
// app/page.tsx
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ParallaxSection from './components/ParallaxSection';
import { useGSAP } from './hooks/useGSAP';

export default function Home() {
  useGSAP();
  return (
    <main>
      <section id="hero" className="gsap-section"><ParallaxSection speed={0.2}><Hero /></ParallaxSection></section>
      <section id="about" className="gsap-section"><ParallaxSection speed={0.4}><AboutSection /></ParallaxSection></section>
      <section id="skills" className="gsap-section"><ParallaxSection speed={0.3}><SkillsSection /></ParallaxSection></section>
      <section id="projects" className="gsap-section"><ParallaxSection speed={0.35}><ProjectsGrid /></ParallaxSection></section>
      <section id="experience" className="gsap-section"><ParallaxSection speed={0.4}><ExperienceSection /></ParallaxSection></section>
      <section id="education" className="gsap-section"><ParallaxSection speed={0.45}><EducationSection /></ParallaxSection></section>
      <section id="contact" className="gsap-section"><ParallaxSection speed={0.5}><ContactSection /></ParallaxSection></section>
    </main>
  );
}
