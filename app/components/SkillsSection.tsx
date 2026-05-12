'use client';

import { motion } from 'framer-motion';

const skills = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'Swift', category: 'Languages' },
  { name: 'HTML/CSS', category: 'Languages' },
  { name: 'C/C++', category: 'Languages' },

  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'Next.js', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },
  { name: 'Node.js', category: 'Frameworks & Libraries' },
  { name: 'Flutter', category: 'Frameworks & Libraries' },
  { name: 'REST APIs', category: 'Frameworks & Libraries' },

  // Databases & Cloud
  { name: 'MySQL', category: 'Databases & Cloud' },
  { name: 'SQLite', category: 'Databases & Cloud' },
  { name: 'Firebase', category: 'Databases & Cloud' },
  { name: 'Vercel', category: 'Databases & Cloud' },

  // Business & Analytical Tools
  { name: 'Agile Methodologies', category: 'Business & Analytical Tools' },
  { name: 'Jira', category: 'Business & Analytical Tools' },
  { name: 'Figma', category: 'Business & Analytical Tools' },
  { name: 'Data Analysis', category: 'Business & Analytical Tools' },
  { name: 'User Research', category: 'Business & Analytical Tools' },
  { name: 'Process Mapping', category: 'Business & Analytical Tools' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'Visual Studio Code', category: 'Tools' },
];

const categories = [
  'Languages',
  'Frameworks & Libraries',
  'Databases & Cloud',
  'Business & Analytical Tools',
  'Tools',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            A diverse skill set combining technical development, product management, and user-centered design principles.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05, ease: "easeOut" }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-black/30 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 