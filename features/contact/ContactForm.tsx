'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { contactSchema, type ContactFormValues } from './contactSchema';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
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
        <p className="font-serif text-xl font-semibold text-[#c9a227]">Thank you!</p>
        <p className="mt-2 text-zinc-400">
          We have received your message and will get back to you shortly.
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
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="mt-2 w-full rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-amber-400">{errors.name.message}</p>
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
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="mt-2 w-full resize-none rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]"
            placeholder="How can we help?"
          />
          {errors.message && (
            <p className="mt-1 text-sm text-amber-400">{errors.message.message}</p>
          )}
        </div>
        <Button
          type="submit"
          variant="gold"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </motion.form>
  );
}
