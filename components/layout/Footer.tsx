'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { CONTACT_INFO, NAV_LINKS } from '@/utils/constants';

const LOGO_SRC = '/WhatsApp_Image_2026-02-26_at_9.39.18_PM-removebg-preview (1).png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(201,162,39,0.2)] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src={LOGO_SRC}
                alt="Arambhya Financial Services"
                width={200}
                height={72}
                className="h-26 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-500">
              Securing your future with confidence. Premium insurance and financial solutions.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#c9a227]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-[#c9a227]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#c9a227]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <Icon name="mail" size={18} className="text-[#c9a227]" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#c9a227]">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" size={18} className="text-[#c9a227]" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-[#c9a227]">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="map-pin" size={18} className="mt-0.5 shrink-0 text-[#c9a227]" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-[#c9a227]">
              Follow Us
            </h3>
            <p className="mt-4 text-sm text-zinc-500">
              Stay connected for updates and financial insights.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgba(201,162,39,0.15)] pt-8 text-center text-sm text-zinc-500">
          © {currentYear} Arambhya Financial Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
