"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowRight, FiMail, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

/* ─── DATA ─────────────────────────────────────────────────────── */

type TeamMember = {
  name: string;
  role: string;
  subtitle: string;
  image: string;
  cardImageClass: string;
  modalImageClass: string;
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
    cardImageClass: "object-[50%_20%] scale-[1.08] group-hover:scale-[1.12]",
    modalImageClass: "object-[50%_18%] scale-[1.08]",
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
    linkedin: "https://www.linkedin.com/in/senthilkumar-thirumalaisamy-172aa7a/",
  },
  {
    name: "Balamurugan R",
    role: "Director",
    subtitle: "Corporate Treasury & Capital Allocation Lead",
    image: "/image/Balamurugan.jpeg",
    cardImageClass: "object-[50%_32%] group-hover:scale-[1.04]",
    modalImageClass: "object-[50%_31%]",
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
    linkedin: "https://www.linkedin.com/in/balamurugan-rathinasamy-860b7353/",
  },
  {
    name: "Ganesh Vaidyanathan",
    role: "Associate",
    subtitle: "Global Accounting & Reporting Lead",
    image: "/image/GaneshVaidyanathan.jpeg",
    cardImageClass: "object-[50%_21%] scale-[1.14] group-hover:scale-[1.18]",
    modalImageClass: "object-[50%_18%] scale-[1.12]",
    shortBio:
      "A dynamic Chartered Accountant with 5+ years of post-qualification experience in financial reporting, Ind AS, GAAP, internal controls, and compliance governance.",
    bio: [
      "A dynamic Chartered Accountant with over 5 years of post-qualification experience across financial reporting, taxation, and internal controls with a strong focus on compliance and accuracy.",
      "Previously served as Manager – Finance at E.I.D.-Parry (India) Limited, where he managed corporate finance and taxation functions ensuring high standards of financial discipline and regulatory adherence.",
      "Brings expertise in Ind AS and GAAP reporting, direct taxation, Internal Financial Controls (IFC), and internal audits, ensuring robust compliance and governance frameworks.",
      "Currently leads FINLEVER's Global Accounting & Reporting and Internal Controls functions, ensuring accuracy, compliance, and consistency across financial operations.",
    ],
    tags: ["Ind AS / GAAP", "Internal Audit", "Compliance", "Direct Tax"],
    highlights: [
      "E.I.D.-Parry (India) Ltd — Manager Finance alumni",
      "Expert in Ind AS, IFRS & US GAAP reporting",
      "Internal Financial Controls (IFC) implementation",
      "Leads Global Accounting & Reporting",
    ],
    linkedin: "https://www.linkedin.com/in/ganesh-kavassery-vaidyanathan-0640ba152/",
  },
];

