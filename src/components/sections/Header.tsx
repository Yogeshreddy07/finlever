"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

const navItemClass =
  "relative inline-flex h-11 items-center px-2 text-sm font-semibold text-[hsl(var(--muted-foreground))] transition duration-200 hover:text-[hsl(var(--foreground))] after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[hsl(var(--accent)/0.18)] after:via-[hsl(var(--accent))] after:to-[hsl(var(--glow))] after:opacity-0 after:shadow-[0_0_14px_hsl(var(--glow)/0.32)] after:transition after:duration-300 hover:after:scale-x-75 hover:after:opacity-70";

const activeNavItemClass =
  "text-[hsl(var(--foreground))] after:scale-x-100 after:opacity-100";

const mobileLinkClass =
  "relative rounded-2xl px-4 py-3 text-sm font-semibold text-[hsl(var(--muted-foreground))] transition hover:bg-[hsl(var(--accent-soft)/0.54)] hover:text-[hsl(var(--foreground))] after:absolute after:inset-x-4 after:bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[hsl(var(--accent))] after:opacity-0 after:transition";

const activeMobileLinkClass =
  "bg-[hsl(var(--accent-soft)/0.42)] text-[hsl(var(--foreground))] after:scale-x-100 after:opacity-100";

export function Header() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-3 z-50 px-3 py-3 sm:px-5">
      <div className="relative mx-auto flex min-h-20 w-full max-w-352 items-center rounded-full border border-[hsl(var(--border)/0.72)] bg-[hsl(var(--card)/0.84)] px-3 shadow-[0_18px_55px_hsl(var(--shadow)/0.14),0_1px_0_hsl(0_0%_100%/0.54)_inset] backdrop-blur-2xl dark:border-[hsl(var(--border)/0.82)] dark:bg-[hsl(var(--card)/0.72)] dark:shadow-[0_20px_70px_hsl(var(--shadow)/0.46),0_1px_0_hsl(0_0%_100%/0.08)_inset] sm:px-5">
        <Logo />

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:flex"
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
              sideOffset={8}
              className="w-84 rounded-3xl border border-[hsl(var(--border)/0.78)] bg-[hsl(var(--popover)/0.9)] p-2.5 text-[hsl(var(--popover-foreground))] shadow-[0_24px_80px_hsl(var(--shadow)/0.24),0_1px_0_hsl(0_0%_100%/0.5)_inset] backdrop-blur-2xl dark:bg-[hsl(var(--popover)/0.86)] dark:shadow-[0_28px_90px_hsl(var(--shadow)/0.5),0_1px_0_hsl(0_0%_100%/0.08)_inset]"
            >
              {serviceLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className={cn(
                        "group flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-[hsl(var(--muted-foreground))] outline-none transition duration-200 hover:bg-[hsl(var(--accent-soft)/0.56)] hover:text-[hsl(var(--foreground))] focus:bg-[hsl(var(--accent-soft)/0.56)] focus:text-[hsl(var(--foreground))]",
                        isActive &&
                          "bg-[hsl(var(--accent-soft)/0.5)] text-[hsl(var(--foreground))]",
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

        <div className="ml-auto hidden items-center gap-3 xl:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            onClick={() => setServicesOpen(false)}
            className="inline-flex h-11 items-center rounded-full bg-[hsl(var(--cta))] px-6 text-sm font-semibold text-[hsl(var(--cta-foreground))] shadow-[0_16px_34px_hsl(var(--shadow)/0.17)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_hsl(var(--shadow)/0.2)]"
          >
            Get Started
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <div className="hidden sm:inline-flex">
            <ThemeToggle />
          </div>
          <button
            type="button"
            aria-label={isMobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[hsl(var(--border)/0.84)] bg-[hsl(var(--card)/0.76)] text-[hsl(var(--foreground))] shadow-sm transition hover:border-[hsl(var(--accent)/0.55)] hover:text-[hsl(var(--accent))]"
          >
            {isMobileOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </div>
      </div>

      {isMobileOpen ? (
        <div className="mx-auto mt-3 w-full max-w-352 rounded-4xl border border-[hsl(var(--border)/0.76)] bg-[hsl(var(--card)/0.92)] px-3 py-4 shadow-[0_22px_70px_hsl(var(--shadow)/0.18)] backdrop-blur-2xl dark:bg-[hsl(var(--card)/0.84)] dark:shadow-[0_26px_80px_hsl(var(--shadow)/0.46)] xl:hidden">
          <nav aria-label="Mobile navigation" className="grid gap-1">
            <div className="mb-2 flex justify-end sm:hidden">
              <ThemeToggle />
            </div>
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
            <p className="mt-2 px-4 text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
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
                    "relative rounded-2xl px-5 py-2.5 text-sm font-medium text-[hsl(var(--muted-foreground))] transition hover:bg-[hsl(var(--accent-soft)/0.54)] hover:text-[hsl(var(--foreground))] after:absolute after:inset-x-5 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[hsl(var(--accent))] after:opacity-0 after:transition",
                    isActive &&
                      "bg-[hsl(var(--accent-soft)/0.38)] text-[hsl(var(--foreground))] after:scale-x-100 after:opacity-100",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="my-2 h-px bg-[hsl(var(--border)/0.68)]" />
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
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 rounded-full bg-[hsl(var(--cta))] px-4 py-3 text-center text-sm font-semibold text-[hsl(var(--cta-foreground))] shadow-[0_16px_34px_hsl(var(--shadow)/0.16)]"
            >
              Get Started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
