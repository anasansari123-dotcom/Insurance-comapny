'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/ui/PageHero';
import { Toast } from '@/components/ui/Toast';
import { LoanApplyModal } from '@/features/loans/LoanApplyModal';
import { LOAN_TYPES, FAQ_LOANS } from '@/utils/constants';
import { IMAGES } from '@/utils/images';
import { Testimonials } from '@/components/sections/Testimonials';
import { FaqSection } from '@/components/sections/FaqSection';

export function LoansContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoanId, setSelectedLoanId] = useState<string | undefined>();
  const [toastShow, setToastShow] = useState(false);

  const openModal = (loanId?: string) => {
    setSelectedLoanId(loanId);
    setModalOpen(true);
  };

  const handleSuccess = () => {
    setToastShow(true);
    setTimeout(() => setToastShow(false), 4000);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <PageHero
        title="Fast & Easy Loan Approval"
        subheading="Personal, Business, Home & More"
        ctaLabel="Apply Now"
        onCtaClick={() => openModal()}
        imageSrc={IMAGES.loans}
        imageAlt="Loans and financial services - fast and easy loan approval"
      />

      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Loan <span className="text-gold-gradient">Types</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
              Choose from a range of loan products designed to meet your needs.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LOAN_TYPES.map((loan, index) => {
              const cardImage = IMAGES.loanCards[loan.id as keyof typeof IMAGES.loanCards];
              return (
                <motion.div
                  key={loan.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group gold-border rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-premium transition-all duration-300 hover:shadow-gold"
                >
                  {cardImage && (
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={cardImage}
                        alt={`${loan.title} - competitive rates, quick approval`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                      <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(201,162,39,0.2)] text-[#c9a227] backdrop-blur-sm">
                        <Icon name={loan.icon} size={28} />
                      </div>
                    </div>
                  )}
                  <div className="p-8">
                    {!cardImage && (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[rgba(201,162,39,0.15)] text-[#c9a227] transition-colors group-hover:bg-[rgba(201,162,39,0.25)]">
                        <Icon name={loan.icon} size={32} />
                      </div>
                    )}
                    <h3 className="mt-6 font-serif text-2xl font-semibold text-white">{loan.title}</h3>
                    <p className="mt-4 text-zinc-400">{loan.description}</p>
                    <span className="mt-4 inline-block rounded-lg bg-[rgba(201,162,39,0.15)] px-3 py-1.5 text-sm font-medium text-[#c9a227]">
                      {loan.rate}
                    </span>
                    <div className="mt-6">
                      <Button
                        type="button"
                        variant="gold"
                        className="w-full sm:w-auto"
                        onClick={() => openModal(loan.id)}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQ_LOANS} title="Loan" />
      <Testimonials />

      <LoanApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedLoanType={selectedLoanId}
        onSuccess={handleSuccess}
      />
      <Toast show={toastShow} message="Application submitted successfully! We will contact you shortly." onDismiss={() => setToastShow(false)} />
    </div>
  );
}
