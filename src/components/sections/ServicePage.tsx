import { FiCheckCircle } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services, site } from "@/data/site";

type Service = (typeof services)[number];

export function ServicePage({ service }: { service: Service }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden section-pad">
        {/* Background treatments */}
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(var(--glow)/0.16),transparent_68%)]" />
        <div className="absolute inset-0 ai-grid opacity-[0.04]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)/0.6))]" />

        <div className="site-container relative">
          <Reveal variant="blur-up">
            <div className="capsule-badge mb-6">{service.eyebrow}</div>
            <h1 className="mt-2 max-w-5xl text-balance font-display text-4xl font-normal leading-[1.06] tracking-[-0.01em] text-[hsl(var(--foreground))] sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">
              {service.summary}
            </p>
          </Reveal>

          <Reveal delay={0.12} variant="fade-up">
            <div className="surface-panel mt-12 grid gap-6 rounded-2xl p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                  Advisory Structure
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-[hsl(var(--foreground))]">
                  A focused operating model for executive finance decisions.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {service.sections.slice(0, 3).map((section, index) => (
                  <div
                    key={section.title}
                    className="rounded-xl border border-[hsl(var(--border)/0.72)] bg-[hsl(var(--card)/0.62)] p-4"
                  >
                    <span className="font-display text-2xl text-[hsl(var(--accent)/0.32)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-sm font-semibold leading-6 text-[hsl(var(--foreground))]">
                      {section.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content sections grid */}
      <section className="pb-20 sm:pb-28">
        <div className="site-container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {service.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.07} variant={index % 2 === 0 ? "fade-left" : "fade-right"}>
              <GlassCard className="premium-service-card h-full p-7 lg:p-8">
                <p className="mb-4 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent)/0.72)]">
                  Capability Group {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] sm:text-2xl">
                  {section.title}
                </h2>
                {/* Accent underline */}
                <div className="mt-3 h-px w-10 rounded-full bg-[hsl(var(--accent)/0.6)]" />
                <ul className="mt-6 grid gap-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]"
                    >
                      <FiCheckCircle className="mt-0.5 size-4.5 shrink-0 text-[hsl(var(--accent))]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA panel */}
      <section className="pb-24 sm:pb-32">
        <Reveal>
          <div className="site-container">
            <div className="surface-panel rounded-2xl p-8 sm:p-12 lg:p-14">
              <SectionHeader
                title="Discuss Your Specific Requirements."
                body={site.taglines[2]}
              />
              <div className="mt-8">
                <ButtonLink href="/contact">Schedule a Strategic Consultation</ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
