import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "premium-card p-6 transition duration-300",
        "hover:-translate-y-1 hover:border-[hsl(var(--accent)/0.55)] hover:bg-[hsl(var(--card-hover)/0.92)]",
        "dark:hover:shadow-[0_24px_70px_hsl(var(--glow)/0.13)]",
        className,
      )}
    >
      <div className="card-content">{children}</div>
    </div>
  );
}
