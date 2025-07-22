"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="w-full py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={textVariants} className="space-y-6">
            {/* Subtitle Link */}
            <motion.a
              href="#about"
              className="inline-block text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.a>

            {/* Main Heading */}
            <motion.h2 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={textVariants}
            >
              Empowering Product Innovation
            </motion.h2>

            {/* Body Text */}
            <motion.p 
              className="font-body text-lg md:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              I&apos;m Felix Cherian, a passionate student and aspiring Product Manager who thrives at the intersection of technology, design, and business. I love creating thoughtful digital products that solve real problems and make a meaningful impact on users&apos; lives.
            </motion.p>

            <motion.p 
              className="font-body text-lg md:text-xl text-gray-600 leading-relaxed"
              variants={textVariants}
            >
              With a background in Computer Information Systems and experience in AI/ML, I bring a unique blend of technical expertise and user-centered thinking to every project I work on.
            </motion.p>
          </motion.div>

          {/* Right Column - Photo Card */}
          <motion.div 
            variants={photoVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Photo Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Felix Cherian"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover"
                  onLoad={() => console.log('Image loaded successfully')}
                  onError={(e) => {
                    console.log('Image failed to load, using placeholder');
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='24' fill='%236b7280'%3EAdd your photo%3C/text%3E%3Ctext x='50%25' y='60%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='16' fill='%239ca3af'%3Epublic/profile.jpg%3C/text%3E%3C/svg%3E";
                  }}
                />
                
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-300 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 