import { SectionTitle } from "./SectionTitle";
import { contactLinks } from "../data";
import { handleResumeDownload } from "../utils";

export function ContactSection() {
  return (
    <section id="contact" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[36px] border border-sky-100/80 bg-[linear-gradient(135deg,_#d2e6ff_0%,_#c9f2ee_34%,_#dcf6f6_68%,_#d8eefe_100%)] px-8 py-12 text-slate-900 shadow-soft sm:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-[-10%] h-80 w-80 bg-[radial-gradient(circle,_rgba(129,140,248,0.24),_transparent_68%)]" />
          <div className="absolute right-[-8%] top-[8%] h-80 w-96 bg-[radial-gradient(circle,_rgba(34,211,238,0.2),_transparent_66%)]" />
          <div className="absolute bottom-[-18%] left-[18%] h-72 w-[30rem] bg-[radial-gradient(circle,_rgba(191,219,254,0.42),_transparent_72%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,_rgba(255,255,255,0.18),_rgba(255,255,255,0.04))]" />
        </div>

        <div className="relative z-10">
          <SectionTitle eyebrow="Contact" title="正在寻找前端开发与 AI 赋能前端岗位" description="我目前正在寻找前端开发与 AI 赋能前端相关岗位，也欢迎交流前端技术与 AI 工具实践。" />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {contactLinks.map((link) => {
              const isResumeDownload = link.label === "Resume";

              if (isResumeDownload) {
                return (
                  <button key={link.label} type="button" onClick={handleResumeDownload} className="rounded-[24px] border border-white/70 bg-white/55 px-5 py-4 text-left transition hover:bg-white/72">
                    <p className="text-sm uppercase tracking-[0.18em] text-teal-700">{link.label}</p>
                    <p className="mt-2 text-base text-slate-800">简历下载</p>
                  </button>
                );
              }

              return (
                <a key={link.label} href={link.href} className="rounded-[24px] border border-white/70 bg-white/55 px-5 py-4 transition hover:bg-white/72">
                  <p className="text-sm uppercase tracking-[0.18em] text-teal-700">{link.label}</p>
                  <p className="mt-2 text-base text-slate-800">
                    {link.value}
                    {link.placeholder ? " 待替换" : ""}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:ericfanwork@163.com" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
              发邮件联系我
            </a>
            <a href="https://github.com/Flycan-Fanc" className="rounded-full border border-slate-300/80 bg-white/45 px-6 py-3 text-sm font-medium text-slate-800 transition hover:bg-white/72">
              查看 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
