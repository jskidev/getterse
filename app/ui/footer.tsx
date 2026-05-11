import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Terse
        </p>
        <div className={styles.links}>
          <Link href="/privacy" className={styles.link}>
            Privacy
          </Link>
          <Link href="/terms" className={styles.link}>
            Terms
          </Link>
          <a href="mailto:support@getterse.app" className={styles.link}>
            support@getterse.app
          </a>
        </div>
      </div>
    </footer>
  );
}
