import { Badge } from "./Badge";
import { heroTags } from "../data";

export function HeroSection() {
  return (
    <section id="hero" className="section-anchor relative">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
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

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">专注 Vue、TypeScript、Electron，也在持续补齐 React、Tailwind CSS 与 AI 辅助开发能力。 我擅长通过真实项目驱动学习，关注产品可用性、工程化与持续迭代。当前正在完善前端作品集，并积极寻找前端开发相关岗位。</p>

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

          <div className="rounded-[28px] border border-white/60 bg-[#edf5f7]/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm lg:max-w-[380px]">
            <p className="text-sm font-medium tracking-[0.14em] text-slate-500">Focusing On · 当前方向</p>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-white/70 bg-white/45 px-5 py-4">
                <p className="text-sm text-slate-500">01 个人项目完善</p>
                <p className="mt-2 text-[17px] font-medium leading-7 text-slate-700">持续完善与迭代个人项目</p>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/45 px-5 py-4">
                <p className="text-sm text-slate-500">02 前端能力补强</p>
                <p className="mt-2 text-[17px] font-normal leading-7 text-slate-700">React / Tailwind CSS / AI-assisted Development</p>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/45 px-5 py-4">
                <p className="text-sm text-slate-500">03 AI 工作流探索</p>
                <p className="mt-2 text-[17px] font-medium leading-7 text-slate-700">
                  关注 <span className="font-normal text-slate-600">AI</span> 工具接入与 <span className="font-normal text-slate-600">Vibe Coding</span> 实践
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
