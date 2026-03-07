export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  href: string;
  status?: "live" | "coming-soon";
}

export const projects: Project[] = [
  {
    slug: "cafe",
    title: "Cafe - Calendar For Everything",
    tagline: "Web, App Design",
    category: "Web, App Design",
    href: "/cafe",
  },
  {
    slug: "petri",
    title: "Petri Music",
    tagline: "Web, App Design",
    category: "Web, App Design",
    href: "/petri",
  },
  {
    slug: "meea",
    title: "MEEA Menu",
    tagline: "Prototype Product, Interaction Design",
    category: "Prototype Product, Interaction Design",
    href: "/meea",
  },
  {
    slug: "motorcycle-hmi",
    title: "Motorcycle HMI Redesign",
    tagline: "Product Design, Interaction Systems",
    category: "Product Design, Interaction Systems",
    href: "/comingsoon",
    status: "coming-soon",
  },
  {
    slug: "motorcycle",
    title: "Foam-Core Motorcycle",
    tagline: "Rapid Prototyping, User Experience",
    category: "Rapid Prototyping, User Experience",
    href: "/motorcycle",
  },
];
