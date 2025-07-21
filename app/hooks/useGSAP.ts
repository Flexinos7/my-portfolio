"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAP() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".gsap-section");
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Hero headline stagger
    gsap.from(".gsap-hero-title .char", {
      opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);
} 