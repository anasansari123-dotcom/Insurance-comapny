export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  image?: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  role: string;
  content: string;
  avatar?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type CoreValue = {
  title: string;
  description: string;
  icon: string;
};

export type PolicyType = 
  | 'life'
  | 'health'
  | 'motor'
  | 'business'
  | 'investment';

export interface QuoteFormData {
  policyType: PolicyType;
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
