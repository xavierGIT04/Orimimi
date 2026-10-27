import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { realisations } from '@/content/realisations';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description: 'Découvrez nos chantiers de rénovation et d’aménagement.',
  alternates: { canonical: '/realisations' },
};

export default function RealisationsPage() {
  if (realisations.length === 0) notFound();
  return (
    <Container className="py-16 md:py-24">
      <h1 className="text-3xl font-bold text-primary-800 md:text-5xl">Nos réalisations</h1>
      <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {realisations.map((r) => (
          <li key={r.slug}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={r.image} alt={r.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
            </div>
            <h2 className="mt-4 font-semibold text-primary-800">{r.title}</h2>
            <p className="text-sm text-primary-900/60">{r.service} · {r.ville}</p>
            <p className="mt-2 text-primary-900/80">{r.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
