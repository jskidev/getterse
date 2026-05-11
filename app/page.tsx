import Image from "next/image";
import Nav from "./ui/nav";
import Footer from "./ui/footer";
import StoreButtons from "./ui/store-buttons";
import FeatureReveal from "./ui/feature-reveal";
import { absoluteUrl, createPageMetadata, siteConfig } from "./lib/siteMetadata";
import styles from "./home.module.css";

export const metadata = createPageMetadata({ path: "/" });

// ── App screenshots ──────────────────────────────────────────────────────────
const SCREENSHOT_MAIN = "/placeholder.jpg";

// ── Marquee word sets (two rows, opposite directions) ─────────────────────────
const MARQUEE_ROW_1 = [
  "perfect", "haunting", "timeless", "brilliant", "beautiful",
  "moving", "cinematic", "profound", "epic", "gorgeous", "transcendent",
];

const MARQUEE_ROW_2 = [
  "masterpiece", "overrated", "slow", "iconic", "dull",
  "dated", "flawless", "forgettable", "breathtaking", "intense", "striking",
];

// ── Category strip ────────────────────────────────────────────────────────────
const CATEGORIES = ["Film", "TV", "Albums", "Tracks", "Books"];

// ── Reviews in action ─────────────────────────────────────────────────────────
const reviews = [
  { title: "Oppenheimer", subline: "Film · 2023", word: "Necessary" },
  { title: "The Bear", subline: "TV Series · 2022", word: "Relentless" },
  { title: "Beyoncé - Renaissance", subline: "Album · 2022", word: "Defining" },
  { title: "Normal People", subline: "Novel · 2018", word: "Devastating" },
];

// ── Features ─────────────────────────────────────────────────────────────────
const features = [
  {
    name: "One word",
    description:
      "No star ratings. No paragraph-long hot takes. Just the most honest distillation of what you think, chosen carefully, because it has to be.",
  },
  {
    name: "Word clouds",
    description:
      "Every film, album, and book has a living word cloud built from everyone's reviews. See where opinions land, and where they fracture.",
  },
  {
    name: "Follow taste",
    description:
      "See what friends and people you admire think, without wading through essays. A one-word review tells you more than you'd expect.",
  },
  {
    name: "Every category",
    description:
      "Films, TV shows, albums, tracks, and books. Search, review, and discover across every category without switching apps.",
  },
  {
    name: "Supporter",
    description:
      "A one-time purchase unlocks profile customisation and a personal stats dashboard. No subscription. Ever.",
  },
];

// ── JSON-LD ───────────────────────────────────────────────────────────────────
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
      featureList: features.map((f) => `${f.name}: ${f.description}`),
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Nav />

      {/* Grain texture — position: fixed, pointer-events: none */}
      <div className={styles.grain} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <main className={styles.main}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={styles.headline}>
              One word
              <br />
              says everything.
            </h1>
            <p className={styles.lead}>
              Terse strips away the noise. Review any film, album, book, TV
              show, or game. But you only get one word. Make it count.
            </p>
            <p className={styles.categories}>
              {CATEGORIES.join(" · ")}
            </p>
            <StoreButtons priority />
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.phoneFrame}>
              <Image
                src={SCREENSHOT_MAIN}
                alt="Terse app — one-word review interface"
                fill
                className={styles.phoneImage}
                priority
                sizes="(max-width: 639px) 0px, (max-width: 959px) 220px, 280px"
              />
            </div>
          </div>
        </section>

        {/* ── Marquee — two rows, opposite directions ───────────────────── */}
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

        {/* ── Reviews in action ────────────────────────────────────────── */}
        <section className={styles.reviewsSection}>
          <div className={styles.sectionInner}>
            <p className={styles.reviewsLabel}>One word, every time.</p>
            <div className={styles.reviewList}>
              {reviews.map(({ title, subline, word }) => (
                <div key={title} className={styles.reviewItem}>
                  <div className={styles.reviewMeta}>
                    <p className={styles.reviewTitle}>{title}</p>
                    <p className={styles.reviewSubline}>{subline}</p>
                  </div>
                  <p className={styles.reviewWord}>{word}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────────────── */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>Everything in one place.</h2>
            <FeatureReveal features={features} />
          </div>
        </section>

        {/* ── Manifesto ────────────────────────────────────────────────── */}
        <section className={styles.manifestoSection}>
          <div className={styles.sectionInner}>
            <p className={styles.manifestoText}>
              Opinions don&apos;t need paragraphs.{" "}
              <span className={styles.manifestoEmphasis}>
                One word cuts through everything.
              </span>
            </p>
            <p className={styles.manifestoSub}>That&apos;s why Terse exists.</p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
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
              Terse is for people with opinions who know how to keep them short.
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
