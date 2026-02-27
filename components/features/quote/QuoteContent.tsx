'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { QuoteForm } from '@/features/quote/QuoteForm';
import { Button } from '@/components/ui/Button';

export function QuoteContent() {
  const searchParams = useSearchParams();
  const policy = searchParams.get('policy') ?? undefined;

  return (
    <div className="bg-[#0a0a0a]">
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Get a <span className="text-gold-gradient">Quote</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
              Tell us what you need and we&apos;ll prepare a personalized quote for you.
            </p>
          </motion.div>

          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-lg">
              <QuoteForm defaultPolicyType={policy} />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center text-sm text-zinc-500"
          >
            Prefer to talk?{' '}
            <Button href="/contact" variant="ghost" className="inline-flex p-0 h-auto text-[#c9a227] hover:bg-transparent">
              Contact an advisor
            </Button>
          </motion.p>
        </div>
      </section>
    </div>
  );
}
