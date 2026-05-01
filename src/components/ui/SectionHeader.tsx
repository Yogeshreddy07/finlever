import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
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
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-[hsl(var(--foreground))] sm:text-4xl lg:text-5xl">
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
