import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoBracket}>&lt;</span>
            <span className={styles.logoText}>Shumail</span>
            <span className={styles.logoBracket}>/&gt;</span>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#education">Education</Link></li>
          <li><Link href="#projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}
