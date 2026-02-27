import type { Metadata } from 'next';
import { QuoteContent } from '@/components/features/quote/QuoteContent';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Request a personalized insurance quote from Arambhya Financial Services. Life, Health, Motor, Business & Investment plans.',
};

export default function QuotePage() {
  return <QuoteContent />;
}
