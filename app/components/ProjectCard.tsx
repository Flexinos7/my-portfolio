'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  codeUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  codeUrl,
  liveUrl
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <h3 className="text-2xl font-semibold mb-2 text-text">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm mr-2 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-4 py-2 rounded-lg font-medium text-sm transition-colors hover:bg-primary/10"
          >
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors hover:bg-primary/90"
          >
            View
          </a>
        )}
      </div>
    </motion.div>
  );
}
