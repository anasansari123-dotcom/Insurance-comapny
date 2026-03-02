import { z } from 'zod';

export const loanApplySchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().min(10, 'Valid phone required').max(15),
  email: z.string().email('Valid email required'),
  city: z.string().min(2, 'City required').max(80),
  loanType: z.string().min(1, 'Select loan type'),
  monthlyIncome: z.string().min(1, 'Monthly income required'),
  loanAmount: z.string().min(1, 'Loan amount required'),
  documents: z.any().optional(),
});

export type LoanApplyValues = z.infer<typeof loanApplySchema>;
