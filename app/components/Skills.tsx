"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Product Strategy", level: 90 },
  { name: "Figma", level: 100 },
  { name: "Agile", level: 70 },
  { name: "SQL", level: 75 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 100 },
  { name: "Next.js", level: 100 },
  { name: "Git", level: 80 },
  { name: "AI/ML fundamentals", level: 70 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.3,
      },
    }),
  };

  return (
    <section className="w-full flex flex-col items-center py-20 bg-gray-50" id="skills">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-2xl px-4 space-y-8"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <div className="flex justify-between mb-3">
              <motion.span 
                className="text-gray-700 font-medium text-lg"
                whileHover={{ color: "#059669" }}
                transition={{ duration: 0.2 }}
              >
                {skill.name}
              </motion.span>
              <motion.span 
                className="text-gray-500 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full relative"
                variants={progressVariants}
                custom={skill.level}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1 + index * 0.1,
                  }}
                />
              </motion.div>
            </div>
            
            {/* Skill badge */}
            <motion.div
              className="absolute -right-2 -top-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
            >
              {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Intermediate" : "Beginner"}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills summary */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-gray-600 text-lg">
          Continuously learning and expanding my skill set to deliver exceptional products
        </p>
      </motion.div>
    </section>
  );
} 