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
  const isAiSkill = name === "Flycan PPT Skill" || name === "Game UI Auto Composer Skill";
  const panelLabel = hasImage ? "项目预览" : hasProgress ? "项目进展" : "项目概览";
  const statusTone = isAiSkill ? "brand" : status === "In Progress" ? "warm" : "accent";
  const theme =
    name === "AI PDF 助手"
      ? {
          band: "from-sky-300 via-cyan-200 to-indigo-200",
          glow: "rgba(14,165,233,0.18)",
          dot: "bg-sky-500",
          tag: "border-sky-100 bg-sky-50/80 text-sky-800",
          panel: "from-sky-200/32 via-white/82 to-indigo-100/40",
        }
      : name === "EffiDock"
        ? {
            band: "from-teal-300 via-cyan-200 to-amber-200",
            glow: "rgba(20,184,166,0.18)",
            dot: "bg-teal-500",
            tag: "border-teal-100 bg-teal-50/80 text-teal-800",
            panel: "from-teal-200/30 via-white/82 to-amber-100/44",
          }
        : name === "Flycan PPT Skill"
          ? {
              band: "from-cyan-300 via-violet-200 to-amber-200",
              glow: "rgba(34,211,238,0.24)",
              dot: "bg-cyan-500",
              tag: "border-cyan-100 bg-cyan-50/85 text-cyan-800",
              panel: "from-cyan-200/38 via-white/76 to-violet-100/42",
            }
          : name === "Game UI Auto Composer Skill"
            ? {
                band: "from-violet-300 via-sky-200 to-fuchsia-200",
                glow: "rgba(139,92,246,0.22)",
                dot: "bg-violet-500",
                tag: "border-violet-100 bg-violet-50/85 text-violet-800",
                panel: "from-violet-200/36 via-white/78 to-cyan-100/42",
              }
            : {
                band: "from-emerald-300 via-teal-200 to-sky-200",
                glow: "rgba(45,212,191,0.18)",
                dot: "bg-teal-500",
                tag: "border-teal-100 bg-teal-50/80 text-teal-800",
                panel: "from-emerald-200/30 via-white/84 to-sky-100/40",
              };

  return (
    <article
      className={`group relative overflow-hidden rounded-[34px] border bg-white/68 shadow-[0_24px_78px_-58px_rgba(15,23,42,0.48)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:bg-white/78 hover:shadow-[0_32px_96px_-58px_rgba(15,23,42,0.62)] ${
        isAiSkill ? "border-white/85 p-[1px]" : "border-white/70"
      }`}
      style={{ ["--project-glow" as string]: theme.glow }}
    >
      <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.band}`} />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_var(--project-glow),_transparent_68%)] transition duration-500 group-hover:scale-110 group-hover:opacity-90" />
      <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.68),_transparent_70%)]" />

      <div className={`relative grid gap-8 ${isAiSkill ? "bg-[linear-gradient(145deg,_rgba(255,255,255,0.78),_rgba(236,254,255,0.58)_48%,_rgba(238,242,255,0.46))] p-7 sm:p-8 lg:grid-cols-[0.98fr_1.02fr] lg:p-9" : "p-7 sm:p-8 lg:grid-cols-[1.08fr_0.92fr]"}`}>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className={`${isAiSkill ? "text-3xl sm:text-[2.15rem]" : "text-2xl"} font-semibold leading-tight tracking-tight text-slate-950`}>{name}</h3>
          <Badge tone={statusTone}>{status}</Badge>
        </div>
        <p className={`${isAiSkill ? "mt-5 text-[17px]" : "mt-5 text-base"} max-w-2xl leading-8 text-slate-600`}>{summary}</p>

        <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${theme.dot} shadow-[0_0_0_4px_rgba(255,255,255,0.72)]`} />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {tech.map((item) => (
            <span key={item} className={`rounded-full border px-3 py-1.5 text-sm shadow-[0_8px_20px_-18px_rgba(15,23,42,0.5)] backdrop-blur ${isAiSkill && (item.includes("AI") || item === "Skill" || item === "Codex" || item === "Claude Code" || item === "vibe coding") ? theme.tag : "border-white/75 bg-white/58 text-slate-700"}`}>
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={`rounded-full px-4 py-2 text-sm font-semibold shadow-[0_12px_26px_-24px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-0.5 ${isAiSkill ? "border border-teal-200/80 bg-white/76 text-teal-800 hover:bg-teal-50/90" : "border border-white/80 bg-white/62 text-slate-700 hover:bg-white/90"}`}>
              {link.label}
              {link.placeholder ? " 待替换" : ""}
            </a>
          ))}
        </div>
      </div>

      <div className={`relative overflow-hidden rounded-[28px] border border-white/85 bg-gradient-to-br ${theme.panel} p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_18px_50px_-42px_rgba(15,23,42,0.45)] transition duration-500 group-hover:-translate-y-1 sm:p-6`}>
        <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-white/45 blur-2xl" />
        <div className={`relative flex h-full min-h-[20rem] flex-col rounded-[24px] border border-white/80 bg-white/62 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-xl`}>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-teal-700">{panelLabel}</p>
            <p className="mt-4 text-xl font-medium text-slate-900">{name}</p>
          </div>

          {hasImage ? (
            <div className="flex flex-1 items-center justify-center py-2">
              <img src={imgs} alt={`${name} project preview`} className="max-h-[15rem] w-full rounded-2xl object-contain shadow-[0_20px_46px_rgba(15,23,42,0.14)] transition duration-500 group-hover:scale-[1.025] group-hover:-translate-y-1" />
            </div>
          ) : null}

          {hasProgress ? (
            <div className="mt-6 flex flex-1 flex-col justify-center">
              <div className="space-y-3">
                {progress?.map((progress) => (
                  <div key={progress.name} className={`rounded-2xl border px-4 py-4 shadow-[0_12px_32px_-26px_rgba(15,23,42,0.45)] backdrop-blur ${isAiSkill ? "border-white/80 bg-white/68" : "border-white/80 bg-white/72"}`}>
                    <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isAiSkill ? "text-cyan-700" : "text-teal-600"}`}>{progress.name}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{progress.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      </div>
    </article>
  );
}
