import Link from "next/link";
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { contact, navItems, services, site } from "@/data/site";

const socialIcons = [FiLinkedin, FiInstagram, FiYoutube, FiTwitter];

export function Footer() {
  return (
    <footer className="px-2 pb-2 pt-0 sm:px-3 sm:pb-3">
      <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--border)/0.72)] bg-[hsl(var(--card)/0.86)] shadow-[0_-18px_55px_hsl(var(--shadow)/0.08),0_1px_0_hsl(0_0%_100%/0.5)_inset] backdrop-blur-2xl dark:border-[hsl(var(--border)/0.82)] dark:bg-[hsl(var(--card)/0.74)] dark:shadow-[0_-22px_72px_hsl(var(--shadow)/0.42),0_1px_0_hsl(0_0%_100%/0.08)_inset]">
        {/* Gradient top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,hsl(var(--accent)/0.42),hsl(var(--glow)/0.28),transparent)]" />

        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--glow)/0.07)] blur-[80px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[hsl(var(--accent)/0.05)] blur-[72px]" />

        <div className="site-container relative grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand column */}
          <Reveal variant="fade-up">
            <Logo imageClassName="h-12 sm:h-14" />
            <p className="mt-5 max-w-xs text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              Driving growth with structured finance, optimized capital, and
              readiness for investors and markets.
            </p>
            <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
              Chennai &amp; Coimbatore
            </p>
            <p className="mt-1.5 text-xs text-[hsl(var(--muted-foreground))]">
              {contact.email}
            </p>
          </Reveal>

          {/* Quick links */}
          <Reveal variant="fade-up" delay={0.08}>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
              Quick Links
            </h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[hsl(var(--muted-foreground))] transition duration-200 hover:translate-x-1 hover:text-[hsl(var(--accent))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Services */}
          <Reveal variant="fade-up" delay={0.15}>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[hsl(var(--foreground))]">
              Services
            </h3>
            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-[hsl(var(--muted-foreground))] transition duration-200 hover:translate-x-1 hover:text-[hsl(var(--accent))]"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="site-container relative flex flex-col gap-4 border-t border-[hsl(var(--border)/0.55)] py-5 text-xs text-[hsl(var(--muted-foreground))] md:flex-row md:items-center md:justify-between">
          <p>
            {site.name} &nbsp;·&nbsp; {contact.email}
          </p>
          <div className="flex items-center gap-2.5">
            {socialIcons.map((Icon, index) => (
              <a
                key={contact.socials[index]}
                href="/contact"
                aria-label={contact.socials[index]}
                className="inline-flex size-9 items-center justify-center rounded-full border border-[hsl(var(--border)/0.78)] bg-[hsl(var(--card)/0.76)] text-[hsl(var(--muted-foreground))] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.56)] hover:text-[hsl(var(--accent))]"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
