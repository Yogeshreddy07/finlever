import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contact } from "@/data/site";

export const metadata = {
  title: "Contact | FinLever Consulting",
};

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              eyebrow="Contact Us"
              title="Book a Professional Evaluation."
              body="Tell us where your finance function is today. We will help identify the strategic, operational, and compliance systems needed for your next stage."
            />
            <div className="mt-10 grid gap-4">
              <GlassCard>
                <div className="flex gap-4">
                  <FiMapPin className="mt-1 size-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">Address: </span>
                    {contact.address}
                  </p>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex gap-4">
                  <FiPhone className="mt-1 size-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">Contact: </span>
                    {contact.phones.join(" | ")}
                  </p>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="flex gap-4">
                  <FiMail className="mt-1 size-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">Email ID: </span>
                    {contact.email}
                  </p>
                </div>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-white">
                  Name
                  <input
                    className="min-h-12 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-white">
                  Email
                  <input
                    type="email"
                    className="min-h-12 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-white">
                Company
                <input
                  className="min-h-12 rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
                  placeholder="Company name"
                />
              </label>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-white">
                Requirement
                <textarea
                  className="min-h-40 resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/60"
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
