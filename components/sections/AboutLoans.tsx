'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { LOAN_TYPES } from '@/utils/constants';
import { IMAGES } from '@/utils/images';

const HIGHLIGHT_LOAN_IDS = ['personal', 'home', 'business', 'education'];

export function AboutLoans() {
  const highlightLoans = LOAN_TYPES.filter((loan) => HIGHLIGHT_LOAN_IDS.includes(loan.id));

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
            About <span className="text-gold-gradient">Loans</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
            Fast & easy loan approval for personal, home, business, education and more. Competitive rates and minimal documentation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightLoans.map((loan, index) => {
            const cardImage = IMAGES.loanCards[loan.id as keyof typeof IMAGES.loanCards];
            return (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group gold-border rounded-xl overflow-hidden bg-[#0f0f0f] shadow-premium transition-all duration-300 hover:shadow-gold"
              >
                {cardImage && (
                  <Link href="/loans" className="block relative aspect-[16/10] w-full">
                    <Image
                      src={cardImage}
                      alt={`${loan.title} - competitive rates, quick approval`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(201,162,39,0.2)] text-[#c9a227] backdrop-blur-sm">
                      <Icon name={loan.icon} size={20} />
                    </div>
                  </Link>
                )}
                <div className="p-6">
                  {!cardImage && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(201,162,39,0.15)] text-[#c9a227] transition-colors group-hover:bg-[rgba(201,162,39,0.25)]">
                      <Icon name={loan.icon} size={24} />
                    </div>
                  )}
                  <h3 className="mt-4 font-serif text-xl font-semibold text-white">{loan.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{loan.description}</p>
                  <span className="mt-3 inline-block rounded-lg bg-[rgba(201,162,39,0.15)] px-2.5 py-1 text-xs font-medium text-[#c9a227]">
                    {loan.rate}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="/loans" variant="gold" className="min-w-[180px]">
            View All Loans
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
