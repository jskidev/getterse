import styles from "./store-buttons.module.css";
import { APP_STORE_URL, PLAY_STORE_URL } from "../lib/storeLinks";

export default function StoreButtons({ priority: _priority }: { priority?: boolean }) {
  const disabled = !APP_STORE_URL || !PLAY_STORE_URL;
  const buttonClass = `${styles.button} ${disabled ? styles.disabled : ""}`;
  const disabledProps = disabled
    ? ({ "aria-disabled": true, tabIndex: -1 } as const)
    : {};

  return (
    <div className={styles.buttons}>
      <a
        href={APP_STORE_URL || "#"}
        className={buttonClass}
        aria-label="Download on the App Store"
        {...disabledProps}
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <span>
          <span className={styles.sub}>Download on the</span>
          <span className={styles.main}>App Store</span>
        </span>
      </a>
      <a
        href={PLAY_STORE_URL || "#"}
        className={buttonClass}
        aria-label="Get it on Google Play"
        {...disabledProps}
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.55l1.989 1.146c.532.307.532 1.074 0 1.38l-1.989 1.147L15.394 12l2.304-2.843zM5.864 2.658L16.8 8.99 14.498 11.3 5.864 2.658z" />
        </svg>
        <span>
          <span className={styles.sub}>Get it on</span>
          <span className={styles.main}>Google Play</span>
        </span>
      </a>
    </div>
  );
}
