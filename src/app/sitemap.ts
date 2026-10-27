import type { MetadataRoute } from 'next';
import { site, services } from '@/lib/site';
import { zones } from '@/content/zones';
import { realisations } from '@/content/realisations';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/devis', '/a-propos', '/contact', ...(realisations.length ? ['/realisations'] : [])];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.9 })),
    ...zones.map((z) => ({ url: `${site.url}/zones/${z.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
  ];
}
