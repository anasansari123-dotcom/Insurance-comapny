'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { ContactForm } from '@/features/contact/ContactForm';
import { CONTACT_INFO } from '@/utils/constants';
import { IMAGES } from '@/utils/images';

export function ContactContent() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.contact}
          alt="Modern office interior - Arambhya Financial Services contact"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
      </div>
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
                  <li className="flex flex-col gap-2">
                    <span className="flex items-center gap-2 text-[#c9a227]">
                      <Icon name="phone" size={20} className="shrink-0" />
                      Phone
                    </span>
                    {CONTACT_INFO.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="ml-7 hover:text-[#c9a227] transition-colors text-zinc-400"
                      >
                        {phone}
                      </a>
                    ))}
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
                <div className="aspect-video w-full">
                  <iframe
                    src={CONTACT_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arambhya Financial Services - Rajarhat, Kolkata location map"
                    className="min-h-[280px] w-full"
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 py-2 text-sm text-[#c9a227] hover:text-[#d4af37] transition-colors"
                >
                  <Icon name="map-pin" size={18} />
                  Open in Google Maps
                </a>
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
