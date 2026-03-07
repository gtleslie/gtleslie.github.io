import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back
        </Link>

        <header className="mb-12">
          <span className="text-sm font-medium text-zinc-500">
            Product Design, UX Design · 2026
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Motorcycle HMI Redesign
          </h1>
          <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-200">
            This case study is in progress. Check back soon.
          </p>
        </header>

        <figure className="mb-16 overflow-hidden rounded-xl mx-auto max-w-3xl">
          <img
            src="/hmi/HMICard.png"
            alt="HMI System Redesign - assistance, navigation, and media interfaces"
            width={1680}
            height={1263}
            className="w-full h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' } as React.CSSProperties}
            loading="eager"
            fetchPriority="high"
          />
        </figure>

        <a
          href="https://www.linkedin.com/in/grantleslie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
