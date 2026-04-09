import { SectionTitle } from "./SectionTitle";
import { skillGroups } from "../data";

export function SkillsSection() {
  return (
    <section id="skills" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionTitle eyebrow="Skills" title="技术栈与实践方向" description="我的技术栈主要围绕前端开发、桌面端应用、基础后端能力与 AI 辅助开发展开。" />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">
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
