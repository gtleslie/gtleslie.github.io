import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/projects", label: "My Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-12">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-zinc-600"
        >
          <Image src="/Glogo001.svg" alt="" width={16} height={16} className="h-4 w-4 shrink-0" />
          Grant Leslie
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/grantleslie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}
