import styles from './Education.module.css';

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor in Computer Science",
      institution: "University of Engineering and Technology, Mardan",
      date: "September 2022 - Present",
      grade: "Final grade: A-",
      details: "Awarded in Recognition for Outstanding Academic Achievement, earning a place on the Dean's List with a GPA of 3.5 or higher for the academic years 2023-2024 and 2024-2025."
    },
    {
      degree: "HSSC",
      institution: "Islamabad Model College For Boys, I-10/1",
      date: "2020 - 2021",
      grade: "",
      details: ""
    },
    {
      degree: "Matriculation",
      institution: "Islamabad Model College For Boys, I-10/1",
      date: "2018 - 2019",
      grade: "",
      details: ""
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className={styles.titleNumber}>03.</span> Education
        </h2>
        
        <div className={styles.educationGrid}>
          {educationList.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.date}>{edu.date}</p>
              </div>
              <div className={styles.cardBody}>
                {edu.grade && <p className={styles.grade}>{edu.grade}</p>}
                {edu.details && <p className={styles.details}>{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
