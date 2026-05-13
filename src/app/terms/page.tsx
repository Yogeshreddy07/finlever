import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | FinLever Consulting",
};

const sections = [
  {
    title: "Informational Usage",
    body: [
      "The content on this website is provided for general informational purposes and to describe FINLEVER's consulting capabilities.",
      "Website content should not be treated as a complete statement of professional advice for any specific business, transaction, tax, accounting, or regulatory matter.",
    ],
  },
  {
    title: "Advisory Limitation",
    body: [
      "Any professional engagement, scope of work, deliverable, timeline, or fee arrangement must be agreed separately in writing.",
      "Users should obtain tailored advice before acting on finance, treasury, compliance, reporting, fundraising, or transaction decisions.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The FINLEVER name, website content, service descriptions, graphics, visual identity, and related materials are owned by or licensed to FINLEVER.",
      "No content may be copied, republished, modified, or distributed for commercial use without prior written permission.",
    ],
  },
  {
    title: "Service Limitation",
    body: [
      "Website access does not create a client relationship, fiduciary duty, or obligation to provide services.",
      "FINLEVER may update services, website content, availability, and contact references from time to time without prior notice.",
    ],
  },
  {
    title: "External Links",
    body: [
      "This website may reference external websites or third-party platforms for convenience.",
      "FINLEVER is not responsible for the content, policies, availability, or security practices of external websites.",
    ],
  },
  {
    title: "Contact References",
    body: [
      "Email addresses, phone numbers, and office details are provided for professional communication with FINLEVER.",
      "Misuse of contact details, unsolicited bulk messages, or misleading references to FINLEVER are not permitted.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="Clear usage terms for visitors reviewing FINLEVER's website, services, and professional contact references."
      updated="May 13, 2026"
      sections={sections}
    />
  );
}
