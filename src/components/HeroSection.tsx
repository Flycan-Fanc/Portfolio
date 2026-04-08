import { Badge } from "./Badge";
import { heroTags } from "../data";

export function HeroSection() {
  return (
    <section id="hero" className="section-anchor relative">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-3">
              <Badge tone="accent">Front-End Developer</Badge>
              <Badge tone="accent">AI Learner</Badge>
              <Badge tone="accent">Open to Work</Badge>
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              范厚琳
              <span className="mt-3 block text-2xl font-medium text-slate-600 sm:text-3xl">前端开发者 & AI 学习者</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">专注 Vue、TypeScript、Electron，也在持续补齐 React、Tailwind CSS 与 AI 辅助开发能力。 我倾向通过真实项目驱动学习，关注产品可用性、工程实现与持续迭代。</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                查看项目
              </a>
              <a href="#" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white">
                下载简历
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur">
            <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-slate-50">
              <p className="text-sm uppercase tracking-[0.2em] text-teal-300">Current Focus</p>
              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm text-slate-400">主线</p>
                  <p className="mt-2 text-xl font-medium">前端求职作品集完善与项目表达</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">补强</p>
                  <p className="mt-2 text-xl font-medium">React / Tailwind CSS / AI-assisted Development</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">方向</p>
                  <p className="mt-2 text-xl font-medium">持续关注 AI 工具接入与 Vibe Coding 工作流</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
