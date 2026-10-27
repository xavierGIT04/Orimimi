export function StepIndicator({ titles, current }: { titles: string[]; current: number }) {
  return (
    <ol className="flex gap-2" aria-label="Progression du formulaire">
      {titles.map((t, i) => (
        <li key={t} className="flex-1" aria-current={i === current ? "step" : undefined}>
          <div className={`h-1.5 rounded-full ${i <= current ? "bg-primary-700" : "bg-primary-100"}`} />
          <p className={`mt-2 hidden text-xs sm:block ${i === current ? "font-semibold text-primary-800" : "text-primary-900/60"}`}>{i + 1}. {t}</p>
        </li>
      ))}
    </ol>
  );
}
