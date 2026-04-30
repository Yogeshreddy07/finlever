import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300",
        "hover:border-cyan-300/45 hover:bg-cyan-300/[0.075] hover:shadow-[0_0_45px_rgba(34,211,238,0.13)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
