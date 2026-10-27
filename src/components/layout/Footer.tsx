import Link from 'next/link';
import { site, services } from '@/lib/site';
import { zones } from '@/content/zones';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-primary-800 text-primary-50">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-1 font-script text-2xl text-accent-300">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-primary-100">{site.description}</p>
        </div>

        <nav aria-label="Nos services">
          <p className="font-semibold text-white">Nos services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-primary-100 hover:text-accent-300">{s.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Zones d’intervention">
          <p className="font-semibold text-white">Où intervenons-nous</p>
          <ul className="mt-3 space-y-2 text-sm">
            {zones.map((z) => (
              <li key={z.slug}>
                <Link href={`/zones/${z.slug}`} className="text-primary-100 hover:text-accent-300">{z.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold text-white">Nous contacter</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-100">
            <li><a href={`mailto:${site.email}`} className="hover:text-accent-300">{site.email}</a></li>
            <li><a href={site.phoneHref} className="hover:text-accent-300">{site.phone}</a></li>
            <li>Interventions : {site.areaServed}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-primary-700">
        <Container className="flex flex-col gap-2 py-5 text-xs text-primary-200 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <Link href="/mentions-legales" className="hover:text-accent-300">Mentions légales</Link>
        </Container>
      </div>
    </footer>
  );
}
