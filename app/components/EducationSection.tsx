'use client';

import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Science in Computer Information Systems',
    school: 'University of Texas at Arlington',
    period: 'Expected May 2026',
    gpa: '3.0/4.0',
    description: 'Focus on Product Management, Software Development, and Business Technology integration. Active in student organizations and hackathons.',
    achievements: ['Dean\'s List', 'ACM Executive Director', 'HackUTA Organizer']
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Education & Achievements
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            A strong academic foundation combined with hands-on experience and leadership roles.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-black/30 rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300 text-white"
            >
              <h3 className="text-lg sm:text-xl font-semibold leading-snug">{item.degree}</h3>
              <p className="text-sm sm:text-base text-gray-300 mt-1">{item.period}</p>
              <p className="text-lg text-white font-medium mb-2">{item.school}</p>
              
              <p className="text-white mb-6 leading-relaxed">{item.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="rounded-full bg-gray-500/50 text-blue-400 px-4 py-1 font-semibold"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 