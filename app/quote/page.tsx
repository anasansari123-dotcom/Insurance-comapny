import type { Metadata } from 'next';
import { Suspense } from 'react';
import { QuoteContent } from '@/components/features/quote/QuoteContent';

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Request a personalized insurance quote from Arambhya Financial Services. Life, Health, Motor, Business & Investment plans.',
};

function QuoteLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#0a0a0a]">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#c9a227]/30 border-t-[#c9a227]" />
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<QuoteLoading />}>
      <QuoteContent />
    </Suspense>
  );
}
