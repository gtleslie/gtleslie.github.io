import Link from "next/link";
import { ProfilePhoto } from "@/components/ProfilePhoto";

const designExperience = [
  {
    title: "Research & Testing",
    description:
      "Using research, testing, and iteration to better understand user behavior and validate design decisions.",
  },
  {
    title: "Product Design",
    description:
      "Designing products from early concepts to high-fidelity prototypes, with a focus on usability, clarity, and user goals.",
  },
  {
    title: "Interface Design",
    description:
      "Designing clean, intentional interfaces that support usability, hierarchy, and clear user interaction.",
  },
  {
    title: "Prototyping & Systems",
    description:
      "Building wireframes, prototypes, and design systems to explore ideas, test solutions, and support scalable design.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <section className="mb-16 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
          <div className="flex-shrink-0">
            <ProfilePhoto size="lg" rounded="xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About me
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m a UX Design student at SCAD, focused on designing digital
              products that are clear, intentional, and grounded in real user
              needs.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I enjoy exploring exciting ideas and turning innovative concepts
              into thoughtful, user-friendly solutions. My work emphasizes
              usability, clarity, and design decisions that feel purposeful
              rather than overcomplicated.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-8 text-xl font-semibold">Design Experience</h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {designExperience.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Let&apos;s connect!</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </main>
  );
}
