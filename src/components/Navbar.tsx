import { useEffect, useState } from 'react';
import { navItems } from '../data';

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
    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const handleClose = () => setMenuOpen(false);

  const backgroundAlpha = 0.24 + scrollProgress * 0.56;
  const borderAlpha = 0.16 + scrollProgress * 0.54;
  const shadowAlpha = 0.04 + scrollProgress * 0.08;

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-200"
      style={{
        backgroundColor: `rgba(248, 250, 252, ${backgroundAlpha})`,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
        boxShadow: `0 10px 30px -24px rgba(15, 23, 42, ${shadowAlpha})`,
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="text-base font-semibold tracking-[0.18em] text-slate-900">
          Eric Fan 范厚琛
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-white hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/your-github"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white"
          >
            GitHub
          </a>
          <a
            href="#"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="切换导航菜单"
        >
          Menu
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-slate-50/95 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleClose}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    isActive ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href="https://github.com/your-github"
                onClick={handleClose}
                className="rounded-2xl border border-slate-300 px-4 py-3 text-center text-sm font-medium text-slate-700"
              >
                GitHub
              </a>
              <a
                href="#"
                onClick={handleClose}
                className="rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
