import Link from "next/link";

export default function MeeaPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          ← Back
        </Link>

        <header className="mb-12">
          <span className="text-sm font-medium text-zinc-500">
            Product Prototype, Design · 2025
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            MEEA - Menu Concept
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            UX Designer · UI Designer · 3 Members · 10 weeks
          </p>
        </header>

        {/* Hero – full-width lead + 15 grid (Framer order) */}
        <figure className="mb-12 -mx-6 sm:-mx-8 lg:-mx-12 overflow-hidden">
          <img
            src="/meea/Meea-creative.png"
            alt="MEEA digital menu - hero"
            className="w-full h-auto"
            style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
            loading="eager"
            fetchPriority="high"
          />
        </figure>
        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {[
            "DFM6mFATaZjMUM9QZaahQfHh0G0.png",
            "MxeUyJpOHH1ElhFpYyhXA26t7E.png",
            "lijWxVrmwDYgM7AONlQjTcyRPbU.png",
            "2lNS7ofzybOsJvX932VJUDVkc.png",
            "Gy2fmXhKGOqP9bZnFhWQHKAOYH4.png",
            "A45Y6HZ6uGds2aKaVJUGhviadQ0.png",
            "RGQFIgrgqgfX0wQ3W7g80tWhp60.png",
            "sKORR6u83jweD49ZyrZwzFow4.png",
            "h2bRsBkCb7dkWtQz2YmsrY1WCE.png",
            "R4bqKCjNLjCn0y8MY3s7opPDy8k.png",
            "hQ2FiCttfLCdHFvC5BXMgcoN8JM.png",
            "jG1YJLS0seJ38PXBb8LLtAs5twE.png",
            "x4PrGz92nxd9Bif7VJf7Iovo.png",
            "XUJFrSUyUfLFroGnLvg3rgndyA.png",
            "fFGN7m67TIs7S99bzRaOIXRnZoU.png",
          ].map((src) => (
            <figure key={src} className="overflow-hidden rounded-xl">
              <img
                src={`/meea/${src}`}
                alt="MEEA menu concept"
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
            Restaurant guests leave feeling unsatisfied when their dining needs
            aren&apos;t met.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Many restaurant customers leave feeling unsatisfied because their
            needs—ordering, communicating, and general knowledge about their
            food—aren&apos;t properly met, leading to a disappointing dining
            experience.
          </p>
        </section>

        {/* SOLUTION – 6 images */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Solution
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Give guests more control, clarity, and confidence while dining
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              "BLGnbhuhIcriDVlP8JEqKMkVw.png",
              "FitTcNeoPQWmqzuSFl2HEz2oyvE.png",
              "byL6nn4OzgEPXWCENc1YV7k4IY.png",
              "BPA3Pfma5YQEM5t1u3TnSTXzwE.png",
              "ylbj3G5nwQIR1bD20h95mAicpeU.png",
              "vj8P99Nz1qXuspZdBe3QElkfoY.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-xl">
                <img
                  src={`/meea/${src}`}
                  alt="MEEA solution"
                  className="w-full h-auto"
                  style={
                    { imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties
                  }
                />
              </figure>
            ))}
          </div>
        </section>

        {/* Exploration and Direction */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Exploration and Direction
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Exploring how technology could improve the restaurant experience
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            We began by broadly exploring the restaurant industry and asking
            ourselves &quot;how might technology improve the dining experience
            while maintaining familiar patterns of interaction&quot;?
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Our early concepts focused on mobile-based solutions, including
            QR-code payments and phone-driven bill splitting. These ideas aimed
            to reduce friction around payment and make group dining more
            seamless.
          </p>
        </section>

        {/* User Interviews + Insight Switch */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            User Interviews + Insight Switch
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Research revealed tension between convenience and presence
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Through interviews and additional research methods, we uncovered a
            recurring theme: many guests felt uncomfortable using their phones
            during meals.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            While digital tools were often introduced to make dining more
            convenient, many guests described moments where these interactions
            pulled attention away from the table. Rather than supporting
            conversation, phone-based interactions frequently disrupted it.
          </p>
          <p className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
            Guests consistently expressed that phones often:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-700 dark:text-zinc-300">
            <li>Distract from conversation</li>
            <li>Feel socially inappropriate at the table</li>
            <li>Interrupt the natural flow of dining together</li>
          </ul>
        </section>

        {/* DESIGN RESPONSE – 3 images */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Design Response
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Embedding a digital device inside a physical binding
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            In response, our team shifted toward designing a dedicated physical
            and digital product. Creating a menu that lives on the table itself.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              "a1LaeVD9W9VRJa6TKLaIIWo0Erk.png",
              "QcE74IJ99RGYAJsTkcmILsiaEU.png",
              "yuWxoYaBVNNk20jyI13cSeDpOhM.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-xl">
                <img
                  src={`/meea/${src}`}
                  alt="MEEA design response"
                  className="w-full h-auto"
                  style={
                    { imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties
                  }
                />
              </figure>
            ))}
          </div>
        </section>

        {/* Competitive Landscape + Opportunity */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Competitive Landscape + Opportunity
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Industry norms help explain why this tension persists
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Our analysis showed that many existing solutions are designed to
            optimize efficiency, speed, or transactions. While effective in
            operational contexts, these systems frequently depend on guests
            using personal devices during meals—reinforcing the same
            distractions surfaced during our research.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Recognizing this pattern clarified an opportunity: to design a
            solution that meets modern dining needs while reducing reliance on
            behaviors guests already find disruptive.
          </p>
        </section>

        {/* USER PERSONA – 6 images */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            User Persona
          </h2>
          <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {[
              "UNB0FAptf7Ym3xnueVUaw2Rhhcs.png",
              "to60BtebXvaAQnPOv8JpX4dWOPk.png",
              "MFIJE5BWl5H679vIRuB2KThQm0.png",
              "YMJInG1dOEDJsMqIjPPycTjqUU.png",
              "9JrzTJ6D3BLcYMzsVRmUGW33Bqw.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-xl">
                <img
                  src={`/meea/${src}`}
                  alt="MEEA user persona"
                  className="w-full h-auto"
                  style={
                    { imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties
                  }
                />
              </figure>
            ))}
          </div>
          <div className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Mike
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Personality Traits
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>✨ Charismatic with high expectations</li>
                <li>📱 Business-focused, detail-oriented, efficiency is key</li>
                <li>
                  🎨 In another life, he wishes he went to interior design
                  school — strong respect for the art of the restaurant
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Goals and Motivations
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  ✅ Impress his family, friends, and clients with the hottest
                  dining on his dollar
                </li>
                <li>
                  ✅ Be able to cater to the needs (allergies, preferences) of
                  multiple people at the table at once
                </li>
                <li>✅ Have good timing and interactions with servers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Frustrations & Pain Points
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>
                  ❌ Not being able to reach the server when he needs to ask a
                  question
                </li>
                <li>❌ Lack of menu accessibility for his different guests</li>
                <li>
                  ❌ Feeling out of control, being misinformed or uninformed
                  about mishaps
                </li>
              </ul>
            </div>
          </div>
          </div>
        </section>

        {/* Features + Testing */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Features + Testing
          </h2>
          <p className="mb-8 font-medium text-zinc-900 dark:text-zinc-100">
            Designing features that support clarity, comfort, and accessibility
          </p>
          <p className="mb-6 text-zinc-700 dark:text-zinc-300">
            The following features were intentionally designed to support a wide
            range of guests and dining scenarios.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Feature 1
              </span>
              <h3 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
                Accessibility & Display Settings
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Light mode and dark mode</li>
                <li>• Adjustable screen brightness</li>
                <li>• Language selection</li>
                <li>• Optional visual effects selection</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Feature 2
              </span>
              <h3 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
                Dish Preview & Transparency
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Visual preview of dishes</li>
                <li>• Clear descriptions and ingredient context</li>
                <li>• Reduced reliance on server clarification</li>
              </ul>
            </div>
            <div className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Feature 3
              </span>
              <h3 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
                Interactive Kids Menu
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <li>• Simple games and playful interactions</li>
                <li>• Visual aids to help with decisions</li>
                <li>• A dedicated experience for children</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Low-fidelity Exploration */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Low-fidelity Exploration
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Exploring structure and flow through early wireframes — These
            low-fidelity wireframes were used to explore layout, hierarchy, and
            core interaction flows.
          </p>
        </section>

        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Add project images: The Final Designs, Style Guide
        </p>

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
