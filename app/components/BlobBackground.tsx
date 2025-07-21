"use client";
import { motion } from "framer-motion";

const blobs = [
  { size: 200, top: 50, left: 30, delay: 0 },
  { size: 300, top: 100, left: 200, delay: 2 },
  { size: 180, top: 220, left: 120, delay: 1 },
  { size: 250, top: 40, left: 400, delay: 3 },
  { size: 160, top: 180, left: 350, delay: 1.5 },
];

export default function BlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {blobs.map(({ size, top, left, delay }, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30 dark:bg-primary/20"
          style={{ width: size, height: size, top, left }}
          animate={{ y: [0, -20, 0], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
} 