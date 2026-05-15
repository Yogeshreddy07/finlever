import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiLayers } from "react-icons/fi";
import { services } from "@/data/site";
import { cn } from "@/lib/utils";

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
  index: number;
  variant?: "homepage" | "listing" | "compact";
  className?: string;
};

export function ServiceCard({
  service,
  index,
  variant = "homepage",
  className,
}: ServiceCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const isListing = variant === "listing";
  const isCompact = variant === "compact";

  return (
    <Link
      href={service.href}
      className={cn(
        "group premium-card premium-service-card flex h-full flex-col",
        "transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isListing ? "p-7 sm:p-8 lg:p-9" : isCompact ? "p-5" : "p-6 lg:p-7",
        className,
      )}
    >
      <div className="card-content flex h-full flex-col">
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <span className="font-display text-3xl font-normal text-[hsl(var(--accent)/0.24)] transition duration-500 group-hover:text-[hsl(var(--accent)/0.48)]">
              {number}
            </span>
          </div>

          <span
            className={cn(
              "service-card-icon inline-flex shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border)/0.74)] bg-[hsl(var(--card)/0.72)] text-[hsl(var(--accent)/0.68)]",
              isListing ? "size-10" : "size-9",
            )}
            aria-hidden="true"
          >
            {isListing ? (
              <FiArrowUpRight className="size-4" />
            ) : (
              <FiLayers className="size-4" />
            )}
          </span>
        </div>

        <h3
          className={cn(
            "mt-5 text-balance font-semibold leading-tight text-[hsl(var(--foreground))]",
            isListing ? "text-2xl sm:text-[1.65rem]" : "text-lg lg:text-xl",
          )}
        >
          {service.title}
        </h3>

        <p
          className={cn(
            "mt-4 flex-1 text-[hsl(var(--muted-foreground))]",
            isListing ? "text-base leading-8" : "text-sm leading-7",
          )}
        >
          {service.summary}
        </p>

        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--accent)/0.68)] transition duration-300 group-hover:text-[hsl(var(--accent))]">
          <span>Explore</span>
          <FiArrowRight className="size-3.5 transition duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
