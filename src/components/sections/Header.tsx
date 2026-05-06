"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Consulting & Virtual CFO", href: "/services/consulting" },
  { label: "Corporate Treasury", href: "/services/treasury" },
  { label: "Global Accounting", href: "/services/accounting" },
  { label: "Compliance & Secretarial", href: "/services/compliance" },
  { label: "Fund Raising & Advisory", href: "/services/fund-raising" },
];

// Nav pill — glassmorphism header, high-contrast readable text
const navItemClass =
  "relative inline-flex h-9 items-center rounded-full px-3.5 text-sm font-semibold text-[rgba(255,255,255,0.9)] transition-all duration-200 hover:bg-white/12 hover:text-white";

const activeNavItemClass =
  "bg-[rgba(255,255,255,0.1)] text-white";

const mobileLinkClass =
  "block rounded-xl px-4 py-3 text-sm font-semibold text-[rgba(255,255,255,0.9)] transition-all duration-200 hover:bg-white/12 hover:text-white";

const activeMobileLinkClass =
  "bg-[rgba(255,255,255,0.1)] text-white";

export function Header() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services");
  const shouldReduceMotion = useReducedMotion();
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock body scroll when mobile panel is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Desktop hover handlers for services dropdown
  const openServices = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setServicesOpen(true), 180);
  };
  const closeServices = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setServicesOpen(false), 180);
  };

  return (
    <>
      <motion.header
        className="sticky top-3 z-50 px-3 py-3 sm:px-5"
        initial={shouldReduceMotion ? false : { y: -14, opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
      {/* Main pill nav bar */}
      <div className="relative mx-auto flex min-h-15 sm:min-h-19 w-full max-w-352 items-center rounded-full border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,var(--primary-dark),var(--primary-mid))] px-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-md sm:px-5">
        {/* Subtle top gradient accent */}
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]" />

        <Logo imageClassName="dark:filter dark:brightness-0 dark:invert h-12 sm:h-14" />

        {/* Desktop navigation — centered */}
        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 xl:flex"
        >
          {navLinks.slice(0, 2).map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setServicesOpen(false)}
                className={cn(navItemClass, isActive && activeNavItemClass)}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Services dropdown — hover on desktop, click-controlled */}
          <div onPointerEnter={openServices} onPointerLeave={closeServices}>
          <DropdownMenu modal={false} open={isServicesOpen} onOpenChange={setServicesOpen}>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
              className={cn(
                navItemClass,
                "gap-1.5",
                  servicesActive && activeNavItemClass,
                )}
                aria-label="Open services menu"
                aria-current={servicesActive ? "page" : undefined}
              >
                Services
                <FiChevronDown
                  className={cn(
                    "size-3.5 transition duration-200",
                    isServicesOpen && "rotate-180 text-[hsl(var(--accent))]",
                  )}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              sideOffset={6}
              onPointerEnter={openServices}
              onPointerLeave={closeServices}
              className="finlever-nav-dropdown w-84 rounded-3xl border border-[rgba(255,255,255,0.08)] bg-(--primary-mid) p-2.5 text-[rgba(255,255,255,0.85)] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
            >
              {serviceLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className={cn(
                        "group flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-[rgba(255,255,255,0.85)] outline-none transition duration-200 hover:bg-white/8 hover:text-white focus:bg-white/8 focus:text-white",
                        isActive && "bg-[rgba(255,255,255,0.1)] text-white",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))] opacity-0 transition group-hover:opacity-80 group-focus:opacity-80" />
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          {navLinks.slice(2).map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setServicesOpen(false)}
                className={cn(navItemClass, isActive && activeNavItemClass)}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop right: theme toggle + CTA */}
        <div className="ml-auto hidden items-center gap-3 xl:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            onClick={() => setServicesOpen(false)}
            className="relative inline-flex h-11 items-center overflow-hidden rounded-full bg-[hsl(var(--nav-cta-bg))] px-6 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(0,0,0,0.18)] transition duration-200 hover:bg-[hsl(var(--nav-cta-hover))]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile right: theme toggle + hamburger */}
        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <div className="hidden sm:inline-flex">
            <ThemeToggle />
          </div>
          <button
            type="button"
            aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/14 bg-white/9 text-white/80 shadow-sm transition hover:border-white/24 hover:bg-white/14 hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18, ease: "easeInOut" }}
                className="inline-flex"
              >
                {isMobileOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      </motion.header>

      {/* ── Mobile menu: full-screen slide-in panel from right ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-55 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-[3px]"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[min(82vw,340px)] flex-col overflow-y-auto border-l border-[rgba(255,255,255,0.08)] bg-[linear-gradient(160deg,var(--primary-dark),var(--primary-mid))] shadow-[-28px_0_72px_rgba(0,0,0,0.44)] backdrop-blur-md"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Panel header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-4">
                <Logo />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/14 bg-white/9 text-white/80 transition hover:border-white/24 hover:bg-white/14 hover:text-white"
                  >
                    <FiX className="size-4.5" />
                  </button>
                </div>
              </div>

              {/* Nav links */}
              <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-3">
                <div className="grid gap-0.5">
                  {navLinks.slice(0, 2).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(mobileLinkClass, isActive && activeMobileLinkClass)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  <p className="mt-3 px-4 pb-1 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
                    Services
                  </p>

                  {serviceLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-xl px-5 py-2.5 text-sm font-medium text-white/65 transition-all duration-200 hover:bg-white/9 hover:text-white",
                          isActive && "bg-white/12 text-white",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  <div className="my-3 h-px bg-white/10" />

                  {navLinks.slice(2).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(mobileLinkClass, isActive && activeMobileLinkClass)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* CTA */}
              <div className="shrink-0 px-4 pb-8 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-full bg-[hsl(var(--accent))] px-4 py-3.5 text-center text-sm font-semibold text-white shadow-[0_14px_32px_hsl(var(--glow)/0.28)] transition duration-200 hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
