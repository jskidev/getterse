import { createPageMetadata } from "../lib/siteMetadata";
import styles from "./support.module.css";

export const metadata = createPageMetadata({
  path: "/support",
  title: "Support",
  description: "Get help with Terse. Contact us or learn how to manage your account.",
});

export default function SupportPage() {
  return (
    <main className={styles.page}>
      <article className={styles.shell}>
        <header className={styles.docHeader}>
          <a href="/" className={styles.backLink}>← Terse</a>
          <h1 className={styles.title}>Support</h1>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get in touch</h2>
          <p className={styles.paragraph}>
            Email us and we&rsquo;ll get back to you.
          </p>
          <a href="mailto:support@getterse.app" className={styles.email}>
            support@getterse.app
          </a>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Deleting your account</h2>
          <p className={styles.paragraph}>
            You can do it right from the app. Go to <strong>Settings</strong> and
            tap <strong>Delete Account</strong> at the bottom.
          </p>
          <p className={styles.paragraph}>
            It&rsquo;s permanent. Your profile, reviews, lists, and all your data
            are gone for good. If something isn&rsquo;t working right, reach out
            before you delete and we&rsquo;ll help.
          </p>
        </section>
      </article>
    </main>
  );
}
