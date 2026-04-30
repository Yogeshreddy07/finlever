import Link from "next/link";
import {
  FiActivity,
  FiBarChart2,
  FiBriefcase,
  FiCheckSquare,
  FiCpu,
  FiLayers,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";
import { AIWaveVisual } from "@/components/features/AIWaveVisual";
import { AbstractFinanceGraphic } from "@/components/features/AbstractFinanceGraphic";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { advantageCards, services, site } from "@/data/site";

const featureIcons = [FiBriefcase, FiCpu, FiActivity, FiTrendingUp, FiUsers];
const shift = [
  {
    title: "Domain Expertise",
    body: "Finance industry veterans",
    icon: FiShield,
  },
  {
    title: "Future-ready solutions",
    body: "Interactive AI dashboards",
    icon: FiBarChart2,
  },
  {
    title: "Partnership approach",
    body: "Strategic, scalable impact",
    icon: FiUsers,
  },
];
const insightCards = [
  "Structured finance",
  "Optimized capital",
  "Investor readiness",
  "IPO preparation",
  "Predictive dashboards",
  "Automated MIS",
];

export default function Home() {
  const previewServices = services.filter((service) =>
    ["Virtual CFO", "Treasury", "Accounting", "Compliance"].includes(
      service.shortTitle,
    ),
  );

  return (
    <main>
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
        <div className="absolute left-1/2 top-12 size-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
              {site.kicker}
            </p>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              The Intelligence of <span className="text-gradient">AI.</span>
              <br />
              The Rigor of Global Finance.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {site.description}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">Schedule a Strategic Consultation</ButtonLink>
              <ButtonLink href="/services/consulting" variant="secondary">
                Explore FinTech Capabilities
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <AIWaveVisual />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="The FinLever Advantage"
              title="Clarity, Control, and Strategic Financial Growth"
              body="We work as your extended finance team—delivering CFO-level expertise without the cost of a full-time hire. From financial strategy and cash flow management to fundraising and IPO readiness, we combine deep domain knowledge with future-ready FinTech solutions to help you make faster, smarter decisions."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {advantageCards.map((card, index) => {
              const Icon = featureIcons[index];
              return (
                <Reveal key={card.title} delay={index * 0.05}>
                  <GlassCard className="h-full">
                    <Icon className="size-7 text-cyan-300" />
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {card.body}
                    </p>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-white lg:text-5xl">
              Shift from Reactive Reporting to{" "}
              <span className="text-gradient">Proactive Foresight.</span>
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {shift.map((item) => (
                <div key={item.title}>
                  <item.icon className="size-9 text-cyan-200" />
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-semibold text-white">
              Comprehensive Financial & Strategic Command.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {previewServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/55 hover:bg-cyan-300/10"
                >
                  <FiCheckSquare className="size-5 text-cyan-300" />
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Strategic finance systems for every growth inflection."
              body="A focused operating layer for CFO advisory, treasury, accounting, and compliance."
              align="center"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {previewServices.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.06}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.085),rgba(255,255,255,0.025))] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]"
                >
                  <FiLayers className="size-7 text-cyan-300" />
                  <h3 className="mt-7 text-2xl font-semibold text-white">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Strategic Advantage"
              title="Financial leadership backed by intelligence, controls, and execution discipline."
              body={site.taglines[0]}
            />
            <div className="mt-8">
              <ButtonLink href="/about" variant="ghost">Explore the Model</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <AbstractFinanceGraphic />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              eyebrow="Our Edge"
              title="Driving growth with structured finance, optimized capital, and readiness for investors and markets."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Reveal className="md:col-span-2">
              <GlassCard className="h-full p-8">
                <FiTarget className="size-8 text-cyan-300" />
                <h3 className="mt-8 text-3xl font-semibold text-white">
                  Future-ready finance for founders, boards, and leadership teams.
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  We combine deep domain expertise with AI-enabled intelligence
                  to help businesses see risk early, allocate capital better,
                  and move toward investment readiness with confidence.
                </p>
              </GlassCard>
            </Reveal>
            {insightCards.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <GlassCard className="min-h-36">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item}</h3>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <TestimonialSlider />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.24),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-8 text-center shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:p-14">
            <h2 className="text-balance text-4xl font-semibold text-white sm:text-5xl">
              Let’s Build Smarter Finance Together
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Building investor-ready businesses.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="/contact">Schedule a call</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Talk to expert</ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
