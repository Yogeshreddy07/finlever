import { ServiceCard } from "@/components/sections/ServiceCard";
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

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <Reveal
                key={service.href}
                delay={index * 0.07}
                variant={index % 2 === 0 ? "fade-left" : "fade-right"}
                className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <ServiceCard service={service} index={index} variant="listing" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
