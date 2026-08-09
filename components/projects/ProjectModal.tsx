"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import styles from "./ProjectModal.module.css";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className={styles.panel}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button ref={closeRef} className={styles.closeBtn} onClick={onClose} aria-label="Close project details">
              ✕
            </button>

            <Badge tone={project.category === "Full Stack" ? "amber" : "cyan"}>
              {project.category}
            </Badge>

            <h2 id="project-modal-title" className={styles.title}>
              {project.title}
            </h2>
            <p className={styles.tagline}>{project.tagline}</p>

            <div className={styles.linkRow}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                  GitHub ↗
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.linkBtnPrimary}>
                  Live demo ↗
                </a>
              )}
            </div>

            <Block title="Overview" text={project.description} />
            <Block title="Problem" text={project.problem} />
            <Block title="Solution" text={project.solution} />

            {project.features.length > 0 && (
              <section className={styles.block}>
                <h3 className={styles.blockTitle}>Features</h3>
                <ul className={styles.featureList}>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
            )}

            <Block title="Architecture" text={project.architecture} />

            <section className={styles.block}>
              <h3 className={styles.blockTitle}>Technology</h3>
              <ul className={styles.techGrid}>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>

            <Block title="Challenges" text={project.challenges} />
            <Block title="Outcome" text={project.outcome} />

            {project.note && <p className={styles.note}>{project.note}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({ title, text }: { title: string; text?: string }) {
  if (!text) return null;
  return (
    <section className={styles.block}>
      <h3 className={styles.blockTitle}>{title}</h3>
      <p className={styles.blockText}>{text}</p>
    </section>
  );
}
