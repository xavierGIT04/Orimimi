import type { ServiceSlug } from '@/lib/site';

// Textes provisoires : à relire et adapter avec le vrai savoir-faire de l'entreprise.
type Detail = {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  prestations: string[];
};

export const serviceDetails: Record<ServiceSlug, Detail> = {
  'renovation-generale': {
    h1: 'Rénovation générale de maison et d’appartement',
    metaTitle: 'Rénovation générale maison et appartement',
    metaDescription:
      'Rénovation complète de votre maison ou appartement, intérieur et extérieur, à Oyonnax, Lyon, Grenoble et Chambéry. Demandez votre devis gratuit.',
    intro:
      'Un seul interlocuteur pour transformer votre logement de A à Z : de la préparation du chantier jusqu’aux finitions, en maison comme en appartement.',
    prestations: [
      'Rénovation complète d’un logement',
      'Redistribution et création de cloisons',
      'Remise à neuf des sols et des murs',
      'Réfection de salle de bain et de cuisine',
      'Rénovation de façade et d’espaces extérieurs',
    ],
  },
  'travaux-de-finition': {
    h1: 'Travaux de finition intérieurs et extérieurs',
    metaTitle: 'Travaux de finition maison et appartement',
    metaDescription:
      'Travaux de finition soignés : sols, plinthes, joints, menuiseries et retouches, en intérieur comme en extérieur, à Oyonnax, Lyon, Grenoble et Chambéry.',
    intro:
      'Ce sont les finitions qui donnent au chantier son allure définitive. Nous soignons chaque détail pour un résultat net et durable.',
    prestations: [
      'Pose de plinthes, moulures et habillages',
      'Joints, calfeutrements et raccords',
      'Reprise et ajustement de menuiseries',
      'Pose de revêtements de sol',
      'Retouches et levée de réserves en fin de chantier',
    ],
  },
  'peinture-et-deco': {
    h1: 'Peinture et décoration intérieure et extérieure',
    metaTitle: 'Peinture et décoration maison et appartement',
    metaDescription:
      'Peinture intérieure et extérieure, enduits et décoration pour rafraîchir votre maison ou appartement. Devis gratuit à Oyonnax, Lyon, Grenoble et Chambéry.',
    intro:
      'Une nouvelle couleur change une pièce. Nous préparons les supports, vous conseillons sur les teintes et appliquons la peinture avec soin.',
    prestations: [
      'Peinture des murs et plafonds',
      'Préparation des supports : rebouchage, enduit, ponçage',
      'Peinture de façade et de boiseries extérieures',
      'Papier peint et revêtements muraux',
      'Conseil en couleurs et décoration',
    ],
  },
  'renovation-energetique': {
    h1: 'Rénovation énergétique de votre logement',
    metaTitle: 'Rénovation énergétique maison et appartement',
    metaDescription:
      'Isolation et amélioration du confort thermique de votre maison ou appartement pour réduire vos consommations. Devis gratuit à Oyonnax, Lyon, Grenoble et Chambéry.',
    intro:
      'Mieux isoler, c’est vivre plus confortablement toute l’année et dépenser moins en chauffage. Nous vous aidons à choisir les travaux les plus utiles.',
    prestations: [
      'Isolation des murs, combles et planchers',
      'Remplacement de fenêtres et de portes',
      'Amélioration de la ventilation',
      'Traitement des ponts thermiques',
      'Conseils pour préparer vos démarches d’aides',
    ],
  },
};
