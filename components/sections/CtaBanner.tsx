'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(201,162,39,0.08),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a227]/5 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="gold-border rounded-2xl bg-[#0f0f0f]/90 p-10 shadow-premium sm:p-12"
        >
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Ready to Secure Your Future?
          </h2>
          <p className="mt-4 text-zinc-400">
            Get a personalized quote in minutes or speak with an advisor for tailored advice.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/quote" variant="gold" className="min-w-[160px]">
              Get a Quote
            </Button>
            <Button href="/contact" variant="outline-gold" className="min-w-[160px]">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
