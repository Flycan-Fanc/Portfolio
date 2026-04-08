type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  theme?: 'light' | 'dark';
};

export function SectionTitle({ eyebrow, title, description, theme = 'light' }: SectionTitleProps) {
  const eyebrowClass = theme === 'dark' ? 'text-teal-300' : 'text-teal-700';
  const titleClass = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const descriptionClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="max-w-2xl">
      <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 ${descriptionClass}`}>{description}</p>
    </div>
  );
}
