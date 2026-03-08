import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
          <div className="flex-shrink-0">
            <ProfilePhoto size="md" rounded="full" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
              Hi, I&apos;m Grant.
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              UX Designer student at SCAD focused on thoughtful user experiences,
              with a growing interest in interface design.
            </p>
            <a
              href="https://drive.google.com/file/d/1GILj0bUv2kgI-666F8Ky7BBz4KWe678N/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            >
              View Resume
            </a>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="sr-only">Projects</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
