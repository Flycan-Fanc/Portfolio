import { Badge } from "./Badge";

type ProjectCardProps = {
  name: string;
  status: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: Array<{ label: string; href: string; placeholder?: boolean }>;
  imgs?: string;
  progress?: Array<{ name: string; content: string }>;
};

export function ProjectCard({ name, status, summary, highlights, tech, links, imgs, progress }: ProjectCardProps) {
  const hasImage = Boolean(imgs);
  const hasProgress = Boolean(progress?.length);
  const panelLabel = hasImage ? "项目预览" : hasProgress ? "项目进展" : "项目概览";

  return (
    <article className="grid gap-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold text-slate-900">{name}</h3>
          <Badge tone="accent">{status}</Badge>
        </div>
        <p className="mt-5 text-base leading-7 text-slate-600">{summary}</p>

        <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-teal-500" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
              {link.label}
              {link.placeholder ? " 待替换" : ""}
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(160deg,_rgba(15,118,110,0.12),_rgba(255,255,255,1)_55%,_rgba(15,76,129,0.08))] p-6">
        <div className="flex h-full min-h-[20rem] flex-col rounded-[24px] border border-white/80 bg-white/70 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-teal-700">{panelLabel}</p>
            <p className="mt-4 text-xl font-medium text-slate-900">{name}</p>
          </div>

          {hasImage ? (
            <div className="flex flex-1 items-center justify-center py-2">
              <img src={imgs} alt={`${name} project preview`} className="max-h-[15rem] w-full rounded-2xl object-contain shadow-[0_18px_40px_rgba(15,23,42,0.12)]" />
            </div>
          ) : null}

          {hasProgress ? (
            <div className="mt-6 flex flex-1 flex-col justify-center">
              <div className="space-y-3">
                {progress?.map((progress) => (
                  <div key={progress.name} className="rounded-2xl border border-teal-100 bg-white/90 px-4 py-4 shadow-[0_12px_32px_rgba(15,118,110,0.08)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">{progress.name}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{progress.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
