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
      <section className="relative overflow-hidden section-pad">
        {/* Background */}
        <div className="absolute inset-0 ai-grid opacity-[0.04]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_72%_52%_at_50%_0%,hsl(var(--glow)/0.14),transparent_62%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)/0.6))]" />

        <div className="site-container relative">
          <Reveal>
            <SectionHeader
              eyebrow="Services"
              title="Comprehensive financial command for modern businesses."
              body="Each practice is structured as a dedicated finance capability with executive-level insight, measurable control, and scalable delivery."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.href} delay={index * 0.06}>
                <Link href={service.href} className="group block h-full">
                  <GlassCard className="h-full p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        {/* Number + divider row */}
                        <div className="mb-5 flex items-center gap-4">
                          <span className="font-display text-3xl font-normal text-[hsl(var(--accent)/0.26)] transition duration-300 group-hover:text-[hsl(var(--accent)/0.44)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="h-px flex-1 bg-[hsl(var(--border)/0.5)]" />
                        </div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                          {service.eyebrow}
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                      {/* Arrow icon in circle */}
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border)/0.8)] text-[hsl(var(--accent)/0.55)] transition duration-200 group-hover:border-[hsl(var(--accent)/0.6)] group-hover:bg-[hsl(var(--accent)/0.1)] group-hover:text-[hsl(var(--accent))]">
                        <FiArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                    <p className="mt-5 text-base leading-8 text-[hsl(var(--muted-foreground))]">
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
