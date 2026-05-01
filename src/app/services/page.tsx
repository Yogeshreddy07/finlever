import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/site";

export const metadata = {
  title: "Services | FinLever Consulting",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="site-container">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Comprehensive financial command for modern businesses."
              body="Each practice is structured as a dedicated finance capability with executive-level insight, measurable control, and scalable delivery."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.05}>
                <Link href={service.href} className="group block h-full">
                  <GlassCard className="h-full p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                          {service.eyebrow}
                        </p>
                        <h2 className="mt-4 text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                      <FiArrowUpRight className="size-6 shrink-0 text-[hsl(var(--accent))] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="mt-6 text-base leading-8 text-[hsl(var(--muted-foreground))]">
                      {service.summary}
                    </p>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
