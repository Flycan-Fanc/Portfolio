import { SectionTitle } from "./SectionTitle";
import { valueCards } from "../data";

const valueThemes = [
  "from-cyan-300 via-teal-200 to-white",
  "from-amber-200 via-cyan-100 to-white",
  "from-sky-300 via-indigo-100 to-white",
  "from-lime-200 via-teal-100 to-white",
];

export function ValueSection() {
  return (
    <section id="advantages" className="section-anchor relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute right-[-8rem] top-4 -z-10 h-80 w-96 rounded-full bg-[radial-gradient(circle,_rgba(45,212,191,0.14),_transparent_70%)]" />
      <SectionTitle
        eyebrow="ADVANTAGES"
        title="我的优势"
        description="我擅长通过真实项目提升能力，也关注问题修复、工程化细节与 AI 工具在实际开发中的使用。"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {valueCards.map((card, index) => (
          <article key={card.title} className="relative overflow-hidden rounded-[28px] border border-white/75 bg-white/58 p-6 shadow-[0_18px_58px_-48px_rgba(15,23,42,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/80">
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${valueThemes[index]}`} />
            <div className="mb-6 h-10 w-10 rounded-2xl border border-white/75 bg-white/52 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />
            <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
