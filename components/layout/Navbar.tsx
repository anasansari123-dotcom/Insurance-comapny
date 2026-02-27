'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/utils/constants';
import { Button } from '@/components/ui/Button';

const LOGO_SRC = '/WhatsApp_Image_2026-02-26_at_9.39.18_PM-removebg-preview (1).png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-premium' : 'bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={LOGO_SRC}
            alt="Arambhya Financial Services"
            width={200}
            height={80}
            className="h-14 w-auto object-contain sm:h-26 lg:h-26 absolute"
            priority
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-zinc-300 transition-colors hover:text-[#c9a227]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#c9a227] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 md:block">
          <Button href="/quote" variant="gold" className="rounded-lg px-5 py-2.5 text-sm">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-[rgba(201,162,39,0.15)] md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-[#c9a227]"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/quote"
                variant="gold"
                className="mt-2 w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
