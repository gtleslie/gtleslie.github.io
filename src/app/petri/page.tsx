import Link from "next/link";

export default function PetriPage() {
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
            Web & App Design · 2024
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Petri - Music Platform
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            UX Designer · UI Designer
          </p>
          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>Year : 2024</span>
            <span>Industry : UX Design</span>
            <span>Team Size : 5 Members</span>
            <span>Project Duration : 12 weeks</span>
          </div>
        </header>

        {/* Project info – matches grantleslie.com order */}
        <section className="mb-16 space-y-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Project info
          </h2>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Problem
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Mainstream music platforms prioritize popular artists, making it difficult for local and emerging musicians to gain visibility. Listeners who want to discover local music often rely on fragmented tools like social media, flyers, or word of mouth, leading to disconnected experiences for both artists and fans.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Process
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              We conducted surveys and interviews to understand how people discover new music and how local artists promote their work. Our research focused on listening habits, discovery methods, and the importance of social features in music platforms.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Solution
            </h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">
              Petri is a music streaming and community platform designed to highlight local artists and foster meaningful connections between musicians and listeners. The platform combines genre-based discovery, community discussion, and artist support tools into a single experience.
            </p>
          </div>
        </section>

        {/* Hero – 1 image (Framer order) */}
        <figure className="mb-12 -mx-6 sm:-mx-8 lg:-mx-12 overflow-hidden">
          <img
            src="/petri/Petri1.png"
            alt="Petri music platform - Now Playing and Search screens"
            className="w-full h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' } as React.CSSProperties}
            loading="eager"
            fetchPriority="high"
          />
        </figure>

        {/* DISCOVERY */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Discovery
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Helping users explore music beyond mainstream recommendations
          </p>
        </section>

        {/* COMMUNITY */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Community
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Creating shared spaces for listeners and artists to connect.
          </p>
        </section>

        {/* ARTIST SUPPORT – 22 images (Framer order) */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Artist Support
          </h2>
          <p className="mb-8 text-zinc-700 dark:text-zinc-300">
            Giving artists visibility beyond streams and metrics.
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "xagP7Ql0b0ZaZNR3xrAadZ8xqw.png",
              "BDBHbHPUo70pJIvtxQzFdMWSIAo.png",
              "jGfiz9BQq7J5KrIiyTwrio84.png",
              "UPVrLlTehI6Tuo2JYI0mn67egE.png",
              "oyUyFesQgWZH0CR2rxivQOmadIo.png",
              "g0bN9xjhyTbL0NVik4TTvEChk.png",
              "TvtCdLbQGqjSG49mlbvzYXdv0LU.png",
              "N7gErznLpiEIuyXfRhf6vI6X6ug.png",
              "Zk9wTbJ63DG8gFHoQs06z0m698.png",
              "CZJZrJSqPHzbYf9LwevPnXBzfeU.png",
              "W5xajqnkdmDOnVcENokPZBm8Zs.png",
              "shqLcNoN0B7LXfoNo74p5eropw.png",
              "QZx2uRpj4Jkz5kOitxEkRWdaRx8.png",
              "L86swNdJQRrmkfXARbE6pmDXUrM.png",
              "HlvuwBbSRQZOAPrl2cf730fVbc.png",
              "OT47ygxwlYA0k1tbPmDFLNx6eU.png",
              "LbV8r8ckiqpTgyHatsl2i35Mnc8.png",
              "gGlDar2dfTymNShQV0yM4HyAHu4.png",
              "YVAOhVXWOj7zrIlAk65ahBXrVs.png",
              "xFtxaOItgus5T2Kecz58ufCTG8.png",
              "dqKHG0e5fKAHyOwNumCK4yt6Lg.png",
              "yPQHE96X8P4TIruCkfH11tZCyJY.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-xl">
                <img
                  src={`/petri/${src}`}
                  alt="Petri artist support"
                  className="w-full h-auto"
                  style={
                    { imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties
                  }
                />
              </figure>
            ))}
          </div>
        </section>

        {/* RESEARCH & DISCOVERY */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Research & Discovery
          </h2>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">
            Understanding how people discover music and how artists reach listeners
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            We conducted surveys and interviews to explore how users currently discover new music and how local artists promote their work. Research focused on listening habits, discovery methods, and the importance of social features in music platforms.
          </p>
          <blockquote className="mt-6 border-l-4 border-zinc-300 pl-4 italic text-zinc-600 dark:border-zinc-600 dark:text-zinc-400">
            &quot;..most of the time I find new music through friends or social media.&quot;
          </blockquote>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            Designing systems that support both creators and listeners
          </p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            This project reinforced the importance of research synthesis and designing community-focused systems that create value for both artists and audiences.
          </p>
        </section>

        {/* OUTCOME */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Outcome
          </h2>
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Key Insights
          </h3>
          <p className="mt-2 font-medium text-zinc-900 dark:text-zinc-100">
            Music discovery is social, but existing platforms don&apos;t support connection
          </p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Research revealed that users rely heavily on social and word-of-mouth discovery, while small artists struggle to gain meaningful visibility and engagement on major platforms. Streaming alone does not create community or lasting connection.
          </p>
        </section>

        {/* DESIGN DIRECTION */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Design Direction
          </h2>
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

        {/* COMPETITION */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Competition
          </h2>
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

        {/* VISUAL DIRECTION */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Visual Direction
          </h2>
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

        {/* RESEARCH EVIDENCE */}
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

        {/* USER PERSONA – Marshal (grantleslie.com: after RESEARCH EVIDENCE) */}
        <section className="mb-16 rounded-xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            User Persona
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Age: 24
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Location: Asheville, North Carolina
          </p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Bio: Marshal lives in Asheville, NC, a hub for local art and music. He enjoys discovering and supporting small artists, playing live shows, and releasing his own music, but feels major platforms don&apos;t adequately represent independent creators.
          </p>
          <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Marshal
          </h3>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Music Enthusiast · Music Streamer · Small Musician · Community Supporter
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Occupation: Small Musician and Waiter
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Music enjoyer and player
          </p>
        </section>

        {/* FINAL */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Final
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Petri is a music streaming and community platform designed to
            highlight local artists and foster meaningful connections between
            musicians and listeners.
          </p>
        </section>

        {/* DESIGN DECISIONS */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Design Decisions
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Based on early feedback and internal critique, we refined the
            strongest concepts and removed unnecessary complexity.
          </p>
        </section>

        {/* DESIGN SOLUTION – 4 images (Framer order) */}
        <section className="mb-16">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Design Solution
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              "waIfHMCU49KTfKBqsWakRi3wqWk.png",
              "IqFAxNGK7mm6ULKiBIJ3OUAbuw.png",
              "UXKWIwWgtZ0p8vQvsiPascXLBI.png",
              "q5NEyCXmT2fnmpnx1h6AsJCPZ74.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-xl">
                <img
                  src={`/petri/${src}`}
                  alt="Petri design solution"
                  className="w-full h-auto"
                  style={
                    { imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties
                  }
                />
              </figure>
            ))}
          </div>
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
