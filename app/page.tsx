// app/page.tsx
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import SideNav from './components/SideNav';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsGrid />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <SideNav />
    </main>
  );
}
