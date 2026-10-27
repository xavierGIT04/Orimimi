import Link from 'next/link';
import { services } from '@/lib/site';
import { ServiceIcon } from '@/components/ui/ServiceIcon';

export function ServicesList() {
  return (
    <ul className="divide-y divide-primary-100 border-y border-primary-100">
      {services.map((s) => (
        <li key={s.slug}>
          <Link
            href={`/services/${s.slug}`}
            className="group grid items-center gap-4 py-7 md:grid-cols-[auto_1fr_1.5fr] md:gap-8"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors group-hover:bg-accent-400 group-hover:text-primary-900">
              <ServiceIcon slug={s.slug} className="h-7 w-7" />
            </span>
            <span className="text-2xl font-bold text-primary-800 group-hover:text-primary-600">{s.name}</span>
            <span className="text-primary-900/80">{s.short}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
