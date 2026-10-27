import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "À propos",
  description: `${site.name} : entreprise de rénovation et d’aménagement basée à Oyonnax, dans l’Ain, intervenant à Lyon, Grenoble, Chambéry et alentours.`,
  alternates: { canonical: "/a-propos" },
};

const valeurs = [
  { t: "Écoute", d: "Nous prenons le temps de comprendre votre projet, vos contraintes et votre budget avant de proposer des solutions." },
  { t: "Soin du détail", d: "Un chantier réussi se juge aux finitions : nous travaillons proprement et vérifions chaque étape." },
  { t: "Transparence", d: "Un devis clair, des délais annoncés et une information régulière tout au long des travaux." },
  { t: "Respect de votre cadre de vie", d: "Nous veillons à limiter les nuisances et laissons le chantier propre à la fin de chaque intervention." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="max-w-3xl py-16 md:py-24">
          <p className="font-script text-3xl text-primary-600">{site.tagline}</p>
          <h1 className="mt-2 text-3xl font-bold text-primary-800 md:text-5xl">Un interlocuteur unique pour vos travaux</h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-900/80">
            {site.name} est basée à {site.baseCity}, dans l’Ain. Nous accompagnons les particuliers dans la rénovation et
            l’aménagement de leur maison ou appartement, en intérieur comme en extérieur, à Lyon, Grenoble, Chambéry et dans les environs.
          </p>
        </Container>
      </section>
      <section>
        <Container className="py-16">
          <h2 className="text-2xl font-bold text-primary-800">Notre façon de travailler</h2>
          <dl className="mt-8 divide-y divide-primary-100 border-y border-primary-100">
            {valeurs.map((v) => (
              <div key={v.t} className="grid gap-2 py-6 md:grid-cols-[1fr_2fr] md:gap-10">
                <dt className="text-lg font-semibold text-primary-800">{v.t}</dt>
                <dd className="text-primary-900/80">{v.d}</dd>
              </div>
            ))}
          </dl>
          <Button href="/devis" className="mt-10">Demander un devis gratuit</Button>
        </Container>
      </section>
    </>
  );
}
