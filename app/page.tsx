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
    body: "No stars, no paragraph. Just the word that captures it. Search for anything, write your review, done.",
    image: "/placeholder.jpg",
    alt: "Terse review screen",
    flipped: false,
  },
  {
    label: "The cloud",
    heading: "See what everyone else said.",
    body: "Every review lands in the word cloud. Bigger word, more people chose it. See where opinion converges and where it splits.",
    image: "/placeholder.jpg",
    alt: "Terse word cloud",
    flipped: true,
  },
  {
    label: "Feel the vibe",
    heading: "Loved or loathed. You can tell.",
    body: "The sentiment chart shows how the crowd actually feels about something. Overwhelmingly positive, deeply divided. It's all there before you commit a word of your own.",
    image: "/placeholder.jpg",
    alt: "Terse sentiment chart",
    flipped: false,
  },
  {
    label: "Your profile",
    heading: "Show what you're about.",
    body: "Heart a review to pin it as a favourite. Build lists of your picks. Your profile is a reflection of your taste, curated one word at a time.",
    image: "/placeholder.jpg",
    alt: "Terse profile with favourites and lists",
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
              Review any film, album, book, TV show, or game. You get one word.
              Not a star rating. Not a paragraph. One word, chosen carefully,
              because it has to be.
            </p>
            <StoreButtons priority />
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.phoneFrame}>
              <Image
                src="/placeholder.jpg"
                alt="Terse app — one-word review interface"
                fill
                className={styles.phoneImage}
                priority
                sizes="(max-width: 639px) 0px, (max-width: 959px) 220px, 280px"
              />
            </div>
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
                  <div className={styles.phoneFrame}>
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      className={styles.phoneImage}
                      sizes="(max-width: 719px) 260px, 280px"
                    />
                  </div>
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
              For people with opinions who know how to keep them short.
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
