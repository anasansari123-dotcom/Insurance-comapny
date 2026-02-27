'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { value: 50, suffix: 'K+', label: 'Families Protected' },
  { value: 14, suffix: '+', label: 'Years of Trust' },
  { value: 98, suffix: '%', label: 'Claim Settlement' },
  { value: 24, suffix: '/7', label: 'Advisor Support' },
];

export function Stats() {
  return (
    <section className="relative border-y border-[rgba(201,162,39,0.15)] bg-[#0a0a0a] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-3xl font-semibold text-[#c9a227] sm:text-4xl">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2} />
              </p>
              <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
