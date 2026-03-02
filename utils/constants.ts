import type { NavLink, Service, WhyUsItem, Testimonial, TimelineItem, CoreValue } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Insurance', href: '/services' },
  { label: 'Loans', href: '/loans' },
  { label: 'Company Registration', href: '/company-registration' },
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

export const LOAN_TYPES = [
  { id: 'personal', title: 'Personal Loan', description: 'Quick funds for your personal needs. Flexible tenure and competitive rates.', icon: 'wallet', rate: '10.5% p.a.' },
  { id: 'home', title: 'Home Loan', description: 'Realize your dream of owning a home with attractive interest rates.', icon: 'home', rate: '8.5% p.a.' },
  { id: 'business', title: 'Business Loan', description: 'Fuel your business growth with tailored financing solutions.', icon: 'briefcase', rate: '12% p.a.' },
  { id: 'education', title: 'Education Loan', description: 'Invest in your future with education loans for higher studies.', icon: 'graduation-cap', rate: '9% p.a.' },
  { id: 'car', title: 'Car Loan', description: 'Drive home your dream car with easy car loan options.', icon: 'car', rate: '9.5% p.a.' },
  { id: 'gold', title: 'Gold Loan', description: 'Get instant funds against your gold with minimal documentation.', icon: 'landmark', rate: '10% p.a.' },
  { id: 'loan-against-property', title: 'Loan Against Property', description: 'Unlock the value of your property for large funding needs.', icon: 'file-check', rate: '10.5% p.a.' },
  { id: 'startup', title: 'Startup Loan', description: 'Kick-start your entrepreneurial journey with startup financing.', icon: 'rocket', rate: '11% p.a.' },
  { id: 'msme', title: 'MSME Loan', description: 'Government-backed schemes for MSME growth and expansion.', icon: 'building', rate: '9% p.a.' },
];

export const COMPANY_SERVICES = [
  { id: 'private-limited', title: 'Private Limited Company', description: 'Incorporate your business as a Private Limited with legal protection.', icon: 'building', price: '₹12,999' },
  { id: 'llp', title: 'LLP Registration', description: 'Register as Limited Liability Partnership for flexibility and protection.', icon: 'file-text', price: '₹7,999' },
  { id: 'opc', title: 'OPC Registration', description: 'One Person Company registration for solo entrepreneurs.', icon: 'briefcase', price: '₹5,999' },
  { id: 'partnership', title: 'Partnership Firm', description: 'Register your partnership firm with ease and compliance.', icon: 'users', price: '₹3,999' },
  { id: 'gst', title: 'GST Registration', description: 'Get your business GST registered for seamless tax compliance.', icon: 'file-check', price: '₹1,499' },
  { id: 'msme-reg', title: 'MSME Registration', description: 'Register under MSME for benefits and priority sector lending.', icon: 'badge-check', price: '₹999' },
  { id: 'trademark', title: 'Trademark Registration', description: 'Protect your brand with trademark registration.', icon: 'stamp', price: '₹4,999' },
  { id: 'startup-india', title: 'Startup India Registration', description: 'Get recognized under Startup India for tax and funding benefits.', icon: 'rocket', price: '₹2,999' },
  { id: 'iso', title: 'ISO Certification', description: 'Achieve ISO certification for quality and credibility.', icon: 'award', price: 'On request' },
];

export const LOAN_FORM_TYPES = LOAN_TYPES.map((l) => ({ value: l.id, label: l.title }));
export const COMPANY_FORM_TYPES = COMPANY_SERVICES.map((c) => ({ value: c.id, label: c.title }));

export const FAQ_LOANS = [
  { q: 'What documents are required for a personal loan?', a: 'Typically you need ID proof, address proof, income proof (salary slips or ITR), and bank statements. Our team will guide you through the exact list based on the loan type.' },
  { q: 'How long does loan approval take?', a: 'Personal and quick loans can be approved within 24–48 hours. Home and business loans may take 5–7 working days after document verification.' },
  { q: 'Can I prepay my loan?', a: 'Yes, most of our loan products allow prepayment or foreclosure. Terms may vary by lender; we will explain the options when you apply.' },
];

export const FAQ_COMPANY = [
  { q: 'How long does company registration take?', a: 'Private Limited and LLP registration usually take 10–15 working days. OPC and Partnership can be faster. We handle all paperwork and follow-ups.' },
  { q: 'Do I need to visit the office?', a: 'No. We offer fully online registration. Documents can be submitted digitally and verification is done remotely where applicable.' },
  { q: 'What is included in the registration fee?', a: 'Our fee includes government charges, drafting of documents, and filing. GST and other post-registration compliances can be added as per your need.' },
];
