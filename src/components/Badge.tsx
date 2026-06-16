type BadgeProps = {
  children: string;
  tone?: 'default' | 'accent' | 'brand' | 'warm';
};

export function Badge({ children, tone = 'default' }: BadgeProps) {
  const palettes = {
    default: 'border-white/75 bg-white/60 text-slate-600 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.45)] backdrop-blur-xl',
    accent: 'border-teal-200/80 bg-[linear-gradient(135deg,_rgba(240,253,250,0.86),_rgba(236,254,255,0.78))] text-teal-700 shadow-[0_12px_30px_-26px_rgba(20,184,166,0.5)]',
    brand: 'border-cyan-200/80 bg-[linear-gradient(135deg,_rgba(236,254,255,0.9),_rgba(238,242,255,0.76),_rgba(240,253,244,0.86))] text-cyan-800 shadow-[0_12px_32px_-25px_rgba(14,165,233,0.58)]',
    warm: 'border-amber-200/80 bg-[linear-gradient(135deg,_rgba(255,251,235,0.9),_rgba(236,254,255,0.7))] text-amber-700 shadow-[0_12px_30px_-26px_rgba(245,158,11,0.45)]',
  } as const;

  return (
    <span className={`inline-flex rounded-full border px-3 py-1.5 text-sm font-medium ${palettes[tone]}`}>
      {children}
    </span>
  );
}
