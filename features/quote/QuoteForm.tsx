'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { quoteSchema, type QuoteFormValues } from './quoteSchema';
import { Button } from '@/components/ui/Button';
import { POLICY_TYPES } from '@/utils/constants';

const VALID_POLICIES = ['life', 'health', 'motor', 'business', 'investment'] as const;

type PolicyTypeParam = (typeof VALID_POLICIES)[number];

function isValidPolicy(p: string | null): p is PolicyTypeParam {
  return p !== null && VALID_POLICIES.includes(p as PolicyTypeParam);
}

interface QuoteFormProps {
  defaultPolicyType?: string | null;
}

export function QuoteForm({ defaultPolicyType }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const initialPolicy: PolicyTypeParam | undefined = isValidPolicy(defaultPolicyType ?? null)
    ? (defaultPolicyType as PolicyTypeParam)
    : undefined;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      policyType: initialPolicy,
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="gold-border rounded-2xl bg-[#0f0f0f] p-10 text-center shadow-premium"
      >
        <p className="font-serif text-xl font-semibold text-[#c9a227]">Quote Request Received</p>
        <p className="mt-2 text-zinc-400">
          Our advisor will contact you shortly with a personalized quote.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="gold-border rounded-2xl bg-[#0f0f0f] p-8 shadow-premium sm:p-10"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="policyType" className="block text-sm font-medium text-zinc-300">
            Policy Type
          </label>
          <select
            id="policyType"
            {...register('policyType')}
            className="mt-2 w-full rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
          >
            <option value="">Select policy type</option>
            {POLICY_TYPES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
          {errors.policyType && (
            <p className="mt-1 text-sm text-amber-400">{errors.policyType.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-zinc-300">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            className="mt-2 w-full rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
            placeholder="Your full name"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-amber-400">{errors.fullName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="mt-2 w-full rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-amber-400">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-300">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="mt-2 w-full rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-amber-400">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-300">
            Additional details (optional)
          </label>
          <textarea
            id="message"
            rows={3}
            {...register('message')}
            className="mt-2 w-full resize-none rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
            placeholder="Any specific requirements?"
          />
        </div>
        <Button
          type="submit"
          variant="gold"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
        </Button>
      </div>
    </motion.form>
  );
}
