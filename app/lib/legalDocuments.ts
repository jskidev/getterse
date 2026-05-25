export type LegalSectionGroup = {
  heading: string;
  bullets: string[];
};

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  groups?: LegalSectionGroup[];
  bullets?: string[];
  closingParagraphs?: string[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export const privacyPolicyDocument: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "May 2026",
  sections: [
    {
      title: "Quick summary",
      paragraphs: [
        "Terse stores your account details, your single-word reviews, and your social activity (follows, likes). We don't sell your data, show you ads, or track you across other apps. You can delete your account at any time and all your data goes with it. Contact us at support@getterse.app with any questions.",
      ],
    },
    {
      title: "1. What we collect",
      groups: [
        {
          heading: "Information you give us directly",
          bullets: [
            "Account details - your email address (received from Apple or Google when you sign in; we never see your password), your username, display name, biography, and profile picture.",
            "Review content - the single word you submit to review a film, album, book, TV show, or game, and any personal sentiment adjustments you make.",
            "Lists - names, descriptions, and privacy settings of lists you create, plus the items you add to them.",
            "Social actions - who you follow, reviews you like, and users you block or report.",
            "Profile favourites - one item per category you mark as a favourite.",
            "Supporter customisations - your chosen profile colour and reviewer title (Supporter accounts only).",
            "Support requests - the type, subject, and body of messages you send us, plus your app version and device platform.",
            "Notification preferences - which push notification types you opt in to.",
          ],
        },
        {
          heading: "Information collected automatically",
          bullets: [
            "Push notification token - a device-specific token that lets us send you notifications you have opted into. Stored in our database while your account is active.",
            "Error and crash data - if the app crashes, an anonymised report is sent to our error monitoring service (Sentry). It contains a one-way hash of your account ID (not reversible to your name or email), stack traces, and the app state at the time of the error. Your email, username, and review words are never included.",
            "IP address (rate limiting only) - when you search, our servers apply a one-way cryptographic hash to your IP address to count requests per hour. Your raw IP address is not stored beyond that window.",
          ],
        },
        {
          heading: "Derived information",
          bullets: [
            "Taste compatibility score - a percentage showing how closely your word choices overlap with another user's. Computed on demand, not stored separately.",
            "Sentiment scores - each word you review is automatically given a sentiment score (positive to negative) by our database. You can override yours at any time.",
          ],
        },
      ],
      closingParagraphs: [
        "What we do not collect: your precise location, device contacts, browsing history outside the app, advertising identifiers, or payment card details (those go directly to Apple or Google). Guest users (not signed in) generate no personal data beyond anonymised error reports.",
      ],
    },
    {
      title: "2. How we use it",
      bullets: [
        "To operate the app - displaying your profile and reviews, powering social features, and enabling search.",
        "To send notifications - delivering push notifications you have opted into (new followers, likes, follow requests). We do not send marketing notifications.",
        "To diagnose errors - using anonymised crash reports to identify and fix bugs.",
        "To process purchases - facilitating the Supporter upgrade via RevenueCat, Apple, and Google.",
        "To moderate content - reviewing reports of content that may violate our Terms of Use.",
        "To respond to support requests.",
        "To maintain security - enforcing rate limits on API calls.",
      ],
      closingParagraphs: [
        "We do not use your data for advertising or sell it to any third party.",
      ],
    },
    {
      title: "3. Legal basis (EU / GDPR)",
      paragraphs: [
        "If you are in the European Economic Area or the UK, we process your data on the following bases:",
      ],
      bullets: [
        "Performance of a contract - to provide you with the Terse service you signed up for (account, reviews, social features).",
        "Legitimate interests - to maintain security and reliability of the app, and to diagnose errors using anonymised data.",
        "Consent - to send you push notifications. You can withdraw consent at any time in your device settings or in Settings → Notifications.",
        "Legal obligation - to comply with applicable laws, including data breach notification requirements.",
      ],
    },
    {
      title: "4. Third-party services",
      paragraphs: [
        "We use the following third-party services. Each receives only the data it needs to do its job. We do not share your data with advertising networks.",
      ],
      bullets: [
        "Supabase (supabase.com) - database, authentication, and file storage (profile pictures). Data is stored on servers in the United States.",
        "RevenueCat (revenuecat.com) - manages the Supporter purchase entitlement. RevenueCat never sees your payment card details.",
        "Apple - Sign In with Apple and App Store payment processing.",
        "Google - Sign In with Google and Google Play payment processing.",
        "Sentry (sentry.io) - crash and error monitoring. User identifiers sent to Sentry are one-way hashed and cannot be reversed to identify you. No email or username is ever sent.",
        "Expo (expo.dev) - push notification delivery infrastructure.",
        "OMDb - film and TV metadata (proxied via our servers; the provider sees our server IP, not yours).",
        "MusicBrainz - music metadata (proxied via our servers).",
        "Open Library - book metadata (proxied via our servers).",
        "IGDB / Twitch - game metadata (proxied via our servers).",
      ],
      closingParagraphs: ["We do not sell your personal data to any third party."],
    },
    {
      title: "5. International data transfers",
      paragraphs: [
        "Terse is operated from Australia. Our primary data storage (Supabase) is on servers in the United States. Other providers may operate globally.",
        "By using the app, you acknowledge that your information may be processed in countries other than your own.",
      ],
    },
    {
      title: "6. Your profile and privacy settings",
      paragraphs: [
        "By default, your username, display name, bio, profile picture, and reviews are publicly visible to anyone using the app, including users who are not signed in.",
        "You can switch your account to private in Settings → Privacy. A private account hides your reviews, follower list, and following list from users who do not follow you.",
        "You can block specific users at any time. Blocked users cannot see your profile or reviews.",
        "You can delete your account at any time from Settings, which permanently removes all your data.",
      ],
    },
    {
      title: "7. Data retention",
      bullets: [
        "Account data (profile, reviews, lists, likes, follows, favourites): retained while your account is active. Deleting your account permanently removes all associated data within 30 days.",
        "Support requests: retained for up to 2 years to help identify recurring issues.",
        "Error logs (Sentry): automatically purged after 90 days.",
        "Rate-limit hashes: expire automatically after their rate-limit window (up to 1 hour) and are not retained beyond that.",
        "Push notification tokens: deleted when you delete your account.",
      ],
    },
    {
      title: "8. Security",
      bullets: [
        "All data between the app and our servers is encrypted using TLS.",
        "Our database uses Row Level Security policies so each user can only access data they are authorised to see.",
        "User identifiers sent to error monitoring are anonymised using a one-way hash that cannot be reversed.",
        "IP addresses used for rate limiting are hashed with a secret salt before any storage, so raw IP addresses are never retained.",
        "We do not store passwords - authentication is handled by Apple and Google via OAuth.",
      ],
      closingParagraphs: [
        "No method of transmission or storage is 100% secure. While we take these steps, we cannot guarantee absolute security.",
      ],
    },
    {
      title: "9. Data breach response",
      paragraphs: [
        "If we become aware of a breach, we will:",
      ],
      bullets: [
        "Notify affected users where the breach is likely to result in a high risk to your rights.",
        "Take immediate steps to contain the breach and prevent recurrence.",
      ],
    },
    {
      title: "10. Your rights",
      paragraphs: [
        "You can update your profile at any time from within the app. You can delete your account from Settings. You can adjust notification preferences in Settings → Notifications.",
      ],
      closingParagraphs: [
        "To exercise your right to access, rectify, erase, restrict, and port your personal data, contact us at support@getterse.app.",
      ],
    },
    {
      title: "11. Children",
      paragraphs: [
        "Terse is not directed at children under 13 (or under 16 in some EEA countries). We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, contact us at support@getterse.app and we will delete it promptly.",
      ],
    },
    {
      title: "12. Changes",
      paragraphs: [
        "We may update this policy from time to time. The date at the top shows when it was last revised. We will notify you of material changes through the app. Where required by law, we will seek renewed consent. Continued use of the app after changes constitutes acceptance of the updated policy.",
      ],
    },
    {
      title: "13. Contact",
      paragraphs: [
        "Questions about your privacy or data? Contact us at support@getterse.app.",
      ],
    },
  ],
};

