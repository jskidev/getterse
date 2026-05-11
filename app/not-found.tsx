import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>
        This page doesn&rsquo;t exist.
      </p>
      <Link href="/" className={styles.link}>
        ← Back to Terse
      </Link>
    </main>
  );
}
