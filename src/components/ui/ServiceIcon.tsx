import type { ServiceSlug } from '@/lib/site';

const icons: Record<ServiceSlug, React.ReactNode> = {
  'renovation-generale': <path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6" />,
  'travaux-de-finition': (
    <>
      <rect x="3" y="9" width="18" height="6" rx="1" />
      <path d="M7 9v3M11 9v2M15 9v3M19 9v2" />
    </>
  ),
  'peinture-et-deco': (
    <>
      <rect x="4" y="3" width="14" height="5" rx="1.5" />
      <path d="M18 5.5h2v5H11v3" />
      <rect x="9" y="13.5" width="4" height="7" rx="1" />
    </>
  ),
  'renovation-energetique': <path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14zM5 19c3-5 6-8 10-10" />,
};

export function ServiceIcon({ slug, className = 'h-6 w-6' }: { slug: ServiceSlug; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {icons[slug]}
    </svg>
  );
}
