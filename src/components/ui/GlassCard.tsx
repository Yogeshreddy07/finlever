import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "premium-card p-6",
        "hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.52)] hover:bg-[hsl(var(--card-hover)/0.94)]",
        "hover:shadow-[0_18px_48px_hsl(var(--shadow)/0.12)]",
        "dark:hover:shadow-[0_28px_72px_hsl(var(--glow)/0.16)]",
        className,
      )}
    >
      <div className="card-content">{children}</div>
    </div>
  );
}
