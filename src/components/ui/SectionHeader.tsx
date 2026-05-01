import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  size = "default",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-5 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span
            className="h-px w-6 bg-[hsl(var(--accent)/0.72)] shrink-0"
            aria-hidden="true"
          />
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[hsl(var(--accent))]">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-balance font-semibold leading-tight text-[hsl(var(--foreground))]",
          size === "default" && "text-3xl sm:text-4xl lg:text-5xl",
          size === "large" &&
            "text-4xl sm:text-5xl lg:text-[clamp(2.8rem,4.5vw,3.5rem)]",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
