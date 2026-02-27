import { z } from 'zod';

const policyTypes = ['life', 'health', 'motor', 'business', 'investment'] as const;

export const quoteSchema = z.object({
  policyType: z.enum(policyTypes, { message: 'Please select a policy type' }),
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  message: z.string().max(500).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
