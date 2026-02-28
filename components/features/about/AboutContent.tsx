'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { CORE_VALUES, TIMELINE } from '@/utils/constants';
import { IMAGES } from '@/utils/images';
import type { CoreValue as CoreValueType, TimelineItem } from '@/types';

export function AboutContent() {
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
              About <span className="text-gold-gradient">Arambhya</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-400">
              We are committed to securing your future with integrity, transparency, and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-12 gold-border rounded-2xl overflow-hidden shadow-premium"
          >
            <div className="relative aspect-[21/9] sm:aspect-[3/1]">
              <Image
                src={IMAGES.about}
                alt="Modern corporate office - Arambhya Financial Services headquarters and professional workspace"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-16 grid gap-12 lg:grid-cols-2"
          >
            <div className="gold-border rounded-2xl bg-[#0f0f0f] p-8 shadow-premium">
              <h2 className="font-serif text-2xl font-semibold text-[#c9a227]">Our Mission</h2>
              <p className="mt-4 text-zinc-400">
                To provide accessible, transparent, and reliable insurance and financial solutions
                that protect families and businesses, enabling them to plan with confidence.
              </p>
            </div>
            <div className="gold-border rounded-2xl bg-[#0f0f0f] p-8 shadow-premium">
              <h2 className="font-serif text-2xl font-semibold text-[#c9a227]">Our Vision</h2>
              <p className="mt-4 text-zinc-400">
                To be the most trusted name in financial protection—recognized for our commitment
                to customer success, ethical practices, and innovation in service delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 gold-border rounded-2xl bg-[#0f0f0f] p-8 shadow-premium lg:p-10"
          >
            <h2 className="font-serif text-2xl font-semibold text-[#c9a227]">Founder&apos;s Message</h2>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              &ldquo;Arambhya was built on a simple belief: everyone deserves access to honest,
              straightforward financial protection. We started with a small team and a big vision—to
              put trust and transparency at the heart of insurance. Today, we continue to serve
              families and businesses with the same values we began with. Your future is our
              responsibility.&rdquo;
            </p>
            <p className="mt-4 font-serif font-semibold text-white">— Founder, Arambhya Financial Services</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="font-serif text-3xl font-semibold text-white text-center">
              Our <span className="text-gold-gradient">Founders</span>
            </h2>
            <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">
              The visionaries behind Arambhya Financial Services, committed to your financial security.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="gold-border rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-premium text-center"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/sir.jpeg"
                    alt="Abhinav Kumar - Co-Founder, Arambhya Financial Services"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#c9a227]">Abhinav Kumar</h3>
                  <p className="mt-1 text-sm text-zinc-400">Co-Founder</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="gold-border rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-premium text-center"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/mam.jpeg"
                    alt="Mamta Roy - Co-Founder, Arambhya Financial Services"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#c9a227]">Mamta Roy</h3>
                  <p className="mt-1 text-sm text-zinc-400">Co-Founder</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="font-serif text-3xl font-semibold text-white text-center">
              Our <span className="text-gold-gradient">Core Values</span>
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CORE_VALUES.map((value, i) => (
                <CoreValueCard key={value.title} value={value} index={i} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="font-serif text-3xl font-semibold text-white text-center">
              Our <span className="text-gold-gradient">Journey</span>
            </h2>
            <p className="mt-4 text-center text-zinc-400 max-w-2xl mx-auto">
              Key milestones in our growth and commitment to excellence.
            </p>
            <div className="mt-12 space-y-0">
              {TIMELINE.map((entry, i) => (
                <TimelineEntry key={entry.year} entry={entry} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CoreValueCard({ value, index }: { value: CoreValueType; index: number }) {
  const iconMap: Record<string, 'shield-check' | 'users' | 'lightbulb' | 'star'> = {
    'shield-check': 'shield-check',
    users: 'users',
    lightbulb: 'lightbulb',
    star: 'star',
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#0f0f0f] p-6 transition-colors hover:border-[#c9a227]/40"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(201,162,39,0.15)] text-[#c9a227]">
        <Icon name={iconMap[value.icon] ?? 'star'} size={24} />
      </div>
      <h3 className="mt-4 font-serif text-lg font-semibold text-white">{value.title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{value.description}</p>
    </motion.div>
  );
}

function TimelineEntry({ entry, index }: { entry: TimelineItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative flex gap-8 pb-12 last:pb-0"
    >
      <div className="flex shrink-0 flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c9a227] bg-[#0a0a0a] font-serif text-sm font-semibold text-[#c9a227]">
          {entry.year}
        </div>
        {index < TIMELINE.length - 1 && (
          <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-[#c9a227]/60 to-transparent" />
        )}
      </div>
      <div className="gold-border rounded-xl bg-[#0f0f0f] p-6 shadow-premium flex-1">
        <h3 className="font-serif text-xl font-semibold text-white">{entry.title}</h3>
        <p className="mt-2 text-zinc-400">{entry.description}</p>
      </div>
    </motion.div>
  );
}
