'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Building Digital Experiences
            </h2>
            <div className="prose prose-lg text-white space-y-4">
              <p>
                I'm a passionate aspiring Product Manager with a strong foundation in technology and user experience. 
                My journey in the tech world has been driven by a desire to create meaningful solutions that address 
                real user needs.
              </p>
              <p>
                With experience in both development and product thinking, I bridge the gap between technical 
                implementation and user-centered design. I believe that the best products are built when we 
                deeply understand the problems we're solving and the people we're solving them for.
              </p>
              <p>
                When I'm not working on projects, you can find me exploring new technologies, reading about 
                product strategy, or collaborating with other developers and designers to bring innovative 
                ideas to life.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: 'spring' }}
              viewport={{ once: true }}
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1, 0.95, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="w-80 h-80 rounded-lg shadow-xl overflow-hidden relative z-10 transition-transform duration-300">
                <img
                  src="/profile.jpg"
                  alt="Felix Cherian"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 