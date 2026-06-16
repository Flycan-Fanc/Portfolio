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
    <section id="about" className="section-anchor relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.12),_transparent_70%)]" />
      <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
        <div className="rounded-[34px] border border-white/65 bg-white/38 p-6 shadow-[0_24px_76px_-62px_rgba(15,23,42,0.45)] backdrop-blur-xl sm:p-8">
          <SectionTitle eyebrow="About" title="从东北大学到前端开发" description="我毕业于东北大学计算机科学与技术专业，目前主要关注前端开发方向。过去这段时间，我通过 MyDay、AI PDF 助手等真实项目持续补强前端能力，也在学习 React、Tailwind CSS 与 AI 辅助开发相关内容。我希望进入团队后，继续在真实业务中打磨项目能力、工程意识与协作能力。" />
        </div>

        <div className="grid gap-4">
          {points.map((point, index) => (
            <article key={point.title} className="relative overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-6 shadow-[0_18px_58px_-48px_rgba(15,23,42,0.48)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/78">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,_rgba(34,211,238,0.68),_rgba(20,184,166,0.55),_rgba(190,242,100,0.38))]" style={{ opacity: 0.52 + index * 0.14 }} />
              <h3 className="text-lg font-semibold text-slate-900">{point.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
