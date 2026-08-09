import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">about</p>
        </Reveal>

        <div className={styles.inner}>
          <Reveal className={styles.text}>
            <p>
              I&apos;m a BS Computer Science graduate from UET Mardan, working across the
              stack — from React and Node.js APIs to the databases underneath them — and into
              applied AI: computer vision, NLP, and predictive modeling.
            </p>
            <p>
              Most of what I build ends up shipped: production-deployed MERN platforms with
              real authentication and admin tooling, and ML systems wired up behind FastAPI
              endpoints rather than left in a notebook. I picked this up through three
              internships spanning full-stack and AI/ML engineering, and through a final-year
              thesis on real-time weapon detection with computer vision.
            </p>
            <p className={styles.honors}>
              GPA 3.5+ · Dean&apos;s List, 2023–2024 &amp; 2024–2025
            </p>
          </Reveal>

          <Reveal delay={0.1} className={styles.photoWrap}>
            <div className={styles.photoFrame}>
              <Image
                src="/images/profile.png"
                alt="Portrait of Shumail Khan"
                width={520}
                height={614}
                className={styles.photo}
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
