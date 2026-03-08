import Link from "next/link";

export default function CafePage() {
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
            Web & App Design · 2025
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Cafe - Calendar For Everything (WIP)
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Lead Designer · Personal Project · UI/UX Design
          </p>
        </header>

        {/* Hero – 8 images (Framer order) */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            "cafecard.png",
            "wr93jCkEPYXU0MVwvTcSuPIAMvA.png",
            "lTvdOL8KHIp5TKz9O4Yzobhs.png",
            "FB6acVEXrSYflNLRaBubJEadDE.png",
            "pVMsZXMvkXcHM5onuankXNrCQns.png",
            "mVXkLASqNKOZyiAOGEKPpvk8.png",
            "BqiVnlo0a1Ncu9UXFDRrkFS00.png",
            "9OxqXSEKTlhVIdVh1lOCuKOXQ.png",
          ].map((src) => (
            <figure key={src} className="overflow-hidden rounded-xl">
              <img
                src={`/cafe/${src}`}
                alt="CAFÉ app"
                className="w-full h-auto"
                style={
                  { imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties
                }
              />
            </figure>
          ))}
        </div>

        {/* PROBLEM */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Problem
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Calendars work well alone, but break down when plans involve other
            people
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Modern calendar apps are effective at showing personal events, but
            they become difficult to manage once users need to interact with
            shared schedules, discover new calendars, or reuse existing plans.
            Browsing events, coordinating with others, or pulling in outside
            schedules often requires switching tools or manually recreating
            information, adding friction to something meant to feel simple.
          </p>
        </section>

        {/* Opportunity */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Opportunity
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Calendars don&apos;t need fewer features, they need better structure
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Rather than stripping calendars down further, there&apos;s an
            opportunity to rethink how complexity is organized. If discovery,
            sharing, and filtering are designed intentionally, a calendar can
            support richer use cases without overwhelming the user or cluttering
            their primary schedule.
          </p>
        </section>

        {/* Design Intent */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Design Intent
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            A simple interface that supports more flexible calendar behaviors
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            CAFÉ explores how a clean, minimal UI can still support advanced
            actions like browsing public calendars, saving schedules for later,
            filtering visibility, and sharing events. The goal isn&apos;t to
            compete on simplicity alone, but to make powerful calendar behaviors
            feel obvious and approachable.
          </p>
        </section>

        {/* Insight */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Insight
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            People want to explore and reference calendars before fully
            committing to them
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            People frequently want to browse calendars, temporarily view
            schedules, or save them for later without immediately adding
            everything to their main calendar. The lack of lightweight ways to
            preview, filter, or hide calendars leads to clutter and hesitation
            around sharing.
          </p>
        </section>

        {/* Product Direction */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Product Direction
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Treat calendars as discoverable, filterable collections not just
            fixed views
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            CAFÉ reframes calendars as flexible layers that users can turn on,
            hide, save, or share depending on context. This allows users to
            explore events and schedules without permanently altering their
            primary calendar or losing clarity.
          </p>
        </section>

        {/* Core Features (detailed) */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Core Features
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Supporting discovery, control, and collaboration without added
            complexity
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            CAFÉ introduces features that let users browse public or shared
            calendars, save calendars to revisit later, and pull individual
            events or entire schedules into their own view. Users can filter
            calendars on and off, hide specific schedules, create multiple
            calendars for different needs, and share selectively, all while
            keeping the interface readable and calm.
          </p>
        </section>

        {/* Solution - with 5 screens */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Solution
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            A minimal calendar interface built for sharing, filtering, and reuse
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The current design focuses on clarity first, using familiar calendar
            patterns and a simple visual hierarchy so users can easily track
            events, tasks, and schedules. Beyond basic planning, CAFÉ supports
            discovering calendars, saving schedules for later, filtering
            visibility, and sharing events without overwhelming the main
            calendar view. The goal is to keep everyday planning simple while
            making more advanced calendar behaviors feel natural and easy to
            use.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              "S2Oq6f2Y8FZJraL6NUYkiCFFgCI.png",
              "rkUl5iemGOWWglwLHKELJ9TJZY.png",
              "moFHXYuIhtw1p23UOlaHDrNi47o.png",
              "P5fWcFCJ8OGjkWBMklQcaHyiR4.png",
              "o3uCS7XxjrBWCdGX12feYY2unbc.png",
            ].map((src) => (
              <figure
                key={src}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={`/cafe/${src}`}
                  alt="CAFÉ app screen"
                  width={1015}
                  height={2048}
                  className="w-full h-auto"
                  style={
                    {
                      imageRendering: "-webkit-optimize-contrast",
                    } as React.CSSProperties
                  }
                />
              </figure>
            ))}
          </div>
        </section>

        {/* Current State */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Current State
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            An evolving concept exploring direction and identity
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The screens shown represent an early visual and structural direction
            for CAFÉ. While they demonstrate how key interactions and features
            could work, the system is not yet fully defined. The product is
            currently being workshopped to refine its positioning and clarify
            what makes it distinct within the calendar space.
          </p>
        </section>

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
