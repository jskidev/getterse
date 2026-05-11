export type LegalSection = {
  title: string;
  paragraphs?: string[];
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
      title: "1. What we collect",
      paragraphs: ["We collect the following information when you use Terse:"],
      bullets: [
        "Account information: your email address (via Apple or Google sign-in), username, display name, bio, and profile picture.",
        "Content: the reviews (single words) you post, lists you create, and the items you add to them.",
        "Social data: who you follow and who follows you, reviews you have liked, and your notification preferences.",
        "Profile customisations: reviewer title and profile colour (Supporter accounts).",
        "Technical data: push notification tokens (to deliver notifications you have opted into) and anonymised error reports to help us diagnose crashes. Error reports do not contain your email address or any identifier that can be traced back to you.",
      ],
    },
    {
      title: "2. How we use it",
      paragraphs: [
        "We use your information to operate Terse — to show your reviews and profile to other users, to power social features like following and likes, to send notifications you have opted into, and to diagnose errors. We do not use your data for advertising.",
      ],
    },
    {
      title: "3. Legal basis (EU / GDPR)",
      paragraphs: [
        "If you are in the European Economic Area, we process your personal data on the following bases:",
      ],
      bullets: [
        "Performance of a contract — to provide you with the Terse service you signed up for.",
        "Legitimate interests — to maintain the security and reliability of the app, and to diagnose errors using anonymised data.",
        "Consent — to send you push notifications (you can withdraw consent at any time in your device settings or in Settings → Notifications).",
      ],
    },
    {
      title: "4. Third-party services",
      paragraphs: ["We use the following third-party services to operate the app:"],
      bullets: [
        "Supabase — database, authentication, and file storage (profile pictures). Data is stored on servers in the United States.",
        "RevenueCat — purchase management for the Supporter upgrade. Payment details are handled entirely by Apple or Google; RevenueCat only sees purchase status.",
        "Apple / Google — sign-in and payment processing.",
        "Sentry — crash and error monitoring. User identifiers sent to Sentry are one-way hashed and cannot be reversed to identify you.",
        "Expo — push notification delivery infrastructure.",
      ],
      closingParagraphs: ["We do not sell your personal data to any third party."],
    },
    {
      title: "5. International data transfers",
      paragraphs: [
        "Terse is operated from Australia. Our primary data processor (Supabase) stores data on servers in the United States. By using the app, you acknowledge that your information may be transferred to and processed in countries outside your own, including countries that may have different data protection laws. Where required by law, we rely on standard contractual clauses or equivalent safeguards for such transfers.",
      ],
    },
    {
      title: "6. Public profile and privacy settings",
      paragraphs: [
        "Your username, display name, bio, profile picture, and reviews are public by default. You can switch your account to private in Settings → Privacy. A private account hides your reviews, follower list, and following list from users who do not follow you.",
      ],
    },
    {
      title: "7. Data retention",
      paragraphs: [
        "We retain your data for as long as your account is active. You can delete your account at any time from Settings, which permanently and irreversibly removes your profile, reviews, lists, and all associated data from our systems.",
      ],
    },
    {
      title: "8. Your rights",
      paragraphs: [
        "Depending on where you live, you may have the right to access, correct, or delete your personal data; to receive a copy of it in a portable format; or to object to or restrict certain processing.",
      ],
      bullets: [
        "EU / EEA residents have these rights under the GDPR and may also lodge a complaint with their local data protection authority.",
        "Australian residents have rights under the Australian Privacy Act 1988.",
      ],
      closingParagraphs: [
        "To exercise any of these rights, contact us at support@getterse.app. We will respond within 30 days.",
      ],
    },
    {
      title: "9. Children",
      paragraphs: [
        "Terse is not directed at children under 13. If we become aware that a child under 13 has created an account, we will delete it promptly.",
      ],
    },
    {
      title: "10. Changes",
      paragraphs: [
        "We may update this policy from time to time. We will notify you of material changes through the app. Continued use of the app after changes constitutes acceptance of the updated policy.",
      ],
    },
    {
      title: "11. Contact",
      paragraphs: ["Questions about your data? Reach us at support@getterse.app."],
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
        "By creating an account and using Terse, you agree to these Terms of Use. If you do not agree, do not use the app.",
      ],
    },
    {
      title: "2. Your account",
      paragraphs: [
        "You must be at least 13 years old to use Terse. You are responsible for keeping your account credentials secure and for all activity that occurs under your account. If you believe your account has been compromised, contact us immediately.",
      ],
    },
    {
      title: "3. Content and reviews",
      paragraphs: [
        "You retain ownership of the reviews you post. By posting, you grant Terse a non-exclusive, royalty-free, worldwide licence to display your content within the app and in any promotional materials related to the app. You agree not to post content that is harmful, defamatory, illegal, or that violates the rights of others.",
      ],
    },
    {
      title: "4. One-word rule",
      paragraphs: [
        "Terse is a single-word review platform. Every review must consist of exactly one real word. Word submissions are validated automatically. We reserve the right to remove reviews that circumvent this constraint or otherwise violate our content guidelines.",
      ],
    },
    {
      title: "5. Social features",
      paragraphs: [
        "Terse includes social features such as following other users, liking reviews, creating lists, and reporting content. You agree to use these features respectfully. Misuse — including harassment, spam, or abuse of the reporting system — may result in account suspension or termination.",
      ],
    },
    {
      title: "6. Third-party content",
      paragraphs: [
        "Film, TV, music, book, and game metadata displayed in the app is sourced from third-party providers (including OMDb, MusicBrainz, Open Library, and IGDB). This data is provided for informational purposes only. Terse makes no warranties about its accuracy.",
      ],
    },
    {
      title: "7. Supporter purchase",
      paragraphs: [
        "The Supporter upgrade is a one-time purchase that unlocks additional features including profile customisation and a stats dashboard. Purchases are processed by Apple App Store or Google Play and are subject to their respective refund policies. Terse does not process payment details directly.",
      ],
    },
    {
      title: "8. Termination",
      paragraphs: [
        "We may suspend or terminate your account if you violate these terms or engage in conduct that is harmful to other users or to the app. You may delete your account at any time from the Settings screen, which permanently removes your profile and all associated content.",
      ],
    },
    {
      title: "9. Disclaimers",
      paragraphs: [
        'Terse is provided "as is" without warranties of any kind, express or implied. To the maximum extent permitted by law, we are not liable for any direct, indirect, or consequential damages arising from your use of the app.',
      ],
    },
    {
      title: "10. Governing law",
      paragraphs: [
        "These terms are governed by the laws of Australia. If you are located in the European Union, you may also have rights under applicable EU consumer protection law that these terms do not limit.",
      ],
    },
    {
      title: "11. Changes",
      paragraphs: [
        "We may update these terms from time to time. We will notify you of material changes through the app. Continued use after changes constitutes acceptance of the updated terms.",
      ],
    },
    {
      title: "12. Contact",
      paragraphs: ["Questions? Reach us at support@getterse.app."],
    },
  ],
};
