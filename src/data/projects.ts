export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  href: string;
  status?: "live" | "coming-soon";
  /** Hero image path for card thumbnail (e.g. /cafe/cafecard.png) */
  heroImage?: string;
}

export const projects: Project[] = [
  {
    slug: "cafe",
    title: "Cafe - Calendar For Everything",
    tagline: "Web, App Design",
    category: "Web, App Design",
    href: "/cafe",
    heroImage: "/cafe/cafecard.png",
  },
  {
    slug: "petri",
    title: "Petri Music",
    tagline: "Web, App Design",
    category: "Web, App Design",
    href: "/petri",
    heroImage: "/petri/Petri1.png",
  },
  {
    slug: "meea",
    title: "MEEA Menu",
    tagline: "Prototype Product, Interaction Design",
    category: "Prototype Product, Interaction Design",
    href: "/meea",
    heroImage: "/meea/Meea-creative.png",
  },
  {
    slug: "motorcycle-hmi",
    title: "Motorcycle HMI Redesign",
    tagline: "Product Design, Interaction Systems",
    category: "Product Design, Interaction Systems",
    href: "/hmi",
    heroImage: "/hmi/HMICard.png",
  },
  {
    slug: "motorcycle",
    title: "Foam-Core Motorcycle",
    tagline: "Rapid Prototyping, User Experience",
    category: "Rapid Prototyping, User Experience",
    href: "/motorcycle",
    heroImage: "/motorcycle/IMG_7310 2.png",
  },
];
