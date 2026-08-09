import Reveal from "@/components/ui/Reveal";
import { education } from "@/data/education";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">education</p>
          <h2 className="sectionTitle">Education</h2>
        </Reveal>

        <div className={styles.grid}>
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.06} className={styles.card}>
              <span className={styles.date}>{edu.date}</span>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.institution}>{edu.institution}</p>
              {edu.detail && <p className={styles.detail}>{edu.detail}</p>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
