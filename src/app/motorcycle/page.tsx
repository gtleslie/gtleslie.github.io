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

export default function MotorcyclePage() {
  return (
    <main>
      {/* 1. Full-viewport hero */}
      <CaseStudyHero
        src="/motorcycle/IMG_7310 2.png"
        alt="Foam-core motorcycle - Art Nouveau inspired build"
        title="Foam Core Motorcycle"
      />

      <div className="mt-24 space-y-16 pb-20 sm:space-y-20">
        {/* 2. Project meta */}
        <NarrowSection>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>Year : 2025</span>
            <span>Industry : Industrial Design / UX Design</span>
            <span>Team Size : 6 Members</span>
            <span>Project Duration : 2 weeks</span>
          </div>
        </NarrowSection>

        {/* 3. The Challenge — pull quote */}
        <PullQuote>
          How might we express the organic curves and elegance of Art Nouveau
          through the design of a motorcycle using only lightweight, low cost
          materials, ensuring it remains functional and visually coherent?
        </PullQuote>

        <NarrowSection>
          <BodyText>
            In this two-week studio project, our team was challenged to design
            and construct a full-scale motorcycle inspired by the Art Nouveau
            movement using only lightweight materials such as foam, cardboard,
            and tape. I contributed across multiple stages from concept
            generation and physical prototyping to hands on construction and user
            testing, ensuring the design not only reflected our theme but could
            also function and be demonstrated effectively.
          </BodyText>
        </NarrowSection>

        {/* 4. Ideation & Concept Development */}
        <NarrowSection>
          <SectionLabel>Ideation</SectionLabel>
          <SectionHeading>Ideation &amp; Concept Development</SectionHeading>
          <BodyText>
            Used AI image generation tools (like Grok, GBT, Midjourney) to
            explore early design directions and aesthetic references. By feeding
            prompts related to &quot;Art Nouveau curves, motorcycles, foam core,
            flowing structure,&quot; we quickly created moodboards and visual
            mock ups that helped the team align on the desired look and feel.
          </BodyText>
        </NarrowSection>

        {/* 5. Gallery cluster — ideation/concept images */}
        <GalleryCluster
          images={[
            "/motorcycle/DHAS0HGLNjDrkX2JqA6eFtWcGs.png",
            "/motorcycle/2VCf4zJpvHNy9NTDpDZYn7BQ0A 2.png",
            "/motorcycle/NNzTvLLtSKrTwAfhAHV4vRWrH2M.png",
            "/motorcycle/VuOfBWtkdWGcmigl5YYNir9H5SY.png",
            "/motorcycle/U16RHSoiaQD22OZl8BqSltI.png",
            "/motorcycle/Hwo1i5MuFr08nyvNLDN8wF9RRQE.png",
          ]}
          columns={3}
          alt="Motorcycle ideation and concept"
        />

        {/* 6. CAD & 3D Prototype */}
        <NarrowSection>
          <SectionLabel>Prototyping</SectionLabel>
          <SectionHeading>CAD &amp; 3D Prototype</SectionHeading>
          <BodyText>
            Once we finalized our concept, we collaborated on a Rhino CAD model
            to define the structure, surface geometry, and paneling. A scaled 3D
            print was produced to verify proportions and construction
            feasibility.
          </BodyText>
        </NarrowSection>

        {/* 7. Full-width single image — key CAD/prototype shot */}
        <FullWidthImages>
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/motorcycle/ZsUZoP3CDE5Foh5ZbE2QQ3Hlu4.png"
              alt="CAD model and 3D prototype"
              className="h-auto w-full"
              style={
                {
                  imageRendering: "-webkit-optimize-contrast",
                } as React.CSSProperties
              }
            />
          </figure>
        </FullWidthImages>

        {/* 8. Construction & Build */}
        <NarrowSection>
          <SectionLabel>Build Process</SectionLabel>
          <SectionHeading>Construction &amp; Build Process</SectionHeading>
          <BodyText>
            Working together, we built the motorcycle at full scale using foam,
            cardboard, and plexiglass. I helped cut and assemble panels, build
            the seat and a functional exhaust compartment with hidden storage,
            and tested the bike&apos;s usability as the rider. Throughout the
            build, I problem-solved structural issues and adapted designs in real
            time, applying an iterative prototyping mindset similar to UX
            processes.
          </BodyText>
        </NarrowSection>

        {/* 9. Gallery cluster — build process images */}
        <GalleryCluster
          images={[
            "/motorcycle/5fE0LLnrWsch0j4nJ051DPl5I.png",
            "/motorcycle/UJWeXdDVlCr4NGvzEbrC07XGU.png",
            "/motorcycle/1qvD2JcNbx3hLHvajjTYVBTrpHQ.png",
            "/motorcycle/ZVz8HeT2tQLXOv4EUjoJYXhH7w.png",
            "/motorcycle/iMmLwXXqtI6ZsVf6vlrOgVn65Pg.png",
            "/motorcycle/lXrBE21Hy1qtX0ASS1rpDd8fL0.png",
          ]}
          columns={3}
          alt="Construction and build process"
        />

        {/* 10. Building With Paper */}
        <NarrowSection>
          <SectionLabel>Exploration</SectionLabel>
          <SectionHeading>
            Building With Paper to Explore Depth and Design
          </SectionHeading>
          <BodyText>
            We started by using simple paper and cardstock to visualize form and
            depth while keeping our overall design inspired by the Art Nouveau
            theme. Every layer helped us shape the silhouette of the motorcycle,
            focusing on proportion, balance, and organic flow. The paper allowed
            quick iteration and lightweight structure while keeping the design
            flexible, detailed, and true to the elegant, fluid forms
            characteristic of Art Nouveau.
          </BodyText>
        </NarrowSection>

        {/* 11. Gallery cluster — paper exploration images */}
        <GalleryCluster
          images={[
            "/motorcycle/0DE5YbzBkQDnSODf4rM6BG3MqZg.png",
            "/motorcycle/js80Z5NkL5wpJ6nf2cYKmjQv4Z8.png",
            "/motorcycle/Oajw8dTaQFtXZ9WktS568ruhPE.png",
            "/motorcycle/HzUXnfvQ0Qsin82dxvNetoIInk.png",
          ]}
          columns={2}
          alt="Paper exploration and depth studies"
        />

        {/* 12. Adding Realistic Parts */}
        <NarrowSection>
          <SectionLabel>Details</SectionLabel>
          <SectionHeading>
            Adding Realistic Parts and Interactive Features
          </SectionHeading>
          <BodyText>
            Our team expanded the build by integrating realistic parts like a
            turnable handlebar with both real and mock buttons, golden exhaust
            tips, a foam seat, and a small under-seat storage compartment. The
            exhaust pipes were crafted from cardboard tubes, giving texture and
            form that represented real mechanical components. Each added feature
            pushed the prototype closer to a believable, full-scale concept
            motorcycle that reflected the Art Nouveau influence through its
            curves and crafted detailing.
          </BodyText>
        </NarrowSection>

        {/* 13. Full-width single image — key detail shot */}
        <FullWidthImages>
          <figure className="overflow-hidden rounded-2xl">
            <img
              src="/motorcycle/WDTIb62ZFMQKCMBMb5Dy1zEK8.png"
              alt="Detailed view of realistic motorcycle parts"
              className="h-auto w-full"
              style={
                {
                  imageRendering: "-webkit-optimize-contrast",
                } as React.CSSProperties
              }
            />
          </figure>
        </FullWidthImages>

        {/* 14. User Testing */}
        <NarrowSection>
          <SectionLabel>Testing</SectionLabel>
          <SectionHeading>User Testing</SectionHeading>
          <BodyText>
            I took the lead on user testing, focusing on UX principles like
            comfort, accessibility, and realism. I tested the ride height,
            handlebar reach, and general posture to ensure the experience aligned
            with what a real rider would feel. Through iterative feedback, I made
            adjustments to positioning, height, and component spacing to create a
            balanced, human-centered prototype that felt both functional and
            immersive.
          </BodyText>
        </NarrowSection>

        {/* 15. Final Presentation */}
        <NarrowSection>
          <SectionLabel>Outcome</SectionLabel>
          <SectionHeading>
            Final Presentation and Comparison to Real Models
          </SectionHeading>
          <BodyText>
            In the final presentation, I demonstrated the finished prototype by
            riding it and showcasing its functionality. The design captured the
            elegance and curves of Art Nouveau while remaining stable and
            visually cohesive, earning positive feedback for creativity and
            craftsmanship.
          </BodyText>
          <BodyText>
            We then placed our paper-built motorcycle next to a real sport bike
            to emphasize the level of scale accuracy and design intent. The
            display showed the contrast between concept and reality while
            highlighting the craftsmanship of our model.
          </BodyText>
        </NarrowSection>

        {/* 16. Gallery cluster — final images */}
        <GalleryCluster
          images={[
            "/motorcycle/CpRBgrNHmQZvwahUmGrbsYeJwFc.png",
            "/motorcycle/9Lw2aqujRKJEAmJorLOOenZ32k.png",
            "/motorcycle/CQ6w638op6o4dAGaWM14M3KUQQ.png",
            "/motorcycle/XauOteV4fYZAsLPcN9eQQ3VT74.png",
          ]}
          columns={2}
          alt="Final motorcycle presentation"
        />

        {/* 17. Team Collaboration */}
        <NarrowSection>
          <SectionLabel>Team</SectionLabel>
          <SectionHeading>
            Team Collaboration and Finished Prototype
          </SectionHeading>
          <BodyText>
            These final photos capture our full team with the completed prototype
            and the foam motorcycle topped with a real helmet resting on the
            seat. It represented the collaboration, creativity, and UX-focused
            process that brought the concept to life from sketch to structure,
            successfully combining Art Nouveau inspiration with practical design
            thinking.
          </BodyText>
        </NarrowSection>
      </div>
    </main>
  );
}
