import Image from "next/image";
import styles from "./store-buttons.module.css";
import { APP_STORE_URL, PLAY_STORE_URL } from "../lib/storeLinks";

export default function StoreButtons({ priority }: { priority?: boolean }) {
  return (
    <div className={styles.buttons}>
      {APP_STORE_URL ? (
        <a
          href={APP_STORE_URL}
          className={styles.badge}
          aria-label="Download on the App Store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/badges/app-store.svg"
            alt="Download on the App Store"
            width={120}
            height={40}
            priority={priority}
          />
        </a>
      ) : (
        <span className={`${styles.badge} ${styles.disabled}`} aria-hidden="true">
          <Image
            src="/badges/app-store.svg"
            alt=""
            width={120}
            height={40}
          />
        </span>
      )}

      {PLAY_STORE_URL ? (
        <a
          href={PLAY_STORE_URL}
          className={styles.badge}
          aria-label="Get it on Google Play"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/badges/google-play.png"
            alt="Get it on Google Play"
            width={135}
            height={52}
            priority={priority}
          />
        </a>
      ) : (
        <span className={`${styles.badge} ${styles.disabled}`} aria-hidden="true">
          <Image
            src="/badges/google-play.png"
            alt=""
            width={135}
            height={52}
          />
        </span>
      )}
    </div>
  );
}
