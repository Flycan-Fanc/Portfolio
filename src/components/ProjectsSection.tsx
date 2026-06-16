import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import { projects } from "../data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor relative py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(246,251,255,0)_0%,_rgba(236,254,255,0.72)_18%,_rgba(240,253,250,0.78)_54%,_rgba(246,251,255,0)_100%)]" />
        <div className="absolute left-1/2 top-16 h-[42rem] w-[78rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(45,212,191,0.16),_rgba(147,197,253,0.12)_38%,_transparent_70%)]" />
        <div className="absolute right-[-10rem] top-[28rem] h-[30rem] w-[40rem] rounded-full bg-[radial-gradient(circle,_rgba(216,180,254,0.18),_transparent_68%)]" />
        <div className="absolute left-[-10rem] bottom-20 h-[32rem] w-[42rem] rounded-full bg-[radial-gradient(circle,_rgba(253,224,71,0.12),_transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/70 bg-white/32 p-6 shadow-[0_26px_90px_-68px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-8">
          <SectionTitle eyebrow="Projects" title="项目展示与实践经历" description="这些项目主要覆盖桌面端应用、工具型产品与 AI 辅助开发方向。" />
        </div>

        <div className="mt-16 space-y-10 lg:mt-20 lg:space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
