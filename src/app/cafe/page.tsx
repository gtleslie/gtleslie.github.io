import Link from "next/link";
import { CaseStudyLayout, sectionSpacing } from "@/components/CaseStudyLayout";

export default function CafePage() {
  return (
    <CaseStudyLayout>
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back
        </Link>

        <header className={sectionSpacing}>
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

        {/* Hero – 8 images */}
        <div className={`${sectionSpacing} grid grid-cols-2 gap-4 sm:grid-cols-4`}>
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

        {/* Discover Calendars */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Discover Calendars
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Explore and subscribe to public or shared calendars for events near you.
          </p>
        </section>

        {/* Add or Import Events */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Add or Import Events
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Sync or import events from friends and family
          </p>
        </section>

        {/* Personalize Your Calendar */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Personalize Your Calendar
          </h2>
          <p className="mb-8 text-zinc-700 dark:text-zinc-300">
            Personalize events with categories, icons, and colors that fit your schedule.
          </p>
        </section>

        {/* Edit Events */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Edit Events
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Quickly add and manage events
          </p>
        </section>

        {/* Project info */}
        <section className={`${sectionSpacing} space-y-8`}>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Project info
          </h2>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Scope
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              The goal of this project was to design a dead-simple calendar experience that prioritizes usability over feature overload. Rather than competing with enterprise calendar platforms, the focus was on creating an interface that makes viewing, sharing, and understanding schedules effortless especially for families, small groups, and public-facing use cases.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Process
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              I reviewed existing calendar tools to understand where complexity and confusion occur, then focused on simplifying the experience through clear hierarchy and minimal interface elements. The design was refined through iterative layout and visual decisions to ensure the calendar could be understood and used without explanation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Solution
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              The final solution is a minimal, modern calendar interface that makes it easy to see what matters at a glance. Events are visually organized, color-coded for clarity, and designed to scale across different contexts from personal schedules to shared or public calendars.
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Problem
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Calendars work well alone, but break down when plans involve other people
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Modern calendar apps are effective at showing personal events, but they become difficult to manage once users need to interact with shared schedules, discover new calendars, or reuse existing plans. Browsing events, coordinating with others, or pulling in outside schedules often requires switching tools or manually recreating information, adding friction to something meant to feel simple.
          </p>
        </section>

        {/* OPPORTUNITY */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Opportunity
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Calendars don&apos;t need fewer features, they need better structure
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Rather than stripping calendars down further, there&apos;s an opportunity to rethink how complexity is organized. If discovery, sharing, and filtering are designed intentionally, a calendar can support richer use cases without overwhelming the user or cluttering their primary schedule.
          </p>
        </section>

        {/* DESIGN INTENT */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Design Intent
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            A simple interface that supports more flexible calendar behaviors
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            CAFÉ explores how a clean, minimal UI can still support advanced actions like browsing public calendars, saving schedules for later, filtering visibility, and sharing events. The goal isn&apos;t to compete on simplicity alone, but to make powerful calendar behaviors feel obvious and approachable.
          </p>
        </section>

        {/* RESEARCH & DISCOVERY */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Research & Discovery
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Understanding how people discover, reuse, and manage schedules
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            I reviewed existing calendar tools and observed how users currently find events, share schedules, and manage multiple calendars at once. Research showed that people often rely on external links, messages, or screenshots to coordinate plans, rather than using the calendar itself as a shared space.
          </p>
        </section>

        {/* INSIGHT */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Insight
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            People want to explore and reference calendars before fully committing to them
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            People frequently want to browse calendars, temporarily view schedules, or save them for later without immediately adding everything to their main calendar. The lack of lightweight ways to preview, filter, or hide calendars leads to clutter and hesitation around sharing.
          </p>
        </section>

        {/* PRODUCT DIRECTION */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Product Direction
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Treat calendars as discoverable, filterable collections not just fixed views
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            CAFÉ reframes calendars as flexible layers that users can turn on, hide, save, or share depending on context. This allows users to explore events and schedules without permanently altering their primary calendar or losing clarity.
          </p>
        </section>

        {/* CORE FEATURES */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Core Features
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Supporting discovery, control, and collaboration without added complexity
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            CAFÉ introduces features that let users browse public or shared calendars, save calendars to revisit later, and pull individual events or entire schedules into their own view. Users can filter calendars on and off, hide specific schedules, create multiple calendars for different needs, and share selectively, all while keeping the interface readable and calm.
          </p>
        </section>

        {/* SOLUTION – 5 images */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Solution
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            A minimal calendar interface built for sharing, filtering, and reuse
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The current design focuses on clarity first, using familiar calendar patterns and a simple visual hierarchy so users can easily track events, tasks, and schedules. Beyond basic planning, CAFÉ supports discovering calendars, saving schedules for later, filtering visibility, and sharing events without overwhelming the main calendar view. The goal is to keep everyday planning simple while making more advanced calendar behaviors feel natural and easy to use.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              "S2Oq6f2Y8FZJraL6NUYkiCFFgCI.png",
              "rkUl5iemGOWWglwLHKELJ9TJZY.png",
              "moFHXYuIhtw1p23UOlaHDrNi47o.png",
              "P5fWcFCJ8OGjkWBMklQcaHyiR4.png",
              "o3uCS7XxjrBWCdGX12feYY2unbc.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-xl">
                <img
                  src={`/cafe/${src}`}
                  alt="CAFÉ app screen"
                  className="w-full h-auto"
                  style={
                    { imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties
                  }
                />
              </figure>
            ))}
          </div>
        </section>

        {/* CURRENT STATE */}
        <section className={sectionSpacing}>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Current State
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            An evolving concept exploring direction and identity
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The screens shown represent an early visual and structural direction for CAFÉ. While they demonstrate how key interactions and features could work, the system is not yet fully defined. The product is currently being workshopped to refine its positioning and clarify what makes it distinct within the calendar space.
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
