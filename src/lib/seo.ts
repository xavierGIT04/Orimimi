import type { Metadata } from 'next';
import { site, services, type ServiceSlug } from './site';
import { serviceDetails } from '@/content/services-content';
import { faqs } from '@/content/faq';

export function serviceMetadata(slug: ServiceSlug): Metadata {
  const d = serviceDetails[slug];
  const url = `/services/${slug}`;
  return {
    title: d.metaTitle,
    description: d.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: d.metaTitle, description: d.metaDescription, url, type: 'website' },
  };
}

export function serviceJsonLd(slug: ServiceSlug) {
  const s = services.find((x) => x.slug === slug)!;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: serviceDetails[slug].metaDescription,
    url: `${site.url}/services/${slug}`,
    areaServed: site.cities.map((name) => ({ '@type': 'City', name })),
    provider: { '@type': 'HomeAndConstructionBusiness', name: site.name, url: site.url },
  };
}

export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: { '@type': 'PostalAddress', addressLocality: site.baseCity, addressRegion: 'Auvergne-Rhône-Alpes', addressCountry: 'FR' },
    image: `${site.url}/images/logo.jpeg`,
    areaServed: site.cities.map((name) => ({ '@type': 'City', name })),
  };
}

export function faqJsonLd(slug: ServiceSlug) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs[slug].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
