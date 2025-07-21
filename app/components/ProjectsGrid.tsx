'use client';

import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  const projects = [
    {
      title: 'MavGrades',
      description: 'A platform that helps UTA students view grade distributions by course and professor.',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      codeUrl: 'https://github.com/felixcherian/mavgrades',
      liveUrl: 'https://mavgrades.com'
    },
    {
      title: 'Jurassic Parking',
      description: 'An application using AI object detection to help students, employees, and organizations make smarter, faster decisions.',
      tags: ['React', 'Next.js', 'Tailwind'],
      codeUrl: 'https://github.com/felixcherian/jurassic-parking',
      liveUrl: 'https://jurassic-parking.com'
    },
    {
      title: 'DecorFeva – In Progress',
      description: 'An app uniting clients, decorators, and vendors to streamline wedding décor planning.',
      tags: ['React', 'Next.js', 'Tailwind'],
      // codeUrl: 'https://github.com/felixcherian/decorfeva'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              codeUrl={project.codeUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
