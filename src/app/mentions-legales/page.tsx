import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false } };

// Les champs [À COMPLÉTER] doivent être renseignés avant la mise en ligne.
export default function MentionsPage() {
  return (
    <Container className="max-w-3xl py-16">
      <h1 className="text-3xl font-bold text-primary-800">Mentions légales</h1>
      <div className="mt-8 space-y-8 leading-relaxed text-primary-900/90">
        <section>
          <h2 className="text-xl font-semibold text-primary-800">Éditeur du site</h2>
          <p className="mt-2">
            {site.name} — [À COMPLÉTER : forme juridique et capital]<br />
            Siège social : [À COMPLÉTER : adresse], {site.baseCity}<br />
            SIRET : [À COMPLÉTER]<br />
            E-mail : {site.email} — Téléphone : {site.phone}<br />
            Directeur de la publication : [À COMPLÉTER]
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-primary-800">Hébergement</h2>
          <p className="mt-2">[À COMPLÉTER : nom, adresse et contact de l’hébergeur]</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-primary-800">Données personnelles</h2>
          <p className="mt-2">
            Les informations saisies dans le formulaire de devis (nom, e-mail, téléphone, description du projet) sont
            utilisées uniquement pour répondre à votre demande. Elles ne sont pas enregistrées sur le site et sont
            transmises par e-mail à {site.name}. Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la
            suppression de vos données en écrivant à {site.email}.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-primary-800">Propriété intellectuelle</h2>
          <p className="mt-2">Les textes, images et logos du site sont la propriété de {site.name}. Toute reproduction sans autorisation est interdite.</p>
        </section>
      </div>
    </Container>
  );
}
