import type { Metadata } from 'next';
import { AboutContent } from '@/components/features/about/AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Arambhya Financial Services—our mission, vision, founder message, core values, and growth journey.',
};

export default function AboutPage() {
  return <AboutContent />;
}
