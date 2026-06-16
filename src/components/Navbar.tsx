import { useEffect, useState } from "react";
import { navItems } from "../data";
import { handleResumeDownload } from "../utils";

type NavbarProps = {
  activeSection: string;
};

const NAVBAR_FADE_DISTANCE = 360;

export function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const nextProgress = Math.min(window.scrollY / NAVBAR_FADE_DISTANCE, 1);
      setScrollProgress(nextProgress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const handleClose = () => setMenuOpen(false);

  const backgroundAlpha = 0.38 + scrollProgress * 0.44;
  const borderAlpha = 0.24 + scrollProgress * 0.42;
  const shadowAlpha = 0.05 + scrollProgress * 0.1;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-2xl transition-[background-color,border-color,box-shadow] duration-300"
      style={{
        backgroundColor: `rgba(246, 251, 255, ${backgroundAlpha})`,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
        boxShadow: `0 18px 45px -34px rgba(15, 23, 42, ${shadowAlpha})`,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="group inline-flex items-center gap-3 text-base font-semibold tracking-[0.08em] text-slate-900">
          <span className="relative h-9 w-9 rounded-2xl border border-white/80 bg-[linear-gradient(135deg,_rgba(34,211,238,0.85),_rgba(20,184,166,0.85),_rgba(190,242,100,0.7))] shadow-[0_14px_32px_-18px_rgba(20,184,166,0.8)]">
            <span className="absolute left-2 top-2 h-2.5 w-2.5 rounded-full bg-white/80" />
            <span className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full bg-white/45 backdrop-blur" />
          </span>
          <span>Eric Fan 范厚琳</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a key={item.id} href={`#${item.id}`} className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${isActive ? "bg-white/75 text-teal-700 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.45)]" : "text-slate-600 hover:bg-white/65 hover:text-slate-900"}`}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="https://github.com/Flycan-Fanc" className="rounded-full border border-white/75 bg-white/45 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_30px_-26px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/80">
            GitHub
          </a>
          <button type="button" onClick={handleResumeDownload} className="rounded-full bg-[linear-gradient(135deg,_#0891b2,_#14b8a6)] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_36px_-20px_rgba(20,184,166,0.75)] transition duration-300 hover:-translate-y-0.5">
            Resume
          </button>
        </div>

        <button type="button" className="inline-flex rounded-full border border-white/80 bg-white/50 px-3 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_28px_-24px_rgba(15,23,42,0.45)] md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="切换导航菜单">
          Menu
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/70 bg-[#f6fbff]/90 px-6 py-4 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a key={item.id} href={`#${item.id}`} onClick={handleClose} className={`rounded-2xl px-4 py-3 text-sm font-medium ${isActive ? "bg-white text-teal-700" : "bg-white/60 text-slate-700"}`}>
                  {item.label}
                </a>
              );
            })}

            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="https://github.com/Flycan-Fanc" onClick={handleClose} className="rounded-2xl border border-white/80 bg-white/55 px-4 py-3 text-center text-sm font-semibold text-slate-700">
                GitHub
              </a>
              <button
                onClick={() => {
                  handleResumeDownload();
                  handleClose();
                }}
                className="rounded-2xl bg-[linear-gradient(135deg,_#0891b2,_#14b8a6)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
