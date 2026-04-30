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
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
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
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                          {service.eyebrow}
                        </p>
                        <h2 className="mt-4 text-3xl font-semibold text-white">
                          {service.title}
                        </h2>
                      </div>
                      <FiArrowUpRight className="size-6 shrink-0 text-cyan-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="mt-6 text-base leading-8 text-slate-300">
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
