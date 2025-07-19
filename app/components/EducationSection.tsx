'use client';

import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Science in Information Systems',
    school: 'University of Texas at Arlington',
    period: 'Expected May 2026',
    gpa: '3.0/4.0',
    description: 'Focus on Product Management, Software Development, and Business Technology integration. Active in student organizations and hackathons.',
    achievements: ['Dean\'s List', 'ACM Executive Director', 'HackUTA Organizer']
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            <span className="text-primary">Education</span> & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-text mb-2">{item.degree}</h3>
                  <p className="text-lg text-primary font-medium">{item.school}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-gray-600">{item.period}</p>
                  <p className="text-lg font-semibold text-primary">{item.gpa} GPA</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold text-text mb-3">Key Achievements</h4>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <motion.span
                      key={achievement}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + achievementIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {achievement}
                    </motion.span>
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