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
  "min-h-12 rounded-lg border border-[hsl(var(--input))] bg-[hsl(var(--background)/0.72)] px-4 text-sm text-[hsl(var(--foreground))] outline-none transition placeholder:text-[hsl(var(--muted-foreground)/0.68)] focus:border-[hsl(var(--accent)/0.72)] focus:bg-[hsl(var(--card))]";

export default function ContactPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Contact Us"
              title="Book a Professional Evaluation."
              body="Tell us where your finance function is today. We will help identify the strategic, operational, and compliance systems needed for your next stage."
            />
            <div className="mt-10 grid gap-4">
              <GlassCard>
                <div className="flex gap-4">
                  <FiMapPin className="mt-1 size-5 shrink-0 text-[hsl(var(--accent))]" />
                  <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                    <span className="font-semibold text-[hsl(var(--foreground))]">Address: </span>
                    {contact.address}
                  </p>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex gap-4">
                  <FiPhone className="mt-1 size-5 shrink-0 text-[hsl(var(--accent))]" />
                  <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                    <span className="font-semibold text-[hsl(var(--foreground))]">Contact: </span>
                    {contact.phones.join(" | ")}
                  </p>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex gap-4">
                  <FiMail className="mt-1 size-5 shrink-0 text-[hsl(var(--accent))]" />
                  <p className="text-sm leading-7 text-[hsl(var(--muted-foreground))]">
                    <span className="font-semibold text-[hsl(var(--foreground))]">Email ID: </span>
                    {contact.email}
                  </p>
                </div>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="surface-panel rounded-lg p-6 sm:p-8">
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
                <ButtonLink href="mailto:info@finlever.co">Schedule a Strategic Consultation</ButtonLink>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
