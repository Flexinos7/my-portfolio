"use client";
import { motion } from "framer-motion";

export default function Blob() {
  return (
    <motion.div
      initial={{ scale: 1, x: -100, y: -100 }}
      animate={{
        scale: [1, 1.1, 1],
        x: [-100, 0, -50],
        y: [-100, 0, -80],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0 bg-gradient-to-tr from-green-200 via-green-400 to-blue-300 opacity-30 rounded-full filter blur-3xl pointer-events-none"
    />
  );
} 