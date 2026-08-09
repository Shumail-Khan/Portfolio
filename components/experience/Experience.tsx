import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/experience";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">experience</p>
          <h2 className="sectionTitle">Internships across full-stack and AI/ML teams</h2>
        </Reveal>

        <ol className={styles.list}>
          {experience.map((exp, i) => (
            <Reveal as="li" key={exp.company} delay={i * 0.08} className={styles.item}>
              <div className={`${styles.railDot} ${styles[exp.track]}`} aria-hidden="true" />
              <div className={styles.content}>
                <div className={styles.heading}>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <span className={styles.date}>{exp.date}</span>
                </div>
                <p className={styles.company}>{exp.company}</p>
                <ul className={styles.points}>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
