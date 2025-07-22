"use client";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";

const projects = [
  {
    name: "MavGrades",
    description: "A platform that helps UTA students view grade distributions by course and professor.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/acmuta/mavgrades",
    live: "https://mavgrades.com",
  },
  {
    name: "Jurassic Parking",
    description: "An application using AI object detection to help make smarter, faster parking decisions.",
    tech: ["React", "Next.js", "Tailwind"],
    github: "https://github.com/charlesroy7/RowdyHacks",
    live: "https://devpost.com/software/jurassic-parking",
  },
  {
    name: "DecorFeva - In Progress",
    description: "An app uniting clients, decorators, and vendors to streamline wedding décor planning.",
    tech: ["React", "Next.js", "Tailwind"],
    github: null,
    live: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="w-full flex flex-col items-center py-20 bg-white" id="projects">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
          >
            {/* Card content */}
            <div className="p-8">
              <motion.h3 
                className="text-2xl font-bold mb-3 text-gray-800"
                whileHover={{ color: "#059669" }}
                transition={{ duration: 0.2 }}
              >
                {project.name}
              </motion.h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#dcfce7",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Hover overlay with buttons */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={16} />
                    Code
                  </motion.a>
                )}
                
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </motion.div>
        ))}
      </motion.div>


    </section>
  );
} 