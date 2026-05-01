"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const floatingLabels = [
  {
    text: "Forecast",
    sub: "AI-driven",
    top: "8%",
    left: "4%",
    delay: 0.2,
    floatDuration: 6,
  },
  {
    text: "Capital",
    sub: "Optimised",
    top: "12%",
    right: "6%",
    delay: 0.35,
    floatDuration: 7.2,
  },
  {
    text: "Compliance",
    sub: "100% Covered",
    top: "52%",
    right: "4%",
    delay: 0.5,
    floatDuration: 6.6,
  },
  {
    text: "Controls",
    sub: "Real-time",
    bottom: "14%",
    left: "5%",
    delay: 0.65,
    floatDuration: 7.8,
  },
  {
    text: "Liquidity",
    sub: "Monitored",
    bottom: "10%",
    right: "7%",
    delay: 0.8,
    floatDuration: 6.2,
  },
];

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

      {/* Floating labels */}
      {floatingLabels.map((label) => (
        <motion.div
          key={label.text}
          className="absolute z-10 cursor-default select-none"
          style={{
            top: label.top,
            left: (label as { left?: string }).left,
            right: (label as { right?: string }).right,
            bottom: label.bottom,
          }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: label.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.06, transition: { duration: 0.2 } }
          }
        >
          {/* Subtle continuous float */}
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{
              duration: label.floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
            className="rounded-xl border border-[hsl(var(--border)/0.72)] bg-[hsl(var(--card)/0.78)] px-3.5 py-2.5 shadow-[0_8px_28px_hsl(var(--shadow)/0.18),0_1px_0_hsl(0_0%_100%/0.55)_inset] backdrop-blur-md dark:border-[hsl(var(--border)/0.86)] dark:bg-[hsl(var(--card)/0.68)] dark:shadow-[0_10px_32px_hsl(var(--shadow)/0.46),0_1px_0_hsl(0_0%_100%/0.07)_inset]"
          >
            <p className="text-[0.72rem] font-bold leading-none text-[hsl(var(--foreground))]">
              {label.text}
            </p>
            <p className="mt-1 text-[0.6rem] font-medium leading-none text-[hsl(var(--accent))]">
              {label.sub}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
