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
    <div>
      {/* Header row */}
      <div className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-14">
        <div className="capsule-badge">Client Signal</div>
        <h2 className="text-2xl font-semibold text-[hsl(var(--foreground))] sm:text-3xl">
          What Our Clients Say
        </h2>
      </div>

      {/* Testimonial card */}
      <div className="surface-panel relative overflow-hidden rounded-2xl p-8 sm:p-12 lg:p-16">
        {/* Decorative large quote mark */}
        <div
          className="pointer-events-none absolute -top-3 left-8 select-none font-display text-[8rem] leading-none text-[hsl(var(--accent)/0.14)] sm:text-[10rem]"
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Dot pattern background */}
        <div className="pointer-events-none absolute inset-0 dot-pattern opacity-[0.4]" />

        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.quote}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <blockquote className="max-w-4xl text-xl font-medium leading-relaxed text-[hsl(var(--foreground))] sm:text-2xl lg:text-[1.65rem] lg:leading-[1.55]">
              {testimonial.quote}
            </blockquote>

            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="h-10 w-0.5 rounded-full bg-[hsl(var(--accent)/0.7)]" />
                <div>
                  <p className="font-semibold text-[hsl(var(--foreground))]">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-sm text-[hsl(var(--muted-foreground))]">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-4">
                {/* Dot progress indicators */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-6 bg-[hsl(var(--accent))]"
                          : "w-1.5 bg-[hsl(var(--border))] hover:bg-[hsl(var(--accent)/0.48)]"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => move(-1)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.82)] text-[hsl(var(--foreground))] transition duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.56)] hover:text-[hsl(var(--accent))]"
                >
                  <FiArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => move(1)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card)/0.82)] text-[hsl(var(--foreground))] transition duration-200 hover:-translate-y-0.5 hover:border-[hsl(var(--accent)/0.56)] hover:text-[hsl(var(--accent))]"
                >
                  <FiArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
