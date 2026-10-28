import Link from 'next/link';

type Variant = 'primary' | 'accent' | 'outline';

const variants: Record<Variant, string> = {
    primary:
        'bg-primary-700 text-white shadow-md shadow-primary-900/15 hover:bg-primary-800 hover:shadow-xl hover:shadow-primary-900/25',
    accent:
        'bg-accent-400 text-primary-900 shadow-md shadow-accent-600/20 hover:bg-accent-300 hover:shadow-xl hover:shadow-accent-600/30',
    outline:
        'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 hover:shadow-lg hover:shadow-primary-900/10',
};

type Props = {
    variant?: Variant;
    href?: string;
    className?: string;
    children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

export function Button({ variant = 'primary', href, className = '', children, ...rest }: Props) {
    const classes = `group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold
    transition-[transform,box-shadow,background-color] duration-300 ease-out-expo
    hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50
    ${variants[variant]} ${className}`;

    const content = (
        <>
            {variant !== 'outline' && (
                <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/30 transition-transform duration-700 ease-out-expo group-hover:translate-x-[500%]"
                />
            )}
            {children}
        </>
    );

    if (href) return <Link href={href} className={classes}>{content}</Link>;
    return <button className={classes} {...rest}>{content}</button>;
}
