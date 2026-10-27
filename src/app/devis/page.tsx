import type { Metadata } from "next";
import { DevisWizard } from "@/components/devis/DevisWizard";
import { Container } from "@/components/ui/Container";
import { services, site, type ServiceSlug } from "@/lib/site";
import { zones } from "@/content/zones";

export const metadata: Metadata = {
  title: "Demander un devis gratuit",
  description: "Décrivez votre projet de rénovation ou d’aménagement en quelques minutes et recevez un devis gratuit.",
  alternates: { canonical: "/devis" },
};

export default async function DevisPage({ searchParams }: { searchParams: Promise<{ service?: string; ville?: string }> }) {
  const { service, ville } = await searchParams;
  const initialService = services.find((s) => s.slug === service)?.slug as ServiceSlug | undefined;

  return (
    <Container className="max-w-3xl py-14 md:py-20">
      <h1 className="text-3xl font-bold text-primary-800 md:text-4xl">Demander un devis gratuit</h1>
      <p className="mt-3 text-primary-900/80">
        Quatre étapes rapides. Nous intervenons à {site.areaServed}.
      </p>
      <div className="mt-10"><DevisWizard initialService={initialService} initialVille={zones.find((z) => z.slug === ville)?.name} /></div>
    </Container>
  );
}
