"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { categories, projects, type ProjectCategory } from "@/data/projects";
import styles from "./Projects.module.css";

type FilterValue = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<FilterValue>("All");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const featured = filtered.filter((p) => p.featured);
  const more = filtered.filter((p) => !p.featured);
  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null;

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">projects</p>
          <h2 className="sectionTitle">Selected work across the stack and the model</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <LayoutGroup id="filters">
            <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={filter === cat}
                  className={styles.filterBtn}
                  onClick={() => setFilter(cat)}
                >
                  {filter === cat && (
                    <motion.span
                      layoutId="filter-pill"
                      className={styles.pill}
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className={styles.filterLabel}>{cat}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </Reveal>

        <motion.div layout className={styles.featuredGrid}>
          <AnimatePresence mode="popLayout">
            {featured.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured
                onOpenDetails={setActiveSlug}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {more.length > 0 && (
          <div className={styles.moreSection}>
            <p className={styles.moreLabel}>More projects</p>
            <motion.div layout className={styles.moreGrid}>
              <AnimatePresence mode="popLayout">
                {more.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    onOpenDetails={setActiveSlug}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {filtered.length === 0 && (
          <p className={styles.empty}>No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveSlug(null)} />
    </section>
  );
}
