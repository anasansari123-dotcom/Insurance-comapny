'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { CONTACT_INFO, NAV_LINKS } from '@/utils/constants';
import { IMAGES } from '@/utils/images';

const LOGO_SRC = '/WhatsApp_Image_2026-02-26_at_9.39.18_PM-removebg-preview (1).png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[rgba(201,162,39,0.2)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.footer}
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/95" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
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
                <Icon name="phone" size={18} className="shrink-0 text-[#c9a227]" />
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {CONTACT_INFO.phones.map((phone, i) => (
                    <Fragment key={phone}>
                      {i > 0 && <span className="text-zinc-500">|</span>}
                      <a
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="hover:text-[#c9a227]"
                      >
                        {phone}
                      </a>
                    </Fragment>
                  ))}
                </span>
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

        <div className="relative mt-12 border-t border-[rgba(201,162,39,0.15)] pt-8 text-center text-sm text-zinc-500">
          © {currentYear} Arambhya Financial Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
