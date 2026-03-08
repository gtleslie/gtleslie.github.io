export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200/60 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Grant Leslie
        </span>
        <a
          href="https://www.linkedin.com/in/grantleslie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
