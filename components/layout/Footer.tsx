import { site } from "@/data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className={styles.built}>Built with Next.js · Designed &amp; developed by {site.name}</p>
      </div>
    </footer>
  );
}
