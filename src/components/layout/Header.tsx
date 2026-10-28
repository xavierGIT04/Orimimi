import Image from 'next/image';
import Link from 'next/link';
import { site, services } from '@/lib/site';
import { realisations } from '@/content/realisations';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HeaderShell } from './HeaderShell';

const links = [
    { href: '/services', label: 'Services' },
    ...(realisations.length ? [{ href: '/realisations', label: 'Réalisations' }] : []),
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    return (
        <HeaderShell>
            <Container className="flex h-20 items-center justify-between gap-6">
                <Link href="/" aria-label={`${site.name} — accueil`} className="flex items-center gap-3">
                    <Image src="/images/logo-mark.png" alt="" width={764} height={653} priority className="h-11 w-auto" />
                    <span className="leading-tight">
            <span className="block text-xl font-bold tracking-tight text-primary-800">{site.name}</span>
            <span className="hidden text-[11px] text-primary-600 sm:block">{site.tagline}</span>
          </span>
                </Link>

                <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="relative text-sm font-medium text-primary-800 transition-colors hover:text-primary-600
                after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full
                after:bg-accent-500 after:transition-transform after:duration-300 after:ease-out-expo hover:after:scale-x-100"
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Button href="/devis">Demander un devis</Button>
                </nav>

                {/* Menu mobile sans JavaScript : <details> natif */}
                <details className="group relative md:hidden">
                    <summary className="cursor-pointer list-none rounded-full border border-primary-200 px-4 py-2 text-sm font-semibold text-primary-800 transition-transform active:scale-95">
                        Menu
                    </summary>
                    <div className="absolute right-0 mt-2 w-64 origin-top-right rounded-2xl border border-primary-100 bg-white/95 p-4 shadow-xl shadow-primary-900/10 backdrop-blur group-open:animate-menu-in">
                        <ul className="space-y-1">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-50">
                                        {s.name}
                                    </Link>
                                </li>
                            ))}
                            {links.slice(1).map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-primary-50">{l.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <Button href="/devis" className="mt-3 w-full">Demander un devis</Button>
                    </div>
                </details>
            </Container>
        </HeaderShell>
    );
}
