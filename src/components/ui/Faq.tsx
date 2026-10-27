import type { Faq } from '@/content/faq';

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-primary-100 border-y border-primary-100">
      {items.map((f) => (
        <details key={f.q} className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary-800">
            {f.q}
            <span aria-hidden className="text-xl text-accent-600 transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 max-w-2xl text-primary-900/80">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
