"use client";
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const ROLES = ["Web Developer", "AI Engineer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % ROLES.length;
    const fullText = ROLES[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    setTypingSpeed(isDeleting ? 50 : 150); // Speed when backing out is faster

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500); // Pause before backing out
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500); // Pause before typing next word
    }
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <p className={`${styles.greeting} animate-fade-in`}>Hi, my name is</p>
          <h1 className={`${styles.name} animate-slide-up`}>Shumail Khan.</h1>
          <h2 className={`${styles.role} animate-slide-up`}>
            I build things for the Web & AI.
          </h2>
          <div className={`${styles.description} animate-slide-up`}>
            <p>
              I'm a <span className="typing-cursor">{text}</span> specializing in building exceptional digital experiences. Currently, I'm focused on integrating <strong>Artificial Intelligence</strong> and <strong>Computer Vision</strong> into scalable web applications.
            </p>
          </div>
          <div className={`${styles.actions} animate-slide-up`}>
            <a href="#projects" className={styles.button}>Check out my work</a>
          </div>
        </div>
      </div>
    </section>
  );
}
