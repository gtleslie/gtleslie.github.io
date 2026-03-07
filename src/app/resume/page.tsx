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
          Add your resume PDF or link here. You can either:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-600 dark:text-zinc-400">
          <li>Host a PDF in the public folder and link to it</li>
          <li>Add an external link (e.g., Google Drive, Notion)</li>
          <li>Embed a PDF viewer component</li>
        </ul>
      </div>
    </main>
  );
}
