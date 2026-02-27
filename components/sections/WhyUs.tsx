'use client';

import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { WHY_US } from '@/utils/constants';
import type { WhyUsItem } from '@/types';
import type { IconName } from '@/components/ui/Icon';

export function WhyUs() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Why <span className="text-gold-gradient">Choose Us</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            We stand apart through our commitment to trust, transparency, and your peace of mind.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, index) => (
            <WhyUsCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsCard({ item, index }: { item: WhyUsItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-xl border border-[rgba(201,162,39,0.2)] bg-[#0f0f0f] p-6 transition-all duration-300 hover:border-[#c9a227]/40 hover:shadow-gold"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(201,162,39,0.1)] text-[#c9a227]">
        <Icon name={item.icon as IconName} size={28} />
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-zinc-400">{item.description}</p>
    </motion.div>
  );
}
