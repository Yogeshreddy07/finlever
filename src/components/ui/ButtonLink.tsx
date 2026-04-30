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
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl px-5 text-sm font-semibold transition duration-300",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300",
        variant === "primary" &&
          "bg-white text-slate-950 shadow-[0_0_30px_rgba(45,212,191,0.25)] hover:bg-cyan-100 hover:shadow-[0_0_45px_rgba(45,212,191,0.42)]",
        variant === "secondary" &&
          "border border-white/15 bg-white/8 text-white backdrop-blur-xl hover:border-cyan-300/55 hover:bg-cyan-300/10",
        variant === "ghost" &&
          "border border-cyan-300/25 bg-cyan-300/5 text-cyan-100 hover:border-cyan-200/60 hover:bg-cyan-300/12",
        className,
      )}
    >
      <span>{children}</span>
      <FiArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
