import type { Metadata } from "next";
import { APP_STORE_URL, PLAY_STORE_URL } from "./storeLinks";

type PageMetadataOptions = {
  path: string;
  title?: string;
  description?: string;
};

export const siteConfig = {
  name: "Terse",
  creator: "jskidev",
  url: "https://getterse.app",
  locale: "en_AU",
  defaultTitle: "Terse: One-Word Reviews",
  description:
    "Terse is the one-word review app for films, albums, books, and TV shows. Review anything. One word. Make it count.",
  ogImage: "/icon.png",
  ogImageAlt: "Terse: the one-word review app",
  storeUrls: {
    ios: APP_STORE_URL,
    android: PLAY_STORE_URL,
  },
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function getSocialImage() {
  return {
    url: absoluteUrl(siteConfig.ogImage),
    width: 1024,
    height: 1024,
    alt: siteConfig.ogImageAlt,
  };
}

export function createPageMetadata({
  path,
  title,
  description = siteConfig.description,
}: PageMetadataOptions): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultTitle;
  const socialImage = getSocialImage();

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: socialImage.url, alt: siteConfig.ogImageAlt }],
    },
  };
}
