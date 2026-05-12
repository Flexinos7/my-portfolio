"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Mercor",
    role: "AI Evaluation Analyst (Contract)",
    dates: "August 2025 – January 2026",
    description:
      "Evaluated and analyzed multimodal AI outputs across image, audio, and video datasets to assess model performance, alignment, and response accuracy against business-defined criteria. Conducted high-volume data annotation and quality assurance workflows supporting AI model optimization and fine-tuning initiatives while communicating actionable insights to cross-functional AI teams.",
  },
  {
    company: "Alpha Events and Decor",
    role: "Event Planner",
    dates: "January 2021 – May 2025",
    description:
      "Led digital transformation initiatives by coordinating development of an online wedding décor portal, collaborating with stakeholders to define business requirements and launch milestones that increased web-based inquiries by 30%. Managed cross-functional coordination across vendors, clients, and operational teams for 450+ events while conducting user feedback analysis to improve customer experience and operational workflows.",
  },
  {
    company: "Association for Computing Machinery",
    role: "Executive Director",
    dates: "January 2024 – May 2026",
    description:
      "Led strategic technology and community initiatives for a 60+ member organization, coordinating collaboration between engineering, design, and operations teams. Directed product planning and UX workflow initiatives using Figma while developing data-driven outreach strategies that generated 8M+ social media impressions and increased engagement across university initiatives.",
  },
  {
    company: "HackUTA",
    role: "Organizer",
    dates: "August 2023 – May 2026",
    description:
      "Supported planning and execution of one of UTA’s largest hackathons by coordinating logistics, participant experiences, and cross-functional event operations. Collaborated with student leaders, sponsors, and volunteers to help deliver a large-scale technology event focused on innovation, collaboration, and hands-on learning.",
  },
];

export default function Experience() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-gray-50" id="experience">
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <div className="w-full max-w-2xl px-4 space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            className="bg-white rounded-xl shadow p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <span className="font-semibold text-green-600">{exp.company}</span>
              <span className="text-gray-500 text-sm">{exp.dates}</span>
            </div>
            <div className="font-medium text-lg mb-2">{exp.role}</div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 