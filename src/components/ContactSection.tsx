import { SectionTitle } from "./SectionTitle";
import { contactLinks } from "../data";

export function ContactSection() {
  return (
    <section id="contact" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <div className="rounded-[36px] border border-slate-200 bg-slate-900 px-8 py-12 text-slate-50 shadow-soft sm:px-12">
        <SectionTitle eyebrow="Contact" title="欢迎交流岗位、项目与 AI 工具实践" description="我目前正在寻找前端开发相关岗位，也欢迎交流项目协作、工程实现与 AI 辅助开发工作流。以下链接与邮箱均为占位，需要你后续统一替换为真实信息。" theme="dark" />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} className="rounded-[24px] border border-white/15 bg-white/5 px-5 py-4 transition hover:bg-white/10">
              <p className="text-sm uppercase tracking-[0.18em] text-teal-300">{link.label}</p>
              <p className="mt-2 text-base text-white">
                {link.value}
                {link.placeholder ? " · 待替换" : ""}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a href="mailto:your-email@example.com" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
            发邮件联系我
          </a>
          <a href="https://github.com/Flycan-Fanc" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            查看 GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
