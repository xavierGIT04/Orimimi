import type { Metadata } from "next";
import { ServicesList } from "@/components/services/ServicesList";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Nos services de rénovation et d’aménagement",
  description: "Rénovation générale, travaux de finition, peinture et déco, rénovation énergétique : découvrez nos services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <Container className="py-16 md:py-24">
      <h1 className="text-3xl font-bold text-primary-800 md:text-5xl">Nos services</h1>
      <p className="mt-4 max-w-2xl text-lg text-primary-900/80">
        Maison ou appartement, intérieur ou extérieur : quatre domaines d’intervention, un seul interlocuteur.
      </p>
      <div className="mt-12"><ServicesList /></div>
    </Container>
  );
}
