import { SectionTitle } from './SectionTitle';
import { skillGroups } from '../data';

export function SkillsSection() {
  return (
    <section id="skills" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Skills"
        title="以项目场景组织技术栈"
        description="不做主观打分，不用百分比展示。这里更直接地呈现我已在项目中使用过、或正在持续补强的技术与工作方式。"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
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
