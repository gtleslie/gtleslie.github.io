import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h1>
        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
