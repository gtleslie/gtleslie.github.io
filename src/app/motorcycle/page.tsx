import Link from "next/link";

export default function MotorcyclePage() {
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Foam-core motorcycle contest
          </h1>
          <p className="mt-6 text-lg text-zinc-700 dark:text-zinc-300">
            In this two-week studio project, our team was challenged to design and construct a full-scale motorcycle inspired by the Art Nouveau movement using only lightweight materials such as foam, cardboard, and tape. I contributed across multiple stages from concept generation and physical prototyping to hands-on construction and user testing, ensuring the design not only reflected our theme but could also function and be demonstrated effectively.
          </p>
        </header>

        {/* Hero – full-bleed (grantleslie.com order) */}
        <figure className="relative left-1/2 right-1/2 mb-6 w-screen max-w-none -translate-x-1/2 overflow-hidden">
          <img
            src="/motorcycle/IMG_7310 2.png"
            alt="Foam-core motorcycle hero"
            className="w-full h-auto"
            style={{ imageRendering: '-webkit-optimize-contrast' } as React.CSSProperties}
            loading="eager"
            fetchPriority="high"
          />
        </figure>
        <div className="mb-12 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>Year : 2025</span>
          <span>Industry : Industrial Design / UX Design</span>
          <span>Team Size : 6 Members</span>
          <span>Project Duration : 2 weeks</span>
        </div>
        <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {[
            "DHAS0HGLNjDrkX2JqA6eFtWcGs.png",
            "2VCf4zJpvHNy9NTDpDZYn7BQ0A 2.png",
            "NNzTvLLtSKrTwAfhAHV4vRWrH2M.png",
            "VuOfBWtkdWGcmigl5YYNir9H5SY.png",
            "U16RHSoiaQD22OZl8BqSltI.png",
            "Hwo1i5MuFr08nyvNLDN8wF9RRQE.png",
            "ZsUZoP3CDE5Foh5ZbE2QQ3Hlu4.png",
            "5fE0LLnrWsch0j4nJ051DPl5I.png",
            "UJWeXdDVlCr4NGvzEbrC07XGU.png",
            "1qvD2JcNbx3hLHvajjTYVBTrpHQ.png",
            "ZVz8HeT2tQLXOv4EUjoJYXhH7w.png",
            "iMmLwXXqtI6ZsVf6vlrOgVn65Pg.png",
            "lXrBE21Hy1qtX0ASS1rpDd8fL0.png",
            "0DE5YbzBkQDnSODf4rM6BG3MqZg.png",
            "js80Z5NkL5wpJ6nf2cYKmjQv4Z8.png",
            "Oajw8dTaQFtXZ9WktS568ruhPE.png",
            "HzUXnfvQ0Qsin82dxvNetoIInk.png",
            "WDTIb62ZFMQKCMBMb5Dy1zEK8.png",
            "CpRBgrNHmQZvwahUmGrbsYeJwFc.png",
            "9Lw2aqujRKJEAmJorLOOenZ32k.png",
            "CQ6w638op6o4dAGaWM14M3KUQQ.png",
            "XauOteV4fYZAsLPcN9eQQ3VT74.png",
          ].map((src) => (
            <figure key={src} className="overflow-hidden rounded-xl">
              <img
                src={`/motorcycle/${src}`}
                alt="Foam-core motorcycle project"
                className="w-full h-auto"
                style={
                  {
                    imageRendering: "-webkit-optimize-contrast",
                  } as React.CSSProperties
                }
              />
            </figure>
          ))}
        </div>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            The Challenge :
          </h2>
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            How might we express the organic curves and elegance of Art Nouveau
            through the design of a motorcycle using only lightweight, low-cost
            materials, ensuring it remains functional and visually coherent?
          </p>
        </section>

        {/* Ideation & Concept Development */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Ideation & Concept Development
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Used AI image generation tools (like Grok, GBT, Midjourney) to
            explore early design directions and aesthetic references. By feeding
            prompts related to &quot;Art Nouveau curves, motorcycles, foam core,
            flowing structure,&quot; we quickly created moodboards and visual
            mock-ups that helped the team align on the desired look and feel.
          </p>
        </section>

        {/* CAD & 3D Prototype */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            CAD & 3D Prototype
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Once we finalized our concept, we collaborated on a Rhino CAD model
            to define the structure, surface geometry, and paneling. A scaled 3D
            print was produced to verify proportions and construction
            feasibility.
          </p>
        </section>

        {/* Construction & Build process */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Construction & Build process
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Working together, we built the motorcycle at full scale using foam,
            cardboard, and plexiglass. I helped cut and assemble panels, build
            the seat and a functional exhaust compartment with hidden storage,
            and tested the bike&apos;s usability as the rider. Throughout the
            build, I problem-solved structural issues and adapted designs in
            real time, applying an iterative prototyping mindset similar to UX
            processes.
          </p>
        </section>

        {/* Building With Paper */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Building With Paper to Explore Depth and Design
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            We started by using simple paper and cardstock to visualize form and
            depth while keeping our overall design inspired by the Art Nouveau
            theme. Every layer helped us shape the silhouette of the motorcycle,
            focusing on proportion, balance, and organic flow. The paper allowed
            quick iteration and lightweight structure while keeping the design
            flexible, detailed, and true to the elegant, fluid forms
            characteristic of Art Nouveau.
          </p>
        </section>

        {/* Adding Realistic Parts */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Adding Realistic Parts and Interactive Features
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            Our team expanded the build by integrating realistic parts like a
            turnable handlebar with both real and mock buttons, golden exhaust
            tips, a foam seat, and a small under-seat storage compartment. The
            exhaust pipes were crafted from cardboard tubes, giving texture and
            form that represented real mechanical components. Each added feature
            pushed the prototype closer to a believable, full-scale concept
            motorcycle that reflected the Art Nouveau influence through its
            curves and crafted detailing.
          </p>
        </section>

        {/* User Testing */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            User Testing
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            I took the lead on user testing, focusing on UX principles like
            comfort, accessibility, and realism. I tested the ride height,
            handlebar reach, and general posture to ensure the experience
            aligned with what a real rider would feel. Through iterative
            feedback, I made adjustments to positioning, height, and component
            spacing to create a balanced, human-centered prototype that felt
            both functional and immersive.
          </p>
        </section>

        {/* Final Presentation */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Final Presentation and Comparison to Real Models
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            In the final presentation, I demonstrated the finished prototype by
            riding it and showcasing its functionality. The design captured the
            elegance and curves of Art Nouveau while remaining stable and
            visually cohesive, earning positive feedback for creativity and
            craftsmanship.
          </p>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300">
            We then placed our paper-built motorcycle next to a real sport bike
            to emphasize the level of scale accuracy and design intent. The
            display showed the contrast between concept and reality while
            highlighting the craftsmanship of our model.
          </p>
        </section>

        {/* Team Collaboration */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Team Collaboration and Finished Prototype
          </h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            These final photos capture our full team with the completed
            prototype and the foam motorcycle topped with a real helmet resting
            on the seat. It represented the collaboration, creativity, and
            UX-focused process that brought the concept to life from sketch to
            structure, successfully combining Art Nouveau inspiration with
            practical design thinking.
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
