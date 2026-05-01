"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiLinkedin, FiMail, FiX } from "react-icons/fi";
import { Reveal } from "@/components/ui/Reveal";

/* ─── DATA ──────────────────────────────────────────────────────── */

type TeamMember = {
  name: string;
  role: string;
  subtitle: string;
  image: string;
  shortBio: string;
  bio: string[];
  tags: string[];
  highlights: string[];
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Senthilkumar Thirumalaisamy",
    role: "Director",
    subtitle: "CFO Advisory & Digital Finance Lead",
    image: "/image/SenthilkumarThirumalaisamy%20.jpeg",
    shortBio:
      "A seasoned finance professional with 16+ years in corporate finance, treasury, capital structuring, and SME growth advisory across India's leading conglomerates.",
    bio: [
      "Senthilkumar Thirumalaisamy is a seasoned finance professional with over 16 years of experience in corporate finance, treasury, and capital structuring.",
      "With prior experience at leading conglomerates like the Murugappa Group and TVS Group, he brings institutional financial discipline to growing businesses. He has successfully managed over ₹2,500 Crores in debt syndication and investment transactions and has guided companies through IPO readiness for valuations exceeding ₹500 Crores.",
      "As Director at FINLEVER, he specializes in helping SMEs and mid-market companies become investment-ready through strategic financial frameworks.",
      "He currently leads FINLEVER's Consulting, Virtual CFO Services and Digital Finance verticals, enabling businesses to optimize capital, strengthen financial systems, and achieve sustainable growth.",
    ],
    tags: ["CFO Advisory", "Treasury", "Capital Markets", "IPO Readiness"],
    highlights: [
      "₹2,500 Cr+ in debt syndication & investment transactions",
      "IPO readiness for valuations exceeding ₹500 Crores",
      "Murugappa Group & TVS Group alumni",
      "Leads Consulting, Virtual CFO & Digital Finance verticals",
    ],
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Balamurugan R",
    role: "Director",
    subtitle: "Corporate Treasury & Capital Allocation Lead",
    image: "/image/Balamurugan.jpeg",
    shortBio:
      "An accomplished finance professional with 15+ years across corporate finance, treasury management, and strategic financial planning — backed by an MBA in Finance.",
    bio: [
      "An accomplished finance professional with over 15 years of experience across corporate finance, treasury management, and strategic financial planning, backed by an MBA in Finance. Combines strong execution capabilities with strategic financial insight to drive business performance.",
      "Has worked with globally reputed organizations and large conglomerates, including Alstom, Ramco Group, Tata Group and the Murugappa Group, gaining deep exposure to complex financial ecosystems, multi-entity structures, and large-scale financial operations.",
      "Specializes in CFO advisory, financial markets, and technology-driven MIS transformation, enabling organizations to enhance financial visibility, control, and data-driven decision-making.",
      "Currently leads FINLEVER's Corporate Treasury and Capital Allocation practice, focusing on strategic liquidity management, capital structuring, and risk optimization to enhance financial stability and long-term value creation.",
    ],
    tags: ["Corporate Finance", "Treasury Mgmt", "MIS Transformation", "Capital Allocation"],
    highlights: [
      "Tata Group, Alstom, Ramco & Murugappa alumni",
      "Technology-driven MIS & CFO advisory expertise",
      "Multi-entity & cross-border finance operations",
      "Leads Corporate Treasury & Capital Allocation practice",
    ],
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ganesh Vaidyanathan",
    role: "Associate",
    subtitle: "Global Accounting & Internal Controls Lead",
    image: "/image/GaneshVaidyanathan.jpeg",
    shortBio:
      "A dynamic Chartered Accountant with 5+ years of post-qualification experience in financial reporting, Ind AS, GAAP, internal controls, and compliance governance.",
    bio: [
      "A dynamic Chartered Accountant with over 5 years of post-qualification experience across financial reporting, taxation, and internal controls with a strong focus on compliance and accuracy.",
      "Previously served as Manager – Finance at E.I.D.-Parry (India) Limited, where he managed corporate finance and taxation functions ensuring high standards of financial discipline and regulatory adherence.",
      "Brings expertise in Ind AS and GAAP reporting, direct taxation, Internal Financial Controls (IFC), and internal audits, ensuring robust compliance and governance frameworks.",
      "Currently leads FINLEVER's Global Accounting, Financial Reporting, and Internal Controls functions, ensuring accuracy, compliance, and consistency across financial operations.",
    ],
    tags: ["Ind AS / GAAP", "Internal Audit", "Compliance", "Direct Tax"],
    highlights: [
      "E.I.D.-Parry (India) Ltd — Manager Finance alumni",
      "Expert in Ind AS, IFRS & US GAAP reporting",
      "Internal Financial Controls (IFC) implementation",
      "Leads Global Accounting & Financial Reporting",
    ],
    linkedin: "https://www.linkedin.com/",
  },
];

