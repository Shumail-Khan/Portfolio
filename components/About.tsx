import styles from './About.module.css';
import Image from 'next/image';
import profilePic from '../Shimi-suited.png';
export default function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "Node.js", "Express.js", "MongoDB", "Python", 
    "Machine Learning", "NLP", "Computer Vision (YOLO)", "PyTorch"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className={styles.titleNumber}>01.</span> About Me
        </h2>
        
        <div className={styles.inner}>
          <div className={styles.aboutText}>
            <p>
              Hello! I'm Shumail Khan, a BSCS student with a strong interest in 
              <strong> Full Stack Development</strong> and <strong>Artificial Intelligence</strong>. 
              I possess strong communication, critical thinking, and problem-solving skills, 
              and I am passionate about leveraging technology to create innovative solutions.
            </p>
            <p>
              My journey in software engineering has led me to explore a variety of disciplines, 
              from building robust backend systems and intuitive MERN stack applications to developing 
              predictive machine learning models and <strong>Computer Vision</strong> solutions.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className={styles.skillsList}>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          
          <div className={styles.aboutPic}>
            <div className={styles.wrapper}>
              <Image 
                src={profilePic}
                alt="Shumail Khan"
                className={styles.image}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
