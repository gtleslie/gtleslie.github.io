"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function R({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className={className}>
      {children}
    </motion.div>
  );
}

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-xl">
      <img src={src} alt={alt} className="h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
    </figure>
  );
}

const W = "mx-auto max-w-[1000px] px-6 md:px-10";

const SECTION_IDS = ["context", "vision", "research", "design", "mid-fidelity", "high-fidelity", "pivotal-decisions", "features", "prototype"];

const navItems = [
  { href: "#context", label: "Context" },
  { href: "#vision", label: "Vision" },
  { href: "#research", label: "Research" },
  { href: "#design", label: "Design" },
  { href: "#mid-fidelity", label: "Mid Fi" },
  { href: "#high-fidelity", label: "Hi Fi" },
  { href: "#pivotal-decisions", label: "Key choices" },
  { href: "#features", label: "Features" },
  { href: "#prototype", label: "Prototype" },
];

export default function HMIPage() {
  const [activeSection, setActiveSection] = useState<string | null>("context");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const intersecting = new Set<string>();
    const updateActive = () => {
      const active = SECTION_IDS.find((id) => intersecting.has(id)) ?? null;
      setActiveSection(active);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });
        updateActive();
      },
      { rootMargin: "-12% 0px -55% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-white text-slate-900">
      {/* Sticky section nav — right side, minimal */}
      <nav
        aria-label="Case study sections"
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-8"
      >
        <div className="rounded-lg border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
          <div className="flex flex-col gap-2.5 border-l-2 border-slate-200 pl-3">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] font-medium uppercase tracking-widest transition-colors hover:text-slate-800 ${
                    isActive ? "font-semibold text-[#CC0000]" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── HERO + INTRO side by side (dark) ── */}
      <div className="bg-[#111111] text-white">
        <section className={`${W} pt-28 pb-16`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Honda HMI Redesign</p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">HondaConnect</h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
                  Redesigning the 4-inch round display of the Honda Rebel 500 into a community-driven, socially connected riding experience.
                </p>
              </motion.div>
              <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-neutral-800 pt-8 text-xs text-neutral-500">
                <div><span className="font-semibold text-white">Role</span><br />UX/UI Design</div>
                <div><span className="font-semibold text-white">Team</span><br />Team Bravo — 8</div>
                <div><span className="font-semibold text-white">Duration</span><br />10 Weeks</div>
                <div><span className="font-semibold text-white">Scope</span><br />HMI + Companion App</div>
              </div>
            </div>
            <div className="w-full overflow-hidden rounded-2xl lg:w-[55%]">
              <img src="/hmi/HMISystemRedesignHero.png" alt="HondaConnect HMI System Redesign" className="h-auto w-full" loading="eager" fetchPriority="high" />
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════
          ACT 1 — CONTEXT + VISION
      ══════════════════════════════════════════ */}
      <section id="context" className={`${W} py-20`}>
        <R>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">01 — Context</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The Challenge</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            We redesigned the HMI for the Honda Rebel 500 to be more community and new rider oriented through both new and improved features. Our mission: connecting riders in a stronger community. Our target audience: new rider and college age, female riders.
          </p>
        </R>
        <R className="mt-12">
          <div className="mx-auto max-w-[720px]">
            <Img src="/hmi/CurrentHondaLCDScreen.png" alt="Current Honda Rebel 500 LCD cluster" />
            <p className="mt-3 text-center text-xs text-slate-400">
              Current production Honda Rebel 500 LCD cluster — starting point for the redesign.
            </p>
          </div>
        </R>
      </section>

      {/* Vision — Honda Red band */}
      <section id="vision" className="bg-[#CC0000] py-24 text-white">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">The Vision</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              A Social Compass<br />for Motorcycles
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
              Seamless app + HMI connection that supports the ride journey: before, during, and after. Trip planning, ride sharing, and real time social features flow between your phone and the motorcycle display.
            </p>
          </R>
          <R className="mt-14">
            <div className="grid gap-px sm:grid-cols-3">
              {[
                { label: "Before", desc: "Plan routes, find riders, set destinations from the companion app." },
                { label: "During", desc: "Real time navigation, pack mode, and glanceable alerts on the HMI." },
                { label: "After", desc: "Share ride recaps, connect with new riders, and track stats." },
              ].map((phase) => (
                <div key={phase.label} className="bg-white/10 p-6 backdrop-blur-sm first:rounded-l-xl last:rounded-r-xl">
                  <p className="text-2xl font-bold tracking-tight">{phase.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{phase.desc}</p>
                </div>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACT 2 — RESEARCH
      ══════════════════════════════════════════ */}
      <section id="research" className="bg-slate-50 py-20">
        <div className={W}>
          <R>
            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">02 — Discovery</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Research</h2>
              </div>
              <div className="flex gap-10">
                <div className="text-right">
                  <p className="text-5xl font-bold tracking-tight">5</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Participants</p>
                </div>
                <div className="h-14 w-px bg-slate-300" />
                <div className="text-right">
                  <p className="text-5xl font-bold tracking-tight">130<span className="text-[#CC0000]">+</span></p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Data Points</p>
                </div>
              </div>
            </div>
          </R>

          <R className="mt-14">
            <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "01", t: "Physical → Digital", d: "Interface must match handlebar input layout." },
                { n: "02", t: "Glanceable Info", d: "Critical data stays large, central, readable." },
                { n: "03", t: "Simple Navigation", d: "Turn by turn arrows, minimal menu depth." },
                { n: "04", t: "Notification Hierarchy", d: "Alerts in a dedicated status zone." },
              ].map((c) => (
                <div key={c.t} className="bg-slate-50 p-6">
                  <p className="text-3xl font-bold tracking-tight text-slate-200">{c.n}</p>
                  <h4 className="mt-3 text-sm font-semibold tracking-tight">{c.t}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">{c.d}</p>
                </div>
              ))}
            </div>
          </R>

          <R className="mt-14">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Field Research</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-xl">
                <Img src="/hmi/HarleyFieldtrip.png" alt="Savannah HD field trip" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Field Trip 01</p>
                  <h4 className="mt-1 text-lg font-bold text-white">Savannah HD</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">Riders prioritize simple, glanceable displays. Reinforced minimal distraction in HMI design.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <Img src="/hmi/CurrentRebel.png" alt="Honda team trip" />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">Field Trip 02</p>
                  <h4 className="mt-1 text-lg font-bold text-white">Honda Team Trip</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">Hands on ergonomic feel of the Rebel 500 and 1100, informing HMI placement and content.</p>
                </div>
              </div>
            </div>
          </R>

          <R className="mt-14">
            <h3 className="text-2xl font-bold tracking-tight">The Disconnect</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
              New riders face isolation, lack of confidence, and fear — while existing biker communities rely on scattered forums, word of mouth, and informal groups.
            </p>
          </R>
          <R className="mt-10">
            <Img src="/hmi/Currentuserspace.png" alt="User space analysis" />
          </R>
        </div>
      </section>

      {/* Rider Quotes */}
      <section className="bg-[#111111] py-20 text-white">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">What Riders Said</p>
            <div className="mt-10 space-y-10">
              {[
                { q: "I think it would be kind of cool to just pop up. They'd just go out for a ride and suddenly you appear.", who: "Rider Interview #2" },
                { q: "It can be something as simple as riding on the highway and another biker passes, and suddenly you kind of group together.", who: "Rider Interview #4" },
                { q: "I've been on rides for 70 plus people, and now I know most of them by name.", who: "Rider Interview #5" },
              ].map((item, i) => (
                <R key={i}>
                  <div className="flex gap-6">
                    <span className="mt-1 text-3xl font-bold leading-none text-[#CC0000]">&ldquo;</span>
                    <div>
                      <p className="text-lg font-medium leading-relaxed text-neutral-200">{item.q}</p>
                      <p className="mt-3 text-xs uppercase tracking-widest text-neutral-600">— {item.who}</p>
                    </div>
                  </div>
                </R>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* Opportunity — Red accent */}
      <section className="bg-[#CC0000] py-20 text-white">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">The Opportunity</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">
              No universal, real time platform connects riders for spontaneous meetups and safety support.
            </h2>
          </R>
        </div>
      </section>

      {/* HMW */}
      <section className={`${W} py-20`}>
        <R>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">How Might We</p>
          <blockquote className="mt-4 max-w-3xl text-xl font-medium leading-snug tracking-tight sm:text-2xl">
            &ldquo;How might we redesign the Honda Rebel 500 HMI and mobile ecosystem to transform the riding experience from a solitary mechanical task into an intuitive, community-driven journey?&rdquo;
          </blockquote>
        </R>
      </section>

      {/* ══════════════════════════════════════════
          ACT 3 — DESIGN
      ══════════════════════════════════════════ */}
      <section id="design" className="bg-slate-50 py-20">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">03 — Design</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">User Persona</h2>
          </R>
          <R className="mt-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
              <div className="min-w-0 flex-1">
                <blockquote className="text-xl font-medium italic leading-snug text-slate-700 sm:text-2xl">
                  &ldquo;I bought this bike for freedom, but riding alone feels lonely, and sometimes unsafe.&rdquo;
                </blockquote>
                <div className="mt-8 space-y-4 text-sm text-slate-500">
                  <p><span className="font-semibold text-slate-800">Pain Points</span> — Little Representation · Isolation Fear · The Disconnect</p>
                  <p><span className="font-semibold text-slate-800">Goals</span> — Confidence · Connection · Content</p>
                  <p><span className="font-medium text-slate-700">Jenna Smith</span> · 23 · Barista · 5 months riding</p>
                </div>
              </div>
              <div className="w-full max-w-[320px] shrink-0 lg:max-w-[280px]">
                <figure className="overflow-hidden rounded-xl">
                  <img src="/hmi/Userpersonajenna.png" alt="User persona — Jenna Smith" className="h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* Four Pillars */}
      <section className={`${W} py-20`}>
        <R>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Four Pillars</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
            Our blue sky features: concepts we wanted to integrate into the HMI, the app, or both. Each pillar is labeled by where it lives — HMI, App, HMI &amp; App, or App → HMI.
          </p>
        </R>
        <R className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: "/hmi/PackModeIcon.svg", t: "Pack Mode", p: "HMI", d: "Social compass and nav syncing across a group." },
              { icon: "/hmi/HeatMapIcon.svg", t: "Community Heatmap", p: "APP", d: "Live map of nearby bikers, events, and hotspots." },
              { icon: "/hmi/RequestAssitenceIcon.svg", t: "Request Assistance", p: "HMI & APP", d: "Built in safety for quick help on the road." },
              { icon: "/hmi/BikeBumpIcon.svg", t: "Bike Bump", p: "APP → HMI", d: "Tap to send a friend request via NFC." },
            ].map((f) => (
              <div key={f.t} className="flex gap-4 rounded-xl border border-slate-200 p-6">
                <img src={f.icon} alt="" className="h-7 w-7 shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{f.p}</p>
                  <h4 className="text-base font-semibold">{f.t}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </R>
      </section>

      {/* Storyboards — compact 2x2 */}
      <section className={`${W} pb-20`}>
        <R>
          <h3 className="text-2xl font-bold tracking-tight">User Scenarios</h3>
        </R>
        <R className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { t: "Feeling Unsafe", src: "/hmi/FeelingUnsafeStoryboard.png" },
              { t: "Going About Life", src: "/hmi/GoingAboutLifeStoryboard.png" },
              { t: "Planning a Ride", src: "/hmi/PlanningARideStoryboard.png" },
              { t: "Bike Bump", src: "/hmi/BikeBumpStoryboard.png" },
            ].map((s) => (
              <div key={s.t}>
                <Img src={s.src} alt={s.t} />
                <p className="mt-3 text-sm font-semibold">{s.t}</p>
              </div>
            ))}
          </div>
        </R>
      </section>

      {/* Sketches & Lo-Fi (chronologically before mid-fi) */}
      <section className={`${W} pb-20`}>
        <R>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">03 — Early Exploration</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Sketches &amp; Lo Fi</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            Before moving into mid fidelity, we sketched dozens of cluster layouts and flows on paper. These lo-fi frames helped us explore states quickly and decide
            which ideas were worth refining.
          </p>
        </R>
        <R className="mt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Sketches</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {["/hmi/2ndBatch/Sketches1.png", "/hmi/2ndBatch/Sketches2.png", "/hmi/2ndBatch/sketches3.png"].map((s) => (
              <figure key={s} className="overflow-hidden rounded-xl">
                <img src={s} alt="Sketch" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
              </figure>
            ))}
          </div>
        </R>
        <R className="mt-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Lo Fi HMI Frames</p>
          <div className="grid gap-3 grid-cols-3 sm:grid-cols-5">
            {["/hmi/2ndBatch/HMILofi1.png", "/hmi/2ndBatch/Hmilofi2.png", "/hmi/2ndBatch/hmilofi3.png", "/hmi/2ndBatch/hmilofi4.png", "/hmi/2ndBatch/hmilofi5.png"].map((s) => (
              <figure key={s} className="overflow-hidden rounded-lg">
                <div className="aspect-[4/3] w-full">
                  <img src={s} alt="Lo-fi wireframe" className="block h-full w-full object-contain" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </div>
              </figure>
            ))}
          </div>
        </R>
      </section>

      {/* Mid-Fi — HMI first, then app, plus focused iterations */}
      <section id="mid-fidelity" className="bg-[#111111] py-20 text-white">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">04 — Iterate</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Mid Fidelity</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
              This stage was defined by constant iteration. We moved rapidly between sketches, wireframes, and mid fidelity screens — pressure testing our four blue sky features: <span className="font-semibold text-white">Pack Mode</span>, <span className="font-semibold text-white">Request Assistance</span>, <span className="font-semibold text-white">Bike Bump</span>, and the <span className="font-semibold text-white">Community Heatmap</span>. Each concept went through multiple rounds of critique, user feedback, and refinement before earning its place in the final system.
            </p>
          </R>

          {/* HMI mid-fi core screens */}
          <R className="mt-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">HMI Dashboard</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-7">
              {[
                "/hmi/HMImidfi1.png",
                "/hmi/HMImidfi2.png",
                "/hmi/HMImidfi3.png",
                "/hmi/HMImidfi4.png",
                "/hmi/HMImidfi5.png",
                "/hmi/HMImidfi6.png",
                "/hmi/HMImidfi7.png",
              ].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img
                    src={s}
                    alt="HMI mid-fi"
                    className="block h-auto w-full"
                    loading="lazy"
                    style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
                  />
                </figure>
              ))}
            </div>
          </R>

          <R className="mt-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Refinements</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
              {["/hmi/HMImidrefinements1.png","/hmi/HMImidrefinements2.png","/hmi/HMIMidrefinements3.png","/hmi/HMImidrefinements4.png","/hmi/HMIMIDrefinements5.png"].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img
                    src={s}
                    alt="HMI refinement"
                    className="block h-auto w-full"
                    loading="lazy"
                    style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
                  />
                </figure>
              ))}
            </div>
          </R>

          {/* HMI iteration clusters */}
          <R className="mt-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Map Layout Iterations</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
              {["/hmi/2ndBatch/HMImapmid1.png","/hmi/2ndBatch/HMImapmid2.png","/hmi/2ndBatch/HMImapmid3.png","/hmi/2ndBatch/HMImapmid4.png","/hmi/2ndBatch/HMImapmid5.png"].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img src={s} alt="HMI map iteration" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>

          <R className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Carousel Cards</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
              {["/hmi/2ndBatch/HMImidcel1.png","/hmi/2ndBatch/HMImidcel2.png","/hmi/2ndBatch/HMImidcel3.png","/hmi/2ndBatch/HMImidcel4.png","/hmi/2ndBatch/HMImidcel5.png"].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img src={s} alt="HMI carousel iteration" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>

          <R className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Notification States</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
              {["/hmi/2ndBatch/HMImidnoti1.png","/hmi/2ndBatch/HMImidnoti2.png","/hmi/2ndBatch/HMImidnoti3.png","/hmi/2ndBatch/HMImidnoti4.png","/hmi/2ndBatch/HMImidnoti5.png"].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img src={s} alt="HMI notification iteration" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>

          <R className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Request Assistance Variants</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
              {["/hmi/2ndBatch/HMImidrequest0.png","/hmi/2ndBatch/HMIMidrequest1.png","/hmi/2ndBatch/HMIMidrequest2.png","/hmi/2ndBatch/HMImidrequest3.png","/hmi/2ndBatch/HMImidrequest4.png"].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img src={s} alt="Request Assistance iteration" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>

          <R className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Boot-Up Animation</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
              {["/hmi/2ndBatch/HMImidani1.png","/hmi/2ndBatch/HMImidani2.png","/hmi/2ndBatch/HMImidani3.png","/hmi/2ndBatch/HMImidani4.png","/hmi/2ndBatch/HMIMidani5.png","/hmi/2ndBatch/HMImidani6.png"].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img src={s} alt="Boot-up animation frame" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>

          <R className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Color System Explorations</p>
            <div className="grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
              {["/hmi/2ndBatch/HMImidcolor1.png","/hmi/2ndBatch/HMImidcolor2.png","/hmi/2ndBatch/HMImidcolor3.png","/hmi/2ndBatch/HMImidcolor4.png","/hmi/2ndBatch/HMImidcolor5.png","/hmi/2ndBatch/HMImidcolor6.png","/hmi/2ndBatch/HMImidcolor7.png","/hmi/2ndBatch/HMImidcolor8.png","/hmi/2ndBatch/HMIMIDcolor9.png"].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img src={s} alt="Color exploration" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* Connect App mid-fi — separate section so HMI vs App are clearly different */}
      <section className="bg-white py-20 text-slate-900">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">04 — The App</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">HondaConnect App — Mid Fidelity</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
              Mid fidelity screens for the companion app that pairs with the HMI. Riders plan routes, discover events, and stay connected before and after the ride.
            </p>
          </R>
          <R className="mt-10">
            <div className="grid gap-3 grid-cols-3 lg:grid-cols-6">
              {[
                "/hmi/App Midfi Feed.png",
                "/hmi/AppMidfiHeat.png",
                "/hmi/AppMidfiPlanningAride1.png",
                "/hmi/MidfiPlanningaride2.png",
                "/hmi/Midfiprofile.png",
                "/hmi/MidfiappProfile2.png",
              ].map((s) => (
                <figure key={s} className="overflow-hidden rounded-lg">
                  <img src={s} alt="App mid-fi" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACT 4b — SYSTEM FLOWS (IA)
      ══════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">05 — Architecture</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">System Flows</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">Detailed interaction flows for each core feature — ensuring minimal cognitive load while riding.</p>
          </R>
          <div className="mt-12 space-y-10">
            {[
              { t: "Request Assistance", src: "/hmi/RequestAssistenceFlowLines.png" },
              { t: "Going About Life", src: "/hmi/GoingAboutLifeIA.png" },
              { t: "Bike Bump", src: "/hmi/BikeBumpIA.png" },
            ].map((f) => (
              <R key={f.t}>
                <p className="mb-3 text-sm font-semibold">{f.t}</p>
                <Img src={f.src} alt={`${f.t} flow`} />
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* Zoning */}
      <section className={`${W} pt-16 pb-10`}>
        <R>
          <h3 className="text-2xl font-bold tracking-tight">Zoning</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">Two layouts — driving (protected telltales) and user (flexible content windows).</p>
        </R>
        <R className="mx-auto mt-10 grid max-w-[800px] gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Driving</p>
            <Img src="/hmi/DrivingLayoutZoneing.png" alt="Driving layout" />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Other Pages</p>
            <Img src="/hmi/OtherPagesZoning.png" alt="Other pages layout" />
          </div>
        </R>
      </section>

      {/* ══════════════════════════════════════════
          ACT 5 — HIGH-FI SOLUTION
      ══════════════════════════════════════════ */}
      <section id="high-fidelity" className="bg-[#111111] py-20 text-white">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">05 — Solution</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">High Fidelity</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">Universal trip bar across all screens. Riders scroll key ride info using a single control input.</p>
          </R>
          <R className="mt-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Dashboard</p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <div className="w-full shrink-0 sm:w-[38%]">
                <Img src="/hmi/HMIHighfi1H.png" alt="High-fi hero — dashboard" />
              </div>
              <div className="grid flex-1 gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
                {["/hmi/HMIHighfi2H.png","/hmi/HMIHighfi3H.png","/hmi/HMIHighfi4H.png","/hmi/HMIHighfi5H.png","/hmi/HMIHIghfi6H.png"].map((s) => (
                  <Img key={s} src={s} alt="High-fi screen" />
                ))}
              </div>
            </div>
          </R>
          <R className="mt-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">Notifications &amp; Trip</p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <div className="w-full shrink-0 sm:w-[38%]">
                <Img src="/hmi/HMIHighfitrip6Hero.png" alt="High-fi hero — notifications" />
              </div>
              <div className="grid flex-1 gap-3 grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">
                {["/hmi/HmiHighfiTrip1.png","/hmi/HMIHighFiTrip2.png","/hmi/HMIHighfitrip3.png","/hmi/HMIHighfitrip4.png","/hmi/HMIHighfitrip5.png"].map((s) => (
                  <Img key={s} src={s} alt="High-fi trip screen" />
                ))}
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* Key choices — 3 groups, Before/After labels restored */}
      <section id="pivotal-decisions" className={`${W} pt-28 pb-20`}>
        <R>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Pivotal decisions</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">We made key design choices along the way. Here are a few that shaped the final system.</p>
        </R>
        <div className="mt-16 space-y-24">
          {/* Group 1 — TV remote to D-pad */}
          <R>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:items-center sm:gap-12">
              <div className="w-full max-w-[300px] sm:max-w-[320px]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Before</p>
                <Img src="/hmi/HMIBefore1.png" alt="Before D-pad change" />
              </div>
              <div className="flex shrink-0 items-center text-slate-400" aria-hidden>
                <span className="text-lg">→</span>
              </div>
              <div className="w-full max-w-[300px] sm:max-w-[320px]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#CC0000]">After</p>
                <Img src="/hmi/HmiAfter1.png" alt="After D-pad change" />
              </div>
            </div>
            <p className="mt-10 w-full max-w-2xl border-l-2 border-slate-200 pl-2.5 pr-4 text-sm leading-relaxed text-slate-500">We got rid of the TV remote paradigm and moved to a D-pad style for navigation.</p>
          </R>

          {/* Group 2 — Tick mark grid to dynamic grid */}
          <R>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:items-center sm:gap-12">
              <div className="w-full max-w-[300px] sm:max-w-[320px]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Before</p>
                <Img src="/hmi/HMIBefore2.png" alt="Before grid change" />
              </div>
              <div className="flex shrink-0 items-center text-slate-400" aria-hidden>
                <span className="text-lg">→</span>
              </div>
              <div className="w-full max-w-[300px] sm:max-w-[320px]">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#CC0000]">After</p>
                <Img src="/hmi/HMIAfter2.png" alt="After grid change" />
              </div>
            </div>
            <p className="mt-10 w-full max-w-2xl border-l-2 border-slate-200 pl-2.5 pr-4 text-sm leading-relaxed text-slate-500">We moved from a tick mark grid to a more dynamic grid. It moved better, simulated speed better, and felt more unique and interesting.</p>
          </R>

          {/* Group 3 — Media page to Pack Mode, media in trip window */}
          <R>
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:items-start sm:gap-10">
              <div className="grid w-full max-w-[680px] grid-cols-2 gap-5 sm:max-w-[720px]">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Before</p>
                  <img src="/hmi/HMIBefore3.png" alt="Before media and pack change" className="w-full rounded-lg" loading="lazy" />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Before</p>
                  <img src="/hmi/HMIBefore4.png" alt="Before media and pack change" className="w-full rounded-lg" loading="lazy" />
                </div>
              </div>
              <div className="flex shrink-0 items-center text-slate-400 sm:items-start sm:pt-7" aria-hidden>
                <span className="text-lg">→</span>
              </div>
              <div className="grid w-full max-w-[680px] grid-cols-2 gap-5 sm:max-w-[720px]">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#CC0000]">After</p>
                  <img src="/hmi/HMIAfter3.png" alt="After media and pack change" className="w-full rounded-lg" loading="lazy" />
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#CC0000]">After</p>
                  <img src="/hmi/HMIAfter4.png" alt="After media and pack change" className="w-full rounded-lg" loading="lazy" />
                </div>
              </div>
            </div>
            <p className="mt-10 w-full max-w-2xl border-l-2 border-slate-200 pl-2.5 pr-4 text-sm leading-relaxed text-slate-500">We got rid of the media page and added Pack Mode instead. Media now lives in the universal trip window so it can be accessed on any screen.</p>
          </R>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACT 6 — FEATURE DEEP-DIVES (consolidated)
      ══════════════════════════════════════════ */}
      <section id="features" className="bg-[#CC0000] py-16 text-white">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">06 — Features</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Deep Dives</h2>
          </R>
        </div>
      </section>

      {/* Pack Mode */}
      <section className={`${W} py-20`}>
        <R>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000]">Pack Mode</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">Social Compass</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">Shows nearby riders, syncs navigation across a group, and enables spontaneous or planned ride coordination.</p>
        </R>
        <R className="mt-10">
          <Img src="/hmi/HMI PackmodeDetailedLinedFlow2.png" alt="Pack Mode flow" />
        </R>
        <R className="mt-8">
          <Img src="/hmi/HeroshotMap.png" alt="Pack Mode map with d-pad" />
        </R>
      </section>

      {/* Request Assistance */}
      <section className={`${W} py-20`}>
        <R>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000]">Request Assistance</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">Safety First</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">Share location with a preselected contact or call for help through voice commands — hands stay on the handlebars.</p>
        </R>
        <R className="mt-10">
          <Img src="/hmi/RequestAssistenceFlowLines.png" alt="Request Assistance flow" />
        </R>
      </section>
      <section className="bg-[#111111] py-20">
        <div className="mx-auto max-w-[1600px]">
          <R>
            <div className="flex">
              {["/hmi/HeroShotRequest1.png","/hmi/Heroshotrequest2.png","/hmi/Heroshotrequest3.png"].map((s) => (
                <figure key={s} className="flex-1 overflow-hidden" style={{ margin: "0 -2px" }}>
                  <img src={s} alt="Request Assistance" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
                </figure>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* Heatmap + Bike Bump side by side */}
      <section className={`${W} py-20`}>
        <div className="grid gap-16 lg:grid-cols-2">
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000]">Community Heatmap</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">Discover Riders</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">Live map of nearby bikers, events, hotspots, and popular routes.</p>
            <div className="mt-6">
              <Img src="/hmi/Heatmapcardslinesdepiction.png" alt="Community Heatmap" />
            </div>
          </R>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000]">Bike Bump</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">Instant Connect</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">Tap phone to HMI to send a friend request. Turn a gas station encounter into a lasting connection.</p>
            <div className="mt-6">
              <Img src="/hmi/HeroshotBikebump.png" alt="Bike Bump" />
            </div>
          </R>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACT 7 — EXPLORATIONS THAT DIDN'T SHIP
      ══════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">07 — Explorations</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Concepts That Didn&apos;t Ship (Yet)</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
              Alongside the final system, we explored several directions that pushed how far the Rebel&apos;s cluster could go. These concepts didn&apos;t make the
              first release due to time and scope, but they helped define the edges of what HondaConnect could become.
            </p>
          </R>

          {/* Voice Commands — side by side with description */}
          <R className="mt-12">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">Voice Commands</p>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">We explored voice-driven interactions for hands free control while riding.</p>
            <div className="grid gap-3 grid-cols-3 md:grid-cols-5">
              {[
                "/hmi/2ndBatch/HMImidvoice1.png",
                "/hmi/2ndBatch/HMIMidvoice2.png",
                "/hmi/2ndBatch/HMIMidvoice3.png",
                "/hmi/2ndBatch/HMIMidvoice4.png",
                "/hmi/2ndBatch/HMImidvoice5.png",
              ].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img
                    src={s}
                    alt="Voice command exploration"
                    className="block h-auto w-full"
                    loading="lazy"
                    style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
                  />
                </figure>
              ))}
            </div>
          </R>

          {/* First-Person Map View — side by side with description */}
          <R className="mt-12">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">First Person Map View</p>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">We explored a first person map perspective for in ride context.</p>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
              {[
                "/hmi/HMImapmidfp1.png",
                "/hmi/hmimapmidfp2.png",
                "/hmi/hmimapmidfp3.png",
              ].map((s) => (
                <figure key={s} className="overflow-hidden rounded-xl">
                  <img
                    src={s}
                    alt="First-person map exploration"
                    className="block h-auto w-full"
                    loading="lazy"
                    style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties}
                  />
                </figure>
              ))}
            </div>
          </R>

          {/* TV Dock & Remote — one explanation like FP and Color */}
          <R className="mt-12">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">TV Dock &amp; Remote</p>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">We explored a TV remote / docked system interface; we later dropped TV mode and the media page, moved media into the trip window, and replaced the media page with pack mode so the experience stays ride focused.</p>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
              <figure className="overflow-hidden rounded-xl">
                <img src="/hmi/2ndBatch/HMIMidTV1.png" alt="TV mode exploration" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
              </figure>
              <figure className="overflow-hidden rounded-xl">
                <img src="/hmi/2ndBatch/HMIMidTV2.png" alt="TV exploration 2" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
              </figure>
              <figure className="overflow-hidden rounded-xl">
                <img src="/hmi/2ndBatch/HMImidtv3.png" alt="Media page replaced with pack mode" className="block h-auto w-full" loading="lazy" style={{ imageRendering: "-webkit-optimize-contrast" } as React.CSSProperties} />
              </figure>
            </div>
          </R>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACT 8 — ECOSYSTEM + PROTOTYPE
      ══════════════════════════════════════════ */}
      <section className="bg-[#111111] py-20 text-white">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">08 — Ecosystem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">HMI + App</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">The complete HondaConnect ecosystem — supporting the entire ride journey: before, during, and after.</p>
          </R>
          <R className="mt-12">
            <Img src="/hmi/HMI plus Screen.png" alt="HMI + App ecosystem" />
          </R>
          <R className="mt-10">
            <Img src="/hmi/BikewithLgo.png" alt="Honda Rebel with branding" />
          </R>
        </div>
      </section>

      {/* Design to Dev + Live Prototype */}
      <section className={`${W} py-20`}>
        <R>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Development Handoff</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight">Design → Dev</h3>
        </R>
        <R className="mt-10">
          <Img src="/hmi/Design to Development.png" alt="Design to dev handoff" />
        </R>
      </section>

      <section id="prototype" className="bg-slate-50 py-20">
        <div className={W}>
          <R>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CC0000]">Live Prototype</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">Brought to Life</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
              A developer built the prototype: they used a screen recording of an actual ride and mapped our HMI designs onto it so the ride and all the features we designed could be shown in context. We did not build the prototype ourselves; the demo brought our work to life.
            </p>
          </R>
          <R className="mt-10 grid gap-4 sm:grid-cols-3">
            <Img src="/hmi/IMG_9360.jpeg" alt="Prototype road view" />
            <Img src="/hmi/IMG_9392.jpeg" alt="Prototype navigation" />
            <Img src="/hmi/IMG_9373.jpeg" alt="Prototype setup" />
          </R>
        </div>
      </section>

    </main>
  );
}
