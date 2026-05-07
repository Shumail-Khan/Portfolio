import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "FactsAreFacts - Podcast Platform",
      description: "Developed and deployed a full-stack podcast web application focusing on end-to-end system integration. Implemented RESTful APIs, integrated frontend with backend services, and configured a cloud-hosted MongoDB database.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas"],
      github: "https://github.com/Shumail-Khan/Facts-R-Facts"
    },
    {
      title: "Helmet Detection (YOLO)",
      description: "Developed an object detection model to identify helmet usage using YOLO. Collected and managed dataset via Roboflow, performed training and evaluation, and optimized detection performance for real-world scenarios.",
      techStack: ["Python", "YOLO", "Roboflow", "OpenCV"],
      github: "https://github.com/Shumail-Khan/Helmet-Detection"
    },
    {
      title: "Lung Cancer Prediction Using SVM",
      description: "Developed a machine learning model using Support Vector Classifier (SVC) to detect lung cancer based on clinical and behavioral data. Performed data preprocessing, feature selection, and model evaluation.",
      techStack: ["Python", "Scikit-learn", "SVM", "Pandas"],
      github: "https://github.com/wasifullah7/UET-MernStack-tasks/tree/Shumail-khan"
    },
    {
      title: "MERN Stack Authentication System",
      description: "Developed a secure and scalable user authentication system using the MERN stack. Implemented flows with JWT tokens for session management and bcrypt for password hashing with role-based access control.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      github: "https://github.com/wasifullah7/UET-MernStack-tasks/tree/Shumail-khan/User Authentication"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className={styles.titleNumber}>04.</span> Some Things I've Built
        </h2>
        
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectTop}>
                <div className={styles.folderIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder">
                    <title>Folder</title>
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <title>GitHub</title>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              <h3 className={styles.projectTitle}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              
              <div className={styles.projectDescription}>
                <p>{project.description}</p>
              </div>
              
              <ul className={styles.projectTechList}>
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
