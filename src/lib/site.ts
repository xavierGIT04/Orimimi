// Source unique des informations de l'entreprise : remplace les valeurs factices ici.
export const site = {
  name: 'Orimimi Rénov',
  tagline: 'Vos projets, notre savoir-faire',
  description:
    'Rénovation et aménagement de maisons et appartements, intérieur et extérieur, à Oyonnax (Ain), Lyon, Grenoble, Chambéry et alentours.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'contact@orimimi-renov.fr', // factice
  phone: '01 23 45 67 89', // factice
  phoneHref: 'tel:+33123456789', // factice
  areaServed: 'Oyonnax (Ain), Lyon, Grenoble, Chambéry et alentours',
  baseCity: 'Oyonnax',
  cities: ['Oyonnax', 'Lyon', 'Grenoble', 'Chambéry'],
} as const;

export const services = [
  {
    slug: 'renovation-generale',
    name: 'Rénovation générale',
    short: 'Remise à neuf complète de votre maison ou appartement, du gros œuvre aux finitions.',
  },
  {
    slug: 'travaux-de-finition',
    name: 'Travaux de finition',
    short: 'Les détails qui font la différence : sols, cloisons, menuiseries, joints et retouches.',
  },
  {
    slug: 'peinture-et-deco',
    name: 'Peinture & déco',
    short: 'Peinture intérieure et extérieure, enduits et décoration pour renouveler vos pièces.',
  },
  {
    slug: 'renovation-energetique',
    name: 'Rénovation énergétique',
    short: 'Isolation et amélioration du confort thermique pour réduire vos factures.',
  },
] as const;

export type ServiceSlug = (typeof services)[number]['slug'];
