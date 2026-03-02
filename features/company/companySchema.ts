import { z } from 'zod';

export const companyRegistrationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().min(10, 'Valid phone required').max(15),
  email: z.string().email('Valid email required'),
  businessType: z.string().min(1, 'Select business type'),
  city: z.string().min(2, 'City required').max(80),
  message: z.string().max(500).optional(),
});

export type CompanyRegistrationValues = z.infer<typeof companyRegistrationSchema>;
