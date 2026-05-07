import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      title: "AI/ML Engineering",
      company: "DevelopersHub Corporation",
      date: "March 10th, 2026 - April 25th, 2026",
      description: [
        "Worked on developing and optimizing Artificial Intelligence and Machine Learning models.",
        "Collaborated with the engineering team to integrate ML solutions into existing applications.",
        "Utilized Python and associated frameworks to process data and build predictive systems."
      ]
    },
    {
      title: "Web Development Intern",
      company: "Xenova Soft",
      date: "June 06, 2025 - September 05, 2025",
      description: [
        "Developed and maintained web applications using modern web technologies.",
        "Assisted in creating responsive user interfaces and integrating backend services.",
        "Participated in code reviews and agile development workflows."
      ]
    },
    {
      title: "Full Stack Development Intern",
      company: "GoJins (Career Launchpad Program)",
      date: "January 01, 2025 - April 06, 2025",
      description: [
        "Completed a 3-month internship in Full Stack Development under the Career Launchpad Program at the Department of Computer Science in University of Engineering and Technology Mardan.",
        "Gained hands-on experience in building robust MERN stack applications.",
        "Worked on real-world projects bridging the gap between frontend interfaces and backend databases."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className={styles.titleNumber}>02.</span> Experience
        </h2>
        
        <div className={styles.experienceList}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.timeline}></div>
              <div className={styles.content}>
                <h3 className={styles.jobTitle}>
                  {exp.title} <span className={styles.company}>@ {exp.company}</span>
                </h3>
                <p className={styles.date}>{exp.date}</p>
                <ul className={styles.descriptionList}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
