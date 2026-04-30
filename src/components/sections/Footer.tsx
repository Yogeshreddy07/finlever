import Link from "next/link";
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { contact, navItems, services, site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

const socialIcons = [FiLinkedin, FiInstagram, FiYoutube, FiTwitter];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Driving growth with structured finance, optimized capital, and
            readiness for investors and markets.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-cyan-300">
            Chennai & Coimbatore
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Quick Links
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-cyan-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Services
          </h3>
          <div className="mt-5 grid gap-3 text-sm text-slate-400">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="hover:text-cyan-200"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>{site.name} | {contact.email}</p>
        <div className="flex items-center gap-3">
          {socialIcons.map((Icon, index) => (
            <a
              key={contact.socials[index]}
              href="/contact"
              aria-label={contact.socials[index]}
              className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/45 hover:text-cyan-200"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
