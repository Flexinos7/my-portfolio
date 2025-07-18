"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-white" id="education">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl px-4 text-center"
      >
        <div className="text-lg font-medium mb-2">University of Texas at Arlington</div>
        <div className="text-gray-700">B.S. Computer Information Systems</div>
      </motion.div>
    </section>
  );
}
