import Link from 'next/link';
import { services } from '@/lib/site';
import { ServiceIcon } from '@/components/ui/ServiceIcon';
import { StaggerList, StaggerItem } from '@/components/motion/Reveal';

export function ServicesList() {
    return (
        <StaggerList className="divide-y divide-primary-100 border-y border-primary-100">
            {services.map((s) => (
                <StaggerItem key={s.slug}>
                    <Link
                        href={`/services/${s.slug}`}
                        className="group relative isolate grid items-center gap-4 px-2 py-7 md:grid-cols-[auto_1fr_1.5fr_auto] md:gap-8 md:px-4"
                    >
                        {/* Voile qui se déploie au survol */}
                        <span
                            aria-hidden
                            className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-2xl bg-gradient-to-r from-primary-50 via-primary-50/60 to-transparent transition-transform duration-500 ease-out-expo group-hover:scale-x-100"
                        />
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-[transform,background-color,color] duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-accent-400 group-hover:text-primary-900">
              <ServiceIcon slug={s.slug} className="h-7 w-7" />
            </span>
                        <span className="text-2xl font-bold text-primary-800 transition-transform duration-500 ease-out-expo group-hover:translate-x-1">
              {s.name}
            </span>
                        <span className="text-primary-900/80">{s.short}</span>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                            className="hidden h-6 w-6 -translate-x-2 text-primary-700 opacity-0 transition-[transform,opacity] duration-500 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100 md:block"
                        >
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </Link>
                </StaggerItem>
            ))}
        </StaggerList>
    );
}
