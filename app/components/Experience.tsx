"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Alpha Events and Decor",
    role: "Wedding Decorator Lead, Website Developer",
    dates: "May 2021 – Present",
    points: [
      "Planned roadmap aligning teams, boosting inquiries by 30%.",
      "Managed 500+ events, delivering 100% on-time, on-budget.",
      "Developed and deployed a full-featured wedding decor site"
    ],
  },
  {
    company: "ACM at UTA",
    role: "Executive Director",
    dates: "Aug 2023 – Present",
    points: [
      "Led ACM Create product strategy, reducing prototyping time 50%.",
      "Managed 10-person agile team, improving velocity and sprint accuracy",
      "Created viral Instagram content, generating 6M+ views and engagement.",
    ],
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