export type Project = {
  name: string;
  url: string;
  stack: string[];
  description: string;
};

/** Live screenshot of a URL via thum.io (no API key required). */
export function shot(url: string): string {
  return `https://image.thum.io/get/width/1200/crop/900/noanimate/${url}`;
}

export const projects: Project[] = [
  {
    name: "ILM Corporation",
    url: "https://www.ilmcorp.com/",
    stack: ["WordPress", "Elementor"],
    description:
      "Designed and built the corporate theme with Elementor. Ongoing content management, plugin updates, and site security.",
  },
  {
    name: "UniFlow",
    url: "https://www.uniflow.works/",
    stack: ["WordPress", "Elementor"],
    description:
      "Developed and designed the marketing theme using Elementor, with continued content, plugin, and security maintenance.",
  },
  {
    name: "Baton Rouge Telco Federal Credit Union",
    url: "https://www.brtelco.org/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Built a personalized theme backed by Advanced Custom Fields so staff can manage rates, branches, and pages. Handles content, updates, and security.",
  },
  {
    name: "The Quinn Law Center",
    url: "https://www.quinnlawcenters.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Custom law-firm theme with ACF-driven content blocks for practice areas and attorney profiles. Ongoing maintenance and security.",
  },
  {
    name: "Freedom Solutions",
    url: "https://getfreedom.solutions/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Company site built on a personalized theme with Advanced Custom Fields for flexible content editing. Full content, plugin, and security management.",
  },
  {
    name: "PathFactory",
    url: "https://www.pathfactory.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Developed a personalized theme with ACF for a fast-moving B2B marketing team to manage campaigns and resources.",
  },
  {
    name: "Duuo Insurance",
    url: "https://duuo.ca/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Personalized theme with Advanced Custom Fields powering product and coverage pages. Ongoing content updates and security.",
  },
  {
    name: "Influitive",
    url: "https://influitive.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Custom theme and ACF content model for an advocacy-marketing platform's website. Plugin updates and security hardening.",
  },
  {
    name: "TaxLeopard",
    url: "https://gigtax.io/",
    stack: ["WordPress", "Elementor", "ACF"],
    description:
      "Built the site with an Elementor theme extended by Advanced Custom Fields for structured content. Ongoing maintenance and security.",
  },
  {
    name: "Nervous Waters",
    url: "https://www.nervouswaters.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Personalized theme with ACF for a fly-fishing lodge group to manage destinations and trips. Content, plugin, and security management.",
  },
  {
    name: "770 Rent A Car",
    url: "https://www.770rentacar.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Custom rental-company theme with ACF-managed fleet listings and location pages. Ongoing updates and security.",
  },
  {
    name: "Viscarra Law",
    url: "https://www.viscarralaw.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Personalized law-firm theme with Advanced Custom Fields for editable practice areas and testimonials. Full maintenance and security.",
  },
  {
    name: "Sarfati Law",
    url: "https://sarfatilaw.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Custom theme with ACF content blocks for a personal-injury practice. Ongoing content, plugin, and security management.",
  },
  {
    name: "UCCU",
    url: "https://www.uccu.com/",
    stack: ["WordPress", "Custom Theme", "ACF"],
    description:
      "Personalized theme backed by Advanced Custom Fields for a credit union's large content team. Plugin updates and security.",
  },
];
