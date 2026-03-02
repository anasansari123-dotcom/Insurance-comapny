'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { PageHero } from '@/components/ui/PageHero';
import { Testimonials } from '@/components/sections/Testimonials';
import { FaqSection } from '@/components/sections/FaqSection';
import { COMPANY_SERVICES, COMPANY_FORM_TYPES, FAQ_COMPANY } from '@/utils/constants';
import { IMAGES } from '@/utils/images';
import { companyRegistrationSchema, type CompanyRegistrationValues } from '@/features/company/companySchema';

const inputClass =
  'mt-2 w-full rounded-lg border border-[rgba(201,162,39,0.3)] bg-[#0a0a0a] px-4 py-3 text-white placeholder-zinc-500 focus:border-[#c9a227] focus:outline-none focus:ring-1 focus:ring-[#c9a227]';
const labelClass = 'block text-sm font-medium text-zinc-300';

export function CompanyRegistrationContent() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CompanyRegistrationValues>({
    resolver: zodResolver(companyRegistrationSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      businessType: '',
      city: '',
      message: '',
    },
  });

  const onSubmit = async (data: CompanyRegistrationValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0a0a0a]">
      <PageHero
        title="Start & Register Your Business Easily"
        subheading="Private Limited, LLP, GST, MSME, Trademark & more. Expert support for compliance."
        imageSrc={IMAGES.companyRegistration}
        imageAlt="Company registration and business setup - start and register your business"
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
              Registration <span className="text-gold-gradient">Services</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
              End-to-end company and compliance registration services.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY_SERVICES.map((service, index) => {
              const cardImage = IMAGES.companyCards[service.id as keyof typeof IMAGES.companyCards];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group gold-border rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-premium transition-all duration-300 hover:shadow-gold"
                >
                  {cardImage && (
                    <Link href="#registration-form" className="block relative aspect-[16/10] w-full">
                      <Image
                        src={cardImage}
                        alt={`${service.title} - registration and compliance`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(201,162,39,0.2)] text-[#c9a227] backdrop-blur-sm">
                        <Icon name={service.icon} size={24} />
                      </div>
                    </Link>
                  )}
                  <div className="p-8">
                    {!cardImage && (
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[rgba(201,162,39,0.15)] text-[#c9a227] transition-colors group-hover:bg-[rgba(201,162,39,0.25)]">
                        <Icon name={service.icon} size={32} />
                      </div>
                    )}
                    <h3 className="mt-6 font-serif text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-4 text-zinc-400">{service.description}</p>
                    <span className="mt-4 inline-block rounded-lg bg-[rgba(201,162,39,0.15)] px-3 py-1.5 text-sm font-medium text-[#c9a227]">
                      From {service.price}
                    </span>
                    <div className="mt-6">
                      <Link
                        href="#registration-form"
                        className="inline-flex items-center gap-2 text-[#c9a227] font-medium hover:text-[#d4af37] transition-colors"
                      >
                        Learn More
                        <Icon name="chevron-right" size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="registration-form" className="relative bg-[#0f0f0f] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Request <span className="text-gold-gradient">Registration</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-zinc-400">
              Tell us your requirement and we will get back with a custom quote.
            </p>
          </motion.div>

          <div className="mt-16 flex justify-center">
            <div className="w-full max-w-lg">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="gold-border rounded-2xl bg-[#0a0a0a] p-10 text-center shadow-premium"
                >
                  <p className="font-serif text-xl font-semibold text-[#c9a227]">Thank you!</p>
                  <p className="mt-2 text-zinc-400">
                    We have received your request and will contact you shortly with next steps.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="gold-border rounded-2xl bg-[#0a0a0a] p-8 shadow-premium sm:p-10"
                >
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name</label>
                      <input id="name" {...register('name')} className={inputClass} placeholder="Your name" />
                      {errors.name && <p className="mt-1 text-sm text-amber-400">{errors.name.message}</p>}
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
                      <label htmlFor="businessType" className={labelClass}>Business Type</label>
                      <select id="businessType" {...register('businessType')} className={inputClass}>
                        <option value="">Select type</option>
                        {COMPANY_FORM_TYPES.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                      {errors.businessType && <p className="mt-1 text-sm text-amber-400">{errors.businessType.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="city" className={labelClass}>City</label>
                      <input id="city" {...register('city')} className={inputClass} placeholder="Your city" />
                      {errors.city && <p className="mt-1 text-sm text-amber-400">{errors.city.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className={labelClass}>Message (optional)</label>
                      <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        className={`${inputClass} resize-none`}
                        placeholder="Your requirement or questions"
                      />
                    </div>
                    <Button type="submit" variant="gold" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={FAQ_COMPANY} title="Company Registration" />
      <Testimonials />
    </div>
  );
}
