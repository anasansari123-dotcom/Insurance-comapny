import type { Metadata } from 'next';
import { ContactContent } from '@/components/features/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Arambhya Financial Services. Send a message or find our contact details.',
};

export default function ContactPage() {
  return <ContactContent />;
}
