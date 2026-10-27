import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${site.name} pour votre projet de rénovation à Oyonnax, Lyon, Grenoble, Chambéry et alentours.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container className="max-w-3xl py-16 md:py-24">
      <h1 className="text-3xl font-bold text-primary-800 md:text-5xl">Contact</h1>
      <p className="mt-4 text-lg text-primary-900/80">Une question, un projet ? Écrivez-nous ou appelez-nous.</p>
      <dl className="mt-10 divide-y divide-primary-100 border-y border-primary-100">
        <div className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr]">
          <dt className="text-primary-900/60">E-mail</dt>
          <dd><a href={`mailto:${site.email}`} className="font-semibold text-primary-800 hover:text-accent-600">{site.email}</a></dd>
        </div>
        <div className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr]">
          <dt className="text-primary-900/60">Téléphone</dt>
          <dd><a href={site.phoneHref} className="font-semibold text-primary-800 hover:text-accent-600">{site.phone}</a></dd>
        </div>
        <div className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr]">
          <dt className="text-primary-900/60">Zone d’intervention</dt>
          <dd className="text-primary-900">{site.areaServed}</dd>
        </div>
      </dl>
      <div className="mt-10"><Button href="/devis">Demander un devis gratuit</Button></div>
    </Container>
  );
}
