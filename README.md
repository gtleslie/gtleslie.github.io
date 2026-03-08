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
- **Image quality**: Images pasted into chat get compressed. For crisp quality, export from Figma (see below) and drag files directly into `public/`.

### Importing images from Figma (no quality loss)

**Fastest method – batch export from Figma:**

1. In Figma, select all the frames/screens you need (Shift+click or Cmd+A in a section).
2. In the right panel, open the **Export** section.
3. Add an export setting: **PNG** or **JPG**, set to **2x** (or 3x for Retina).
4. Click **Export [X] frames** – Figma exports all selected frames to a folder.
5. Drag that folder into `grant-portoflio/public/` in Cursor (or copy via Finder).

This keeps full quality because files go straight to disk instead of through chat paste.

**Alternative – from your live Framer site:**

1. Open your Framer site in the browser.
2. Right‑click an image → **Open image in new tab**.
3. Save from the URL (often a CDN link) – these are usually full resolution.
4. Repeat for each image, or use a bulk image downloader extension.

## Tech Stack

- **Next.js 16** — React framework, App Router
- **Tailwind CSS 4** — Utility-first styling
- **TypeScript** — Type safety

---

Built for SCAD UX Design. Good luck with the portfolio.
