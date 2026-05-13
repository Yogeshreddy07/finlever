"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck, FiChevronDown } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
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

type FieldKey = "name" | "email" | "service" | "requirement";

type FormValues = {
  name: string;
  email: string;
  company: string;
  requirement: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  requirement: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailHref = "mailto:info@finlever.co";

export function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [isServiceMenuOpen, setServiceMenuOpen] = useState(false);
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});

  const validate = () => {
    const nextErrors: Partial<Record<FieldKey, string>> = {};
    const name = values.name.trim();
    const email = values.email.trim();
    const requirement = values.requirement.trim();

    if (!name) nextErrors.name = "Please enter your name";
    if (!email) {
      nextErrors.email = "Please enter your email";
    } else if (!emailPattern.test(email)) {
      nextErrors.email = "Please enter a valid email";
    }
    if (!selectedService) nextErrors.service = "Please select a service";
    if (!requirement) nextErrors.requirement = "Please share your requirement";

    return nextErrors;
  };

  const updateValue =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      if (errors[field as FieldKey]) {
        setErrors((current) => ({ ...current, [field]: undefined }));
      }
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`FINLEVER enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name.trim()}`,
        `Email: ${values.email.trim()}`,
        values.company.trim() ? `Company: ${values.company.trim()}` : null,
        `Service of Interest: ${selectedService}`,
        "",
        "Requirement:",
        values.requirement.trim(),
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `${emailHref}?subject=${subject}&body=${body}`;
  };

  const errorText = (field: FieldKey) =>
    errors[field] ? (
      <span id={`${field}-error`} className="text-xs font-medium text-[hsl(var(--destructive)/0.82)]">
        {errors[field]}
      </span>
    ) : null;

  const fieldClass = (field: FieldKey) =>
    cn(
      inputClass,
      errors[field] &&
        "border-[hsl(var(--destructive)/0.55)] bg-[hsl(var(--destructive)/0.035)] focus:border-[hsl(var(--destructive)/0.68)] focus:shadow-[0_0_0_3px_hsl(var(--destructive)/0.1)]",
    );

  return (
    <form className="surface-panel relative rounded-2xl p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
      <h3 className="mb-6 text-lg font-semibold text-[hsl(var(--foreground))]">
        Send us a message
      </h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
          Name
          <input
            name="name"
            value={values.name}
            onChange={updateValue("name")}
            className={fieldClass("name")}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errorText("name")}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
          Email
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={updateValue("email")}
            className={fieldClass("email")}
            placeholder="you@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errorText("email")}
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
        Company
        <input
          name="company"
          value={values.company}
          onChange={updateValue("company")}
          className={inputClass}
          placeholder="Company name"
        />
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
                errors.service &&
                  "border-[hsl(var(--destructive)/0.55)] bg-[hsl(var(--destructive)/0.035)] focus:border-[hsl(var(--destructive)/0.68)]",
              )}
              aria-describedby={errors.service ? "service-error" : undefined}
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
                            if (errors.service) {
                              setErrors((current) => ({ ...current, service: undefined }));
                            }
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
        {errorText("service")}
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-[hsl(var(--foreground))]">
        Requirement
        <textarea
          name="requirement"
          value={values.requirement}
          onChange={updateValue("requirement")}
          className={cn(fieldClass("requirement"), "min-h-40 resize-none py-4")}
          placeholder="Share your finance, transaction, reporting, treasury, or compliance priorities..."
          aria-invalid={Boolean(errors.requirement)}
          aria-describedby={errors.requirement ? "requirement-error" : undefined}
        />
        {errorText("requirement")}
      </label>
      <div className="mt-7">
        <button
          type="submit"
          className="group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-[hsl(var(--cta))] px-6 text-sm font-semibold text-[hsl(var(--cta-foreground))] shadow-[0_14px_32px_hsl(var(--shadow)/0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_hsl(var(--glow)/0.2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring active:translate-y-0"
        >
          <span>Submit</span>
          <FiArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
