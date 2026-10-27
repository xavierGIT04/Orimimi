import { z } from "zod";
import { services } from "@/lib/site";

const slugs = services.map((s) => s.slug) as unknown as [string, ...string[]];

export const BIENS = [
  { value: "maison", label: "Maison" },
  { value: "appartement", label: "Appartement" },
] as const;
export const ZONES = [
  { value: "interieur", label: "Intérieur" },
  { value: "exterieur", label: "Extérieur" },
  { value: "les-deux", label: "Intérieur et extérieur" },
] as const;
export const DELAIS = [
  { value: "urgent", label: "Dès que possible" },
  { value: "1-3-mois", label: "Sous 1 à 3 mois" },
  { value: "3-6-mois", label: "Dans 3 à 6 mois" },
  { value: "flexible", label: "Pas de date précise" },
] as const;

export const serviceStep = z.object({
  services: z.array(z.enum(slugs)).min(1, "Choisissez au moins un service"),
});

export const projetStep = z.object({
  bien: z.enum(["maison", "appartement"]),
  zone: z.enum(["interieur", "exterieur", "les-deux"]),
  ville: z.string().trim().min(2, "Indiquez la ville du chantier").max(80),
  surface: z.string().trim().max(20).optional(),
  delai: z.enum(["urgent", "1-3-mois", "3-6-mois", "flexible"]),
  description: z.string().trim().min(10, "Décrivez votre projet en quelques mots (10 caractères minimum)").max(2000),
});

export const contactStep = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom").max(100),
  email: z.string().trim().email("Adresse e-mail invalide"),
  telephone: z.string().trim().min(8, "Numéro invalide").max(20, "Numéro invalide").regex(/^[0-9 +().-]+$/, "Numéro invalide"),
  consentement: z.boolean().refine((v) => v === true, "Votre accord est nécessaire pour traiter votre demande"),
  website: z.string().max(0).optional(), // honeypot : doit rester vide
});

export const devisSchema = z.object({ ...serviceStep.shape, ...projetStep.shape, ...contactStep.shape });
export type DevisValues = z.infer<typeof devisSchema>;
