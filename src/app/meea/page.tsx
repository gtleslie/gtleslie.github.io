import {
  CaseStudyHero,
  NarrowSection,
  SectionLabel,
  SectionHeading,
  BodyText,
  GalleryCluster,
  FullWidthImages,
  PullQuote,
} from "@/components/CaseStudyLayout";

export default function MeeaPage() {
  return (
    <main>
      {/* 1. Full-viewport hero */}
      <CaseStudyHero
        src="/meea/Meea-creative.png"
        alt="MEEA digital menu concept"
        title="MEEA"
      />

      <div className="mt-24 space-y-16 pb-20 sm:space-y-20">
        {/* 2. Project meta */}
        <NarrowSection>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>Year : 2025</span>
            <span>Industry : UX Design</span>
            <span>Team Size : 3 Members</span>
            <span>Project Duration : 10 weeks</span>
          </div>
        </NarrowSection>

        {/* 3. Gallery cluster — 15 app screens */}
        <GalleryCluster
          images={[
            "/meea/DFM6mFATaZjMUM9QZaahQfHh0G0.png",
            "/meea/MxeUyJpOHH1ElhFpYyhXA26t7E.png",
            "/meea/lijWxVrmwDYgM7AONlQjTcyRPbU.png",
            "/meea/2lNS7ofzybOsJvX932VJUDVkc.png",
            "/meea/Gy2fmXhKGOqP9bZnFhWQHKAOYH4.png",
            "/meea/A45Y6HZ6uGds2aKaVJUGhviadQ0.png",
            "/meea/RGQFIgrgqgfX0wQ3W7g80tWhp60.png",
            "/meea/sKORR6u83jweD49ZyrZwzFow4.png",
            "/meea/h2bRsBkCb7dkWtQz2YmsrY1WCE.png",
            "/meea/R4bqKCjNLjCn0y8MY3s7opPDy8k.png",
            "/meea/hQ2FiCttfLCdHFvC5BXMgcoN8JM.png",
            "/meea/jG1YJLS0seJ38PXBb8LLtAs5twE.png",
            "/meea/x4PrGz92nxd9Bif7VJf7Iovo.png",
            "/meea/XUJFrSUyUfLFroGnLvg3rgndyA.png",
            "/meea/fFGN7m67TIs7S99bzRaOIXRnZoU.png",
          ]}
          columns={4}
          alt="MEEA menu concept screen"
        />

        {/* 4. Problem */}
        <NarrowSection>
          <SectionLabel>Problem</SectionLabel>
          <SectionHeading>
            Restaurant guests leave feeling unsatisfied when their dining needs
            aren&apos;t met
          </SectionHeading>
          <BodyText>
            Many restaurant customers leave feeling unsatisfied because their
            needs—ordering, communicating, and general knowledge about their
            food—aren&apos;t properly met, leading to a disappointing dining
            experience.
          </BodyText>
        </NarrowSection>

        {/* 5. Solution — 3 cards */}
        <NarrowSection>
          <SectionLabel>Solution</SectionLabel>
          <SectionHeading>
            Give guests more control, clarity, and confidence while dining
          </SectionHeading>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Menu Browsing / Discovery",
                text: "Explore the menu with clarity and confidence, without interrupting the moment.",
              },
              {
                title: "Accessibility & Display Settings",
                text: "Adjust the menu to match your comfort, from lighting and language to motion and visibility, directly at the table.",
              },
              {
                title: "Payment & Checkout",
                text: "Complete the check with clarity and ease, without disrupting the flow of the meal.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </NarrowSection>

        {/* 6. Full-width solution images */}
        <FullWidthImages>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              "/meea/BLGnbhuhIcriDVlP8JEqKMkVw.png",
              "/meea/FitTcNeoPQWmqzuSFl2HEz2oyvE.png",
              "/meea/byL6nn4OzgEPXWCENc1YV7k4IY.png",
              "/meea/BPA3Pfma5YQEM5t1u3TnSTXzwE.png",
              "/meea/ylbj3G5nwQIR1bD20h95mAicpeU.png",
              "/meea/vj8P99Nz1qXuspZdBe3QElkfoY.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt="MEEA solution"
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
        </FullWidthImages>

        {/* 7. Exploration and Direction */}
        <NarrowSection>
          <SectionLabel>Exploration and Direction</SectionLabel>
          <SectionHeading>
            Exploring how technology could improve the restaurant experience
          </SectionHeading>
          <BodyText>
            We began by broadly exploring the restaurant industry and asking
            ourselves &quot;how might technology improve the dining experience
            while maintaining familiar patterns of interaction&quot;?
          </BodyText>
          <BodyText>
            Our early concepts focused on mobile based solutions, including
            QR code payments and phone-driven bill splitting. These ideas aimed
            to reduce friction around payment and make group dining more
            seamless.
          </BodyText>
        </NarrowSection>

        {/* 8. User Interviews + Insight Switch */}
        <NarrowSection>
          <SectionLabel>User Interviews + Insight Switch</SectionLabel>
          <SectionHeading>
            Research revealed tension between convenience and presence
          </SectionHeading>
          <BodyText>
            Through interviews and additional research methods, we uncovered a
            recurring theme: many guests felt uncomfortable using their phones
            during meals.
          </BodyText>
          <BodyText>
            While digital tools were often introduced to make dining more
            convenient, many guests described moments where these interactions
            pulled attention away from the table. Rather than supporting
            conversation, phone based interactions frequently disrupted it.
          </BodyText>
          <p className="mt-6 text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Guests consistently expressed that phones often:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <li>Distract from conversation</li>
            <li>Feel socially inappropriate at the table</li>
            <li>Interrupt the natural flow of dining together</li>
          </ul>
        </NarrowSection>

        {/* Key insight pull quote */}
        <PullQuote>
          Many guests felt uncomfortable using their phones during meals
        </PullQuote>

        {/* 9. Design Response */}
        <NarrowSection>
          <SectionLabel>Design Response</SectionLabel>
          <SectionHeading>
            Embedding a digital device inside a physical binding
          </SectionHeading>
          <BodyText>
            In response, our team shifted toward designing a dedicated physical
            and digital product. Creating a menu that lives on the table itself.
          </BodyText>
        </NarrowSection>

        {/* 10. Full-width design response images */}
        <FullWidthImages>
          <div className="grid grid-cols-3 gap-4">
            {[
              "/meea/a1LaeVD9W9VRJa6TKLaIIWo0Erk.png",
              "/meea/QcE74IJ99RGYAJsTkcmILsiaEU.png",
              "/meea/yuWxoYaBVNNk20jyI13cSeDpOhM.png",
            ].map((src) => (
              <figure key={src} className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt="MEEA design response"
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
        </FullWidthImages>

        {/* 11. Competitive Landscape */}
        <NarrowSection>
          <SectionLabel>Competitive Landscape + Opportunity</SectionLabel>
          <SectionHeading>
            Industry norms help explain why this tension persists
          </SectionHeading>
          <BodyText>
            Our analysis showed that many existing solutions are designed to
            optimize efficiency, speed, or transactions. While effective in
            operational contexts, these systems frequently depend on guests using
            personal devices during meals—reinforcing the same distractions
            surfaced during our research.
          </BodyText>
          <BodyText>
            Recognizing this pattern clarified an opportunity: to design a
            solution that meets modern dining needs while reducing reliance on
            behaviors guests already find disruptive.
          </BodyText>
        </NarrowSection>

        {/* 12. User Persona */}
        <NarrowSection>
          <SectionLabel>User Persona</SectionLabel>
        </NarrowSection>

        {/* 13. Gallery cluster — persona images */}
        <GalleryCluster
          images={[
            "/meea/UNB0FAptf7Ym3xnueVUaw2Rhhcs.png",
            "/meea/to60BtebXvaAQnPOv8JpX4dWOPk.png",
            "/meea/MFIJE5BWl5H679vIRuB2KThQm0.png",
            "/meea/YMJInG1dOEDJsMqIjPPycTjqUU.png",
            "/meea/9JrzTJ6D3BLcYMzsVRmUGW33Bqw.png",
          ]}
          columns={3}
          alt="MEEA user persona"
        />

        <NarrowSection>
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              Mike
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div>
                <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Personality Traits
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>Charismatic with high expectations</li>
                  <li>Business focused, detail oriented, efficiency is key</li>
                  <li>
                    Strong respect for the art of the restaurant
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Goals and Motivations
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>
                    Impress his family, friends, and clients with the hottest
                    dining on his dollar
                  </li>
                  <li>
                    Cater to the needs (allergies, preferences) of multiple
                    people at the table
                  </li>
                  <li>Have good timing and interactions with servers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Frustrations &amp; Pain Points
                </h4>
                <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>
                    Not being able to reach the server when needed
                  </li>
                  <li>Lack of menu accessibility for different guests</li>
                  <li>
                    Feeling out of control, misinformed or uninformed about
                    mishaps
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </NarrowSection>

        {/* 14. Features + Testing */}
        <NarrowSection>
          <SectionLabel>Features + Testing</SectionLabel>
          <SectionHeading>
            Designing features that support clarity, comfort, and accessibility
          </SectionHeading>
          <BodyText>
            The following features were intentionally designed to support a wide
            range of guests and dining scenarios.
          </BodyText>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                label: "Feature 1",
                title: "Accessibility & Display Settings",
                items: [
                  "Light mode and dark mode",
                  "Adjustable screen brightness",
                  "Language selection",
                  "Optional visual effects selection",
                ],
              },
              {
                label: "Feature 2",
                title: "Dish Preview & Transparency",
                items: [
                  "Visual preview of dishes",
                  "Clear descriptions and ingredient context",
                  "Reduced reliance on server clarification",
                ],
              },
              {
                label: "Feature 3",
                title: "Interactive Kids Menu",
                items: [
                  "Simple games and playful interactions",
                  "Visual aids to help with decisions",
                  "A dedicated experience for children",
                ],
              },
            ].map((feat) => (
              <div
                key={feat.title}
                className="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {feat.label}
                </span>
                <h3 className="mt-2 font-semibold text-zinc-900 dark:text-zinc-100">
                  {feat.title}
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {feat.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </NarrowSection>

        {/* 15. Low fidelity Exploration */}
        <NarrowSection>
          <SectionLabel>Low fidelity Exploration</SectionLabel>
          <BodyText>
            Exploring structure and flow through early wireframes — These
            low fidelity wireframes were used to explore layout, hierarchy, and
            core interaction flows.
          </BodyText>
        </NarrowSection>
      </div>
    </main>
  );
}
