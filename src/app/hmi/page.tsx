"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
      {children}
    </p>
  );
}

function Headline({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl">
      {children}
    </h2>
  );
}

function Narrative({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-slate-500 dark:text-slate-400">
      {children}
    </p>
  );
}

function FullImage({ src, alt, rounded = true }: { src: string; alt: string; rounded?: boolean }) {
  return (
    <figure className={`overflow-hidden ${rounded ? "rounded-2xl" : ""}`}>
      <img
        src={src}
        alt={alt}
        className="h-auto w-full"
        loading="lazy"
        style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
      />
    </figure>
  );
}

export default function HMIPage() {
  return (
    <main className="bg-white dark:bg-slate-950">

      {/* ═══════════════════════════════════════════════════
          HERO — Clean image
      ═══════════════════════════════════════════════════ */}
      <section className="w-full">
        <img
          src="/hmi/HMISystemRedesignHero.png"
          alt="HondaConnect HMI System Redesign"
          className="h-auto w-full"
          loading="eager"
          fetchPriority="high"
        />
      </section>

      {/* ═══════════════════════════════════════════════════
          PROJECT HEADER + META
      ═══════════════════════════════════════════════════ */}
      <section className="py-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
              Honda HMI Redesign
            </p>
            <h1 className="mt-4 text-6xl font-bold leading-[0.95] tracking-tighter text-slate-900 dark:text-white sm:text-8xl lg:text-9xl">
              Honda
              <br />
              Connect
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">
              Redesigning the 4-inch round display of the Honda Rebel 500 into a
              community-driven, socially connected riding experience.
            </p>
          </motion.div>
          <Reveal>
            <div className="mt-16 flex flex-wrap gap-x-16 gap-y-6 border-b border-slate-200 pb-12 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <div><span className="font-medium text-slate-900 dark:text-white">Role</span><br />UX/UI Design</div>
              <div><span className="font-medium text-slate-900 dark:text-white">Team</span><br />Team Bravo — 8 Members</div>
              <div><span className="font-medium text-slate-900 dark:text-white">Course</span><br />SDES 495 + UXDG 315</div>
              <div><span className="font-medium text-slate-900 dark:text-white">Duration</span><br />10 Weeks</div>
              <div><span className="font-medium text-slate-900 dark:text-white">Scope</span><br />HMI + Companion App</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          01 — THE CONTEXT
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>01 — Introduction</SectionLabel>
            <Headline>The Context</Headline>
            <Narrative>
              We redesigned the HMI for the Honda Rebel 500 to be more community
              and new-rider oriented through both new and improved features. Our
              mission: connecting riders in a stronger community. Our target
              audience: new rider + college-age, female riders.
            </Narrative>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE VISION
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>The Vision</SectionLabel>
            <Headline>
              A Social Compass
              <br />
              for Motorcycles
            </Headline>
          </Reveal>
        </div>
      </section>

      {/* Dual Systems */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Dual Systems</SectionLabel>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              App + HMI Continuity
            </h3>
            <Narrative>
              Seamless app + HMI connection that supports the ride journey:
              before, during, and after. Trip planning, ride sharing, and
              real-time social features flow between your phone and the
              motorcycle display.
            </Narrative>
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/HMICard.png" alt="HMI + App dual system overview" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          02 — DISCOVERY
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>02 — Discovery</SectionLabel>
            <Headline>Research</Headline>
            <div className="mt-12 flex flex-wrap gap-16">
              <div>
                <p className="text-6xl font-bold tracking-tighter text-slate-900 dark:text-white">5</p>
                <p className="mt-2 text-lg text-slate-500">Participants</p>
              </div>
              <div>
                <p className="text-6xl font-bold tracking-tighter text-slate-900 dark:text-white">130+</p>
                <p className="mt-2 text-lg text-slate-500">Data Points</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-20">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Physical Controls → Digital Navigation", desc: "The interface must match the physical input handlebar layout." },
                { title: "Glanceable Information", desc: "Critical data must remain large, central, and easy to read while riding." },
                { title: "Simple Navigation", desc: "Riders prefer turn-by-turn arrows and minimal menu depth." },
                { title: "Notification Hierarchy", desc: "Alerts and messages should appear in a dedicated status zone." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dealership Visits */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Dealership Visits</SectionLabel>
            <div className="mt-8 grid gap-12 sm:grid-cols-2">
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Savannah HD Class Trip
                </h4>
                <Narrative>
                  Showed that riders prioritize simple, glanceable displays with
                  essential information. This reinforced the need for minimal
                  distraction in motorcycle HMI design.
                </Narrative>
              </div>
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Honda Team Trip
                </h4>
                <Narrative>
                  Got a feel for the ergonomics of the bike and how it affects
                  placement and content of the HMI system specifically on the
                  Rebel 500 and 1100.
                </Narrative>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/HarleyFieldtrip.png" alt="Dealership field trip" />
          </Reveal>
        </div>
      </section>

      {/* User Space */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>User Space</SectionLabel>
            <Headline>The Disconnect</Headline>
            <Narrative>
              New riders face isolation, lack of confidence, and fear — while
              existing biker communities rely on scattered forums, word-of-mouth,
              and informal groups. There&apos;s a gap between wanting to connect and
              having the tools to do so.
            </Narrative>
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/Currentuserspace.png" alt="User space analysis — new rider vs existing community" />
          </Reveal>
        </div>
      </section>

      {/* Real Riders — Quotes */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Real Riders</SectionLabel>
            <Headline>Insight</Headline>
          </Reveal>
          <Reveal className="mt-20">
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                "I think it would be kind of cool to just pop up. They'd just go out for a ride and suddenly you appear. I'd be ecstatic to see my buddy just come out of nowhere.",
                "It can be something as simple as riding on the highway and another biker passes, and suddenly you kind of group together. If you happen to take the same exit and stop at the same gas station, you're friends forever.",
                "I've been on rides for 70 plus people, and now I know most of them by name. That's kind of how I made friends there.",
              ].map((quote) => (
                <blockquote
                  key={quote.slice(0, 20)}
                  className="rounded-2xl border border-slate-200 p-8 text-lg italic leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-400"
                >
                  &ldquo;{quote}&rdquo;
                </blockquote>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>The Opportunity</SectionLabel>
            <Headline>
              No universal, real-time platform
              connects riders for spontaneous
              meetups and safety support
            </Headline>
            <Narrative>
              To transform riding from an isolated experience to a connected
              community.
            </Narrative>
          </Reveal>
        </div>
      </section>

      {/* How Might We */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>How Might We</SectionLabel>
            <blockquote className="mt-8 max-w-4xl text-3xl font-medium leading-snug tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              &ldquo;How might we redesign the Honda Rebel 500 HMI and mobile
              ecosystem to transform the riding experience from a solitary
              mechanical task into an intuitive, community-driven journey that
              empowers college-age female riders to feel safe, confident, and
              socially connected?&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRANSITION — Discovery → Design
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <p className="text-xl text-slate-500 dark:text-slate-400">
              What does our research and discovery mean visually?
            </p>
            <h2 className="mt-6 text-5xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-7xl lg:text-8xl">
              Discovery → Design
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          03 — USER PERSONA
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>03 — Design</SectionLabel>
            <Headline>User Persona</Headline>
          </Reveal>
          <Reveal className="mt-20">
            <div className="grid items-start gap-16 lg:grid-cols-2">
              <div>
                <blockquote className="text-2xl font-medium italic leading-snug tracking-tight text-slate-700 dark:text-slate-300 sm:text-3xl">
                  &ldquo;I bought this bike for freedom, but riding alone feels
                  lonely, and sometimes unsafe.&rdquo;
                </blockquote>
                <div className="mt-12 space-y-6 text-lg text-slate-500 dark:text-slate-400">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Pain Points</p>
                    <p>Little Representation · Isolation Fear · The Disconnect</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Goals</p>
                    <p>Confidence · Connection · Content</p>
                  </div>
                  <div className="space-y-1 text-base">
                    <p><span className="font-medium text-slate-900 dark:text-white">Name:</span> Jenna Smith</p>
                    <p><span className="font-medium text-slate-900 dark:text-white">Age:</span> 23 Years old</p>
                    <p><span className="font-medium text-slate-900 dark:text-white">Occupation:</span> Barista</p>
                    <p><span className="font-medium text-slate-900 dark:text-white">Riding Experience:</span> 5 months</p>
                  </div>
                </div>
              </div>
              <FullImage src="/hmi/Userpersonajenna.png" alt="User persona — Jenna Smith" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          KEY FEATURES
      ═══════════════════════════════════════════════════ */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Key Features</SectionLabel>
            <Headline>Four Pillars</Headline>
          </Reveal>
          <Reveal className="mt-20">
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                { icon: "/hmi/PackModeIcon.svg", title: "Pack Mode", platform: "HMI", desc: "A social feature that transforms your dashboard: social compass and nav syncing." },
                { icon: "/hmi/HeatMapIcon.svg", title: "Community Heatmap", platform: "APP", desc: "A live map showing nearby bikers, events, hotspots, routes, and gathering hubs." },
                { icon: "/hmi/RequestAssitenceIcon.svg", title: "Request Assistance", platform: "HMI & APP", desc: "A built-in safety feature designed to provide quick help for riders." },
                { icon: "/hmi/BikeBumpIcon.svg", title: "Bike Bump", platform: "APP → HMI", desc: "Nearby riders tap a bike's HMI to instantly send a friend request and connect." },
              ].map((feat) => (
                <div key={feat.title} className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <img src={feat.icon} alt="" className="h-8 w-8" />
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{feat.title}</h4>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{feat.platform}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-500">{feat.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STORYBOARDS
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Storyboards</SectionLabel>
            <Headline>Mapping the Experience</Headline>
            <Narrative>
              Four user scenarios that ground each feature in a real riding moment — from feeling unsafe at night to spontaneously meeting fellow riders.
            </Narrative>
          </Reveal>
          <div className="mt-20 space-y-24">
            {[
              { title: "Feeling Unsafe", desc: "The rider is riding at night and feels unsafe. Allowing the rider to share their location with a preselected contact, giving the rider peace of mind.", src: "/hmi/FeelingUnsafeStoryboard.png" },
              { title: "Going About Life", desc: "A user riding alone receives an invite from a rider nearby to join them on a cruise and join their pack.", src: "/hmi/GoingAboutLifeStoryboard.png" },
              { title: "Planning a Ride", desc: "How a rider would plan a ride with their friend group through the app — creating a route, time, and inviting fellow riders.", src: "/hmi/PlanningARideStoryboard.png" },
              { title: "Bike Bump", desc: "Making friends with a fellow rider by tapping their phone to the HMI to send a friend request.", src: "/hmi/BikeBumpStoryboard.png" },
            ].map((board) => (
              <Reveal key={board.title}>
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr]">
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                      {board.title}
                    </h4>
                    <p className="mt-4 text-lg leading-relaxed text-slate-500 dark:text-slate-400">
                      {board.desc}
                    </p>
                  </div>
                  <FullImage src={board.src} alt={`${board.title} storyboard`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INFORMATION ARCHITECTURE
      ═══════════════════════════════════════════════════ */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>IA Overview</SectionLabel>
            <Headline>System Flows</Headline>
            <Narrative>
              Detailed interaction flows for each core feature — ensuring minimal cognitive load while riding.
            </Narrative>
          </Reveal>
          <div className="mt-20 space-y-16">
            <Reveal>
              <h4 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                Request Assistance Flow
              </h4>
              <FullImage src="/hmi/RequestAssistenceFlowLines.png" alt="Request Assistance IA flow" />
            </Reveal>
            <Reveal>
              <h4 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                Going About Life Flow
              </h4>
              <FullImage src="/hmi/GoingAboutLifeIA.png" alt="Going About Life IA flow" />
            </Reveal>
            <Reveal>
              <h4 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                Bike Bump Flow
              </h4>
              <FullImage src="/hmi/BikeBumpIA.png" alt="Bike Bump IA flow" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          APP MID-FI
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>App Mid-Fi</SectionLabel>
            <Headline>Companion App</Headline>
            <Narrative>
              The mobile companion brings the HondaConnect ecosystem to your phone — feed, heatmap, pack management, ride planning, request assistance, and profile.
            </Narrative>
          </Reveal>
          <Reveal className="mt-20">
            <FullImage src="/hmi/App Midfi Feed.png" alt="App mid-fi — Feed and social features" />
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <FullImage src="/hmi/AppMidfiHeat.png" alt="App mid-fi — Heatmap" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/AppMidfiPlanningAride1.png" alt="App mid-fi — Planning a ride" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/MidfiPlanningaride2.png" alt="App mid-fi — Ride details" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/MidfiPlanningaride3.png" alt="App mid-fi — Invite riders" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/Midfiprofile.png" alt="App mid-fi — Profile" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/MidfiappProfile2.png" alt="App mid-fi — Profile detail" />
            </Reveal>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Reveal>
              <FullImage src="/hmi/Appcards1.png" alt="App mid-fi — Cards 1" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/Appcards2.png" alt="App mid-fi — Cards 2" />
            </Reveal>
          </div>
          <Reveal className="mt-16">
            <FullImage src="/hmi/AssistenceAbout.png" alt="App mid-fi — Request Assistance" />
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/MobileAAppAbout.png" alt="App mid-fi — About page" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HMI MID-FI
      ═══════════════════════════════════════════════════ */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>HMI Mid-Fi</SectionLabel>
            <Headline>Dashboard Screens</Headline>
            <Narrative>
              Mid-fidelity explorations of the round HMI display — home, navigation, pack mode, vehicle status, and social features.
            </Narrative>
          </Reveal>
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/hmi/HMIMid1.png", alt: "HMI Mid-fi — Home" },
              { src: "/hmi/HMImid2.png", alt: "HMI Mid-fi — Info overlay" },
              { src: "/hmi/HMIMID3.png", alt: "HMI Mid-fi — Navigation" },
              { src: "/hmi/HMImid4.png", alt: "HMI Mid-fi — Pack Mode" },
              { src: "/hmi/HMImid5.png", alt: "HMI Mid-fi — Vehicle Status" },
              { src: "/hmi/HMIMID6.png", alt: "HMI Mid-fi — Media" },
              { src: "/hmi/HMImid7.png", alt: "HMI Mid-fi — Social" },
            ].map((img) => (
              <Reveal key={img.src}>
                <FullImage src={img.src} alt={img.alt} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MID-FI REFINEMENTS
      ═══════════════════════════════════════════════════ */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Mid-Fi Refinements</SectionLabel>
            <Headline>Iteration</Headline>
            <Narrative>
              Refining screen layouts, tachometer placement, information hierarchy, and pack mode interactions through multiple rounds of iteration.
            </Narrative>
          </Reveal>
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/hmi/HMImidrefinements1.png",
              "/hmi/HMImidrefinements2.png",
              "/hmi/HMIMidrefinements3.png",
              "/hmi/HMImidrefinements4.png",
              "/hmi/HMIMIDrefinements5.png",
            ].map((src) => (
              <Reveal key={src}>
                <FullImage src={src} alt="HMI mid-fi refinement" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ZONING
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Zoning</SectionLabel>
            <Headline>Screen Architecture</Headline>
            <Narrative>
              After multiple iterations during the mid-fi phase, we finalized
              our zoning structure. Two distinct layouts — a driving layout for the homepage
              with protected telltales, and a user layout for every other page with flexible content windows.
            </Narrative>
          </Reveal>
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Driving Layout</h4>
              <FullImage src="/hmi/DrivingLayoutZoneing.png" alt="Driving layout zoning" />
            </Reveal>
            <Reveal>
              <h4 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Other Pages Layout</h4>
              <FullImage src="/hmi/OtherPagesZoning.png" alt="Other pages zoning" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HIGH-FI — Universal Info + Notifications
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>High Fidelity</SectionLabel>
            <Headline>The Solution</Headline>
            <Narrative>
              With the zoning foundation established, we moved into high-fidelity designs.
              A universal trip bar remains available across all screens — riders scroll through
              key ride info using a single control input.
            </Narrative>
          </Reveal>
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/hmi/HMIHighfi1H.png", alt: "High-fi — Home" },
              { src: "/hmi/HMIHighfi2H.png", alt: "High-fi — Trip Info" },
              { src: "/hmi/HMIHighfi3H.png", alt: "High-fi — Navigation" },
              { src: "/hmi/HMIHighfi4H.png", alt: "High-fi — Media" },
              { src: "/hmi/HMIHighfi5H.png", alt: "High-fi — Fuel & Range" },
              { src: "/hmi/HMIHIghfi6H.png", alt: "High-fi — Compass" },
            ].map((img) => (
              <Reveal key={img.src}>
                <FullImage src={img.src} alt={img.alt} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24">
            <SectionLabel>Universal Info</SectionLabel>
            <Narrative>
              In the current Harley interface, trip information is only accessible on a dedicated page. Our design
              introduces a universal trip bar that remains available across all screens. Riders can scroll through
              key ride information using a single control input, allowing trip data to stay visible while on home,
              navigation, diagnostics, and other pages.
            </Narrative>
          </Reveal>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/hmi/HmiHighfiTrip1.png", alt: "High-fi — Trip screen 1" },
              { src: "/hmi/HMIHighFiTrip2.png", alt: "High-fi — Trip screen 2" },
              { src: "/hmi/HMIHighfitrip3.png", alt: "High-fi — Trip screen 3" },
              { src: "/hmi/HMIHighfitrip4.png", alt: "High-fi — Trip screen 4" },
              { src: "/hmi/HMIHighfitrip5.png", alt: "High-fi — Trip screen 5" },
              { src: "/hmi/HMIHighfitrip6Hero.png", alt: "High-fi — Trip hero" },
            ].map((img) => (
              <Reveal key={img.src}>
                <FullImage src={img.src} alt={img.alt} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24">
            <SectionLabel>Notifications</SectionLabel>
            <Narrative>
              The notification area also acts as a container for incoming events while riding.
              Incoming events appear in orange for visual distinction. Calls, alerts, and ride
              updates appear here without forcing the rider to leave their current screen —
              keeping the interface focused on the road.
            </Narrative>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BEFORE VS AFTER
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Evolution</SectionLabel>
            <Headline>Before &amp; After</Headline>
            <Narrative>
              A direct comparison of where the Honda Rebel 500 HMI started versus
              where our redesign took it — from a basic mechanical gauge to a
              socially connected, community-driven dashboard.
            </Narrative>
          </Reveal>
          <div className="mt-20 space-y-24">
            {[
              { before: "/hmi/HMIBefore1.png", after: "/hmi/HmiAfter1.png" },
              { before: "/hmi/HMIBefore2.png", after: "/hmi/HMIAfter2.png" },
              { before: "/hmi/HMIBefore3.png", after: "/hmi/HMIAfter3.png" },
              { before: "/hmi/HMIBefore4.png", after: "/hmi/HMI After4.png" },
            ].map((pair, i) => (
              <Reveal key={i}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Before</p>
                    <FullImage src={pair.before} alt={`Before — screen ${i + 1}`} />
                  </div>
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">After</p>
                    <FullImage src={pair.after} alt={`After — screen ${i + 1}`} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURE DEEP-DIVE — PACK MODE
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Feature Deep-Dive</SectionLabel>
            <Headline>Pack Mode</Headline>
            <Narrative>
              Pack Mode transforms the HMI into a social compass — showing nearby
              riders, syncing navigation across a group, and allowing spontaneous
              or planned ride coordination. When activated, the dashboard shifts to
              display pack member positions, shared waypoints, and group status.
            </Narrative>
          </Reveal>
          <Reveal className="mt-20">
            <FullImage src="/hmi/HMI PackmodeDetailedLinedFlow2.png" alt="Pack Mode detailed interaction flow" />
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/HeroshotMap.png" alt="Pack Mode — map view with nearby riders" />
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/Heroshotmapnodpad.png" alt="Pack Mode — map view clean" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURE DEEP-DIVE — REQUEST ASSISTANCE
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Feature Deep-Dive</SectionLabel>
            <Headline>Request Assistance</Headline>
            <Narrative>
              A built-in safety feature designed to provide quick help for riders.
              Whether it&apos;s a breakdown, feeling unsafe, or an emergency — the
              system enables riders to share their location with a preselected
              contact or call for help through voice commands without taking their
              hands off the handlebars.
            </Narrative>
          </Reveal>
          <Reveal className="mt-20">
            <FullImage src="/hmi/RequestAssistenceFlowLines.png" alt="Request Assistance detailed flow" />
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/HMIReciveingInfoiteDetailedLinesFlow.png" alt="Receiving information detailed flow" />
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <Reveal>
              <FullImage src="/hmi/HeroShotRequest1.png" alt="Request Assistance — screen 1" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/Heroshotrequest2.png" alt="Request Assistance — screen 2" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/Heroshotrequest3.png" alt="Request Assistance — screen 3" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURE DEEP-DIVE — COMMUNITY HEATMAP
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Feature Deep-Dive</SectionLabel>
            <Headline>Community Heatmap</Headline>
            <Narrative>
              A live map showing nearby bikers, events, hotspots, popular routes,
              and gathering hubs. The heatmap helps riders discover their local
              riding community and find places where other riders are active —
              turning the app into a social discovery tool.
            </Narrative>
          </Reveal>
          <Reveal className="mt-20">
            <FullImage src="/hmi/Heatmapcardslinesdepiction.png" alt="Community Heatmap — card and flow depiction" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURE DEEP-DIVE — BIKE BUMP
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Feature Deep-Dive</SectionLabel>
            <Headline>Bike Bump</Headline>
            <Narrative>
              Nearby riders can tap their phone to the motorcycle&apos;s HMI to
              instantly send a friend request and connect. Bike Bump bridges the
              gap between physical encounters and digital community — making it
              effortless to turn a chance meeting at a gas station into a lasting
              riding connection.
            </Narrative>
          </Reveal>
          <Reveal className="mt-20">
            <FullImage src="/hmi/HeroshotBikebump.png" alt="Bike Bump — hero interaction" />
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/BikeBumpInteraction.png" alt="Bike Bump — interaction flow" />
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Reveal>
              <FullImage src="/hmi/BikeBumpCard001.png" alt="Bike Bump — card view 1" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/BikeBumpCard002.png" alt="Bike Bump — card view 2" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HMI + SCREEN OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>System Overview</SectionLabel>
            <Headline>HMI + App Ecosystem</Headline>
            <Narrative>
              The complete HondaConnect ecosystem — a seamless connection between
              the motorcycle&apos;s round HMI display and the companion mobile app,
              supporting the entire ride journey: before, during, and after.
            </Narrative>
          </Reveal>
          <Reveal className="mt-20">
            <FullImage src="/hmi/HMI plus Screen.png" alt="HMI plus companion app — full ecosystem view" />
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/BikewithLgo.png" alt="Honda Rebel with HondaConnect branding" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DESIGN TO DEVELOPMENT HANDOFF
      ═══════════════════════════════════════════════════ */}
      <section className="pb-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Development Handoff</SectionLabel>
            <Headline>Design → Dev</Headline>
          </Reveal>
          <Reveal className="mt-16">
            <FullImage src="/hmi/Design to Development.png" alt="Design to development handoff" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LIVE PROTOTYPE
      ═══════════════════════════════════════════════════ */}
      <section className="py-64">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16">
          <Reveal>
            <SectionLabel>Live Prototype</SectionLabel>
            <Headline>Brought to Life</Headline>
            <Narrative>
              To validate the design in a real-world context, our team built a
              working prototype using Arduino hardware and Adobe Flash to drive
              the round HMI display. A developer on the team took it on an
              actual motorcycle ride through Savannah, recording the full
              experience with a GoPro. The prototype simulated live navigation,
              real-time speed data, turn-by-turn directions, and animated
              transitions — all running on the physical display while riding a
              real route. Seeing the interface respond to actual road conditions,
              turns, and speed changes confirmed that our design decisions held
              up beyond the screen.
            </Narrative>
          </Reveal>
          <div className="mt-20 grid gap-8 sm:grid-cols-3">
            <Reveal>
              <FullImage src="/hmi/IMG_9360.jpeg" alt="Prototype running live navigation with simulated road footage" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/IMG_9392.jpeg" alt="Close-up of the physical HMI display showing real-time navigation" />
            </Reveal>
            <Reveal>
              <FullImage src="/hmi/IMG_9373.jpeg" alt="Live prototype setup with round HMI display and GoPro road view" />
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}
