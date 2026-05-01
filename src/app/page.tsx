"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiBarChart2,
  FiCheck,
  FiCheckSquare,
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

const heroStats = [
  { value: "₹2,500Cr+", label: "Transactions Managed" },
  { value: "16+", label: "Years Domain Expertise" },
  { value: "5", label: "Service Verticals" },
];

const advantagePoints = [
  "CFO-level expertise without full-time overhead",
  "AI-powered dashboards and real-time analytics",
  "End-to-end financial lifecycle management",
  "Investor-ready frameworks and IPO advisory",
  "Deep domain expertise across SME to enterprise",
];

const heroButtonClass =
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-6 text-sm font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:px-7";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const previewServices = services.filter((service) =>
    ["Virtual CFO", "Treasury", "Accounting", "Compliance"].includes(
      service.shortTitle,
    ),
  );

  return (
    <main>
      {/* ── 1  HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-8 sm:py-10 lg:min-h-[clamp(32rem,calc(100svh-5rem),52rem)] lg:py-[clamp(2.5rem,4vh,4rem)]">
        {/* Background glows */}
        <div className="absolute left-1/2 top-0 h-136 w-248 -translate-x-1/2 rounded-full bg-[hsl(var(--glow)/0.11)] blur-[108px]" />
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-[hsl(var(--warm)/0.10)] blur-[98px]" />
        {/* Subtle background grid */}
        <div className="absolute inset-0 ai-grid opacity-[0.035]" />

        <div className="site-container relative grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 xl:gap-16">
          {/* ── Left: copy ── */}
          <Reveal className="order-2 lg:order-1" variant="blur-up">
            <h1 className="font-display text-[clamp(2rem,5.4vw,4rem)] font-normal leading-[1.06] tracking-[-0.015em] text-[hsl(var(--foreground))]">
              <span className="block">
                The{" "}
                <em className="font-medium italic">Intelligence</em>
                {" "}of{" "}
                <span className="text-gradient filter-[drop-shadow(0_0_14px_hsl(var(--glow)/0.52))]">
                  AI.
                </span>
              </span>
              <span className="mt-2 block text-[clamp(1.6rem,4.3vw,3.3rem)] leading-[1.12] tracking-normal text-[hsl(var(--foreground)/0.78)]">
                The <em className="italic">Rigor</em> of Global Finance.
              </span>
            </h1>

            <p className="mt-5 hidden max-w-xl text-base leading-8 text-[hsl(var(--muted-foreground))] sm:block sm:text-[1.05rem]">
              {site.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className={`${heroButtonClass} border-[hsl(var(--accent)/0.5)] bg-[linear-gradient(135deg,hsl(var(--accent)),hsl(190_96%_54%))] text-white shadow-[0_16px_44px_hsl(var(--glow)/0.3)] hover:border-transparent hover:bg-[linear-gradient(135deg,hsl(var(--cta)),hsl(222_47%_18%))] hover:shadow-[0_20px_52px_hsl(var(--shadow)/0.26)]`}
              >
                <span>Schedule a Consultation</span>
                <FiArrowRight className="size-4 transition duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/services"
                className={`${heroButtonClass} border-[hsl(var(--border)/0.82)] bg-[hsl(var(--card)/0.5)] text-[hsl(var(--foreground))] shadow-[0_8px_24px_hsl(var(--shadow)/0.08)] hover:border-[hsl(var(--accent)/0.6)] hover:bg-[hsl(var(--accent-soft)/0.72)]`}
              >
                <span>Our Capabilities</span>
                <FiArrowRight className="size-4 transition duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </Reveal>

          {/* ── Right: video card ── */}
          <Reveal delay={0.08} variant="scale" className="order-1 lg:order-2 lg:justify-self-end">
            <div className="group relative w-full overflow-hidden rounded-3xl border border-[hsl(var(--border)/0.72)] bg-[linear-gradient(145deg,hsl(var(--card)/0.84),hsl(var(--card-hover)/0.56))] p-2 shadow-[0_26px_84px_hsl(var(--shadow)/0.16),0_1px_0_hsl(0_0%_100%/0.55)_inset] backdrop-blur-2xl transition duration-500 hover:scale-[1.015] hover:border-[hsl(var(--accent)/0.5)] hover:shadow-[0_32px_104px_hsl(var(--glow)/0.24),0_1px_0_hsl(0_0%_100%/0.55)_inset] dark:bg-[linear-gradient(145deg,hsl(var(--card)/0.76),hsl(var(--card-hover)/0.48))] dark:shadow-[0_30px_96px_hsl(var(--shadow)/0.52),0_1px_0_hsl(0_0%_100%/0.08)_inset]">
              <div className="relative aspect-16/10 overflow-hidden rounded-[1.25rem] bg-[hsl(var(--primary)/0.22)] lg:aspect-6/5">
                <video
                  className="h-full w-full object-cover brightness-110 saturate-[1.06] transition duration-700 group-hover:scale-[1.03] group-hover:brightness-[1.14]"
                  src="/Video/video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="FinLever AI finance intelligence preview"
                  onCanPlay={() => setVideoReady(true)}
                  onLoadedData={() => setVideoReady(true)}
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--foreground)/0.14),transparent_42%,hsl(var(--background)/0.34)),linear-gradient(180deg,transparent_52%,hsl(var(--background)/0.5))]" />
                <div className="ai-grid pointer-events-none absolute inset-0 opacity-[0.10]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[hsl(var(--card)/0.36)] to-transparent" />
                {/* Shimmer sweep on hover */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 translate-x-[-180%] -skew-x-12 bg-linear-to-r from-transparent via-white/28 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[240%] group-hover:opacity-80" />

                {/* Floating badges */}
                <div className="soft-float pointer-events-none absolute left-4 top-4 rounded-full border border-white/22 bg-black/28 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgb(0_0_0/0.24)] backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:scale-105 sm:left-6 sm:top-6">
                  AI Insights
                </div>
                <div
                  className="soft-float pointer-events-none absolute right-4 top-[36%] rounded-full border border-white/20 bg-white/14 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_10px_30px_rgb(0_0_0/0.2)] backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.04] sm:right-6"
                  style={{ animationDelay: "1.2s" }}
                >
                  Live Data
                </div>
                <div
                  className="soft-float pointer-events-none absolute bottom-5 left-5 rounded-2xl border border-white/18 bg-black/30 px-4 py-3 text-white shadow-[0_16px_36px_rgb(0_0_0/0.24)] backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03] sm:bottom-7 sm:left-7"
                  style={{ animationDelay: "2s" }}
                >
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/72">
                    Risk
                  </p>
                  <p className="mt-1 text-sm font-semibold">Capital clarity</p>
                </div>

                {/* Video loading skeleton — fades out once video can play */}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(145deg,hsl(var(--card)/0.96),hsl(var(--card-hover)/0.88))]"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: videoReady ? 0 : 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden="true"
                >
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                    <div className="h-1.5 w-24 animate-pulse rounded-full bg-[hsl(var(--accent)/0.22)]" />
                    <div
                      className="h-1 w-16 animate-pulse rounded-full bg-[hsl(var(--accent)/0.14)]"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom wave decoration */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-2">
          <svg
            viewBox="0 0 1440 120"
            className="h-14 w-full sm:h-16 lg:h-[4.4rem]"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 72 C220 16 430 108 720 72 C1010 36 1220 104 1440 52"
              fill="none"
              stroke="hsl(var(--accent) / 0.42)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={
                prefersReducedMotion
                  ? false
                  : { pathLength: 0.78, opacity: 0.3 }
              }
              animate={
                prefersReducedMotion
                  ? undefined
                  : {
                      pathLength: [0.72, 1, 0.72],
                      opacity: [0.22, 0.52, 0.22],
                    }
              }
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <path
              d="M0 84 C260 34 510 116 720 84 C930 52 1210 112 1440 70"
              fill="none"
              stroke="hsl(var(--border) / 0.4)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
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
                  className="relative overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 shadow-sm"
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
          <Reveal variant="fade-left">
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

          <Reveal delay={0.12} variant="scale" className="flex items-center justify-center">
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
                className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm"
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
                className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-sm"
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
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,hsl(var(--accent)/0.5),hsl(var(--border)/0.28),hsl(var(--accent)/0.18))]" />
              <div className="surface-panel relative rounded-[calc(1rem-1px)] p-10 text-center sm:p-16 lg:p-20">
                {/* Background dot pattern */}
                <div className="pointer-events-none absolute inset-0 dot-pattern opacity-[0.35]" />
                {/* Glow orb */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--glow)/0.14)] blur-[72px]" />

                <div className="relative">
                  <div className="capsule-badge mx-auto mb-7">Ready to grow?</div>
                  <h2 className="text-balance font-display text-3xl font-normal leading-[1.1] text-[hsl(var(--foreground))] sm:text-5xl lg:text-[3.2rem]">
                    Let&apos;s Build Smarter Finance Together
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">
                    {site.taglines[1]}
                  </p>
                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <ButtonLink href="/contact">Schedule a call</ButtonLink>
                    <ButtonLink href="/contact" variant="secondary">
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
