'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Product Manager',
    company: 'MavGrades.com',
    period: 'Jul 2024 - Present',
    description: 'Leading product development for a platform that helps UTA students view grade distributions by course and professor.',
    skills: ['Product Strategy', 'User Research', 'Data Analysis', 'Agile Development']
  },
  {
    title: 'Wedding Decorator Lead',
    company: 'Alpha Events & Decor',
    period: 'May 2021 - Present',
    description: 'Managed wedding decoration projects, coordinated with clients and vendors, and ensured successful event execution.',
    skills: ['Project Management', 'Client Relations', 'Vendor Coordination', 'Event Planning']
  },
  {
    title: 'Executive Director',
    company: 'Association of Computing Machinery (ACM)',
    period: 'Jan 2024 - Present',
    description: 'Leading the creative technology community at UTA, organizing events and fostering innovation.',
    skills: ['Leadership', 'Event Organization', 'Community Building', 'Technology']
  },
  {
    title: 'Organizer',
    company: 'HackUTA',
    period: 'Jan 2024 - Present',
    description: 'Organizing hackathons and coding events to promote innovation and collaboration among students.',
    skills: ['Event Planning', 'Student Engagement', 'Technical Events', 'Collaboration']
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse journey combining product management, event coordination, and community leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2 md:transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md md:left-1/2 md:transform md:-translate-x-2"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-text">{experience.title}</h3>
                      <span className="text-sm text-primary font-medium">{experience.period}</span>
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-2">{experience.company}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 