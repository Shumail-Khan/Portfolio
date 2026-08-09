"use client";

import { motion, type Variants } from "framer-motion";
import { site } from "@/data/site";
import NodeGraph from "./NodeGraph";
import styles from "./Hero.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.content}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className={styles.kicker}>
            {site.location}
          </motion.p>

          <motion.h1 variants={item} className={styles.name}>
            {site.name}
          </motion.h1>

          <motion.h2 variants={item} className={styles.role}>
            <span className={styles.roleAmber}>
              Full-Stack Developer
            </span>

            <span className={styles.roleJoin}> &amp; </span>

            <span className={styles.roleCyan}>
              AI/ML Engineer
            </span>
          </motion.h2>

          <motion.p variants={item} className={styles.tagline}>
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View projects
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              GitHub
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              LinkedIn
            </a>

            <a href="#contact" className={styles.secondaryBtn}>
              Contact
            </a>
          </motion.div>
        </motion.div>

        <div className={styles.visual} aria-hidden="true">
          <NodeGraph />
        </div>
      </div>
    </section>
  );
}