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
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              {service.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {service.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.06}>
              <GlassCard className="h-full">
                <h2 className="text-2xl font-semibold text-white">
                  {section.title}
                </h2>
                <ul className="mt-6 grid gap-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                      <FiCheckCircle className="mt-1 size-5 shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(255,255,255,0.04))] p-8 shadow-[0_0_80px_rgba(8,145,178,0.12)] sm:p-12">
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
