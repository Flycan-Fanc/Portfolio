import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";
import { projects } from "../data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionTitle eyebrow="Projects" title="项目展示与实践经历" description="这些项目主要覆盖桌面端应用、工具型产品与 AI 辅助开发方向。" />

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
