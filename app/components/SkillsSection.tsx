'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'HTML/CSS', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'Swift', category: 'Languages' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'Tailwind CSS', category: 'Frameworks' },
  { name: 'Agile', category: 'Developer Tools' },
  { name: 'Jira', category: 'Developer Tools' },
  { name: 'Git', category: 'Developer Tools' },
  { name: 'VS Code', category: 'Developer Tools' },
  { name: 'Figma', category: 'Developer Tools' },
  { name: 'Firebase', category: 'Developer Tools' }
];

const categories = ['Languages', 'Frameworks', 'Developer Tools'];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <h3 className="text-xl font-semibold text-text mb-6 text-center">
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
                      className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                    >
                      <span className="text-sm font-medium text-text">{skill.name}</span>
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