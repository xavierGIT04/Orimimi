// Ajoutez ici vos chantiers au fil du temps. Tant que la liste est vide, la page /realisations
// n'existe pas (404), n'apparaît pas dans le menu et n'est pas dans le sitemap.
//
// Exemple :
// { slug: 'salon-lyon', title: 'Rénovation d’un salon', ville: 'Lyon', service: 'Peinture & déco',
//   description: 'Peinture, pose de plinthes et reprise des murs.',
//   image: '/images/realisations/salon-lyon.jpg', alt: 'Salon rénové à Lyon' },
export type Realisation = {
  slug: string;
  title: string;
  ville: string;
  service: string;
  description: string;
  image: string;
  alt: string;
};

export const realisations: Realisation[] = [];
