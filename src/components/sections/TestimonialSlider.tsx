"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonials } from "@/data/site";

export function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  function move(direction: 1 | -1) {
    setActive((current) =>
      (current + direction + testimonials.length) % testimonials.length,
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
          Client Signal
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-cyan-300/45"
          >
            <FiArrowLeft />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => move(1)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-cyan-300/45"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonial.quote}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.35 }}
          className="mt-10 grid gap-8 md:grid-cols-[180px_1fr]"
        >
          <div className="flex aspect-square items-center justify-center rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.32),rgba(15,23,42,0.8))] text-5xl font-black text-white">
            {active + 1}
          </div>
          <div>
            <blockquote className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
              “{testimonial.quote}”
            </blockquote>
            <div className="mt-8">
              <p className="font-semibold text-cyan-100">{testimonial.name}</p>
              <p className="mt-1 text-sm text-slate-400">{testimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
