export const profile = {
  name: "Paul John Jamio",
  role: "Custom WordPress Developer",
  location: "KM. 10 Cabayugan 2, Sasa, Davao, 8000, Philippines",
  phone: "+63 956 365 3747",
  email: "pjjamio@gmail.com",
  github: "https://github.com/pjjamio",
  summary:
    "Hard-working developer with 10+ years of experience across application development, web design, and programming. I build and maintain custom WordPress themes — Elementor and hand-coded with Advanced Custom Fields — and handle content, plugin updates, and security for the sites I ship.",
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
