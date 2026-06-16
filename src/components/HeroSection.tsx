import { Badge } from "./Badge";
import { heroTags } from "../data";
import { handleResumeDownload } from "../utils";

export function HeroSection() {
  return (
    <section id="hero" className="section-anchor relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100vh+7rem)] overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[42rem] w-[86rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_48%_36%,_rgba(45,212,191,0.28),_rgba(125,211,252,0.18)_32%,_rgba(255,255,255,0)_70%)]" />
        <div className="absolute right-[5%] top-24 h-56 w-56 rounded-[42%_58%_60%_40%] bg-[linear-gradient(135deg,_rgba(20,184,166,0.26),_rgba(34,211,238,0.14),_rgba(244,114,182,0.18))] blur-xl" />
      </div>

      <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl items-center px-6 pb-20 pt-20 lg:px-8 lg:pb-24">
        <div className="grid w-full gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3">
              <Badge tone="accent">Front-End Developer</Badge>
              <Badge tone="accent">AI Learner</Badge>
              <Badge tone="accent">Open to Work</Badge>
            </div>

            <h1 className="mt-9 max-w-3xl text-6xl font-semibold leading-[0.94] tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
              范厚琳
              <span className="mt-5 block text-2xl font-medium leading-tight text-slate-700 sm:text-3xl">前端开发者 & AI 学习者</span>
            </h1>

            <p className="mt-8 max-w-[40rem] text-lg leading-8 text-slate-600">专注 Vue、TypeScript、Electron，也在持续补齐 React、Tailwind CSS 与 AI 辅助开发能力。 我擅长通过真实项目驱动学习，关注产品可用性、工程化与持续迭代。当前正在完善前端作品集，并积极寻找前端开发相关岗位。</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-[linear-gradient(135deg,_#0891b2_0%,_#14b8a6_48%,_#22c55e_100%)] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_42px_-18px_rgba(20,184,166,0.72)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-20px_rgba(20,184,166,0.9)]">
                查看项目
              </a>
              <button type="button" onClick={handleResumeDownload} className="rounded-full border border-white/80 bg-white/55 px-6 py-3 text-sm font-semibold text-slate-700 shadow-[0_16px_34px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:bg-white/85">
                下载简历
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
            <div className="hero-crystal relative min-h-[29rem] sm:min-h-[38rem]">
              <div className="crystal-blob crystal-blob-a" />
              <div className="crystal-blob crystal-blob-b" />
              <div className="crystal-blob crystal-blob-c" />
              <div className="crystal-glass">
                <div className="crystal-play" />
                <div className="crystal-shine" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 rounded-[30px] border border-white/70 bg-white/64 p-5 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.5)] backdrop-blur-2xl sm:p-6">
                <p className="text-sm font-semibold tracking-[0.2em] text-teal-700">Focusing On · 当前方向</p>
                <div className="mt-5 grid gap-3">
                {[
                  ["01", "个人项目完善", "持续完善与迭代个人项目"],
                  ["02", "前端能力补强", "React / Tailwind CSS / AI-assisted Development"],
                  ["03", "AI 工作流探索", "关注 AI 工具接入与 Vibe Coding 实践"],
                ].map(([index, title, text]) => (
                  <div key={title} className="group rounded-[20px] border border-white/75 bg-white/60 px-4 py-3 shadow-[0_14px_36px_-30px_rgba(15,23,42,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/85">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,_rgba(34,211,238,0.22),_rgba(20,184,166,0.24),_rgba(190,242,100,0.18))] text-xs font-semibold text-teal-700">{index}</span>
                      <p className="text-sm font-semibold tracking-[0.08em] text-slate-700">{title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
