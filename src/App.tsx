import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ValueSection } from './components/ValueSection';
import { navItems } from './data';

const observedSectionIds = ['hero', ...navItems.map((item) => item.id)];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6fbff] text-ink">
      <div className="cloud-garden-bg pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="cloud-orb cloud-orb-a" />
        <div className="cloud-orb cloud-orb-b" />
        <div className="cloud-orb cloud-orb-c" />
        <div className="cloud-orb cloud-orb-d" />
        <div className="cloud-noise" />
      </div>

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ValueSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
