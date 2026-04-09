export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 lg:px-8">
      <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Flycan Fanc</p>
        <p>Built with React + TypeScript + Tailwind CSS</p>
        <div className="flex gap-4">
          <a href="https://github.com/Flycan-Fanc" className="hover:text-slate-900">
            GitHub
          </a>
          <a href="mailto:ericfanwork@163.com" className="hover:text-slate-900">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
