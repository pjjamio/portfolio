export const profile = {
  name: "Paul John Jamio",
  role: "Custom WordPress Developer & GHL Specialist",
  location: "KM. 10 Cabayugan 2, Sasa, Davao, 8000, Philippines",
  phone: "+63 956 365 3747",
  email: "pjjamio@gmail.com",
  github: "https://github.com/pjjamio",
  summary:
    "Hard-working developer with 10+ years of experience across application development, web design, and programming. I build and maintain custom WordPress themes — Elementor and hand-coded with Advanced Custom Fields — and handle content, plugin updates, and security for the sites I ship. I also work as a GoHighLevel (GHL) specialist, building workflows, pipelines, and marketing automations, and managing CRM, funnels, and email & SMS campaigns end to end.",
};

export const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "jQuery",
  "PHP",
  "MySQL",
  "WordPress",
  "Elementor",
  "Advanced Custom Fields",
  "UI / UX",
  "Frontend & Backend",
  "GoHighLevel (GHL)",
  "Workflow Automation",
  "CRM Management",
  "Sales Funnels",
  "Email & SMS Marketing",
  "Pipeline Management",
  "Reporting & Analytics",
];

export type Specialty = {
  title: string;
  summary: string;
  points: string[];
};

export const specialties: Specialty[] = [
  {
    title: "GoHighLevel (GHL) Specialist",
    summary:
      "End-to-end setup and management of GoHighLevel accounts for agencies and small businesses — automation, CRM, and campaign operations.",
    points: [
      "Build and manage automated workflows, sales pipelines, and marketing automations in GoHighLevel.",
      "Set up, configure, and optimize GHL sub-accounts, snapshots, and integrations for new and existing clients.",
      "Manage CRM data, sales funnels, and email & SMS campaigns from setup through ongoing optimization.",
      "Produce performance reports and data analysis to track conversions and guide campaign decisions.",
    ],
  },
];

export type Job = {
  company: string;
  location: string;
  title: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "Freedom Solutions",
    location: "Davao, PH",
    title: "Senior Web Developer",
    period: "May 2019 – Dec 2024",
    points: [
      "Designed, built, and maintained websites using scripting languages, content creation tools, and CMS platforms.",
      "Performed and directed website updates and release management.",
      "Wrote, designed, and edited web page content, and directed others producing content.",
      "Backed up site files to local directories for instant recovery.",
      "Developed site maps, application models, image templates, and page templates that met project goals, user needs, and industry standards.",
    ],
  },
  {
    company: "Rank Advisor",
    location: "Miami, FL",
    title: "Senior Web Developer",
    period: "May 2016 – Mar 2019",
    points: [
      "Performed and directed website updates.",
      "Wrote, designed, and edited web page content.",
      "Developed page templates that met project goals and user needs.",
    ],
  },
  {
    company: "Fitness Business Assistant",
    location: "Lemont, PA",
    title: "Junior Web Developer",
    period: "Aug 2012 – Jan 2016",
    points: [
      "Wrote and designed CSS, and maintained website updates.",
      "Performed and directed website updates.",
      "Backed up site files to local directories for instant recovery.",
      "Translated front-end user requirements into working pages.",
    ],
  },
];

export const education = {
  school: "University of the Immaculate Conception",
  location: "Davao, PH",
  degree: "Bachelor of Science, Major in Software Engineering",
  period: "Jun 2007 – Mar 2011",
};
