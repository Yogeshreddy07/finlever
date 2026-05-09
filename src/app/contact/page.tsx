import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ContactForm } from "@/components/sections/ContactForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact } from "@/data/site";

export const metadata = {
  title: "Contact | FinLever Consulting",
};

const contactCards = [
  {
    icon: FiMapPin,
    label: "Address",
    content: contact.address,
  },
  {
    icon: FiPhone,
    label: "Contact",
    content: contact.phones.join("  ·  "),
  },
  {
    icon: FiMail,
    label: "Email ID",
    content: contact.email,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden section-pad">
        {/* Background treatments */}
        <div className="absolute inset-0 ai-grid opacity-[0.04]" />
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_72%_60%_at_50%_0%,hsl(var(--glow)/0.14),transparent_68%)]" />

        <div className="site-container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ── Left: info ── */}
          <div>
            <Reveal variant="fade-left">
              <SectionHeader
                eyebrow="Contact Us"
                title="Book a Professional Evaluation."
                body="Tell us where your finance function is today. We will help identify the strategic, operational, and compliance systems needed for your next stage."
              />
            </Reveal>

            <div className="mt-10 grid gap-4">
              {contactCards.map(({ icon: Icon, label, content }, i) => (
                <Reveal key={label} variant="fade-left" delay={0.07 + i * 0.08}>
                  <GlassCard className="p-5">
                    <div className="flex gap-4">
                      {/* Icon badge */}
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent)/0.12)] text-[hsl(var(--accent))]">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[hsl(var(--foreground))]">
                          {label}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                          {content}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <Reveal delay={0.1} variant="fade-right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
