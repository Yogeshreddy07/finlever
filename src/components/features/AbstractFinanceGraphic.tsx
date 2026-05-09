"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function AbstractFinanceGraphic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-2xl border border-[hsl(var(--border)/0.6)] shadow-[0_24px_80px_hsl(var(--shadow)/0.18)] dark:shadow-[0_28px_96px_hsl(var(--shadow)/0.5)]"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Main image */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, -6, 0] }
        }
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      >
        <Image
          src="/image/about.jpg"
          alt="FinLever — strategic finance in action"
          width={900}
          height={660}
          priority
          className="h-auto w-full object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </motion.div>

      {/* Gradient overlay for label readability */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.12)_0%,transparent_38%,hsl(var(--background)/0.22)_100%)]" />

      {/* Floating labels removed */}
    </motion.div>
  );
}
