import type { Metadata } from 'next';
import { CompanyRegistrationContent } from '@/components/features/company/CompanyRegistrationContent';

export const metadata: Metadata = {
  title: 'Company Registration',
  description: 'Start & register your business easily. Private Limited, LLP, OPC, Partnership, GST, MSME, Trademark, Startup India, ISO.',
};

export default function CompanyRegistrationPage() {
  return <CompanyRegistrationContent />;
}
