import { SectionTitle } from "./SectionTitle";

const points = [
  {
    title: "985 · 东北大学 · 计算机科学与技术",
    text: "毕业于东北大学计算机科学与技术专业，目前主要关注前端开发方向。",
  },
  {
    title: "通过项目推进能力成长",
    text: "更擅长在真实项目中学习技术、修复问题，并在实践中不断完善自己的能力结构。",
  },
  {
    title: "持续关注 AI 等最新技术",
    text: "持续关注 AI 工具、Vibe Coding、效率型工作流与前沿开发技术，并持续思考它们在实际开发中的应用。",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionTitle eyebrow="About" title="从东北大学到前端开发" description="我毕业于东北大学计算机科学与技术专业，目前主要关注前端开发方向。过去这段时间，我通过 MyDay、AI PDF 助手等真实项目持续补强前端能力，也在学习 React、Tailwind CSS 与 AI 辅助开发相关内容。我希望进入团队后，继续在真实业务中打磨项目能力、工程意识与协作能力。" />

        <div className="grid gap-4">
          {points.map((point) => (
            <article key={point.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
