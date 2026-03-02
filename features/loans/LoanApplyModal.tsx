'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { loanApplySchema, type LoanApplyValues } from './loanSchema';
import { Button } from '@/components/ui/Button';
import { LOAN_FORM_TYPES } from '@/utils/constants';

interface LoanApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLoanType?: string;
  onSuccess?: () => void;
}

const inputClass =
  'mt-2 w-full rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]';
const labelClass = 'block text-sm font-medium text-zinc-300';

export function LoanApplyModal({ isOpen, onClose, selectedLoanType, onSuccess }: LoanApplyModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoanApplyValues>({
    resolver: zodResolver(loanApplySchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      city: '',
      loanType: selectedLoanType ?? '',
      monthlyIncome: '',
      loanAmount: '',
    },
  });

  useEffect(() => {
    if (selectedLoanType) {
      reset((prev) => ({ ...prev, loanType: selectedLoanType }));
    }
  }, [selectedLoanType, reset]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const onSubmit = async (data: LoanApplyValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log(data);
    reset();
    onClose();
    onSuccess?.();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="gold-border max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f0f0f] p-6 shadow-premium sm:p-8">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl font-semibold text-[#c9a227]">Apply for Loan</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Full Name</label>
                  <input id="fullName" {...register('fullName')} className={inputClass} placeholder="Your full name" />
                  {errors.fullName && <p className="mt-1 text-sm text-amber-400">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone</label>
                  <input id="phone" type="tel" {...register('phone')} className={inputClass} placeholder="+91 98765 43210" />
                  {errors.phone && <p className="mt-1 text-sm text-amber-400">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" type="email" {...register('email')} className={inputClass} placeholder="you@example.com" />
                  {errors.email && <p className="mt-1 text-sm text-amber-400">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>City</label>
                  <input id="city" {...register('city')} className={inputClass} placeholder="Your city" />
                  {errors.city && <p className="mt-1 text-sm text-amber-400">{errors.city.message}</p>}
                </div>
                <div>
                  <label htmlFor="loanType" className={labelClass}>Loan Type</label>
                  <select id="loanType" {...register('loanType')} className={inputClass}>
                    <option value="">Select loan type</option>
                    {LOAN_FORM_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {errors.loanType && <p className="mt-1 text-sm text-amber-400">{errors.loanType.message}</p>}
                </div>
                <div>
                  <label htmlFor="monthlyIncome" className={labelClass}>Monthly Income (₹)</label>
                  <input id="monthlyIncome" type="text" {...register('monthlyIncome')} className={inputClass} placeholder="e.g. 50000" />
                  {errors.monthlyIncome && <p className="mt-1 text-sm text-amber-400">{errors.monthlyIncome.message}</p>}
                </div>
                <div>
                  <label htmlFor="loanAmount" className={labelClass}>Loan Amount (₹)</label>
                  <input id="loanAmount" type="text" {...register('loanAmount')} className={inputClass} placeholder="e.g. 500000" />
                  {errors.loanAmount && <p className="mt-1 text-sm text-amber-400">{errors.loanAmount.message}</p>}
                </div>
                <div>
                  <label htmlFor="documents" className={labelClass}>Upload Documents (optional)</label>
                  <input id="documents" type="file" multiple {...register('documents')} className="mt-2 w-full text-zinc-400 file:mr-4 file:rounded-lg file:border-0 file:bg-[rgba(201,162,39,0.2)] file:px-4 file:py-2 file:text-[#c9a227]" />
                </div>
                <Button type="submit" variant="gold" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
