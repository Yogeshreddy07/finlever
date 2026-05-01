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
      <section className="relative overflow-hidden section-pad">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--glow)/0.18),transparent_58%)]" />
        <div className="site-container relative">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[hsl(var(--accent))]">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-4xl font-semibold leading-[1.04] text-[hsl(var(--foreground))] sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">
              {service.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="site-container grid gap-6 lg:grid-cols-2">
          {service.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.06}>
              <GlassCard className="h-full p-7">
                <h2 className="text-2xl font-semibold text-[hsl(var(--foreground))]">
                  {section.title}
                </h2>
                <ul className="mt-6 grid gap-4">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]"
                    >
                      <FiCheckCircle className="mt-1 size-5 shrink-0 text-[hsl(var(--accent))]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <Reveal>
          <div className="site-container surface-panel rounded-lg p-8 sm:p-12">
            <SectionHeader
              title="Discuss Your Specific Requirements."
              body={site.taglines[2]}
            />
            <div className="mt-8">
              <ButtonLink href="/contact">Schedule a Strategic Consultation</ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
