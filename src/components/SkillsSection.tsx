import { SectionTitle } from "./SectionTitle";
import { skillGroups } from "../data";

const skillThemes = [
  {
    band: "from-sky-300 via-cyan-200 to-teal-200",
    dot: "from-sky-400 to-cyan-400",
    wash: "from-sky-100/58 via-white/70 to-cyan-50/60",
  },
  {
    band: "from-rose-200 via-amber-200 to-cyan-200",
    dot: "from-rose-300 to-amber-300",
    wash: "from-rose-50/64 via-white/72 to-amber-50/60",
  },
  {
    band: "from-teal-300 via-emerald-200 to-amber-200",
    dot: "from-teal-400 to-emerald-400",
    wash: "from-teal-50/64 via-white/72 to-emerald-50/58",
  },
  {
    band: "from-indigo-200 via-cyan-200 to-lime-200",
    dot: "from-indigo-300 to-cyan-400",
    wash: "from-indigo-50/64 via-white/72 to-cyan-50/60",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-anchor relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute left-[-6rem] top-16 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(216,180,254,0.12),_transparent_70%)]" />
      <SectionTitle eyebrow="Skills" title="技术栈与实践方向" description="我的技术栈主要围绕前端开发、桌面端应用、基础后端能力与 AI 辅助开发展开。" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article key={group.title} className={`relative overflow-hidden rounded-[30px] border border-white/75 bg-gradient-to-br ${skillThemes[index].wash} p-7 shadow-[0_20px_66px_-54px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/80`}>
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${skillThemes[index].band}`} />
            <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/42 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className={`h-3.5 w-3.5 rounded-full bg-gradient-to-br ${skillThemes[index].dot} shadow-[0_0_0_6px_rgba(255,255,255,0.55)]`} />
              <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/75 bg-white/62 px-3 py-1.5 text-sm text-slate-700 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.4)] backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