export const termsOfUseDocument: LegalDocument = {
  title: "Terms of Use",
  lastUpdated: "May 2026",
  sections: [
    {
      title: "1. Acceptance",
      paragraphs: [
        "These Terms of Use form a legally binding agreement between you and the operator of Terse. By downloading, installing, or using the Terse app (\"the App\"), you confirm that you have read and agree to these Terms. If you do not agree, do not use the App.",
      ],
    },
    {
      title: "2. Eligibility",
      paragraphs: [
        "You must be at least 13 years old to use Terse. If you are between 13 and 18 (or the applicable age of majority in your jurisdiction), you may only use the App with the consent of a parent or legal guardian who agrees to these Terms on your behalf. By using the App, you confirm you meet these age requirements.",
      ],
    },
    {
      title: "3. Your account",
      paragraphs: [
        "You can sign in using Apple Sign In or Google Sign In. You will choose a username during onboarding.",
        "You are responsible for all activity that occurs under your account. Keep your credentials secure and do not share your account.",
        "Your profile information must be accurate and must not impersonate any other person or entity.",
        "Guest mode: You may browse the app without creating an account. Guest users cannot post reviews, follow other users, or access social features. Our Privacy Policy still applies to guest use.",
        "If you believe your account has been accessed without your authorisation, contact us immediately at support@getterse.app.",
      ],
    },
    {
      title: "4. The one-word rule",
      paragraphs: [
        "Terse is a single-word review platform. Every review must consist of exactly one real, meaningful word. Reviews are validated automatically. You may not:",
      ],
      bullets: [
        "Submit multiple words, phrases, or sentences.",
        "Use numbers, symbols, or other non-word characters (except apostrophes or hyphens that are part of a word's standard spelling).",
        "Circumvent the word constraint through any technical means.",
      ],
      closingParagraphs: [
        "We reserve the right to remove reviews that violate this constraint.",
      ],
    },
    {
      title: "5. Content standards",
      paragraphs: [
        "You retain ownership of the content you create on Terse (reviews, lists, bio, and profile). By posting, you confirm you have the right to do so. You must not post content that:",
      ],
      bullets: [
        "Is illegal in your jurisdiction or in Australia.",
        "Is defamatory, harassing, or threatening toward any person.",
        "Constitutes hate speech targeting any group on the basis of race, ethnicity, religion, gender, sexual orientation, disability, or similar characteristics.",
        "Infringes the intellectual property rights of any third party.",
        "Contains another person's private information without their consent.",
        "Is spam or automated content.",
      ],
      closingParagraphs: [
        "We reserve the right to remove content and suspend accounts that violate these standards.",
      ],
    },
    {
      title: "6. Licence grant",
      paragraphs: [
        "By posting content on Terse, you grant us a non-exclusive, royalty-free, sublicensable, worldwide licence to display, reproduce, and distribute your content within the App and in promotional materials related to the App (for example, App Store screenshots featuring the word cloud). This licence ends when you delete the content or your account.",
        "You retain all ownership rights to your content. We do not claim ownership of your reviews.",
      ],
    },
    {
      title: "7. Social features",
      paragraphs: [
        "Terse includes following, liking, creating lists, and reporting content. You agree to use these features in good faith and in a way that respects other users. Misuse - including harassment, coordinated abuse, spam following, or abuse of the reporting system - may result in account suspension or termination.",
        "Reports you submit are confidential. Filing false or malicious reports is prohibited.",
      ],
    },
    {
      title: "8. Prohibited uses",
      paragraphs: ["You may not:"],
      bullets: [
        "Use the App for any unlawful purpose.",
        "Attempt to gain unauthorised access to any part of the App or its infrastructure.",
        "Scrape, crawl, or extract data from the App in bulk without our written permission.",
        "Reverse-engineer, decompile, or disassemble the App.",
        "Interfere with or disrupt the App's servers or networks.",
        "Use the App in any way that could damage, disable, or impair the service.",
      ],
    },
    {
      title: "9. Third-party content",
      paragraphs: [
        "Film, TV, music, book, and game information displayed in the app (titles, artwork, descriptions, genres) is sourced from third-party providers including OMDb, MusicBrainz, Open Library, and IGDB. This data is provided for informational purposes only. We make no warranties about its accuracy, completeness, or fitness for any particular purpose. Third-party providers' own terms and licences govern their data.",
      ],
    },
    {
      title: "10. Supporter purchase",
      paragraphs: [
        "The Supporter upgrade is a one-time, non-recurring purchase that unlocks additional features: profile colour customisation, a custom reviewer title, and a personal stats dashboard.",
        "Purchases are processed entirely by Apple (App Store) or Google (Google Play) and are subject to their respective refund policies. We do not process or store your payment details. For refund questions, contact Apple or Google directly.",
        "The Supporter upgrade is tied to your account and may not be transferred. We reserve the right to modify Supporter features in the future; if we remove a feature in a way that materially reduces its value, we will provide reasonable advance notice.",
      ],
    },
    {
      title: "11. Intellectual property",
      paragraphs: [
        "The Terse name, logo, app design, and other original elements are owned by us. These Terms give you no rights in our intellectual property other than the limited right to use the App as described here.",
      ],
    },
    {
      title: "12. Termination",
      paragraphs: [
        "We may suspend or terminate your access to the App at any time if you violate these Terms or engage in conduct harmful to other users or to the App. Where reasonably practicable, we will give advance notice and an opportunity to correct the issue before termination, except in cases of serious violation.",
        "You may delete your account at any time from Settings → Delete Account. Deletion permanently and irreversibly removes your profile, reviews, lists, and all associated content.",
      ],
    },
    {
      title: "13. Disclaimers",
      paragraphs: [
        "The App is provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the App will be uninterrupted or error-free.",
        "Where applicable law does not permit the exclusion of implied warranties, our liability is limited to the fullest extent permitted by law. Nothing in these Terms excludes rights you have under mandatory consumer protection laws in your jurisdiction.",
      ],
    },
    {
      title: "14. Limitation of liability",
      paragraphs: [
        "We will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising from your use of the App or these Terms, even if we have been advised of the possibility of such damages.",
      ],
    },
    {
      title: "15. Indemnification",
      paragraphs: [
        "You agree to indemnify and hold harmless Terse and any related parties from any claims, losses, damages, or expenses (including reasonable legal fees) arising from (a) your use of the App, (b) your content, (c) your violation of these Terms, or (d) your violation of any rights of a third party.",
      ],
    },
    {
      title: "16. Governing law and disputes",
      paragraphs: [
        "These Terms are governed by the laws of the Commonwealth of Australia, without regard to conflict of law principles.",
        "If you have a dispute with us, please contact us first at support@getterse.app so we will try to resolve it.",
      ],
    },
    {
      title: "17. Severability and waiver",
      paragraphs: [
        "If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force and effect. Our failure to enforce any provision is not a waiver of our right to do so in the future.",
      ],
    },
    {
      title: "18. Changes",
      paragraphs: [
        "We may update these Terms from time to time. The date at the top shows when they were last revised. We will notify you of material changes through the app. Continued use of the App after changes constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must stop using the App.",
      ],
    },
    {
      title: "19. Contact",
      paragraphs: ["Questions about these Terms? Contact us at support@getterse.app."],
    },
  ],
};
