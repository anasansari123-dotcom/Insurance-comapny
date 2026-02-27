import type { Metadata } from 'next';
import { ServicesContent } from '@/components/features/services/ServicesContent';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Life Insurance, Health Insurance, Motor Insurance, Business Insurance, and Investment Plans. Explore our comprehensive solutions.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}
