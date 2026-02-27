'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/utils/constants';
import type { Testimonial as TestimonialType } from '@/types';

export function Testimonials() {
  return (
    <section className="relative bg-[#0f0f0f] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Trusted by families and businesses across the country.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: TestimonialType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass gold-border rounded-xl p-6 shadow-premium"
    >
      <p className="text-zinc-300">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(201,162,39,0.2)] font-serif font-semibold text-[#c9a227]">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-zinc-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
