'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface PageHeroProps {
  title: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
}

export function PageHero({ title, subheading, ctaLabel = 'Get Started', ctaHref, onCtaClick, imageSrc, imageAlt = '' }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-[#0a0a0a]">
      {imageSrc && (
        <>
          <div className="absolute inset-0 min-h-[60vh]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              unoptimized
            />
          </div>
          <motion.div className="absolute inset-0 bg-black/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
        </>
      )}
      {!imageSrc && <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,162,39,0.08),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
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
          className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          {subheading}
        </motion.p>
        {(ctaHref || onCtaClick) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            {ctaHref ? (
              <Button href={ctaHref} variant="gold" className="min-w-[180px]">
                {ctaLabel}
              </Button>
            ) : (
              <Button type="button" variant="gold" className="min-w-[180px]" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
