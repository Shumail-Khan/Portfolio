export type SkillGroup = {
  label: string;
  eyebrow: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    eyebrow: "lang",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    label: "Frontend & Mobile",
    eyebrow: "ui",
    items: ["React", "React Native", "Next.js", "Expo", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    label: "Backend",
    eyebrow: "api",
    items: ["Node.js", "Express.js", "REST APIs", "Flask", "FastAPI"],
  },
  {
    label: "Databases",
    eyebrow: "data",
    items: ["MongoDB", "Mongoose", "MySQL", "Sequelize"],
  },
  {
    label: "AI / ML",
    eyebrow: "model",
    items: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "YOLO",
      "OpenCV",
      "BERT",
      "Hugging Face",
      "SHAP",
    ],
  },
  {
    label: "DevOps / Cloud",
    eyebrow: "ops",
    items: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Git"],
  },
];
