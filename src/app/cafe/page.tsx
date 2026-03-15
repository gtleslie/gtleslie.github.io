import {
  SectionLabel,
  SectionHeading,
  BodyText,
  PullQuote,
} from "@/components/CaseStudyLayout";

const features = [
  {
    title: "Discover Calendars",
    description:
      "Explore and subscribe to public or shared calendars for events near you.",
    images: ["/cafe/wr93jCkEPYXU0MVwvTcSuPIAMvA.png"],
  },
  {
    title: "Add or Import Events",
    description: "Sync or import events from friends and family",
    images: [
      "/cafe/lTvdOL8KHIp5TKz9O4Yzobhs.png",
      "/cafe/FB6acVEXrSYflNLRaBubJEadDE.png",
    ],
  },
  {
    title: "Personalize Your Calendar",
    description:
      "Personalize events with categories, icons, and colors that fit your schedule.",
    images: [
      "/cafe/pVMsZXMvkXcHM5onuankXNrCQns.png",
      "/cafe/mVXkLASqNKOZyiAOGEKPpvk8.png",
    ],
  },
  {
    title: "Edit Events",
    description: "Quickly add and manage events",
    images: [
      "/cafe/BqiVnlo0a1Ncu9UXFDRrkFS00.png",
      "/cafe/9OxqXSEKTlhVIdVh1lOCuKOXQ.png",
    ],
  },
];

const container = "mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16";
const narrow = "mx-auto max-w-[1000px] px-6 md:px-12 lg:px-16";

