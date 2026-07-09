'use client';

import { motion, type Variants } from 'framer-motion';

const skills = [
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'Swift', category: 'Languages' },
  { name: 'HTML/CSS', category: 'Languages' },
  { name: 'C/C++', category: 'Languages' },

  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'Next.js', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },
  { name: 'Node.js', category: 'Frameworks & Libraries' },
  { name: 'Flutter', category: 'Frameworks & Libraries' },
  { name: 'REST APIs', category: 'Frameworks & Libraries' },

  { name: 'MySQL', category: 'Databases & Cloud' },
  { name: 'SQLite', category: 'Databases & Cloud' },
  { name: 'Firebase', category: 'Databases & Cloud' },
  { name: 'Vercel', category: 'Databases & Cloud' },

  { name: 'Agile Methodologies', category: 'Business & Analytical Tools' },
  { name: 'Jira', category: 'Business & Analytical Tools' },
  { name: 'Figma', category: 'Business & Analytical Tools' },
  { name: 'Data Analysis', category: 'Business & Analytical Tools' },
  { name: 'User Research', category: 'Business & Analytical Tools' },
  { name: 'Process Mapping', category: 'Business & Analytical Tools' },

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

const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };
  
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Skills & Expertise
          </h2>

          <p className="text-lg text-white max-w-2xl mx-auto">
            A diverse skill set combining technical development, product
            management, and user-centered design principles.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {categories.map((category) => (
            <motion.div key={category} variants={fadeUp}>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="bg-white/20 border border-white/30 px-4 py-2 rounded-full shadow-sm transition-transform duration-200 hover:-translate-y-1"
                    >
                      <span className="text-sm font-medium text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}