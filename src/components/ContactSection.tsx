import { SectionTitle } from "./SectionTitle";
import { contactLinks } from "../data";
import { handleResumeDownload } from "../utils";

export function ContactSection() {
  return (
    <section id="contact" className="section-anchor mx-auto max-w-6xl px-6 py-28 lg:px-8 lg:pb-32">
      <div className="relative overflow-hidden rounded-[40px] border border-white/80 bg-[linear-gradient(135deg,_rgba(219,234,254,0.88)_0%,_rgba(204,251,241,0.84)_34%,_rgba(255,255,255,0.72)_64%,_rgba(224,242,254,0.82)_100%)] px-8 py-12 text-slate-900 shadow-[0_30px_100px_-62px_rgba(15,23,42,0.62)] backdrop-blur-2xl sm:px-12 lg:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-12 top-[-12%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(129,140,248,0.18),_transparent_68%)]" />
          <div className="absolute right-[-8%] top-[8%] h-80 w-96 rounded-full bg-[radial-gradient(circle,_rgba(34,211,238,0.24),_transparent_66%)]" />
          <div className="absolute bottom-[-18%] left-[18%] h-72 w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(190,242,100,0.22),_transparent_72%)]" />
          <div className="absolute bottom-[-20%] right-[8%] h-64 w-72 rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.16),_transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(140deg,_rgba(255,255,255,0.34),_rgba(255,255,255,0.08))]" />
        </div>

        <div className="relative z-10">
          <SectionTitle eyebrow="Contact" title="正在寻找前端开发与 AI 赋能前端岗位" description="我目前正在寻找前端开发与 AI 赋能前端相关岗位，也欢迎交流前端技术与 AI 工具实践。" />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {contactLinks.map((link) => {
              const isResumeDownload = link.label === "Resume";

              if (isResumeDownload) {
                return (
                  <button key={link.label} type="button" onClick={handleResumeDownload} className="rounded-[24px] border border-white/75 bg-white/58 px-5 py-4 text-left shadow-[0_14px_38px_-30px_rgba(15,23,42,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/82">
                    <p className="text-sm uppercase tracking-[0.18em] text-teal-700">{link.label}</p>
                    <p className="mt-2 text-base text-slate-800">简历下载</p>
                  </button>
                );
              }

              return (
                <a key={link.label} href={link.href} className="rounded-[24px] border border-white/75 bg-white/58 px-5 py-4 shadow-[0_14px_38px_-30px_rgba(15,23,42,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/82">
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
            <a href="mailto:ericfanwork@163.com" className="rounded-full bg-[linear-gradient(135deg,_#0891b2,_#14b8a6,_#22c55e)] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_48px_-20px_rgba(20,184,166,0.82)] transition duration-300 hover:-translate-y-1">
              发邮件联系我
            </a>
            <a href="https://github.com/Flycan-Fanc" className="rounded-full border border-white/80 bg-white/52 px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_14px_34px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/82">
              查看 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
