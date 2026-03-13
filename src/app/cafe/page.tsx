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

export default function CafePage() {
  return (
    <main>
      {/* 1. Full-viewport hero */}
      <CaseStudyHero
        src="/cafe/cafecard.png"
        alt="CAFÉ - Calendar For Everything"
        title="CAFÉ"
      />

      <div className="mt-24 space-y-16 pb-20 sm:space-y-20">
        {/* 2. Gallery cluster — 7 app screen images */}
        <GalleryCluster
          images={[
            "/cafe/wr93jCkEPYXU0MVwvTcSuPIAMvA.png",
            "/cafe/lTvdOL8KHIp5TKz9O4Yzobhs.png",
            "/cafe/FB6acVEXrSYflNLRaBubJEadDE.png",
            "/cafe/pVMsZXMvkXcHM5onuankXNrCQns.png",
            "/cafe/mVXkLASqNKOZyiAOGEKPpvk8.png",
            "/cafe/BqiVnlo0a1Ncu9UXFDRrkFS00.png",
            "/cafe/9OxqXSEKTlhVIdVh1lOCuKOXQ.png",
          ]}
          columns={4}
          alt="CAFÉ app screen"
        />

        {/* 3. Problem */}
        <NarrowSection>
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
        </NarrowSection>

        {/* 4. Opportunity */}
        <NarrowSection>
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
        </NarrowSection>

        {/* 5. Design Intent */}
        <NarrowSection>
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
        </NarrowSection>

        {/* 6. Insight — pull quote */}
        <PullQuote>
          People want to explore and reference calendars before fully committing
          to them
        </PullQuote>

        <NarrowSection>
          <SectionLabel>Insight</SectionLabel>
          <BodyText>
            People frequently want to browse calendars, temporarily view
            schedules, or save them for later without immediately adding
            everything to their main calendar. The lack of lightweight ways to
            preview, filter, or hide calendars leads to clutter and hesitation
            around sharing.
          </BodyText>
        </NarrowSection>

        {/* 7. Product Direction */}
        <NarrowSection>
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
        </NarrowSection>

        {/* 8. Core Features */}
        <NarrowSection>
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
        </NarrowSection>

        {/* 9. Solution */}
        <NarrowSection>
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
            view.
          </BodyText>
        </NarrowSection>

        {/* 10. Full-width solution images */}
        <FullWidthImages>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
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
        </FullWidthImages>

        {/* 11. Current State */}
        <NarrowSection>
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
        </NarrowSection>
      </div>
    </main>
  );
}
