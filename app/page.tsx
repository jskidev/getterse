import Image from "next/image";
import Nav from "./ui/nav";
import Footer from "./ui/footer";
import StoreButtons from "./ui/store-buttons";
import { absoluteUrl, createPageMetadata, siteConfig } from "./lib/siteMetadata";
import styles from "./home.module.css";

export const metadata = createPageMetadata({ path: "/" });

const MARQUEE_ROW_1 = [
  "perfect", "haunting", "timeless", "brilliant", "beautiful",
  "moving", "cinematic", "profound", "epic", "gorgeous", "transcendent",
];

const MARQUEE_ROW_2 = [
  "masterpiece", "overrated", "slow", "iconic", "dull",
  "dated", "flawless", "forgettable", "breathtaking", "intense", "striking",
];


const showcase = [
  {
    label: "One word",
    heading: "Commit to what you actually think.",
    body: "No stars, no paragraph. Just the word that captures it.",
    image: "/phone-2.png",
    alt: "Terse review screen",
    flipped: false,
  },
  {
    label: "Feel the vibe",
    heading: "Loved or loathed. You can tell.",
    body: "Every review lands in the word cloud. The sentiment chart shows how the crowd actually feels about something.",
    image: "/phone-1.png",
    alt: "Terse word cloud",
    flipped: true,
  },
  {
    label: "Your profile",
    heading: "Show what you're about.",
    body: "Favourite reviews to pin them to your profile. Create and showcase your own curated lists.",
    image: "/phone-4.png",
    alt: "Terse profile with favourites and lists",
    flipped: false,
  },
  {
    label: "Search",
    heading: "Search for anything.",
    body: " Search for anything, write your review, done.",
    image: "/phone-3.png",
    alt: "Terse sentiment chart",
    flipped: true,
  },
];

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/icon.png"),
      sameAs: [siteConfig.storeUrls.ios, siteConfig.storeUrls.android].filter(Boolean),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#app`,
      name: siteConfig.name,
      description: siteConfig.description,
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "iOS, Android",
      url: siteConfig.url,
      image: absoluteUrl("/icon.png"),
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Nav />

      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={styles.headline}>
              One word
              <br />
              says everything.
            </h1>
            <p className={styles.lead}>
              Review any game, album, book, TV show, or song. You get one word. Make it count.
            </p>
            <StoreButtons priority />
          </div>

          <div className={styles.heroVisual}>
            <Image
              src="/phone-1.png"
              alt="Terse app — one-word review interface"
              width={390}
              height={844}
              className={styles.phoneImage}
              priority
              loading="eager"
              unoptimized
            />
          </div>
        </section>

        <div className={styles.marqueeSection} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[0, 1].flatMap((copy) =>
              MARQUEE_ROW_1.map((word) => (
                <span key={`${copy}-${word}`} className={styles.marqueeWord}>
                  {word}
                </span>
              ))
            )}
          </div>
          <div className={styles.marqueeTrackReverse}>
            {[0, 1].flatMap((copy) =>
              MARQUEE_ROW_2.map((word) => (
                <span key={`${copy}-${word}`} className={styles.marqueeWordDim}>
                  {word}
                </span>
              ))
            )}
          </div>
        </div>

        <div className={styles.showcaseSections}>
          {showcase.map(({ label, heading, body, image, alt, flipped }) => (
            <section
              key={label}
              className={`${styles.showcaseRow} ${flipped ? styles.showcaseRowFlipped : ""}`}
            >
              <div className={styles.showcaseInner}>
                <div className={styles.showcaseText}>
                  <h2 className={styles.showcaseHeading}>{heading}</h2>
                  <p className={styles.showcaseBody}>{body}</p>
                </div>
                <div className={styles.showcaseVisual}>
                  <Image
                    src={image}
                    alt={alt}
                    width={390}
                    height={844}
                    className={styles.phoneImage}
                    unoptimized
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className={styles.ctaSection}>
          <div className={styles.sectionInner}>
            <Image
              src="/icon.png"
              alt="Terse"
              width={52}
              height={52}
              className={styles.ctaIcon}
            />
            <h2 className={styles.ctaHeading}>
              One word. Make it count.
            </h2>
            <p className={styles.ctaSub}>Free to download. No subscription. Ever.</p>
            <StoreButtons />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
