import { createPageMetadata } from "../lib/siteMetadata";
import { termsOfUseDocument } from "../lib/legalDocuments";
import LegalDocumentView from "../ui/legal-document";

export const metadata = createPageMetadata({
  path: "/terms",
  title: "Terms of Use",
  description: "Terms of use for the Terse app.",
});

export default function TermsPage() {
  return <LegalDocumentView document={termsOfUseDocument} />;
}
