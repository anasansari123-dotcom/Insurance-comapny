import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
