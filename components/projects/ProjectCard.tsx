"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

const CATEGORY_TONE: Record<Project["category"], "amber" | "cyan"> = {
  "Full Stack": "amber",
  "Computer Vision": "cyan",
  NLP: "cyan",
  "Data / ML": "cyan",
};

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  onOpenDetails: (slug: string) => void;
};

export default function ProjectCard({ project, featured, onOpenDetails }: ProjectCardProps) {
  const tone = CATEGORY_TONE[project.category];
  const visibleTech = project.technologies.slice(0, featured ? 6 : 4);
  const remaining = project.technologies.length - visibleTech.length;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.card} ${featured ? styles.featured : ""}`}
    >
      <div className={styles.top}>
        <Badge tone={tone}>{project.category}</Badge>
        <div className={styles.links}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className={styles.iconLink}
            >
              <GithubIcon />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className={styles.iconLink}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.tagline}>{project.tagline}</p>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.techList}>
        {visibleTech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
        {remaining > 0 && <li className={styles.more}>+{remaining} more</li>}
      </ul>

      <button className={styles.detailsBtn} onClick={() => onOpenDetails(project.slug)}>
        View details <span aria-hidden="true">→</span>
      </button>
    </motion.article>
  );
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
