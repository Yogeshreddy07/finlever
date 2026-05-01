import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact } from "@/data/site";

export const metadata = {
  title: "Contact | FinLever Consulting",
};

const inputClass =
  "min-h-12 rounded-xl border border-[hsl(var(--input))] bg-[hsl(var(--background)/0.72)] px-4 text-sm text-[hsl(var(--foreground))] outline-none transition placeholder:text-[hsl(var(--muted-foreground)/0.6)] focus:border-[hsl(var(--accent)/0.72)] focus:bg-[hsl(var(--card))] focus:shadow-[0_0_0_3px_hsl(var(--accent)/0.12)]";

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
          <Reveal>
            <SectionHeader
              eyebrow="Contact Us"
              title="Book a Professional Evaluation."
              body="Tell us where your finance function is today. We will help identify the strategic, operational, and compliance systems needed for your next stage."
            />

            <div className="mt-10 grid gap-4">
              {contactCards.map(({ icon: Icon, label, content }) => (
                <GlassCard key={label} className="p-5">
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
              ))}
            </div>
          </Reveal>

          {/* ── Right: form ── */}
          <Reveal delay={0.08}>
            <form className="surface-panel rounded-2xl p-6 sm:p-8">
              <h3 className="mb-6 text-lg font-semibold text-[hsl(var(--foreground))]">
                Send us a message
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
                  Name
                  <input className={inputClass} placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
                  Email
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
                Company
                <input className={inputClass} placeholder="Company name" />
              </label>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
                Requirement
                <textarea
                  className={`${inputClass} min-h-40 resize-none py-4`}
                  placeholder="Virtual CFO, treasury, fundraising, accounting, compliance..."
                />
              </label>
              <div className="mt-7">
                <ButtonLink href="mailto:info@finlever.co">
                  Schedule a Strategic Consultation
                </ButtonLink>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
