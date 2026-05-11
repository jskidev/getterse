import { createPageMetadata } from "../lib/siteMetadata";
import { privacyPolicyDocument } from "../lib/legalDocuments";
import LegalDocumentView from "../ui/legal-document";

export const metadata = createPageMetadata({
  path: "/privacy",
  title: "Privacy Policy",
  description: "How Terse collects, uses, and protects your personal data.",
});

export default function PrivacyPage() {
  return <LegalDocumentView document={privacyPolicyDocument} />;
}
