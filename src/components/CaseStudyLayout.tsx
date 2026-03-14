export function CaseStudyHero({
  src,
  alt,
}: {
  src: string;
  alt: string;
  title?: string;
}) {
  return (
    <section className="w-full">
      <img
        src={src}
        alt={alt}
        className="h-auto w-full"
        loading="eager"
        fetchPriority="high"
      />
    </section>
  );
}

export function NarrowSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-3xl px-6 ${className}`}>
      {children}
    </section>
  );
}

export function FullWidthImages({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-6 ${className}`}>
      {children}
    </section>
  );
}

export function GalleryCluster({
  images,
  columns = 3,
  alt = "",
}: {
  images: string[];
  columns?: 2 | 3 | 4;
  alt?: string;
}) {
  const colClasses: Record<number, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className={`grid gap-4 ${colClasses[columns]}`}>
        {images.map((src) => (
          <figure key={src} className="overflow-hidden rounded-2xl">
            <img
              src={src}
              alt={alt}
              className="h-auto w-full"
              style={
                {
                  imageRendering: "-webkit-optimize-contrast",
                } as React.CSSProperties
              }
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <blockquote className="border-l-4 border-zinc-300 pl-6 text-2xl font-medium italic leading-relaxed text-zinc-700 dark:border-zinc-600 dark:text-zinc-300">
        {children}
      </blockquote>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 sm:text-3xl">
      {children}
    </h2>
  );
}

export function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
      {children}
    </p>
  );
}
