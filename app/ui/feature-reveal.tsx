"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./feature-reveal.module.css";

type Feature = { name: string; description: string };

export default function FeatureReveal({ features }: { features: Feature[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const list = listRef.current;
    if (!list) return;

    const items = Array.from(list.querySelectorAll<HTMLElement>("[data-ri]"));
    if (!items.length) return;

    for (const el of items) {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.ri ?? 0) * 60;
          el.style.transition =
            "opacity 600ms var(--ease-out), transform 600ms var(--ease-out)";
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const raf = requestAnimationFrame(() => {
      for (const el of items) observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={listRef} className={styles.featureList}>
      {features.map(({ name, description }, index) => (
        <div key={name} className={styles.featureItem} data-ri={index}>
          <span className={styles.featureNum}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.featureName}>{name}</h3>
          <p className={styles.featureDesc}>{description}</p>
        </div>
      ))}
    </div>
  );
}
