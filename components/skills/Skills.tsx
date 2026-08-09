import Reveal from "@/components/ui/Reveal";
import { skillGroups } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">skills</p>
          <h2 className="sectionTitle">Two disciplines, one toolset that ships</h2>
        </Reveal>

        <div className={styles.grid}>
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05} className={styles.card}>
              <span className={styles.cardEyebrow}>{group.eyebrow}</span>
              <h3 className={styles.cardTitle}>{group.label}</h3>
              <ul className={styles.chips}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
