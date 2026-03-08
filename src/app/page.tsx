import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero – text left, image right */}
        {/* Vertical alignment: sm:items-start (top) | sm:items-center (middle) | sm:items-end (bottom) */}
        <section className="mb-20 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-16">
          <div className="min-w-0 flex-1">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl">
              Hi, I&apos;m Grant.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              UX Designer student at SCAD focused on thoughtful user experiences,
              with a growing interest in interface design.
            </p>
            <a
              href="https://drive.google.com/file/d/1GILj0bUv2kgI-666F8Ky7BBz4KWe678N/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-base font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
            >
              View Resume
            </a>
          </div>
          {/* Image alignment: add "flex justify-center" to center in column, "self-start" / "self-end" to align vertically */}
          <div className="flex-shrink-0 sm:order-last">
            <ProfilePhoto
              width={442}
              height={263.5}
              rounded="xl"
              focalPointHigher={-30}
              zoom={0.50}
            />
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="sr-only">Projects</h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
