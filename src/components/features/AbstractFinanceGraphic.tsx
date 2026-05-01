"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = ["Forecast", "Liquidity", "Controls", "Capital", "Compliance"];

export function AbstractFinanceGraphic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="surface-panel relative min-h-[430px] overflow-hidden rounded-lg p-5 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--glow)/0.18),transparent_36%)]" />
      <div className="ai-grid absolute inset-0 opacity-35" />
      <div className="relative h-full min-h-[380px]">
        <motion.div
          className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[hsl(var(--accent)/0.38)]"
          animate={shouldReduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[hsl(var(--accent)/0.22)]"
          animate={shouldReduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-1/2 top-1/2 h-px w-72 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,hsl(var(--accent)/0.42),transparent)]" />
        <div className="absolute left-1/2 top-1/2 h-72 w-px -translate-y-1/2 bg-[linear-gradient(180deg,transparent,hsl(var(--accent)/0.38),transparent)]" />
        {nodes.map((label, index) => (
          <motion.div
            key={label}
            className="absolute rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.86)] px-4 py-3 text-sm font-semibold text-[hsl(var(--foreground))] shadow-[0_16px_38px_hsl(var(--shadow)/0.12)]"
            style={{
              left: `${10 + ((index * 29) % 64)}%`,
              top: `${12 + ((index * 17) % 70)}%`,
            }}
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{
              duration: 4 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {label}
          </motion.div>
        ))}
        <div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(var(--accent)/0.32)] bg-[hsl(var(--cta))] text-center text-sm font-black uppercase tracking-[0.2em] text-[hsl(var(--cta-foreground))] shadow-[0_0_55px_hsl(var(--glow)/0.28)]">
          FIN
          <br />
          INTEL
        </div>
      </div>
    </div>
  );
}
