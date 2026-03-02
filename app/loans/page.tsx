import type { Metadata } from 'next';
import { LoansContent } from '@/components/features/loans/LoansContent';

export const metadata: Metadata = {
  title: 'Loans',
  description: 'Fast & easy loan approval. Personal, Home, Business, Education, Car, Gold, Loan Against Property, Startup & MSME loans.',
};

export default function LoansPage() {
  return <LoansContent />;
}
