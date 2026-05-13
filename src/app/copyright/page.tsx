import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Copyright | FinLever Consulting",
};

const sections = [
  {
    title: "FINLEVER Ownership",
    body: [
      "Unless otherwise stated, all website content, page structure, copy, brand references, graphics, and presentation materials are owned by FINLEVER Consulting or used with permission.",
      "All rights are reserved by FINLEVER Consulting.",
    ],
  },
  {
    title: "Brand and IP Statement",
    body: [
      "FINLEVER's name, identity, service language, and associated brand assets may not be used in a way that suggests endorsement, partnership, or authorization without written consent.",
      "References to third-party names or platforms remain the property of their respective owners.",
    ],
  },
  {
    title: "Content, Media, and Code Protection",
    body: [
      "Website copy, media, interface patterns, source code, and design implementation are protected by applicable intellectual property laws.",
      "Reproduction, scraping, resale, redistribution, or derivative commercial use is prohibited unless expressly approved in writing.",
    ],
  },
  {
    title: "Permission Requests",
    body: [
      "For permission to cite, reproduce, or use FINLEVER materials, contact us with the intended use, context, and distribution scope.",
      "Approved usage must preserve attribution and must not misrepresent FINLEVER's role or services.",
    ],
  },
];

export default function CopyrightPage() {
  return (
    <LegalPage
      eyebrow="Copyright"
      title="Copyright Notice"
      intro="A focused ownership statement covering FINLEVER's brand, content, media, and website implementation."
      updated="May 13, 2026"
      sections={sections}
    />
  );
}
