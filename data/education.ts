export type EducationItem = {
  degree: string;
  institution: string;
  date: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    degree: "BS Computer Science",
    institution: "University of Engineering & Technology, Mardan",
    date: "2022 — 2026",
    detail: "GPA 3.8+ · 2 Times Dean's List, 2023–2024 and 2024–2025",
  },
  {
    degree: "HSSC (ICS)",
    institution: "Islamabad Model College for Boys, I-10/1",
    date: "2020 — 2021",
    detail: "943/1100 · First Division",
  },
  {
    degree: "Matriculation (Computer Science)",
    institution: "Islamabad Model College for Boys, I-10/1",
    date: "2018 — 2019",
    detail: "936/1100 · First Division",
  },
];
