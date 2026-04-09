import { Badge } from "./Badge";

type ProjectCardProps = {
  name: string;
  status: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: Array<{ label: string; href: string; placeholder?: boolean }>;
  imgs?: string;
};

export function ProjectCard({ name, status, summary, highlights, tech, links, imgs }: ProjectCardProps) {
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
              {link.placeholder ? " · 待替换" : ""}
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(160deg,_rgba(15,118,110,0.12),_rgba(255,255,255,1)_55%,_rgba(15,76,129,0.08))] p-6">
        <div className="flex h-full min-h-64 flex-col justify-between rounded-[24px] border border-white/80 bg-white/70 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-teal-700">Project Snapshot</p>
            <p className="mt-4 text-xl font-medium text-slate-900">{name}</p>
          </div>
          {/* <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-2xl bg-white px-4 py-3">
              真实项目持续迭代，而不是一次性展示稿。
            </div>
            <div className="rounded-2xl bg-white px-4 py-3">
              同时关注产品思路、交互链路和工程结构。
            </div>
            <div className="rounded-2xl bg-white px-4 py-3">
              预留截图或 Demo 资源位，后续可直接补齐。
            </div>
          </div> */}
          <img src={imgs}></img>
        </div>
      </div>
    </article>
  );
}
