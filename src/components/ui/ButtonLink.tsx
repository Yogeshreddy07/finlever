import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-5 text-sm font-semibold",
        "shadow-sm transition duration-300 hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        variant === "primary" &&
          "bg-[hsl(var(--cta))] text-[hsl(var(--cta-foreground))] shadow-[0_16px_34px_hsl(var(--shadow)/0.16)] hover:shadow-[0_20px_42px_hsl(var(--glow)/0.18)]",
        variant === "secondary" &&
          "border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--accent)/0.7)] hover:bg-[hsl(var(--accent-soft)/0.7)]",
        variant === "ghost" &&
          "border border-[hsl(var(--accent)/0.38)] bg-[hsl(var(--accent-soft)/0.42)] text-[hsl(var(--foreground))] hover:border-[hsl(var(--accent)/0.74)] hover:bg-[hsl(var(--accent-soft)/0.72)]",
        className,
      )}
    >
      <span>{children}</span>
      <FiArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
