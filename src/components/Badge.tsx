type BadgeProps = {
  children: string;
  tone?: 'default' | 'accent';
};

export function Badge({ children, tone = 'default' }: BadgeProps) {
  const palette =
    tone === 'accent'
      ? 'border-teal-200 bg-teal-50 text-teal-700'
      : 'border-slate-200 bg-white/80 text-slate-600';

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-medium ${palette}`}>
      {children}
    </span>
  );
}