export default function CafePage() {
  return (
    <main>
      {/* Project header */}
      <div className={container}>
        <div className="flex flex-col gap-4 pt-[240px] sm:pt-[180px] lg:pt-[240px]">
          <h1 className="max-w-[1080px] text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl lg:text-6xl">
            Cafe - Calendar For Everything (WIP)
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
            <span>Web &amp; App Design</span>
            <span className="h-4 w-px bg-zinc-300 opacity-15 dark:bg-zinc-600" />
            <span>2025</span>
            <span className="h-4 w-px bg-zinc-300 opacity-15 dark:bg-zinc-600" />
            <span>Lead Designer</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className={container}>
        <div className="pt-16">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="/cafe/cafecard.png"
              alt="CAFÉ hero"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Below-hero label */}
      <div className={container}>
        <div className="flex items-center justify-center gap-2 py-[146px] sm:gap-[386px]">
          <p className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-[32px]">
            Personal Project
          </p>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100 sm:text-[22px]">
            UI/UX Design
          </p>
        </div>
      </div>

      {/* Feature showcase */}
      <div className="space-y-32 sm:space-y-40">
        {features.map((feat, i) => (
          <section key={feat.title} className={container}>
            <div
              className={`flex flex-col items-center gap-10 sm:flex-row sm:gap-16 lg:gap-20 ${
                i % 2 === 1 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full shrink-0 sm:w-[280px] lg:w-[320px]">
                <h3 className="text-[28px] font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 lg:text-[34px]">
                  {feat.title}
                </h3>
                <p className="mt-4 text-[17px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {feat.description}
                </p>
              </div>
              <div className="flex flex-1 items-center gap-5">
                {feat.images.map((src) => (
                  <figure key={src} className="overflow-hidden rounded-3xl">
                    <img
                      src={src}
                      alt={feat.title}
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
          </section>
        ))}
      </div>

      {/* Text sections */}
      <div className="flex flex-col items-center gap-[120px] pt-[120px] pb-20">
        {/* Project info */}
        <section className={narrow}>
          <SectionLabel>Project Info</SectionLabel>
          <div className="mt-8 space-y-10">
            <div>
              <SectionHeading>Scope</SectionHeading>
              <BodyText>
                The goal of this project was to design a dead simple calendar
                experience that prioritizes usability over feature overload.
                Rather than competing with enterprise calendar platforms, the
                focus was on creating an interface that makes viewing, sharing,
                and understanding schedules effortless especially for families,
                small groups, and public facing use cases.
              </BodyText>
            </div>
            <div>
              <SectionHeading>Process</SectionHeading>
              <BodyText>
                I reviewed existing calendar tools to understand where complexity
                and confusion occur, then focused on simplifying the experience
                through clear hierarchy and minimal interface elements. The
                design was refined through iterative layout and visual decisions
                to ensure the calendar could be understood and used without
                explanation.
              </BodyText>
            </div>
            <div>
              <SectionHeading>Solution</SectionHeading>
              <BodyText>
                The final solution is a minimal, modern calendar interface that
                makes it easy to see what matters at a glance. Events are
                visually organized, color coded for clarity, and designed to
                scale across different contexts from personal schedules to shared
                or public calendars.
              </BodyText>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className={narrow}>
          <SectionLabel>Problem</SectionLabel>
          <SectionHeading>
            Calendars work well alone, but break down when plans involve other
            people
          </SectionHeading>
          <BodyText>
            Modern calendar apps are effective at showing personal events, but
            they become difficult to manage once users need to interact with
            shared schedules, discover new calendars, or reuse existing plans.
            Browsing events, coordinating with others, or pulling in outside
            schedules often requires switching tools or manually recreating
            information, adding friction to something meant to feel simple.
          </BodyText>
        </section>

        {/* Opportunity */}
        <section className={narrow}>
          <SectionLabel>Opportunity</SectionLabel>
          <SectionHeading>
            Calendars don&apos;t need fewer features, they need better structure
          </SectionHeading>
          <BodyText>
            Rather than stripping calendars down further, there&apos;s an
            opportunity to rethink how complexity is organized. If discovery,
            sharing, and filtering are designed intentionally, a calendar can
            support richer use cases without overwhelming the user or cluttering
            their primary schedule.
          </BodyText>
        </section>

        {/* Design Intent */}
        <section className={narrow}>
          <SectionLabel>Design Intent</SectionLabel>
          <SectionHeading>
            A simple interface that supports more flexible calendar behaviors
          </SectionHeading>
          <BodyText>
            CAFÉ explores how a clean, minimal UI can still support advanced
            actions like browsing public calendars, saving schedules for later,
            filtering visibility, and sharing events. The goal isn&apos;t to
            compete on simplicity alone, but to make powerful calendar behaviors
            feel obvious and approachable.
          </BodyText>
        </section>

        {/* Research & Discovery */}
        <section className={narrow}>
          <SectionLabel>Research &amp; Discovery</SectionLabel>
          <SectionHeading>
            Understanding how people discover, reuse, and manage schedules
          </SectionHeading>
          <BodyText>
            I reviewed existing calendar tools and observed how users currently
            find events, share schedules, and manage multiple calendars at once.
            Research showed that people often rely on external links, messages,
            or screenshots to coordinate plans, rather than using the calendar
            itself as a shared space.
          </BodyText>
        </section>

        {/* Insight */}
        <section className={narrow}>
          <PullQuote>
            People want to explore and reference calendars before fully
            committing to them
          </PullQuote>
        </section>

        <section className={narrow}>
          <SectionLabel>Insight</SectionLabel>
          <BodyText>
            People frequently want to browse calendars, temporarily view
            schedules, or save them for later without immediately adding
            everything to their main calendar. The lack of lightweight ways to
            preview, filter, or hide calendars leads to clutter and hesitation
            around sharing.
          </BodyText>
        </section>

        {/* Product Direction */}
        <section className={narrow}>
          <SectionLabel>Product Direction</SectionLabel>
          <SectionHeading>
            Treat calendars as discoverable, filterable collections not just
            fixed views
          </SectionHeading>
          <BodyText>
            CAFÉ reframes calendars as flexible layers that users can turn on,
            hide, save, or share depending on context. This allows users to
            explore events and schedules without permanently altering their
            primary calendar or losing clarity.
          </BodyText>
        </section>

        {/* Core Features */}
        <section className={narrow}>
          <SectionLabel>Core Features</SectionLabel>
          <SectionHeading>
            Supporting discovery, control, and collaboration without added
            complexity
          </SectionHeading>
          <BodyText>
            CAFÉ introduces features that let users browse public or shared
            calendars, save calendars to revisit later, and pull individual
            events or entire schedules into their own view. Users can filter
            calendars on and off, hide specific schedules, create multiple
            calendars for different needs, and share selectively, all while
            keeping the interface readable and calm.
          </BodyText>
        </section>

        {/* Solution */}
        <section className={narrow}>
          <SectionLabel>Solution</SectionLabel>
          <SectionHeading>
            A minimal calendar interface built for sharing, filtering, and reuse
          </SectionHeading>
          <BodyText>
            The current design focuses on clarity first, using familiar calendar
            patterns and a simple visual hierarchy so users can easily track
            events, tasks, and schedules. Beyond basic planning, CAFÉ supports
            discovering calendars, saving schedules for later, filtering
            visibility, and sharing events without overwhelming the main calendar
            view. The goal is to keep everyday planning simple while making more
            advanced calendar behaviors feel natural and easy to use.
          </BodyText>
        </section>

        {/* Solution images */}
        <section className={container}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-[40px]">
            {[
              "/cafe/S2Oq6f2Y8FZJraL6NUYkiCFFgCI.png",
              "/cafe/rkUl5iemGOWWglwLHKELJ9TJZY.png",
              "/cafe/moFHXYuIhtw1p23UOlaHDrNi47o.png",
              "/cafe/P5fWcFCJ8OGjkWBMklQcaHyiR4.png",
              "/cafe/o3uCS7XxjrBWCdGX12feYY2unbc.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt="CAFÉ app screen"
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
        </section>

        {/* Current State */}
        <section className={narrow}>
          <SectionLabel>Current State</SectionLabel>
          <SectionHeading>
            An evolving concept exploring direction and identity
          </SectionHeading>
          <BodyText>
            The screens shown represent an early visual and structural direction
            for CAFÉ. While they demonstrate how key interactions and features
            could work, the system is not yet fully defined. The product is
            currently being workshopped to refine its positioning and clarify
            what makes it distinct within the calendar space.
          </BodyText>
        </section>
      </div>
    </main>
  );
}
