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
    <div className="min-h-screen bg-slate-50 text-ink">
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100vh+80px)] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_#bfdcff_0%,_#b8f0ed_26%,_#ddf6f5_52%,_#f8fafc_100%)]" />
          <div className="absolute left-0 top-0 h-[30rem] w-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(129,140,248,0.32),_transparent_68%)]" />
          <div className="absolute right-0 top-0 h-[28rem] w-[38rem] bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.36),_transparent_62%)]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,_rgba(255,255,255,0.28),_rgba(255,255,255,0))]" />
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
