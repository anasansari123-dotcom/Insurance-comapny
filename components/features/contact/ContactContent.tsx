'use client';

import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { ContactForm } from '@/features/contact/ContactForm';
import { CONTACT_INFO } from '@/utils/constants';

export function ContactContent() {
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
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
              Have questions? We&apos;re here to help. Send us a message or reach out directly.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="gold-border rounded-2xl bg-[#0f0f0f] p-6 shadow-premium"
              >
                <h2 className="font-serif text-xl font-semibold text-[#c9a227]">Contact Details</h2>
                <ul className="mt-6 space-y-4 text-zinc-400">
                  <li className="flex items-center gap-3">
                    <Icon name="mail" size={20} className="shrink-0 text-[#c9a227]" />
                    <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#c9a227] transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="phone" size={20} className="shrink-0 text-[#c9a227]" />
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-[#c9a227] transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="map-pin" size={20} className="shrink-0 text-[#c9a227] mt-0.5" />
                    <span>{CONTACT_INFO.address}</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="gold-border rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-premium"
              >
                <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center text-zinc-500">
                  <div className="text-center p-4">
                    <Icon name="map-pin" size={48} className="mx-auto text-[#c9a227]/50" />
                    <p className="mt-2 text-sm">Google Maps placeholder</p>
                    <p className="text-xs">Replace with your map embed</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
