import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { zones } from '@/content/zones';
import { businessJsonLd } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/ui/JsonLd';
import { WaveDivider } from '@/components/ui/WaveDivider';
import { ServicesList } from '@/components/services/ServicesList';
import { Reveal, StaggerList, StaggerItem, DrawLine } from '@/components/motion/Reveal';
import { ParallaxMedia } from '@/components/motion/ParallaxMedia';

const leaf = 'rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl';

const etapes: [string, string][] = [
    ['Échange', 'Vous décrivez votre projet via le formulaire ou par téléphone.'],
    ['Devis', 'Nous étudions votre demande et vous remettons un devis détaillé.'],
    ['Travaux', 'Le chantier est réalisé avec soin, dans les délais convenus.'],
    ['Réception', 'Nous vérifions ensemble le résultat et levons les éventuelles réserves.'],
];

export default function HomePage() {
    return (
        <>
            <JsonLd data={businessJsonLd()} />

            <section className="relative overflow-hidden bg-cream">
                {/* Halos décoratifs : seul transform est animé */}
                <div aria-hidden className="pointer-events-none absolute -left-40 -top-32 h-[28rem] w-[28rem] animate-drift rounded-full bg-accent-300/40 blur-3xl motion-reduce:animate-none" />
                <div aria-hidden className="pointer-events-none absolute -bottom-40 right-0 h-[24rem] w-[24rem] animate-drift rounded-full bg-primary-200/50 blur-3xl [animation-delay:-8s] motion-reduce:animate-none" />

                <Container className="relative grid items-center gap-14 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pb-24 md:pt-16">
                    <div>
                        <Reveal immediate>
                            <p className="font-script text-3xl text-primary-600">{site.tagline}</p>
                        </Reveal>
                        <Reveal immediate delay={0.1}>
                            <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-primary-800 md:text-6xl">
                                Rénovation et aménagement de votre <span className="text-primary-600">maison ou appartement</span>
                            </h1>
                        </Reveal>
                        <Reveal immediate delay={0.2}>
                            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-900/80">
                                Du gros chantier aux finitions, un seul interlocuteur pour donner vie à vos projets.
                            </p>
                        </Reveal>
                        <Reveal immediate delay={0.3}>
                            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-primary-800">
                                {['Maison', 'Appartement', 'Intérieur', 'Extérieur'].map((t) => (
                                    <li key={t} className="flex items-center gap-2">
                                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-9 flex flex-wrap gap-3">
                                <Button href="/devis">Demander un devis gratuit</Button>
                                <Button href="/services" variant="outline">Découvrir nos services</Button>
                            </div>
                        </Reveal>
                    </div>

                    <div className="relative">
                        <div aria-hidden className={`absolute -right-3 -top-3 h-full w-full bg-accent-300/60 ${leaf}`} />
                        <div className={`relative aspect-[4/3] overflow-hidden shadow-2xl shadow-primary-900/20 md:aspect-[4/5] ${leaf}`}>
                            {/* Pas d'animation d'opacité sur l'image LCP : seulement un dézoom en transform */}
                            <ParallaxMedia>
                                <Image
                                    src="/images/hero.jpeg"
                                    alt="Maison contemporaine en cours de rénovation avec casque de chantier et plans"
                                    fill
                                    priority
                                    sizes="(min-width: 768px) 45vw, 100vw"
                                    className="animate-hero-zoom object-cover object-[88%_50%]"
                                />
                            </ParallaxMedia>
                        </div>
                        {/* Badge en verre, flottant */}
                        <div className="absolute -bottom-6 left-4 right-4 animate-float rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl shadow-primary-900/10 backdrop-blur-md motion-reduce:animate-none md:-left-8 md:right-auto md:max-w-[18rem]">
                            <div className="flex items-start gap-3">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary-700">
                                    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                                    <circle cx="12" cy="10" r="2.5" />
                                </svg>
                                <p className="text-sm text-primary-900">
                                    <span className="block font-semibold text-primary-800">Nous intervenons à</span>
                                    {zones.map((z) => z.name).join(', ')} et alentours
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <WaveDivider className="text-cream" />

            <section>
                <Container className="pb-16 pt-14 md:pb-24">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-primary-800">Nos quatre domaines d’intervention</h2>
                    </Reveal>
                    <div className="mt-10"><ServicesList /></div>
                </Container>
            </section>

            <section className="bg-cream">
                <Container className="py-16 md:py-24">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-primary-800">Comment ça se passe</h2>
                    </Reveal>
                    <StaggerList as="ol" className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {etapes.map(([t, d], i) => (
                            <StaggerItem key={t} className="relative pt-5">
                                <DrawLine className="absolute inset-x-0 top-0 h-0.5 bg-primary-300" />
                                <span className="font-script text-5xl leading-none text-accent-600">{i + 1}</span>
                                <h3 className="mt-2 text-lg font-semibold text-primary-800">{t}</h3>
                                <p className="mt-2 text-primary-900/80">{d}</p>
                            </StaggerItem>
                        ))}
                    </StaggerList>
                </Container>
            </section>

            <section>
                <Container className="py-16">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-primary-800">Où intervenons-nous ?</h2>
                        <p className="mt-3 max-w-2xl text-primary-900/80">
                            Basés à {site.baseCity}, dans l’Ain, nous intervenons à Lyon, Grenoble, Chambéry et dans les environs.
                        </p>
                    </Reveal>
                    <StaggerList className="mt-6 flex flex-wrap gap-3">
                        {zones.map((z) => (
                            <StaggerItem key={z.slug}>
                                <Link
                                    href={`/zones/${z.slug}`}
                                    className="inline-block rounded-full border border-primary-200 px-5 py-2 font-medium text-primary-800
                    transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out-expo
                    hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-50 hover:shadow-md hover:shadow-accent-600/10 active:scale-95"
                                >
                                    {z.name}
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerList>
                </Container>
            </section>

            <WaveDivider flip className="text-primary-800" />
            <section className="relative isolate overflow-hidden bg-primary-800 text-white">
                <div aria-hidden className="absolute -right-24 -top-20 -z-10 h-80 w-80 animate-drift rounded-full bg-accent-400/25 blur-3xl motion-reduce:animate-none" />
                <div aria-hidden className="absolute -bottom-24 -left-24 -z-10 h-64 w-64 animate-drift rounded-full bg-primary-500/40 blur-3xl [animation-delay:-10s] motion-reduce:animate-none" />
                <Container className="flex flex-col items-start gap-6 pb-14 pt-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Parlons de votre projet</h2>
                        <p className="mt-1 text-primary-100">Un devis gratuit, sans engagement.</p>
                    </div>
                    <Button href="/devis" variant="accent">Demander un devis gratuit</Button>
                </Container>
            </section>
        </>
    );
}
