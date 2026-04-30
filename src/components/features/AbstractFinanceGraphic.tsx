"use client";

import { motion } from "framer-motion";

export function AbstractFinanceGraphic() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(45,212,191,0.24),transparent_34%)]" />
      <div className="relative h-full min-h-[380px]">
        <motion.div
          className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/35"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-300/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
        {["Forecast", "Liquidity", "Controls", "Capital", "Compliance"].map(
          (label, index) => (
            <motion.div
              key={label}
              className="absolute rounded-2xl border border-cyan-200/20 bg-slate-950/70 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.12)]"
              style={{
                left: `${14 + ((index * 29) % 62)}%`,
                top: `${12 + ((index * 17) % 70)}%`,
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {label}
            </motion.div>
          ),
        )}
        <div className="absolute left-1/2 top-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-300 text-center text-sm font-black uppercase tracking-[0.2em] text-slate-950 shadow-[0_0_55px_rgba(103,232,249,0.45)]">
          FIN
          <br />
          INTEL
        </div>
      </div>
    </div>
  );
}
