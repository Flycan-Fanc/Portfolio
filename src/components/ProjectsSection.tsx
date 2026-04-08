import { ProjectCard } from './ProjectCard';
import { SectionTitle } from './SectionTitle';
import { projects } from '../data';

export function ProjectsSection() {
  return (
    <section id="projects" className="section-anchor mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Projects"
        title="用项目证明能力，而不是只罗列技术名词"
        description="这里是整站重点。我希望通过完整的项目描述，让招聘方快速理解我在桌面端、工具型产品和 AI 辅助场景中的实践方式。"
      />

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
}
