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
      <section className="section-pad">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[hsl(var(--accent))]">
              About Us
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.04] text-[hsl(var(--foreground))] sm:text-6xl lg:text-7xl">
              FINLEVER! Redefining Finance for Modern Businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[hsl(var(--muted-foreground))]">
              Engineering financial clarity for the borderless economy.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <AbstractFinanceGraphic />
          </Reveal>
        </div>
      </section>

      <section className="section-pad-sm">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full p-8">
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
          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8">
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

      <section className="pb-24">
        <Reveal>
          <div className="site-container surface-panel rounded-lg p-8 sm:p-12">
            <p className="max-w-3xl text-2xl font-semibold leading-snug text-[hsl(var(--foreground))] sm:text-4xl">
              {site.taglines[1]}
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact">Book a Professional Evaluation</ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
