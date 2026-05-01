"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonials } from "@/data/site";

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const testimonial = testimonials[active];

  function move(direction: 1 | -1) {
    setActive((current) =>
      (current + direction + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="surface-panel overflow-hidden rounded-lg p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[hsl(var(--accent))]">
          Client Signal
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.82)] text-[hsl(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.58)]"
          >
            <FiArrowLeft />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => move(1)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.82)] text-[hsl(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.58)]"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.quote}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, x: -24 }}
          transition={{ duration: 0.32 }}
          className="mt-10 grid gap-8 md:grid-cols-[180px_1fr]"
        >
          <div className="flex aspect-square items-center justify-center rounded-lg border border-[hsl(var(--accent)/0.25)] bg-[radial-gradient(circle_at_50%_35%,hsl(var(--glow)/0.24),hsl(var(--card-hover)/0.86))] text-5xl font-black text-[hsl(var(--foreground))] shadow-[inset_0_1px_0_hsl(0_0%_100%/0.12)]">
            {active + 1}
          </div>
          <div>
            <blockquote className="text-2xl font-semibold leading-snug text-[hsl(var(--foreground))] sm:text-3xl">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-[hsl(var(--foreground))]">{testimonial.name}</p>
              <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
