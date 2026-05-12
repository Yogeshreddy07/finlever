"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = services.map(({ title, href }) => ({ label: title, href }));

// Premium dark glassmorphism — always dark regardless of page theme
const navItemClass =
  "relative inline-flex h-9 items-center rounded-full px-3.5 text-sm font-medium text-white/72 transition-all duration-200 hover:bg-white/[0.09] hover:text-white";

const activeNavItemClass =
  "bg-white/[0.1] text-white";

const mobileLinkClass =
  "block rounded-xl px-4 py-3 text-sm font-semibold text-white/75 transition-all duration-200 hover:bg-white/[0.08] hover:text-white";

const activeMobileLinkClass =
  "bg-white/[0.1] text-white";

export function Header() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const servicesActive = pathname.startsWith("/services");
  const shouldReduceMotion = useReducedMotion();
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock body scroll when mobile panel is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const closeMobileMenu = () => {
    setMobileServicesOpen(false);
    setMobileOpen(false);
  };

  const toggleMobileMenu = () => {
    if (isMobileOpen) {
      setMobileServicesOpen(false);
    }
    setMobileOpen((value) => !value);
  };

  // Desktop hover handlers for services dropdown
  const openServices = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setServicesOpen(true), 180);
  };
  const closeServices = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setServicesOpen(false), 180);
  };

  const navigateToServices = () => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    setServicesOpen(false);
    router.push("/services");
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 py-2.5 sm:px-5 sm:py-3"
        initial={shouldReduceMotion ? false : { y: -16, opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Premium dark glassmorphism pill — always dark for strong contrast on any bg */}
        <div className="relative mx-auto flex min-h-[3.75rem] w-full max-w-[87rem] items-center rounded-full border border-white/[0.09] bg-[rgba(6,9,20,0.78)] px-3 shadow-[0_4px_24px_rgba(0,0,0,0.36),0_16px_48px_rgba(0,0,0,0.18),0_1px_0_rgba(255,255,255,0.07)_inset] backdrop-blur-[24px] sm:min-h-[4.25rem] sm:px-5">
          {/* Hairline top highlight */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)]" />

          <Logo imageClassName="h-12 sm:h-12" />

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

            {/* Services dropdown — hover on desktop */}
            <div onPointerEnter={openServices} onPointerLeave={closeServices}>
              <DropdownMenu modal={false} open={isServicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    onClick={navigateToServices}
                    className={cn(navItemClass, "gap-1.5", servicesActive && activeNavItemClass)}
                    aria-label="View services"
                    aria-current={servicesActive ? "page" : undefined}
                  >
                    Services
                    <FiChevronDown
                      className={cn(
                        "size-3.5 transition duration-200",
                        isServicesOpen && "rotate-180 text-[hsl(218_84%_62%)]",
                      )}
                    />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={8}
                  onPointerEnter={openServices}
                  onPointerLeave={closeServices}
                  className="finlever-nav-dropdown w-[min(28rem,calc(100vw-2rem))] rounded-3xl border border-white/[0.09] bg-[rgba(7,11,22,0.90)] p-2.5 shadow-[0_24px_72px_rgba(0,0,0,0.52)] backdrop-blur-2xl"
                >
                  {serviceLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <DropdownMenuItem
                        key={link.href}
                        asChild
                        onSelect={() => setServicesOpen(false)}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setServicesOpen(false)}
                          className={cn(
                            "group flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-white/72 outline-none transition duration-200 hover:bg-white/[0.08] hover:text-white focus:bg-white/[0.08] focus:text-white",
                            isActive && "bg-white/[0.1] text-white",
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          <span>{link.label}</span>
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(218_84%_62%)] opacity-0 transition group-hover:opacity-75 group-focus:opacity-75" />
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
              className="inline-flex h-10 items-center rounded-full border border-white/[0.14] bg-white/[0.09] px-6 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-px hover:border-[hsl(218_84%_58%/0.6)] hover:bg-[hsl(218_80%_52%/0.88)] hover:shadow-[0_8px_28px_hsl(218_92%_62%/0.28)]"
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
              onClick={toggleMobileMenu}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.07] text-white/80 transition hover:border-white/[0.22] hover:bg-white/[0.12] hover:text-white"
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
            className="fixed inset-0 z-[55] xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Slide-in panel — always dark */}
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[min(80vw,340px)] flex-col overflow-y-auto border-l border-white/[0.07] bg-[linear-gradient(160deg,rgba(6,10,20,0.98),rgba(9,15,28,0.97))] shadow-[-32px_0_80px_rgba(0,0,0,0.62)] backdrop-blur-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Panel header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-4 py-4">
                <Logo imageClassName="h-11 sm:h-11" />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    aria-label="Close navigation"
                    onClick={closeMobileMenu}
                    className="inline-flex size-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.07] text-white/75 transition hover:border-white/[0.22] hover:bg-white/[0.12] hover:text-white"
                  >
                    <FiX className="size-4" />
                  </button>
                </div>
              </div>

              {/* Nav links */}
              <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-3 py-4">
                <div className="grid gap-0.5">
                  {navLinks.slice(0, 2).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={cn(mobileLinkClass, isActive && activeMobileLinkClass)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((value) => !value)}
                    className={cn(
                      mobileLinkClass,
                      "mt-3 flex w-full items-center justify-between gap-3",
                      servicesActive && activeMobileLinkClass,
                    )}
                    aria-expanded={isMobileServicesOpen}
                    aria-controls="mobile-services-submenu"
                    aria-current={servicesActive ? "page" : undefined}
                  >
                    <span>Services</span>
                    <FiChevronDown
                      className={cn(
                        "size-4 shrink-0 transition duration-200",
                        isMobileServicesOpen && "rotate-180 text-[hsl(218_84%_62%)]",
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileServicesOpen && (
                      <motion.div
                        id="mobile-services-submenu"
                        initial={
                          shouldReduceMotion
                            ? false
                            : { height: 0, opacity: 0, y: -4 }
                        }
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : { height: "auto", opacity: 1, y: 0 }
                        }
                        exit={
                          shouldReduceMotion
                            ? undefined
                            : { height: 0, opacity: 0, y: -4 }
                        }
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-0.5 py-1">
                          <Link
                            href="/services"
                            onClick={closeMobileMenu}
                            className={cn(
                              "block rounded-xl px-5 py-2.5 text-sm font-semibold text-white/72 transition-all duration-200 hover:bg-white/[0.07] hover:text-white/95",
                              pathname === "/services" && "bg-white/[0.09] text-white/90",
                            )}
                            aria-current={pathname === "/services" ? "page" : undefined}
                          >
                            View All Services
                          </Link>
                          {serviceLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMobileMenu}
                                className={cn(
                                  "block rounded-xl px-5 py-2.5 text-sm font-medium text-white/55 transition-all duration-200 hover:bg-white/[0.07] hover:text-white/90",
                                  isActive && "bg-white/[0.09] text-white/90",
                                )}
                                aria-current={isActive ? "page" : undefined}
                              >
                                {link.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="my-4 h-px bg-white/[0.08]" />

                  {navLinks.slice(2).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
                  className="block rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-3.5 text-center text-sm font-semibold text-white shadow-[0_4px_18px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-px hover:border-[hsl(218_84%_58%/0.55)] hover:bg-[hsl(218_80%_50%/0.86)] hover:shadow-[0_8px_28px_hsl(218_92%_62%/0.26)]"
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
