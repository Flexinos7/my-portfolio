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
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 120, damping: 15 }}
      className="bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-black/30 rounded-3xl shadow-2xl p-8 relative overflow-hidden"
    >
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-500/50 text-blue-400 px-4 py-1 font-semibold"
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
            className="bg-black/60 backdrop-blur text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors border border-white/20 hover:bg-black/80"
          >
            Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-lg font-medium text-sm transition-colors hover:bg-gray-100"
          >
            View
          </a>
        )}
      </div>
    </motion.div>
  );
}
