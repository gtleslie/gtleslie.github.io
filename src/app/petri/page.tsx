import Link from "next/link";

export default function PetriPage() {
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
            Web & App Design · 2024
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Petri - Music Platform
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            UX Designer · UI Designer · 5 Members · 12 weeks
          </p>
        </header>

        <figure className="mb-16 overflow-hidden rounded-xl">
          <img
            src="/petri/hero.png"
            alt="Petri music platform - Now Playing and Search screens"
            className="w-full h-auto object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </figure>

        {/* Project info */}
        <section className="mb-16 space-y-8 text-zinc-700 dark:text-zinc-300">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Project info
            </h2>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Problem
            </h3>
            <p className="mt-2">
              Mainstream music platforms prioritize popular artists, making it
              difficult for local and emerging musicians to gain visibility.
              Listeners who want to discover local music often rely on
              fragmented tools like social media, flyers, or word of mouth,
              leading to disconnected experiences for both artists and fans.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Process
            </h3>
            <p className="mt-2">
              We conducted surveys and interviews to understand how people
              discover new music and how local artists promote their work. Our
              research focused on listening habits, discovery methods, and the
              importance of social features in music platforms.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Solution
            </h3>
            <p className="mt-2">
              Petri is a music streaming and community platform designed to
              highlight local artists and foster meaningful connections between
              musicians and listeners. The platform combines genre-based
              discovery, community discussion, and artist support tools into a
              single experience.
            </p>
          </div>
        </section>

        {/* Key Pillars */}
        <section className="mb-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Discovery
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Helping users explore music beyond mainstream recommendations
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Community
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Creating shared spaces for listeners and artists to connect
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Artist Support
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Giving artists visibility beyond streams and metrics
            </p>
          </div>
        </section>

        {/* User Persona - Marshall */}
        <section className="mb-16 rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            User Persona
          </h2>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Marshall
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Music Enthusiast · Music Streamer · Small Musician · Community
            Supporter
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Age: 24 · Location: Asheville, North Carolina · Occupation: Small
            Musician and Waiter
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Marshall lives in Asheville, NC, a hub for local art and music. He
            enjoys discovering and supporting small artists, playing live shows,
            and releasing his own music, but feels major platforms don&apos;t
            adequately represent independent creators. Music enjoyer and player.
          </p>
        </section>

        {/* Research & Discovery */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Research & Discovery
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Understanding how people discover music and how artists reach
            listeners
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            We conducted surveys and interviews to explore how users currently
            discover new music and how local artists promote their work. Research
            focused on listening habits, discovery methods, and the importance
            of social features in music platforms.
          </p>
          <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-600 dark:text-zinc-400">
            &quot;..most of the time I find new music through friends or social
            media.&quot;
          </blockquote>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Designing systems that support both creators and listeners — This
            project reinforced the importance of research synthesis and
            designing community-focused systems that create value for both
            artists and audiences.
          </p>
        </section>

        {/* Outcome - Key Insights */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Outcome
          </h2>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Key Insights
          </h3>
          <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">
            Music discovery is social, but existing platforms don&apos;t support
            connection
          </p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Research revealed that users rely heavily on social and word-of-mouth
            discovery, while small artists struggle to gain meaningful
            visibility and engagement on major platforms. Streaming alone does
            not create community or lasting connection.
          </p>
        </section>

        {/* Design Direction */}
        <section className="mb-16">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Design Direction
          </h3>
          <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">
            Shifting focus from algorithmic popularity to local connection
          </p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Based on these insights, we defined a design direction centered on
            local discovery, community interaction, and direct artist support.
            These principles guided feature prioritization and shaped the
            overall structure of the platform.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            A community-first music experience built around discovery and
            interaction — Petri combines music streaming, genre-based discovery,
            and community discussion into a single experience designed to
            strengthen connections between listeners and local artists.
          </p>
        </section>

        {/* Competition */}
        <section className="mb-16">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Competition
          </h3>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            How current platforms approach music discovery and promotion — We
            reviewed existing music and social platforms to understand how they
            support discovery, artist visibility, and community interaction
            across different use cases.
          </p>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Apple Music · Spotify · Instagram · Soundcloud · Discord
          </p>
        </section>

        {/* Visual Direction */}
        <section className="mb-16">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Visual Direction
          </h3>
          <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">
            Establishing a brand rooted in growth, texture, and community
          </p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            The visual identity was inspired by organic growth and connection,
            reflecting how music evolves through shared experience and local
            communities.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            The visual direction draws from how music grows and evolves through
            culture, similar to mold. The name Petri reflects something organic,
            interconnected, and full of potential, mirroring the diverse
            textures and styles found in music.
          </p>
        </section>

        {/* Process sections */}
        <section className="mb-16 space-y-8">
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Research Evidence
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              What listeners and artists told us — Survey results and
              interviews revealed that users rely heavily on social media and
              word-of-mouth for discovery, while artists struggle to gain
              visibility and sustained engagement on existing platforms.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Ideation & Exploration
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Translating research into early concepts — Using insights around
              social discovery, community, and artist visibility, we explored
              multiple layout and feature concepts through low-fidelity
              sketches. These helped us rapidly test structure, hierarchy, and
              interaction patterns before committing to high-fidelity design.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Structure & Flow
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Defining core features through mid-fidelity wireframes — Building
              on the visual direction and research insights, we developed
              mid-fidelity wireframes to define core features, navigation flow,
              and information hierarchy. This phase focused on validating
              structure and interaction patterns before applying final visual
              styling.
            </p>
          </div>
          <div>
            <p className="text-zinc-700 dark:text-zinc-300">
              Refining concepts through iteration and feedback — Based on early
              feedback and internal critique, we refined the strongest concepts
              and removed unnecessary complexity. This step helped clarify
              feature priorities and informed the final interaction and visual
              design.
            </p>
          </div>
        </section>

        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          Add project images: User Persona, Petri Music Screens, Design
          Decisions, Design Solution
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
