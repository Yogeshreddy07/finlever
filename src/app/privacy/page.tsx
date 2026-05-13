import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | FinLever Consulting",
};

const sections = [
  {
    title: "Data Collection",
    body: [
      "We collect only the information reasonably required to respond to enquiries, understand business context, and provide consulting or advisory support.",
      "This may include name, email address, phone number, company details, service interests, and information voluntarily shared through forms or direct communication.",
    ],
  },
  {
    title: "Contact Form Usage",
    body: [
      "Information submitted through the contact form is used to review your requirement, respond to your enquiry, schedule discussions, and maintain professional correspondence.",
      "We do not sell personal information or use enquiry details for unrelated third-party marketing.",
    ],
  },
  {
    title: "Cookies and Basic Analytics",
    body: [
      "The website may use essential cookies, hosting logs, and basic analytics to understand performance, navigation quality, and aggregate visitor behavior.",
      "These signals help us maintain a reliable, secure, and useful website experience.",
    ],
  },
  {
    title: "Communication Consent",
    body: [
      "By contacting FINLEVER, you consent to receiving relevant replies and follow-up communication related to your enquiry or requested services.",
      "You may ask us to stop non-essential communication at any time by writing to our contact email.",
    ],
  },
  {
    title: "Security Statement",
    body: [
      "We apply reasonable administrative and technical safeguards to protect information shared with us.",
      "No internet transmission is completely risk-free, so sensitive commercial information should be shared through agreed secure channels where appropriate.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="A concise statement of how FINLEVER handles enquiry data, communication details, and basic website signals."
      updated="May 13, 2026"
      sections={sections}
    />
  );
}
