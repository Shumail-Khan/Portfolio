export type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  track: "systems" | "ai";
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "AI/ML Engineering Intern",
    company: "DevelopersHub Corporation",
    date: "Mar 2026 — Apr 2026",
    track: "ai",
    points: [
      "Developed and optimized machine learning models on real-world datasets.",
      "Collaborated with the engineering team to integrate ML solutions into existing applications.",
      "Used Python and associated frameworks for data processing and predictive modeling.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Xenovo Soft",
    date: "Jun 2025 — Sep 2025",
    track: "systems",
    points: [
      "Built and maintained full-stack MERN applications.",
      "Developed responsive React user interfaces and integrated backend services.",
      "Built and consumed REST APIs; participated in code reviews and agile workflows.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company: "Career Launchpad / Gojins — UET Mardan",
    date: "Jan 2025 — Apr 2025",
    track: "systems",
    points: [
      "Completed a 3-month full-stack internship under the Career Launchpad Program.",
      "Built MERN applications end to end, from React frontend to MongoDB schemas.",
      "Worked on real-world projects bridging frontend interfaces and backend databases.",
    ],
  },
];
