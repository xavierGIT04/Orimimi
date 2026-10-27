import Link from 'next/link';

type Variant = 'primary' | 'accent' | 'outline';

const variants: Record<Variant, string> = {
  primary: 'bg-primary-700 text-white hover:bg-primary-800',
  accent: 'bg-accent-400 text-primary-900 hover:bg-accent-300',
  outline: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-50',
};

type Props = {
  variant?: Variant;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export function Button({ variant = 'primary', href, className = '', children, ...rest }: Props) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors disabled:opacity-50 ${variants[variant]} ${className}`;
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button className={classes} {...rest}>{children}</button>;
}
