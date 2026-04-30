"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiLock, FiMenu, FiMoon, FiX } from "react-icons/fi";
import { Logo } from "@/components/ui/Logo";
import { navItems, services } from "@/data/site";

export function Header() {
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-white lg:flex">
            {navItems.map((item) => {
              if (item.href === "/services") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesMenuOpen((value) => !value)}
                      className="flex items-center gap-2 transition hover:text-cyan-400"
                    >
                      <span>Services</span>
                      <FiChevronDown
                        className={`size-4 transition-transform ${
                          isServicesMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isServicesMenuOpen && (
                      <div className="absolute left-0 top-10 w-[680px] rounded-xl border border-white/10 bg-background/95 p-3 shadow-2xl backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="rounded-lg border border-transparent p-4 transition hover:border-white/10 hover:bg-white/5"
                              onClick={() => setServicesMenuOpen(false)}
                            >
                              <span className="font-semibold text-white">
                                {service.title}
                              </span>
                              <p className="mt-1 text-xs text-gray-400">
                                {service.summary}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full border border-white/10 transition hover:bg-white/5"
          >
            <FiMoon className="size-5" />
          </button>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-lg bg-white px-4 text-sm font-semibold text-black transition hover:scale-105"
          >
            Client Portal
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open navigation"
          onClick={() => setMobileMenuOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          {isMobileMenuOpen ? (
            <FiX className="size-5" />
          ) : (
            <FiMenu className="size-5" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-background/98 px-6 py-4 lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 h-px bg-white/10" />
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
