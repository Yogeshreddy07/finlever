"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealVariant = "fade-up" | "fade-left" | "fade-right" | "scale" | "blur-up";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

const variantMap = {
  "fade-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 28 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-up": {
    // filter: blur() removed — animating filter+opacity+scale+y simultaneously
    // exhausts the Safari/iOS GPU compositor and causes white-screen crashes.
    // The entrance motion (opacity+y+scale) is preserved identically.
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
} satisfies Record<RevealVariant, { hidden: object; visible: object }>;

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const v = variantMap[variant];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : v.hidden}
      whileInView={shouldReduceMotion ? undefined : v.visible}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
