'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { SERVICES } from '@/utils/constants';
import type { Service } from '@/types';

export function ServicesContent() {
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
              Our <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
              Comprehensive insurance and investment solutions tailored to your needs.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-zinc-400 mb-4">Need help choosing? Get a personalized quote.</p>
            <Button href="/quote" variant="gold">
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group gold-border rounded-2xl bg-[#0f0f0f] p-8 shadow-premium transition-all duration-300 hover:shadow-gold"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[rgba(201,162,39,0.15)] text-[#c9a227] transition-colors group-hover:bg-[rgba(201,162,39,0.25)]">
        <Icon name={service.icon} size={32} />
      </div>
      <h2 className="mt-6 font-serif text-2xl font-semibold text-white">{service.title}</h2>
      <p className="mt-4 text-zinc-400">{service.description}</p>
      <Link
        href={service.href}
        className="mt-6 inline-flex items-center gap-2 text-[#c9a227] font-medium hover:text-[#d4af37] transition-colors"
      >
        Learn More
        <Icon name="chevron-right" size={18} />
      </Link>
    </motion.div>
  );
}
