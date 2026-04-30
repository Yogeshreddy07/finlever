"use client";

import { motion } from "framer-motion";

export function AIWaveVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-950/40 shadow-[0_0_80px_rgba(8,145,178,0.16)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0),rgba(2,6,23,0.95))]" />
      <motion.div
        className="ai-wave absolute inset-x-[-12%] bottom-4 h-[76%]"
        animate={{ y: [10, -14, 10], rotateX: [58, 62, 58] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 ai-grid opacity-45" />
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute size-1 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,0.9)]"
          style={{
            left: `${8 + ((index * 17) % 84)}%`,
            top: `${12 + ((index * 23) % 68)}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.35, 0.8] }}
          transition={{
            duration: 2.5 + (index % 4),
            delay: index * 0.13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-cyan-200/15 pt-4 text-xs text-cyan-100/70">
        <span>AI FORECAST GRID</span>
        <span>LIVE CAPITAL SIGNALS</span>
      </div>
    </div>
  );
}
