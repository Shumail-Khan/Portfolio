import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">contact</p>
          <h2 className={styles.heading}>Have something worth building?</h2>
          <p className={styles.sub}>
            I&apos;m open to full-stack, AI/ML, and hybrid engineering roles and
            projects. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.08} className={styles.row}>
          <a href={`mailto:${site.email}`} className={styles.primary}>
            {site.email}
          </a>

          <div className={styles.links}>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              GitHub ↗
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
