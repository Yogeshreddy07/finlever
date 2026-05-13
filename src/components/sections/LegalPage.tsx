import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact } from "@/data/site";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: LegalPageProps) {
  return (
    <main>
      <section className="relative overflow-hidden section-pad">
        <div className="absolute inset-0 ai-grid opacity-[0.035]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_72%_52%_at_50%_0%,hsl(var(--glow)/0.13),transparent_62%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)/0.6))]" />

        <div className="site-container relative">
          <Reveal>
            <SectionHeader eyebrow={eyebrow} title={title} body={intro} />
            <p className="mt-5 text-sm font-medium text-[hsl(var(--muted-foreground))]">
              Last updated: {updated}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.05} variant="fade-up">
                <GlassCard className="h-full p-6 sm:p-7">
                  <h2 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                    {section.title}
                  </h2>
                  <div className="mt-4 grid gap-3 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <p className="mt-10 max-w-2xl text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              For questions about these terms, write to{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-semibold text-[hsl(var(--accent))] transition duration-200 hover:text-[hsl(var(--foreground))]"
              >
                {contact.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
