import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <Link
      href={project.href}
      className="group block rounded-xl border border-zinc-200/80 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
    >
      <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {project.tagline}
      </p>
      {isComingSoon && (
        <span className="mt-2 inline-block text-xs font-medium text-amber-600 dark:text-amber-400">
          Coming soon
        </span>
      )}
    </Link>
  );
}
