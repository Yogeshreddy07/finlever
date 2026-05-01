import Link from "next/link";
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { Logo } from "@/components/ui/Logo";
import { contact, navItems, services, site } from "@/data/site";

const socialIcons = [FiLinkedin, FiInstagram, FiYoutube, FiTwitter];

export function Footer() {
  return (
    <footer className="px-2 pb-2 pt-0 sm:px-3 sm:pb-3">
      <div className="rounded-4xl border border-[hsl(var(--border)/0.72)] bg-[hsl(var(--card)/0.84)] shadow-[0_-18px_55px_hsl(var(--shadow)/0.08),0_1px_0_hsl(0_0%_100%/0.5)_inset] backdrop-blur-2xl dark:border-[hsl(var(--border)/0.82)] dark:bg-[hsl(var(--card)/0.72)] dark:shadow-[0_-22px_72px_hsl(var(--shadow)/0.42),0_1px_0_hsl(0_0%_100%/0.08)_inset]">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <Logo imageClassName="h-12 sm:h-14" />
            <p className="mt-5 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]">
              Driving growth with structured finance, optimized capital, and
              readiness for investors and markets.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
              Chennai & Coimbatore
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--foreground))]">
              Quick Links
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-[hsl(var(--muted-foreground))]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition duration-200 hover:translate-x-1 hover:text-[hsl(var(--accent))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[hsl(var(--foreground))]">
              Services
            </h3>
            <div className="mt-5 grid gap-3 text-sm text-[hsl(var(--muted-foreground))]">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="transition duration-200 hover:translate-x-1 hover:text-[hsl(var(--accent))]"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="site-container flex flex-col gap-4 border-t border-[hsl(var(--border)/0.62)] py-5 text-xs text-[hsl(var(--muted-foreground))] md:flex-row md:items-center md:justify-between">
          <p>
            {site.name} | {contact.email}
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map((Icon, index) => (
              <a
                key={contact.socials[index]}
                href="/contact"
                aria-label={contact.socials[index]}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[hsl(var(--border)/0.78)] bg-[hsl(var(--card)/0.76)] text-[hsl(var(--muted-foreground))] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.58)] hover:text-[hsl(var(--accent))]"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
