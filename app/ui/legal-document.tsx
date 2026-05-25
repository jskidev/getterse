import type { LegalDocument } from "../lib/legalDocuments";
import styles from "../legal.module.css";

export default function LegalDocumentView({
  document,
}: {
  document: LegalDocument;
}) {
  return (
    <main className={styles.page}>
      <article className={styles.shell}>
        <header className={styles.docHeader}>
          <a href="/" className={styles.backLink}>
            ← Terse
          </a>
          <h1 className={styles.title}>{document.title}</h1>
          <p className={styles.meta}>Last updated: {document.lastUpdated}</p>
        </header>

        {document.sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.paragraphs?.map((para, i) => (
              <p key={i} className={styles.paragraph}>{para}</p>
            ))}
            {section.groups?.map((group, i) => (
              <div key={i} className={styles.group}>
                <p className={styles.groupHeading}>{group.heading}</p>
                <ul className={styles.list}>
                  {group.bullets.map((bullet, j) => (
                    <li key={j} className={styles.listItem}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
            {section.bullets?.length ? (
              <ul className={styles.list}>
                {section.bullets.map((bullet, i) => (
                  <li key={i} className={styles.listItem}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {section.closingParagraphs?.map((para, i) => (
              <p key={i} className={styles.paragraph}>{para}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
