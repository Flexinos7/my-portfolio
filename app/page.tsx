// app/page.tsx
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";
import AboutSection from "./components/AboutSection";
import SideNav from "./components/SideNav";

export default function HomePage() {
  return (
    <main className="relative bg-white">
      {/* Side navigation */}
      <SideNav />

      {/* Hero section */}
      <section className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <ProjectsGrid />
      </section>

      {/* About Me */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <AboutSection />
      </section>
    </main>
  );
}
