"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiLayers,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services, site } from "@/data/site";

const shift = [
  {
    title: "Domain Expertise",
    body: "Finance industry veterans with institutional track records",
    icon: FiShield,
  },
  {
    title: "Future-ready Solutions",
    body: "Interactive AI dashboards and predictive analytics",
    icon: FiBarChart2,
  },
  {
    title: "Partnership Approach",
    body: "Strategic, scalable impact aligned to your growth stage",
    icon: FiUsers,
  },
];

const edgeCards = [
  {
    title: "Deep Financial Expertise",
    body: "Led by experienced finance professionals with proven track records across corporate finance, treasury, and strategy.",
    dir: "left" as const,
  },
  {
    title: "AI-Driven Insights & Automation",
    body: "Leverage real-time dashboards, predictive analytics, and smart automation to stay ahead of your numbers.",
    dir: "up" as const,
  },
  {
    title: "Proactive Decision-Making",
    body: "Move from reactive reporting to real-time financial control with data-backed insights.",
    dir: "right" as const,
  },
  {
    title: "Growth Focused",
    body: "From debt structuring to investor readiness and IPO advisory we support your complete growth journey.",
    dir: "left" as const,
  },
  {
    title: "Partnership Approach",
    body: "Acting as a strategic partner, driving measurable impact and scaling with our clients as they grow.",
    dir: "right" as const,
  },
];

const heroDescription =
  "FinLever brings Virtual CFO expertise, strategic finance leadership, treasury excellence, and fundraising support into one long-term partnership, strengthened by AI-enabled intelligence for clearer decisions at every stage of growth.";

