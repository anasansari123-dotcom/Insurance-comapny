'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { SERVICES } from '@/utils/constants';
import type { Service } from '@/types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ServicesOverview() {
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
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Comprehensive insurance and investment solutions to protect what matters most.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-[#c9a227] transition-colors hover:text-[#d4af37]"
          >
            View all services
            <Icon name="chevron-right" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      className="group gold-border rounded-xl bg-[#0a0a0a]/80 p-6 shadow-premium transition-all duration-300 hover:shadow-gold"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(201,162,39,0.15)] text-[#c9a227] transition-colors group-hover:bg-[rgba(201,162,39,0.25)]">
        <Icon name={service.icon} size={24} />
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
      <Link
        href={service.href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#c9a227] transition-colors hover:text-[#d4af37]"
      >
        Learn More
        <Icon name="chevron-right" size={16} />
      </Link>
    </motion.div>
  );
}
