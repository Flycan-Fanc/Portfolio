import { SectionTitle } from "./SectionTitle";
import { valueCards } from "../data";

export function ValueSection() {
  return (
    <section id="advantages" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="ADVANTAGES"
        title="我的优势"
        description="我擅长通过真实项目提升能力，也关注问题修复、工程化细节与 AI 工具在实际开发中的使用。"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {valueCards.map((card) => (
          <article key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