/* ─── LINKEDIN ICON ─────────────────────────────────────────────── */

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

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */

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
  }, [activeIdx]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-pad pb-4 sm:pb-6">
        <div className="absolute inset-0 ai-grid opacity-[0.04]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_72%_52%_at_50%_0%,hsl(var(--glow)/0.14),transparent_62%)]" />

        <div className="site-container relative">
          <Reveal>
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[hsl(var(--accent))]" aria-hidden="true" />
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.27em] text-[hsl(var(--accent))]">
                Leadership Team
              </p>
            </div>

            <h1 className="max-w-[16ch] font-display text-[clamp(2.4rem,6.5vw,5.2rem)] font-normal leading-[1.05] tracking-[-0.02em] text-pretty text-[hsl(var(--foreground))]">
              Meet the{" "}
              <em className="font-medium italic text-[hsl(var(--accent))]">Minds</em>{" "}
              Behind FINLEVER
            </h1>

            <p className="mt-5 max-w-xl text-[clamp(0.92rem,1.8vw,1rem)] leading-[1.72] text-[hsl(var(--muted-foreground))]">
              Our leadership brings together decades of institutional finance, deep domain
              expertise, and a technology-first approach — partnering with businesses to
              unlock sustainable growth and strategic financial clarity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TEAM GRID ────────────────────────────────────────────── */}
      <section className="pt-4 pb-[clamp(2rem,4vw,4rem)] sm:pt-6">
        <div className="site-container">
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 0.1} variant="scale" className="h-full">
                <article
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.65)] bg-[hsl(var(--card))] shadow-[0_2px_14px_hsl(var(--shadow)/0.09)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.68)] hover:bg-[hsl(var(--card-hover))] hover:shadow-[0_22px_54px_hsl(var(--shadow)/0.2),0_0_0_1px_hsl(var(--accent)/0.18)] dark:hover:shadow-[0_24px_62px_hsl(var(--shadow)/0.5),0_0_0_1px_hsl(var(--accent)/0.2)]"
                  onClick={() => openModal(idx)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && openModal(idx)
                  }
                  tabIndex={0}
                  role="button"
                  aria-label={`View profile: ${member.name}`}
                >
                  {/* Photo */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[hsl(var(--secondary))]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      preload={idx < 2}
                      className={`object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${member.cardImageClass}`}
                    />
                    {/* Role badge */}
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-[hsl(218_84%_76%/0.42)] bg-[hsl(222_58%_8%/0.72)] px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/92 shadow-[0_8px_24px_hsl(222_70%_2%/0.28)] backdrop-blur-md">
                      {member.role}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6 pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-[1.55rem] font-bold leading-[1.15] tracking-[-0.01em] text-[hsl(var(--foreground))]">
                        {member.name}
                      </h3>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/linkedin mt-1 shrink-0 rounded-full border border-[hsl(var(--border)/0.8)] p-1.5 text-[hsl(var(--muted-foreground))] transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.68)] hover:bg-[hsl(var(--accent)/0.1)] hover:text-[hsl(var(--accent))] hover:shadow-[0_10px_26px_hsl(var(--glow)/0.12)]"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <LinkedInIcon className="size-4 transition duration-300 group-hover/linkedin:scale-105" />
                      </a>
                    </div>
                    <p className="mt-1.5 min-h-[2.35rem] text-[0.68rem] font-semibold uppercase tracking-widest text-[hsl(var(--accent))]">
                      {member.subtitle}
                    </p>
                    <p className="mt-4 line-clamp-3 text-sm leading-[1.7] text-[hsl(var(--muted-foreground))]">
                      {member.shortBio}
                    </p>
                    {/* Tags */}
                    <div className="mt-4 flex min-h-[4.65rem] flex-wrap content-start gap-1.5">
                      {member.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--border)/0.4)] px-2.5 py-1 text-[0.62rem] font-medium text-[hsl(var(--muted-foreground))] transition duration-200 group-hover:border-[hsl(var(--accent)/0.48)] group-hover:text-[hsl(var(--accent))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="mt-auto flex items-center justify-end px-6 py-5">
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
          <Reveal delay={0.2} variant="fade-up">
            <div className="mx-auto mt-10 max-w-4xl border-t border-[hsl(var(--border)/0.58)] pt-7 text-center sm:mt-12 sm:pt-8">
              <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))] sm:text-base sm:leading-8">
                The leadership team combines deep domain expertise, institutional
                experience, and a technology-driven approach to deliver strategic
                financial solutions and build future-ready organizations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section className="section-pad-sm">
        <div className="site-container">
          <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.65)] bg-[linear-gradient(135deg,hsl(var(--card)),hsl(var(--section)))] px-8 py-14 shadow-[0_4px_32px_hsl(var(--shadow)/0.1)] sm:px-16 dark:bg-[linear-gradient(135deg,hsl(var(--card)/0.9),hsl(var(--accent-soft)/0.18))]">
            {/* Glow orb */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[hsl(var(--glow)/0.11)] blur-[80px]"
              aria-hidden="true"
            />
            {/* Accent top line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,hsl(var(--accent)/0.38),transparent)]" />

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
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--cta))] px-8 py-3.5 text-sm font-bold tracking-[0.02em] text-[hsl(var(--cta-foreground))] shadow-[0_12px_32px_hsl(var(--glow)/0.22)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_hsl(var(--glow)/0.3)]"
                >
                  Book a Consultation
                  <FiArrowRight className="size-4" />
                </Link>
                <a
                  href="mailto:info@finlever.co"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border)/0.9)] px-7 py-3.5 text-sm font-medium text-[hsl(var(--muted-foreground))] transition duration-200 hover:border-[hsl(var(--accent)/0.68)] hover:text-[hsl(var(--accent))]"
                >
                  <FiMail className="size-4" />
                  info@finlever.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFILE MODAL ────────────────────────────────────────── */}
      <AnimatePresence>
        {activeIdx !== null && activeMember && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-200 flex items-center justify-center p-4 sm:p-6"
            style={{
              backgroundColor: "rgba(0,0,0,0.72)",
              backdropFilter: "blur(14px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`Profile: ${activeMember.name}`}
            onClick={handleOverlayClick}
          >
            <motion.div
              key="modal-panel"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex max-h-[88vh] w-full max-w-205 flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.9)] bg-[hsl(var(--card))] shadow-[0_34px_100px_hsl(var(--shadow)/0.42)] dark:border-[hsl(var(--border)/0.8)] dark:shadow-[0_34px_104px_hsl(var(--shadow)/0.66)]"
              role="document"
            >
            {/* Accent top line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,hsl(var(--accent)/0.5),transparent)]" />

            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close profile"
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full border border-[hsl(var(--border)/0.9)] bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] transition duration-200 hover:border-[hsl(var(--accent)/0.68)] hover:bg-[hsl(var(--accent)/0.1)] hover:text-[hsl(var(--accent))]"
            >
              <FiX className="size-4" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto">
              {/* Modal header */}
              <div className="flex flex-col gap-5 border-b border-[hsl(var(--border)/0.55)] p-6 sm:flex-row sm:gap-7 sm:p-7">
                <div className="relative h-34 w-30 shrink-0 overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.8)] bg-[hsl(var(--secondary))] shadow-[0_12px_30px_hsl(var(--shadow)/0.12)] sm:h-38 sm:w-34">
                  <Image
                    src={activeMember.image}
                    alt={activeMember.name}
                    fill
                    sizes="136px"
                    className={`object-cover ${activeMember.modalImageClass}`}
                  />
                </div>
                <div className="flex-1 pr-8 sm:pr-10">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="mb-3 inline-block rounded-full border border-[hsl(var(--accent)/0.48)] bg-[hsl(var(--accent)/0.12)] px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-[hsl(var(--accent))]">
                        {activeMember.role}
                      </span>
                      <h2 className="font-display text-[1.75rem] font-bold leading-[1.1] tracking-[-0.01em] text-[hsl(var(--foreground))] sm:text-[2rem]">
                        {activeMember.name}
                      </h2>
                      <p className="mt-1.5 text-[0.75rem] font-medium tracking-[0.04em] text-[hsl(var(--muted-foreground))]">
                        {activeMember.subtitle}
                      </p>
                    </div>
                    <a
                      href={activeMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/linkedin inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border)/0.9)] bg-[hsl(var(--background)/0.42)] px-4 py-2 text-xs font-semibold text-[hsl(var(--muted-foreground))] transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.68)] hover:bg-[hsl(var(--accent)/0.08)] hover:text-[hsl(var(--accent))]"
                      aria-label={`${activeMember.name} on LinkedIn`}
                    >
                      <LinkedInIcon className="size-3.5 transition duration-300 group-hover/linkedin:scale-105" />
                      LinkedIn
                    </a>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {activeMember.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--border)/0.4)] px-2.5 py-1 text-[0.62rem] font-medium text-[hsl(var(--muted-foreground))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal body */}
              <div className="flex flex-col gap-6 p-6 sm:p-7">
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
                <div className="flex flex-wrap items-center gap-3 border-t border-[hsl(var(--border)/0.55)] pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--cta))] px-7 py-3 text-sm font-bold tracking-[0.02em] text-[hsl(var(--cta-foreground))] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(var(--glow)/0.26)]"
                    onClick={closeModal}
                  >
                    Book a Consultation
                    <FiArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
