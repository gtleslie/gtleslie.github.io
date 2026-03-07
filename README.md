# Grant Leslie — Portfolio

A custom-coded UX design portfolio built with Next.js and Tailwind CSS. Migrated from Framer for full control, easier iteration, and a more distinctive look.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home
│   ├── cafe/              # Cafe - Calendar project
│   ├── petri/             # Petri Music project
│   ├── meea/              # MEEA Menu project
│   ├── motorcycle/        # Foam-Core Motorcycle project
│   ├── comingsoon/        # Motorcycle HMI (coming soon)
│   └── resume/            # Resume page
├── components/            # Reusable UI components
├── data/                  # Project data & content
└── ...
```

## Roadmap: From Framer Parity → Your Vision

### Phase 1: Parity (current)
- [x] Home page with hero + project cards
- [x] All project routes (cafe, petri, meea, motorcycle, coming soon)
- [x] Resume placeholder
- [x] Basic case study content structure

### Phase 2: Content & Polish
- [ ] Add project images (place in `public/` and use Next.js `Image`)
- [ ] Export/copy full case study content from Framer into each project page
- [ ] Add resume PDF or link
- [ ] Tweak typography, spacing, colors to match your Framer feel (or improve it)

### Phase 3: Your Design Direction
- [ ] Experiment with layout: grid vs list, featured project, etc.
- [ ] Add animations (e.g. Framer Motion) for scroll, hover, page transitions
- [ ] Custom typography (try a serif for headings, keep sans for body)
- [ ] Refine color palette and dark mode
- [ ] Add contact / about section if desired

### Phase 4: Deploy
- [ ] Deploy to Vercel (free, one-click with GitHub)
- [ ] Point grantleslie.com to the new site (update DNS)

## Making Changes

- **Add a project**: Edit `src/data/projects.ts` and create a new page in `src/app/[slug]/`
- **Change styling**: All Tailwind classes are in components; tweak colors, spacing, fonts in `globals.css` and component files
- **Add images**: Put files in `public/` and reference as `/filename.jpg`
- **Image quality**: Images pasted into chat get compressed. For crisp quality matching Framer, copy your original files directly into `public/` (e.g. export from Framer or drag from Finder). Use at least 1536px width for sharp display on Retina screens.

## Tech Stack

- **Next.js 16** — React framework, App Router
- **Tailwind CSS 4** — Utility-first styling
- **TypeScript** — Type safety

---

Built for SCAD UX Design. Good luck with the portfolio.
