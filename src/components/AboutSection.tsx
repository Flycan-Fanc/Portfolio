import { SectionTitle } from './SectionTitle';

const points = [
  {
    title: '985 计算机专业背景',
    text: '毕业于东北大学计算机科学与技术专业，目前主要关注前端开发方向。',
  },
  {
    title: '项目驱动学习',
    text: '更习惯在真实项目里理解技术，而不是停留在只看教程的阶段。',
  },
  {
    title: '持续关注 AI + 开发效率',
    text: '在补前端能力的同时，也持续关注 AI 工具、Vibe Coding 与效率型工作流。',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionTitle
          eyebrow="About"
          title="围绕真实项目建立前端能力"
          description="我希望招聘方能快速看到我做过什么、擅长什么，以及我正在补强的方向。当前核心目标是找到前端开发相关岗位，并持续完善项目表达。"
        />

        <div className="grid gap-4">
          {points.map((point) => (
            <article
              key={point.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
