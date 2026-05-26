"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { APP_STORE_URL } from "../lib/storeLinks";
import styles from "./nav.module.css";

const downloadHref = APP_STORE_URL || null;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/icon.png"
            alt="Terse"
            width={32}
            height={32}
            className={styles.logo}
          />
          <span className={styles.wordmark}>Terse</span>
        </Link>
        {downloadHref ? (
          <a href={downloadHref} className={styles.navCta}>
            Download
          </a>
        ) : (
          <span className={`${styles.navCta} ${styles.navCtaDisabled}`}>
            Download
          </span>
        )}
      </nav>
    </header>
  );
}