/* ─── LINKEDIN SVG ──────────────────────────────────────────────── */

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── MAIN COMPONENT ────────────────────────────────────────────── */

export function TeamClient() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openModal = (idx: number) => setActiveIdx(idx);
  const closeModal = () => setActiveIdx(null);

  const activeMember = activeIdx !== null ? teamMembers[activeIdx] : null;

  /* Escape key + body scroll lock */
  useEffect(() => {
    if (activeIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="section-pad pb-0">
        <div className="site-container">
          <Reveal>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[hsl(var(--accent))]" aria-hidden="true" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.27em] text-[hsl(var(--accent))]">
                Leadership Team
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-display text-[clamp(2.4rem,6.5vw,5.2rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[hsl(var(--foreground))]">
              Meet the{" "}
              <em className="italic font-medium text-[hsl(var(--accent))]">Minds</em>
              <br />
              Behind FINLEVER
            </h1>

            <p className="mt-6 max-w-140 text-[clamp(0.95rem,2vw,1.06rem)] leading-[1.75] text-[hsl(var(--muted-foreground))]">
              Our leadership brings together decades of institutional finance, deep domain
              expertise, and a technology-first approach — partnering with businesses to
              unlock sustainable growth and strategic financial clarity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TEAM GRID ──────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="site-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 0.07}>
                <article
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.8)] bg-[hsl(var(--card))] transition-all duration-380 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-[hsl(var(--accent)/0.75)] hover:bg-[hsl(var(--card-hover))] hover:shadow-[0_24px_60px_hsl(var(--shadow)/0.22),0_0_0_1px_hsl(var(--accent)/0.25)] dark:hover:shadow-[0_24px_60px_hsl(var(--shadow)/0.5),0_0_0_1px_hsl(var(--accent)/0.25)]"
                  onClick={() => openModal(idx)}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openModal(idx)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View profile: ${member.name}`}
                >
                  {/* Photo */}
                  <div className="relative h-75 shrink-0 overflow-hidden bg-[hsl(var(--secondary))]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      priority={idx < 2}
                      className="object-cover object-top grayscale contrast-[1.05] transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    {/* Bottom gradient */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[hsl(var(--card)/0.95)] to-transparent" />
                    {/* Role badge */}
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-[hsl(var(--accent)/0.55)] bg-[hsl(var(--accent)/0.14)] px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[hsl(var(--accent))] backdrop-blur-md">
                      {member.role}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6 pb-0">
                    <h3 className="font-display text-[1.55rem] font-bold leading-[1.15] tracking-[-0.01em] text-[hsl(var(--foreground))]">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                      {member.subtitle}
                    </p>
                    <p className="mt-4 line-clamp-3 text-sm leading-[1.7] text-[hsl(var(--muted-foreground))]">
                      {member.shortBio}
                    </p>
                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--border)/0.45)] px-2.5 py-1 text-[0.62rem] font-medium text-[hsl(var(--muted-foreground))] transition duration-200 group-hover:border-[hsl(var(--accent)/0.5)] group-hover:text-[hsl(var(--accent))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="mt-auto flex items-center justify-between px-6 py-5">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.04em] text-[hsl(var(--muted-foreground))] transition duration-200 hover:text-[hsl(var(--accent))]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <LinkedInIcon className="size-3.5" />
                      LinkedIn
                    </a>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.04em] text-[hsl(var(--muted-foreground))] transition duration-200 hover:text-[hsl(var(--accent))]"
                      aria-label="View full profile"
                      tabIndex={-1}
                    >
                      View Profile
                      <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-current transition duration-300 group-hover:border-[hsl(var(--accent))] group-hover:bg-[hsl(var(--accent)/0.1)]">
                        <FiArrowRight className="size-2.5" />
                      </span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────── */}
      <section className="section-pad-sm">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.8)] bg-[hsl(var(--card))] px-8 py-14 sm:px-16 dark:bg-[hsl(var(--card)/0.78)]">
            {/* Glow orb */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-75 w-75 rounded-full bg-[hsl(var(--glow)/0.12)] blur-[80px]"
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.27em] text-[hsl(var(--accent))]">
                  Work With Us
                </p>
                <h2 className="font-display text-[clamp(1.65rem,3.8vw,2.2rem)] font-normal leading-[1.2] tracking-[-0.01em] text-[hsl(var(--foreground))]">
                  Ready to Build Your{" "}
                  <em className="italic">Financial Strategy?</em>
                </h2>
                <p className="mt-3 max-w-110 text-[15px] leading-[1.6] text-[hsl(var(--muted-foreground))]">
                  Speak directly with our leadership team to explore how FINLEVER can help
                  your organisation achieve financial clarity and growth.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--cta))] px-8 py-3.5 text-sm font-bold tracking-[0.02em] text-[hsl(var(--cta-foreground))] shadow-[0_12px_32px_hsl(var(--glow)/0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_hsl(var(--glow)/0.32)]"
                >
                  Book a Consultation
                  <FiArrowRight className="size-4" />
                </Link>
                <a
                  href="mailto:info@finlever.co"
                  className="inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border)/0.9)] px-7 py-3.5 text-sm font-medium text-[hsl(var(--muted-foreground))] transition duration-200 hover:border-[hsl(var(--accent)/0.7)] hover:text-[hsl(var(--accent))]"
                >
                  <FiMail className="size-4" />
                  info@finlever.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFILE MODAL ──────────────────────────────────────── */}
      {activeIdx !== null && activeMember && (
        <div
          className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.72)", backdropFilter: "blur(12px)" }}
          role="dialog"
          aria-modal="true"
          aria-label={`Profile: ${activeMember.name}`}
          onClick={handleOverlayClick}
        >
          <div
            className="relative flex max-h-[88vh] w-full max-w-205 flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.9)] bg-[hsl(var(--card))] shadow-[0_40px_120px_hsl(var(--shadow)/0.5)] dark:border-[hsl(var(--border)/0.8)] dark:shadow-[0_40px_120px_hsl(var(--shadow)/0.72)]"
            role="document"
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-[hsl(var(--border)/0.9)] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] transition duration-200 hover:border-[hsl(var(--accent)/0.7)] hover:bg-[hsl(var(--accent)/0.1)] hover:text-[hsl(var(--accent))]"
            >
              <FiX className="size-4" />
            </button>

            {/* Scrollable area */}
            <div className="overflow-y-auto">
              {/* Modal header */}
              <div className="flex flex-col gap-6 border-b border-[hsl(var(--border)/0.55)] p-6 sm:flex-row sm:gap-8 sm:p-8">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border-2 border-[hsl(var(--border)/0.8)]">
                  <Image
                    src={activeMember.image}
                    alt={activeMember.name}
                    fill
                    className="object-cover object-top grayscale contrast-[1.05]"
                  />
                </div>
                <div className="flex-1">
                  <span className="mb-2.5 inline-block rounded-full border border-[hsl(var(--accent)/0.5)] bg-[hsl(var(--accent)/0.12)] px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[hsl(var(--accent))]">
                    {activeMember.role}
                  </span>
                  <h2 className="font-display text-[1.9rem] font-bold leading-[1.1] tracking-[-0.01em] text-[hsl(var(--foreground))] sm:text-[2rem]">
                    {activeMember.name}
                  </h2>
                  <p className="mt-1.5 text-[0.75rem] font-medium tracking-[0.04em] text-[hsl(var(--muted-foreground))]">
                    {activeMember.subtitle}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {activeMember.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--border)/0.45)] px-2.5 py-1 text-[0.62rem] font-medium text-[hsl(var(--muted-foreground))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal body */}
              <div className="flex flex-col gap-6 p-6 sm:p-8">
                {/* Full bio */}
                <div>
                  <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]">
                    Profile
                  </p>
                  <div className="space-y-3">
                    {activeMember.bio.map((para, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-[1.78] text-[hsl(var(--muted-foreground))]"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Highlights grid */}
                <div>
                  <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[hsl(var(--accent))]">
                    Highlights
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeMember.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2.5 rounded-xl border border-[hsl(var(--border)/0.7)] bg-[hsl(var(--background)/0.5)] p-3.5"
                      >
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]"
                          aria-hidden="true"
                        />
                        <p className="text-[13px] leading-normal text-[hsl(var(--muted-foreground))]">
                          {h}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="flex flex-wrap items-center gap-3 border-t border-[hsl(var(--border)/0.55)] pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[hsl(var(--cta))] px-7 py-3 text-sm font-bold tracking-[0.02em] text-[hsl(var(--cta-foreground))] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--glow)/0.28)]"
                    onClick={closeModal}
                  >
                    Book a Consultation
                    <FiArrowRight className="size-4" />
                  </Link>
                  <a
                    href={activeMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[hsl(var(--border)/0.9)] px-6 py-3 text-sm font-medium text-[hsl(var(--muted-foreground))] transition duration-200 hover:border-[hsl(var(--accent)/0.7)] hover:text-[hsl(var(--accent))]"
                  >
                    <LinkedInIcon className="size-4" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
