"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import { projects } from "@/data/projects";

const W = "mx-auto max-w-[1200px] px-6 md:px-12";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero — text left, image right */}
      <section className={`${W} pt-28 pb-16`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                UX Designer
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Hi, I&apos;m Grant.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-500">
                Student at SCAD focused on thoughtful user experiences, with a
                growing interest in interface design.
              </p>
              <a
                href="https://drive.google.com/file/d/1GILj0bUv2kgI-666F8Ky7BBz4KWe678N/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block text-sm font-medium text-slate-900 underline-offset-4 hover:underline"
              >
                View Resume
              </a>
            </motion.div>
          </div>
          <div className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-[45%]">
            <ProfilePhoto
              width={442}
              height={263.5}
              rounded="xl"
              focalPointHigher={-30}
              zoom={0.5}
            />
          </div>
        </div>
      </section>

      {/* Projects — same W and section spacing */}
      <section className={`${W} pb-20`}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Projects
        </h2>
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
