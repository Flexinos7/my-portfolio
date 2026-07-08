'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Information Systems Analyst',
    company: 'Lockheed Martin',
    period: 'Start Date Pending',
    description:
      'Accepted offer to work as an Information Systems Analyst supporting technical publications authoring tools within Lockheed Martin Aeronautics. I help troubleshoot system issues, maintain tool functionality, support documentation workflows, and communicate with technical and non-technical teams to ensure reliable information systems operations in a mission-driven aerospace and defense environment.',
    skills: ['Technical Documentation', 'SQL', 'XML', 'Tableau', 'Java', 'C#',],
  },
  {
    title: 'AI Evaluation Analyst (Contract)',
    company: 'Mercor',
    period: 'Aug 2025 – Jan 2026',
    description:
      'Evaluated and analyzed multimodal AI outputs across image, audio, and video datasets to assess model performance, alignment, and response accuracy against business-defined criteria while supporting AI model optimization initiatives.',
    skills: ['AI Evaluation', 'Data Analysis', 'Quality Assurance', 'Cross-Functional Collaboration'],
  },
  {
    title: 'Business Systems Analyst',
    company: 'Alpha Events & Decor',
    period: 'Jan 2023 – August 2026',
    description:
      'Led digital transformation initiatives by coordinating development of an online wedding décor portal, collaborating with stakeholders to define business requirements and improve operational workflows across 450+ events.',
    skills: ['Project Management', 'Stakeholder Communication', 'Process Improvement', 'Operations'],
  },
  {
    title: 'Organizer',
    company: 'HackUTA',
    period: 'Aug 2025 – May 2026',
    description:
      'Supported planning and execution of large-scale hackathons by coordinating logistics, participant experiences, and collaborative event operations focused on innovation and student engagement.',
    skills: ['Event Planning', 'Team Collaboration', 'Operations', 'Student Engagement'],
  },
  {
    title: 'Executive Director',
    company: 'Association for Computing Machinery (ACM)',
    period: 'Jan 2024 – May 2026',
    description:
      'Led strategic technology and community initiatives by coordinating collaboration between engineering, design, and operations teams while driving engagement through data-driven outreach strategies.',
    skills: ['Leadership', 'Product Strategy', 'Community Building', 'Cross-Functional Collaboration'],
  },
  
];


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
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
                  <motion.div
                    className="max-w-[350px] w-full p-6 bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full">
                        <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white">{experience.title}</h3>
                        <span className="text-sm sm:text-base text-gray-400 mt-1 sm:mt-0">{experience.period}</span>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-white mb-1 break-words whitespace-normal">{experience.company}</p>
                    <p className="text-white break-words whitespace-normal leading-relaxed">{experience.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-gray-500/50 text-blue-400 px-4 py-1 font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 