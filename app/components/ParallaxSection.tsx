"use client";
import { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // default 0.3
}

export default function ParallaxSection({ children, speed = 0.3 }: ParallaxSectionProps) {
  const { scrollY } = useScroll();
  // map scroll position to translateY
  const y = useTransform(scrollY, [0, 1000], [0, -100 * speed]);
  return (
    <motion.div style={{ y }} className="relative overflow-hidden">
      {children}
    </motion.div>
  );
} 