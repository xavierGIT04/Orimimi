import Link from 'next/link';
import { services, type ServiceSlug } from '@/lib/site';
import { serviceDetails } from '@/content/services-content';
import { serviceJsonLd, faqJsonLd } from '@/lib/seo';
import { faqs } from '@/content/faq';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { FaqList } from '@/components/ui/Faq';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { Reveal, StaggerList, StaggerItem } from '@/components/motion/Reveal';

export function ServiceLayout({ slug }: { slug: ServiceSlug }) {
    const d = serviceDetails[slug];
    const others = services.filter((s) => s.slug !== slug);

    return (
        <>
            <JsonLd data={serviceJsonLd(slug)} />
            <JsonLd data={faqJsonLd(slug)} />

            <section className="relative overflow-hidden bg-cream">
                <div aria-hidden className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 animate-drift rounded-full bg-accent-300/40 blur-3xl motion-reduce:animate-none" />
                <Container className="relative py-16 md:py-24">
                    <Reveal immediate>
                        <p className="flex items-center gap-3 font-script text-2xl text-primary-600">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm">
                <ServiceIcon slug={slug} className="h-6 w-6" />
              </span>
                            {services.find((s) => s.slug === slug)!.name}
                        </p>
                    </Reveal>
                    <Reveal immediate delay={0.1}>
                        <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-primary-800 md:text-5xl">{d.h1}</h1>
                    </Reveal>
                    <Reveal immediate delay={0.2}>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-900/80">{d.intro}</p>
                        <Button href={`/devis?service=${slug}`} className="mt-8">Demander un devis gratuit</Button>
                    </Reveal>
                </Container>
            </section>
            <WaveDivider className="text-cream" />

            <section>
                <Container className="grid gap-12 py-16 md:grid-cols-[1fr_1.4fr]">
                    <Reveal>
                        <h2 className="text-2xl font-bold text-primary-800">Ce que nous réalisons</h2>
                    </Reveal>
                    <StaggerList className="divide-y divide-primary-100 border-y border-primary-100">
                        {d.prestations.map((p) => (
                            <StaggerItem key={p} className="flex gap-4 py-4">
                                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-500" />
                                <span className="text-primary-900">{p}</span>
                            </StaggerItem>
                        ))}
                    </StaggerList>
                </Container>
            </section>

            <section className="bg-cream">
                <Container className="grid gap-10 py-16 md:grid-cols-[1fr_1.4fr]">
                    <Reveal>
                        <h2 className="text-2xl font-bold text-primary-800">Questions fréquentes</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <FaqList items={faqs[slug]} />
                    </Reveal>
                </Container>
            </section>

            <section className="relative isolate overflow-hidden bg-primary-800 text-white">
                <div aria-hidden className="absolute -right-24 -top-20 -z-10 h-80 w-80 animate-drift rounded-full bg-accent-400/25 blur-3xl motion-reduce:animate-none" />
                <div aria-hidden className="absolute -bottom-24 -left-24 -z-10 h-64 w-64 animate-drift rounded-full bg-primary-500/40 blur-3xl [animation-delay:-10s] motion-reduce:animate-none" />
                <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Un projet en tête ?</h2>
                        <p className="mt-1 text-primary-100">Décrivez-le en quelques minutes, nous revenons vers vous avec un devis.</p>
                    </div>
                    <Button href={`/devis?service=${slug}`} variant="accent">Demander un devis gratuit</Button>
                </Container>
            </section>

            <section>
                <Container className="py-14">
                    <h2 className="text-lg font-semibold text-primary-800">Nos autres services</h2>
                    <ul className="mt-4 flex flex-wrap gap-3">
                        {others.map((s) => (
                            <li key={s.slug}>
                                <Link
                                    href={`/services/${s.slug}`}
                                    className="inline-block rounded-full border border-primary-200 px-4 py-2 text-sm text-primary-800
                    transition-[transform,box-shadow,background-color] duration-300 ease-out-expo
                    hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-md hover:shadow-primary-900/10 active:scale-95"
                                >
                                    {s.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>
        </>
    );
}
