import Link from "next/link";
import { FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { contact, navItems, services, site } from "@/data/site";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "/contact",
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "/contact",
    icon: FiInstagram,
  },
  {
    label: "Twitter/X",
    href: "/contact",
    icon: FaXTwitter,
  },
];

const emailHref = `mailto:${contact.email}`;
const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Copyright", href: "/copyright" },
];

const getPhoneHref = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return `tel:${digits.length === 10 ? `+91${digits}` : digits}`;
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-2 pb-2 pt-0 sm:px-3 sm:pb-3">
      <div className="relative overflow-hidden rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,var(--primary-dark),var(--primary-mid))] shadow-[0_-22px_72px_rgba(0,0,0,0.36),0_1px_0_rgba(255,255,255,0.07)_inset] backdrop-blur-md">
        {/* Gradient top accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,hsl(var(--accent)/0.42),hsl(var(--glow)/0.28),transparent)]" />

        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--glow)/0.07)] blur-[80px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[hsl(var(--accent)/0.05)] blur-[72px]" />

        <div className="site-container relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.16fr_0.72fr_1.1fr_1.18fr] lg:gap-8 xl:gap-10">
          {/* Brand column */}
          <Reveal variant="fade-up">
            <Logo imageClassName="h-12 sm:h-14" />
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/68">
              Institutional-grade finance advisory for companies building
              stronger control, sharper capital decisions, and durable growth.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/14 bg-white/9 text-white/58 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.6)] hover:text-[hsl(var(--accent))]"
                >
                  <Icon className="size-3.5" />
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal variant="fade-up" delay={0.08}>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/88">
              Quick Links
            </h3>
            <div className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/62 transition duration-200 hover:translate-x-1 hover:text-[hsl(var(--accent))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Services */}
          <Reveal variant="fade-up" delay={0.15}>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/88">
              Services
            </h3>
            <div className="mt-5 grid gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-white/62 transition duration-200 hover:translate-x-1 hover:text-[hsl(var(--accent))]"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Contact */}
          <Reveal variant="fade-up" delay={0.22}>
            <h3 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/88">
              Contact
            </h3>
            <div className="mt-5 grid max-w-sm gap-3 text-sm leading-6 text-white/62">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
                Chennai
              </p>
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 size-3.5 shrink-0 text-[hsl(var(--accent)/0.82)]" />
                <div className="grid gap-1">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={getPhoneHref(phone)}
                      className="transition duration-200 hover:text-[hsl(var(--accent))]"
                      aria-label={`Call ${phone}`}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="mt-1 size-3.5 shrink-0 text-[hsl(var(--accent)/0.82)]" />
                <a
                  href={emailHref}
                  className="transition duration-200 hover:text-[hsl(var(--accent))]"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 size-3.5 shrink-0 text-[hsl(var(--accent)/0.82)]" />
                <address className="not-italic text-white/58">
                  {contact.address}
                </address>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="site-container relative grid gap-4 border-t border-white/10 py-5 text-xs text-white/50 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <p className="md:justify-self-start">
            <a
              href="https://yotechsys.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200 hover:text-[hsl(var(--accent))]"
            >
              Engineered by YoTechSYS
            </a>
          </p>
          <p className="md:justify-self-center">
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-self-end">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition duration-200 hover:text-[hsl(var(--accent))]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
