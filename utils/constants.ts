import type { NavLink, Service, WhyUsItem, Testimonial, TimelineItem, CoreValue } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Get Quote', href: '/quote' },
  { label: 'Contact', href: '/contact' },
];

import { IMAGES } from './images';

export const SERVICES: Service[] = [
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Protect your loved ones with comprehensive life coverage. Peace of mind for your family\'s future.',
    icon: 'shield-heart',
    href: '/quote?policy=life',
    image: IMAGES.services.life,
  },
  {
    id: 'health',
    title: 'Health Insurance',
    description: 'Quality healthcare coverage for you and your family. Stay protected against medical expenses.',
    icon: 'heart-pulse',
    href: '/quote?policy=health',
    image: IMAGES.services.health,
  },
  {
    id: 'motor',
    title: 'Motor Insurance',
    description: 'Complete protection for your vehicles. Comprehensive and third-party policies available.',
    icon: 'car',
    href: '/quote?policy=motor',
    image: IMAGES.services.motor,
  },
  {
    id: 'business',
    title: 'Business Insurance',
    description: 'Safeguard your enterprise with tailored business insurance solutions.',
    icon: 'building',
    href: '/quote?policy=business',
    image: IMAGES.services.business,
  },
  {
    id: 'investment',
    title: 'Investment Plans',
    description: 'Grow your wealth with structured investment and savings plans for your goals.',
    icon: 'trending-up',
    href: '/quote?policy=investment',
    image: IMAGES.services.investment,
  },
];

export const WHY_US: WhyUsItem[] = [
  {
    title: 'Trust',
    description: 'Decades of integrity and commitment to our clients. Your trust is our greatest asset.',
    icon: 'award',
  },
  {
    title: 'Transparency',
    description: 'Clear terms, no hidden clauses. We believe in honest, straightforward communication.',
    icon: 'eye',
  },
  {
    title: 'Experience',
    description: 'Expert advisors with deep industry knowledge to guide you to the right coverage.',
    icon: 'graduation-cap',
  },
  {
    title: 'Fast Claims',
    description: 'Streamlined claim process so you get support when you need it most.',
    icon: 'zap',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'Arambhya helped me secure comprehensive business insurance. Professional, transparent, and truly caring about our needs.',
    avatar: IMAGES.testimonials[0],
  },
  {
    name: 'Priya Sharma',
    role: 'Individual Policyholder',
    content: 'From quote to claim, the experience was seamless. I recommend Arambhya to everyone looking for reliable insurance.',
    avatar: IMAGES.testimonials[1],
  },
  {
    name: 'Vikram Mehta',
    role: 'Family Plan Holder',
    content: 'Our family\'s health and life policies are with Arambhya. The advisors took time to explain every detail. Exceptional service.',
    avatar: IMAGES.testimonials[2],
  },
];

export const TIMELINE: TimelineItem[] = [
  { year: '2010', title: 'Foundation', description: 'Arambhya Financial Services was founded with a vision to make insurance accessible and trustworthy.' },
  { year: '2013', title: 'Expansion', description: 'Expanded to 5 cities with a growing team of certified advisors.' },
  { year: '2017', title: 'Digital First', description: 'Launched digital quote and policy management for customer convenience.' },
  { year: '2020', title: 'Industry Recognition', description: 'Awarded for excellence in customer service and claim settlement ratio.' },
  { year: '2024', title: 'Present', description: 'Serving over 50,000 families and businesses with premium protection solutions.' },
];

export const CORE_VALUES: CoreValue[] = [
  { title: 'Integrity', description: 'We do what we say and say what we do.', icon: 'shield-check' },
  { title: 'Customer First', description: 'Your needs and peace of mind drive every decision.', icon: 'users' },
  { title: 'Innovation', description: 'We continuously improve our products and processes.', icon: 'lightbulb' },
  { title: 'Excellence', description: 'We strive for the highest standards in service and delivery.', icon: 'star' },
];

export const POLICY_TYPES = [
  { value: 'life', label: 'Life Insurance' },
  { value: 'health', label: 'Health Insurance' },
  { value: 'motor', label: 'Motor Insurance' },
  { value: 'business', label: 'Business Insurance' },
  { value: 'investment', label: 'Investment Plans' },
];

export const CONTACT_INFO = {
  email: 'contact@arambhyafinancial.com',
  phones: ['+91 91136 61064', '+91 877 780 1221'],
  address: 'JC2G+984 Rajarhat, Kolkata, West Bengal',
  coordinates: { lat: 22.600889, lng: 88.425833 },
  mapEmbedUrl: 'https://www.google.com/maps?q=22.600889,88.425833&z=16&output=embed',
};
