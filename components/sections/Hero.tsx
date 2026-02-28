'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/utils/images';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 min-h-[90vh]">
        <motion.div
          className="absolute inset-0 h-full w-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 20, ease: 'linear' }}
        >
          <Image
            src={IMAGES.hero}
            alt="Financial advisor and family protection - secure your future with confidence"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            unoptimized
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,162,39,0.08),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-sm uppercase tracking-[0.3em] text-[#c9a227]"
        >
          Arambhya Financial Services
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Secure Your Future
          <br />
          <span className="text-gold-gradient">with Confidence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          Financial protection and insurance solutions tailored for you and your business.
          Trust, transparency, and peace of mind—every step of the way.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/quote" variant="gold" className="min-w-[180px]">
            Get a Quote
          </Button>
          <Button href="/contact" variant="outline-gold" className="min-w-[180px]">
            Talk to an Advisor
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
