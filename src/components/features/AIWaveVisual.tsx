"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AIWaveVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.76)] shadow-[0_28px_80px_hsl(var(--shadow)/0.18)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--glow)/0.22),transparent_34%),linear-gradient(180deg,transparent,hsl(var(--background)/0.92))]" />
      <motion.div
        className="ai-wave absolute inset-x-[-12%] bottom-4 h-[76%]"
        animate={shouldReduceMotion ? undefined : { y: [10, -14, 10], rotateX: [58, 62, 58] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ai-grid absolute inset-0 opacity-60" />
      <div className="absolute left-6 top-6 grid gap-3">
        {["Runway", "Risk", "Capital"].map((label, index) => (
          <div
            key={label}
            className="flex w-36 items-center justify-between rounded-lg border border-[hsl(var(--border)/0.82)] bg-[hsl(var(--card)/0.82)] px-3 py-2 text-xs font-semibold text-[hsl(var(--foreground))] shadow-sm"
          >
            <span>{label}</span>
            <span className="h-1.5 w-10 rounded-full bg-[hsl(var(--accent))]" style={{ opacity: 0.55 + index * 0.15 }} />
          </div>
        ))}
      </div>
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute size-1 rounded-full bg-[hsl(var(--accent))] shadow-[0_0_16px_hsl(var(--glow)/0.82)]"
          style={{
            left: `${8 + ((index * 17) % 84)}%`,
            top: `${12 + ((index * 23) % 68)}%`,
          }}
          animate={shouldReduceMotion ? undefined : { opacity: [0.25, 1, 0.25], scale: [0.8, 1.35, 0.8] }}
          transition={{
            duration: 2.5 + (index % 4),
            delay: index * 0.13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-3 border-t border-[hsl(var(--border)/0.82)] pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--muted-foreground))]">
        <span>AI FORECAST GRID</span>
        <span>LIVE CAPITAL SIGNALS</span>
      </div>
    </div>
  );
}
