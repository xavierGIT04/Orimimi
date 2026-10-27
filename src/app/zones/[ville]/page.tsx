import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { zones } from '@/content/zones';
import { services, site } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

type Props = { params: Promise<{ ville: string }> };

export function generateStaticParams() {
  return zones.map((z) => ({ ville: z.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville } = await params;
  const z = zones.find((x) => x.slug === ville);
  if (!z) return {};
  const title = `Rénovation et aménagement à ${z.name}`;
  const description = `Rénovation, finitions, peinture et rénovation énergétique à ${z.name} (${z.dept}) : demandez votre devis gratuit auprès de ${site.name}.`;
  return { title, description, alternates: { canonical: `/zones/${z.slug}` }, openGraph: { title, description, url: `/zones/${z.slug}` } };
}

export default async function ZonePage({ params }: Props) {
  const { ville } = await params;
  const z = zones.find((x) => x.slug === ville);
  if (!z) notFound();

  return (
    <>
      <section className="bg-cream">
        <Container className="max-w-4xl py-16 md:py-24">
          <p className="font-script text-2xl text-primary-600">{z.name} · {z.dept}</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-primary-800 md:text-5xl">
            Rénovation et aménagement à {z.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-900/80">{z.intro}</p>
          <Button href={`/devis?ville=${z.slug}`} className="mt-8">Demander un devis à {z.name}</Button>
        </Container>
      </section>

      <section>
        <Container className="max-w-4xl py-16">
          <h2 className="text-2xl font-bold text-primary-800">Nos services à {z.name}</h2>
          <ul className="mt-6 divide-y divide-primary-100 border-y border-primary-100">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="grid gap-1 py-5 hover:text-accent-600 md:grid-cols-[1fr_1.5fr] md:gap-8">
                  <span className="font-semibold text-primary-800">{s.name}</span>
                  <span className="text-primary-900/80">{s.short}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-2xl leading-relaxed text-primary-900/80">{z.angle}</p>
        </Container>
      </section>
    </>
  );
}
