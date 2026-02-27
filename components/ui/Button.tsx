'use client';

import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'gold' | 'outline-gold' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  gold: 'btn-gold',
  'outline-gold': 'btn-outline-gold',
  ghost: 'border border-[rgba(201,162,39,0.3)] text-[#c9a227] hover:bg-[rgba(201,162,39,0.1)]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'gold', href, children, className = '', asChild, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c9a227] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02] ' +
      variantClasses[variant] +
      ' ' +
      className;

    if (href) {
      return (
        <Link href={href} className={base}>
          {children}
        </Link>
      );
    }

    const { type = 'button', ...rest } = props;
    return (
      <button ref={ref} type={type} className={base} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
