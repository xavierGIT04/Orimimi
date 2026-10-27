// Pages locales. Textes provisoires : à enrichir avec de vrais détails locaux (quartiers, chantiers réalisés).
export const zones = [
  {
    slug: 'oyonnax',
    name: 'Oyonnax',
    dept: 'Ain',
    intro:
      'Basés à Oyonnax, nous rénovons et aménageons maisons et appartements de la ville et de ses environs, en intérieur comme en extérieur.',
    angle:
      'Être implantés sur place nous permet de réagir vite, de venir évaluer votre chantier et de rester disponibles une fois les travaux terminés.',
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    dept: 'Rhône',
    intro:
      'À Lyon et dans son agglomération, nous intervenons dans des appartements comme dans des maisons pour des rénovations complètes ou ciblées.',
    angle:
      'En appartement, nous tenons compte des contraintes d’immeuble (accès, voisinage, règlement de copropriété) pour organiser le chantier sereinement.',
  },
  {
    slug: 'grenoble',
    name: 'Grenoble',
    dept: 'Isère',
    intro:
      'Dans la région grenobloise, nous accompagnons les propriétaires pour rénover, redécorer et améliorer le confort de leur logement.',
    angle:
      'Avec des hivers souvent marqués, l’isolation et le confort thermique sont des sujets que nous abordons dès l’étude de votre projet.',
  },
  {
    slug: 'chambery',
    name: 'Chambéry',
    dept: 'Savoie',
    intro:
      'À Chambéry et aux alentours, nous réalisons vos travaux de rénovation, de finition et de peinture dans des maisons et appartements.',
    angle:
      'Nous adaptons les matériaux et les techniques au climat local et aux spécificités de votre logement, ancien ou récent.',
  },
] as const;

export type Zone = (typeof zones)[number];
