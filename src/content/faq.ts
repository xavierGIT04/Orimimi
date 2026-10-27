import type { ServiceSlug } from '@/lib/site';

export type Faq = { q: string; a: string };

// Réponses volontairement prudentes (pas de prix ni de délai chiffré) : à valider avec l'entreprise.
export const faqs: Record<ServiceSlug, Faq[]> = {
  'renovation-generale': [
    { q: 'Faut-il quitter le logement pendant les travaux ?', a: 'Cela dépend de l’ampleur du chantier. Nous en discutons avec vous au moment du devis et organisons les travaux par phases lorsque c’est possible.' },
    { q: 'Intervenez-vous en appartement comme en maison ?', a: 'Oui. En appartement, nous prenons en compte les contraintes de l’immeuble (accès, voisinage, règlement de copropriété).' },
    { q: 'Comment obtenir un devis ?', a: 'Remplissez le formulaire de devis en quelques minutes : nous revenons vers vous pour préciser votre projet.' },
  ],
  'travaux-de-finition': [
    { q: 'Intervenez-vous seulement en fin de chantier ?', a: 'Non. Nous intervenons aussi dans un logement déjà habité, pour des retouches, des remplacements ou des améliorations ponctuelles.' },
    { q: 'Puis-je combiner les finitions avec de la peinture ?', a: 'Oui, c’est même conseillé : coordonner les deux permet un résultat plus net et un chantier plus fluide.' },
  ],
  'peinture-et-deco': [
    { q: 'Faut-il vider les pièces avant votre passage ?', a: 'Il est préférable de dégager au maximum. Les meubles restants et les sols sont protégés pendant les travaux.' },
    { q: 'Qui choisit les couleurs ?', a: 'Vous, avec nos conseils. Les teintes et les finitions retenues sont précisées dans le devis.' },
    { q: 'Peut-on peindre l’extérieur en toute saison ?', a: 'La météo influence la peinture extérieure. Nous planifions l’intervention selon la période et l’état des supports.' },
  ],
  'renovation-energetique': [
    { q: 'Par quels travaux commencer ?', a: 'Cela dépend de votre logement. L’échange sur votre projet permet de repérer les travaux les plus utiles pour votre confort et vos consommations.' },
    { q: 'Pouvez-vous m’aider pour les aides financières ?', a: 'Nous pouvons vous orienter, mais les conditions dépendent de votre situation et évoluent régulièrement : renseignez-vous aussi auprès des organismes officiels.' },
  ],
};
