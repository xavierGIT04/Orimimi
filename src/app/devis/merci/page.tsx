import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Demande envoyée", robots: { index: false, follow: false } };

export default function MerciPage() {
  return (
    <Container className="max-w-2xl py-20 text-center">
      <p className="font-script text-3xl text-primary-600">Merci !</p>
      <h1 className="mt-2 text-3xl font-bold text-primary-800">Votre demande a bien été envoyée</h1>
      <p className="mt-4 text-primary-900/80">Nous l’étudions et revenons vers vous rapidement pour échanger sur votre projet.</p>
      <Button href="/" className="mt-8">Retour à l’accueil</Button>
    </Container>
  );
}