const advantagePoints = [
  "CFO-level expertise without full-time overhead",
  "AI-powered dashboards and real-time analytics",
  "End-to-end financial lifecycle management",
  "Investor-ready frameworks and IPO advisory",
  "Deep domain expertise across SME to enterprise",
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  const previewServices = services.filter((service) =>
    ["Virtual CFO", "Treasury", "Accounting", "Compliance"].includes(
      service.shortTitle,
    ),
  );

  return (
    <main>
      {/* ── 1  HERO ─────────────────────────────────────────────── */}
      <section className="relative isolate min-h-svh overflow-hidden bg-[hsl(222_70%_3%)]">
        {/* Base fill — very deep navy */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(148deg, hsl(222 68% 5%) 0%, hsl(218 60% 7%) 55%, hsl(222 68% 4%) 100%)" }}
          aria-hidden="true"
        />

        {/*
          Full-screen video — no per-frame CSS filters (brightness/contrast/saturate removed)
          to prevent GPU composite overhead that causes stuttering. Fade-in accelerated to 900ms.
        */}
        <video
          className={`absolute inset-0 h-full w-full transform-gpu object-cover object-center transition-opacity duration-[900ms] ease-in will-change-[opacity] ${videoReady ? "opacity-100" : "opacity-0"}`}
          src="/Video/video.mp4"
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          disablePictureInPicture
          onCanPlay={() => setVideoReady(true)}
          onLoadedMetadata={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
        />

        {/*
          Cinematic overlay — two composed layers:
          · Horizontal: heavy dark on left (heading area) → moderate dark on right (description legible)
          · Vertical: light top veil + deep bottom anchor
        */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: [
              "linear-gradient(to right, hsl(222 70% 4% / 0.93) 0%, hsl(222 70% 4% / 0.78) 32%, hsl(222 70% 4% / 0.46) 62%, hsl(222 70% 4% / 0.22) 100%)",
              "linear-gradient(to bottom, hsl(222 70% 4% / 0.22) 0%, transparent 20%, hsl(222 68% 4% / 0.88) 100%)",
            ].join(", "),
          }}
        />

        {/* ── Hero content ── */}
        <div className="site-container relative z-10 flex min-h-svh items-center pb-[clamp(2.5rem,7svh,5rem)] pt-[clamp(7rem,14svh,9.5rem)]">
          <div className="w-full translate-y-[clamp(2.25rem,6svh,4.75rem)] sm:translate-y-[clamp(2.5rem,6svh,5rem)] lg:translate-y-[clamp(2.5rem,5svh,4.5rem)]">
            <motion.div
              className="max-w-3xl xl:max-w-[900px]"
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
              }}
            >
            {/* Eyebrow kicker */}
            <motion.p
              className="mb-5 flex items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.34em] text-[hsl(218_76%_66%)] sm:mb-6 sm:text-[0.64rem]"
              variants={{
                hidden: { opacity: 0, x: -14 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <span className="h-px w-6 shrink-0 bg-[hsl(218_76%_66%/0.62)]" aria-hidden="true" />
              <span>FINLEVER CONSULTING</span>
            </motion.p>

            {/* Main heading — cinematic scale, editorial italic second line */}
            <motion.h1
              className="font-display text-[2.5rem] font-light leading-[1.08] tracking-[-0.02em] text-white [text-shadow:0_8px_32px_rgb(0_0_0/0.44)] sm:text-[3.5rem] sm:leading-[1.07] lg:text-[4.8rem] xl:text-[5.4rem] xl:leading-[1.05]"
              variants={{
                hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
                visible: {
                  opacity: 1, y: 0, filter: "blur(0px)",
                  transition: { duration: 0.88, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              A Trusted Partner<br />
              <span className="italic text-white/80">for Your Endeavour.</span>
            </motion.h1>

            {/* Thin accent rule */}
            <motion.div
              className="mt-7 h-px w-10 bg-[hsl(218_72%_58%/0.5)] sm:mt-8 lg:mt-9"
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: { opacity: 1, scaleX: 1, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{ transformOrigin: "left" }}
            />

            {/* Supporting paragraph — constrained width for comfortable reading */}
            <motion.p
              className="mt-6 max-w-[58ch] text-[0.93rem] leading-[1.86] text-white/60 sm:mt-7 sm:text-[1rem] sm:leading-[1.9] lg:mt-8 lg:text-[1.02rem]"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {heroDescription}
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="mt-8 flex flex-col items-stretch gap-2.5 sm:w-fit sm:flex-row sm:items-center sm:gap-3 lg:mt-10"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[3rem] w-full items-center justify-center gap-2.5 rounded-full border border-white/[0.15] bg-white/[0.1] px-6 text-sm font-semibold text-white shadow-[0_6px_20px_rgb(0_0_0/0.22),0_1px_0_rgb(255_255_255/0.08)_inset] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-[hsl(218_84%_60%/0.72)] hover:bg-[hsl(218_80%_52%/0.88)] hover:shadow-[0_14px_40px_hsl(218_92%_62%/0.28),0_0_0_1px_hsl(218_84%_62%/0.16)_inset] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:w-auto"
              >
                <span>Schedule a Consultation</span>
                <FiArrowRight className="size-3.5 shrink-0 transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-transparent px-6 text-sm font-semibold text-white/60 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[2px] hover:border-white/[0.2] hover:text-white/90 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:w-auto"
              >
                <span>Our Capabilities</span>
                <FiArrowRight className="size-3.5 shrink-0 transition duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2  SHIFT ─────────────────────────────────────────────── */}
      <section className="section-alt section-pad-sm">
        <div className="site-container grid gap-14 lg:grid-cols-2">
          <Reveal variant="fade-left">
            <h2 className="text-balance text-3xl font-semibold leading-tight text-[hsl(var(--foreground))] sm:text-4xl">
              Shift from Reactive Reporting to{" "}
              <span className="text-gradient">Proactive Foresight.</span>
            </h2>
            <p className="mt-5 text-base leading-8 text-[hsl(var(--muted-foreground))]">
              Real-time intelligence, AI-driven forecasting, and structured
              controls built for founders, boards, and finance leaders.
            </p>
            {/* Three pillar cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {shift.map((item) => (
                <div
                  key={item.title}
                  className="light-card relative overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-sm"
                >
                  {/* Left accent bar */}
                  <div className="absolute inset-y-0 left-0 w-0.5 rounded-r-full bg-[hsl(var(--accent)/0.5)]" />
                  <item.icon className="size-5 text-[hsl(var(--accent))]" />
                  <h3 className="mt-4 text-sm font-semibold text-[hsl(var(--foreground))]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-[hsl(var(--muted-foreground))]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} variant="fade-right">
            <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] sm:text-2xl">
              Comprehensive Financial & Strategic Command.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              Explore the service areas designed to cover your entire financial
              lifecycle.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {previewServices.map((service, i) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group premium-card block h-full p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.55)]"
                >
                  <div className="card-content flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[0.62rem] font-bold text-[hsl(var(--accent)/0.65)]">
                        0{i + 1}
                      </span>
                      <h3 className="mt-1 text-sm font-semibold text-[hsl(var(--foreground))]">
                        {service.title}
                      </h3>
                    </div>
                    <FiArrowRight className="size-3.5 shrink-0 text-[hsl(var(--accent)/0.55)] transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[hsl(var(--accent))]" />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3  ADVANTAGE ─────────────────────────────────────────── */}
      <section className="section-pad-sm">
        <div className="site-container grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="fade-left" className="order-1">
            <div className="capsule-badge mb-5">The FinLever Advantage</div>
            <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
              Clarity, Control, and Strategic Financial Growth
            </h2>
            <p className="mt-6 max-w-prose text-justify text-base leading-8 text-[hsl(var(--muted-foreground))]">
              We work as your extended finance team delivering CFO-level
              expertise without the cost of a full-time hire. From financial
              strategy and cash flow management to fundraising and IPO
              readiness, we combine deep domain knowledge with future-ready
              FinTech solutions to help you make faster, smarter decisions.
            </p>
            {/* Supporting bullet list */}
            <ul className="mt-7 grid gap-3">
              {advantagePoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]"
                >
                  <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent)/0.14)] text-[hsl(var(--accent))]">
                    <FiCheck className="size-3" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12} variant="scale" className="order-2 flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.6)] shadow-[0_12px_48px_hsl(var(--shadow)/0.12)] dark:shadow-[0_12px_56px_hsl(var(--glow)/0.18)]">
              <Image
                src="/image/FinLever Advantage.png"
                alt="FinLever Advantage"
                width={800}
                height={560}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4  SERVICES ──────────────────────────────────────────── */}
      <section className="section-alt section-pad-sm">
        <div className="site-container">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Strategic finance systems for every growth inflection."
              body="A focused operating layer for CFO advisory, treasury, accounting, and compliance."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {previewServices.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.07} variant="scale">
                <Link
                  href={service.href}
                  className="group premium-card flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.55)]"
                >
                  <div className="card-content flex flex-1 flex-col">
                    {/* Card index + icon row */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-display text-3xl font-normal text-[hsl(var(--accent)/0.22)] transition duration-300 group-hover:text-[hsl(var(--accent)/0.4)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <FiLayers className="size-5 text-[hsl(var(--accent)/0.65)] transition duration-300 group-hover:text-[hsl(var(--accent))]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                      {service.summary}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[hsl(var(--accent)/0.68)] transition duration-200 group-hover:text-[hsl(var(--accent))]">
                      <span>Explore</span>
                      <FiArrowRight className="size-3 transition duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5  OUR EDGE ──────────────────────────────────────────── */}
      <section className="section-pad-sm">
        <div className="site-container">
          <Reveal>
            <SectionHeader
              eyebrow="Our Edge"
              title="Driving growth with structured finance, optimized capital, and readiness for investors and markets."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {edgeCards.slice(0, 3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        x:
                          card.dir === "left"
                            ? -36
                            : card.dir === "right"
                              ? 36
                              : 0,
                        y: card.dir === "up" ? 26 : 0,
                      }
                }
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="light-card relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm"
              >
                {/* Left accent bar */}
                <div className="absolute inset-y-4 left-0 w-0.5 rounded-r-full bg-[hsl(var(--accent)/0.44)]" />
                <h3 className="pl-4 text-base font-semibold text-[hsl(var(--foreground))]">
                  {card.title}
                </h3>
                <p className="mt-3 pl-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:mx-auto lg:w-2/3">
            {edgeCards.slice(3).map((card, index) => (
              <motion.div
                key={card.title}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, x: card.dir === "left" ? -36 : 36 }
                }
                whileInView={
                  prefersReducedMotion ? undefined : { opacity: 1, x: 0 }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="light-card relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm"
              >
                <div className="absolute inset-y-4 left-0 w-0.5 rounded-r-full bg-[hsl(var(--accent)/0.44)]" />
                <h3 className="pl-4 text-base font-semibold text-[hsl(var(--foreground))]">
                  {card.title}
                </h3>
                <p className="mt-3 pl-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6  TESTIMONIALS ──────────────────────────────────────── */}
      <section className="section-alt section-pad-sm">
        <div className="site-container">
          <Reveal>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      {/* ── 7  CTA ───────────────────────────────────────────────── */}
      <section className="section-pad-sm pb-28">
        <Reveal>
          <div className="site-container">
            {/* Gradient border wrapper */}
            <div className="relative overflow-hidden rounded-2xl p-px">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,hsl(218_72%_52%/0.44),hsl(220_32%_22%/0.3),hsl(218_72%_52%/0.16))]" />
              <div className="surface-panel light-cta-panel relative rounded-[calc(1rem-1px)] p-10 text-center sm:p-16 lg:p-20">
                {/* Soft glow orb — top center */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-[hsl(218_84%_58%/0.10)] blur-[88px]" />

                <div className="relative">
                  <div className="capsule-badge mx-auto mb-7 border-[hsl(218_72%_52%/0.38)] bg-[hsl(218_72%_52%/0.14)] text-[hsl(218_80%_68%)]">
                    Ready to grow?
                  </div>
                  <h2 className="text-balance font-display text-3xl font-normal leading-[1.1] text-white sm:text-5xl lg:text-[3.2rem]">
                    Let&apos;s Build Smarter Finance Together
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-white/56">
                    {site.taglines[1]}
                  </p>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <ButtonLink
                      href="/contact"
                      className="border border-white/[0.14] bg-white/[0.1] text-white shadow-[0_8px_28px_rgba(0,0,0,0.24)] backdrop-blur-sm hover:border-[hsl(218_84%_60%/0.7)] hover:bg-[hsl(218_80%_52%/0.88)] hover:shadow-[0_16px_44px_hsl(218_92%_62%/0.3)]"
                    >
                      Schedule a call
                    </ButtonLink>
                    <ButtonLink
                      href="/contact"
                      variant="secondary"
                      className="border-white/[0.12] bg-white/[0.06] text-white/80 hover:border-white/[0.22] hover:bg-white/[0.1] hover:text-white"
                    >
                      Talk to an expert
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
