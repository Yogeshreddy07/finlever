import { AbstractFinanceGraphic } from "@/components/features/AbstractFinanceGraphic";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

export const metadata = {
  title: "About | FinLever Consulting",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden section-pad">
        {/* Background treatments */}
        <div className="absolute inset-0 ai-grid opacity-[0.04]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_72%_60%_at_50%_0%,hsl(var(--glow)/0.14),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)/0.6))]" />

        <div className="site-container relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal variant="blur-up">
            <div className="capsule-badge mb-6">About Us</div>
            <h1 className="mt-2 text-balance font-display text-4xl font-normal leading-[1.04] tracking-[-0.01em] text-[hsl(var(--foreground))] sm:text-6xl lg:text-7xl">
              FINLEVER! Redefining Finance for Modern Businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[hsl(var(--muted-foreground))]">
              Engineering financial clarity for the borderless economy.
            </p>
          </Reveal>

          <Reveal delay={0.12} variant="scale">
            <AbstractFinanceGraphic />
          </Reveal>
        </div>
      </section>

      {/* ── PHILOSOPHY CARDS ─────────────────────────────────────── */}
      <section className="section-pad-sm">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <Reveal variant="fade-left">
            <GlassCard className="h-full p-8 lg:p-10">
              <SectionHeader
                eyebrow="Core Philosophy"
                title="Beyond Accounting. Built for Strategic Finance."
              />
              <p className="mt-7 text-base leading-8 text-[hsl(var(--muted-foreground))]">
                FinLever Consulting was founded to bridge the gap between
                traditional accounting and modern, technology-driven finance. We
                go beyond reporting—delivering financial planning, cash flow
                management, treasury oversight, risk management, and regulatory
                compliance through a unified, data-driven approach.Our focus is
                to give the businesses a complete financial visibility, stronger
                control, and the ability to make confident, growth-oriented
                decisions.
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1} variant="fade-right">
            <GlassCard className="h-full p-8 lg:p-10">
              <SectionHeader
                eyebrow="The Virtual CFO Model"
                title="CFO Expertise, Without Full-Time Cost"
              />
              <p className="mt-7 text-base leading-8 text-[hsl(var(--muted-foreground))]">
                Our Virtual CFO model gives you access to experienced finance
                leaders, structured processes, and AI-powered insights—without
                the overhead of a full-time CFO. From strategy and fundraising to
                compliance and performance tracking, we act as your extended
                finance team.
              </p>
              <p className="mt-5 text-base leading-8 text-[hsl(var(--muted-foreground))]">
                This scalable approach ensures you get the right level of
                financial expertise at every stage of your growth.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ── CTA PANEL ────────────────────────────────────────────── */}
      <section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="site-container">
            <div className="surface-panel rounded-2xl p-8 sm:p-12 lg:p-14">
              {/* Subtle dot background */}
              <div className="pointer-events-none absolute inset-0 dot-pattern opacity-[0.3] rounded-2xl" />
              <div className="relative">
                <p className="max-w-3xl font-display text-2xl font-semibold leading-snug text-[hsl(var(--foreground))] sm:text-4xl">
                  {site.taglines[1]}
                </p>
                <div className="mt-8">
                  <ButtonLink href="/contact">Book a Professional Evaluation</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
