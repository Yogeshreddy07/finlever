"use client";

import { useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

const inputClass =
  "min-h-12 rounded-xl border border-[hsl(var(--input))] bg-[hsl(var(--background)/0.72)] px-4 text-sm text-[hsl(var(--foreground))] outline-none transition placeholder:text-[hsl(var(--muted-foreground)/0.6)] focus:border-[hsl(var(--accent)/0.72)] focus:bg-[hsl(var(--card))] focus:shadow-[0_0_0_3px_hsl(var(--accent)/0.12)]";

const serviceGroups = [
  {
    category: "Consulting & Virtual CFO Services",
    items: [
      "Financial Planning & Analysis (FP&A)",
      "Process & Cost Management",
      "FinTech Solutions & Analytics",
    ],
  },
  {
    category: "Transaction & Deal Advisory",
    items: [
      "Fundraising & Investment Advisory",
      "Mergers, Acquisitions & Corporate Restructuring",
      "Share Purchase & Investment Structuring",
    ],
  },
  {
    category: "Corporate Treasury & Capital Allocation",
    items: [
      "Cash Flow & Liquidity Management",
      "Debt Management & Fundraising",
      "Forex & Cross-Border Transaction Management",
    ],
  },
  {
    category: "Global Accounting & Reporting",
    items: [
      "Accounting & Book Closure",
      "Global Financial Reporting",
      "Accounting Standards & Technical Advisory",
    ],
  },
  {
    category: "Risk Management & Compliance",
    items: [
      "Governance, Risk & Internal Controls",
      "Business Continuity & Resilience Planning",
      "SOP Design & Implementation",
      "Regulatory & Statutory Compliance",
      "Secretarial & Corporate Compliance",
      "Litigation Support",
    ],
  },
  {
    category: "Additional Options",
    items: ["General Consultation", "Multiple Services"],
  },
];

export function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);

  return (
    <form className="surface-panel relative rounded-2xl p-6 sm:p-8">
      <h3 className="mb-6 text-lg font-semibold text-[hsl(var(--foreground))]">
        Send us a message
      </h3>
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
      <div className="mt-5 grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
        Services of Interest
        <DropdownMenu open={isServiceMenuOpen} onOpenChange={setServiceMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className={cn(
                inputClass,
                "group flex w-full items-center justify-between gap-3 text-left",
                !selectedService && "text-[hsl(var(--muted-foreground)/0.72)]",
              )}
            >
              <span className="min-w-0 truncate">
                {selectedService || "Select a service focus"}
              </span>
              <FiChevronDown className="size-4 shrink-0 text-[hsl(var(--accent)/0.78)] transition duration-200 group-data-[state=open]:rotate-180" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="bottom"
            sideOffset={10}
            avoidCollisions={false}
            onEscapeKeyDown={() => setServiceMenuOpen(false)}
            onPointerDownOutside={() => setServiceMenuOpen(false)}
            className="services-interest-dropdown z-40 w-[min(var(--radix-dropdown-menu-trigger-width),calc(100vw-2rem))] rounded-2xl border border-[hsl(var(--border)/0.82)] bg-[hsl(var(--card)/0.97)] p-0 text-[hsl(var(--foreground))] shadow-[0_18px_54px_hsl(var(--shadow)/0.22),0_1px_0_hsl(0_0%_100%/0.08)_inset] backdrop-blur-2xl dark:bg-[hsl(var(--card)/0.92)] dark:shadow-[0_22px_64px_hsl(var(--shadow)/0.54),0_1px_0_hsl(0_0%_100%/0.06)_inset]"
          >
            <div className="services-interest-scroll">
              {serviceGroups.map((group, groupIndex) => (
                <div
                  key={group.category}
                  className={cn(
                    "px-2.5 pb-2.5",
                    groupIndex === 0 ? "pt-2.5" : "border-t border-[hsl(var(--border)/0.46)] pt-3",
                  )}
                >
                  <div className="services-interest-category px-2 pb-2 pt-1 text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent)/0.82)]">
                    {group.category}
                  </div>
                  <div className="grid gap-1">
                    {group.items.map((item) => {
                      const isSelected = selectedService === item;

                      return (
                        <DropdownMenuItem
                          key={item}
                          onSelect={() => {
                            setSelectedService(item);
                            setServiceMenuOpen(false);
                          }}
                          className={cn(
                            "group/item flex min-h-10 cursor-pointer items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 text-[0.82rem] font-medium leading-snug text-[hsl(var(--muted-foreground))] outline-none transition duration-200 hover:border-[hsl(var(--accent)/0.28)] hover:bg-[hsl(var(--accent)/0.08)] hover:text-[hsl(var(--foreground))] focus:border-[hsl(var(--accent)/0.38)] focus:bg-[hsl(var(--accent)/0.1)] focus:text-[hsl(var(--foreground))] data-[highlighted]:border-[hsl(var(--accent)/0.32)] data-[highlighted]:bg-[hsl(var(--accent)/0.09)] data-[highlighted]:text-[hsl(var(--foreground))]",
                            isSelected &&
                              "border-[hsl(var(--accent)/0.38)] bg-[hsl(var(--accent)/0.12)] text-[hsl(var(--foreground))]",
                          )}
                        >
                          <span className="min-w-0 text-pretty">{item}</span>
                          {isSelected && (
                            <FiCheck className="size-3.5 shrink-0 text-[hsl(var(--accent))]" />
                          )}
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <input type="hidden" name="service" value={selectedService} />
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
        Requirement
        <textarea
          className={`${inputClass} min-h-40 resize-none py-4`}
          placeholder="Share your finance, transaction, reporting, treasury, or compliance priorities..."
        />
      </label>
      <div className="mt-7">
        <ButtonLink href="mailto:info@finlever.co">
          Submit
        </ButtonLink>
      </div>
    </form>
  );
}
