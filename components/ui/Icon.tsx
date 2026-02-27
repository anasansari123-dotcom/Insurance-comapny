'use client';

import {
  Shield,
  Heart,
  Car,
  Building2,
  TrendingUp,
  Award,
  Eye,
  GraduationCap,
  Zap,
  ShieldCheck,
  Users,
  Lightbulb,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const iconMap = {
  'shield-heart': Shield,
  'heart-pulse': Heart,
  car: Car,
  building: Building2,
  'trending-up': TrendingUp,
  award: Award,
  eye: Eye,
  'graduation-cap': GraduationCap,
  zap: Zap,
  'shield-check': ShieldCheck,
  users: Users,
  lightbulb: Lightbulb,
  star: Star,
  'chevron-right': ChevronRight,
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName | string;
  className?: string;
  size?: number;
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
  const Component = iconMap[name as IconName];
  if (!Component) return null;
  return <Component className={className} size={size} strokeWidth={1.5} />;
}
