import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back
        </Link>

        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          View my resume (opens in a new tab).
        </p>
        <a
          href="https://drive.google.com/file/d/1GILj0bUv2kgI-666F8Ky7BBz4KWe678N/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
        >
          Open Resume (PDF)
        </a>
      </div>
    </main>
  );
}
