export function StepIndicator({ titles, current }: { titles: string[]; current: number }) {
    return (
        <ol className="flex gap-2" aria-label="Progression du formulaire">
            {titles.map((t, i) => (
                <li key={t} className="flex-1" aria-current={i === current ? "step" : undefined}>
                    <div className="h-1.5 overflow-hidden rounded-full bg-primary-100">
                        <div
                            className={`h-full origin-left rounded-full bg-primary-700 transition-transform duration-500 ease-out-expo ${
                                i <= current ? "scale-x-100" : "scale-x-0"
                            }`}
                        />
                    </div>
                    <p className={`mt-2 hidden text-xs transition-colors duration-300 sm:block ${i === current ? "font-semibold text-primary-800" : "text-primary-900/60"}`}>{i + 1}. {t}</p>
                </li>
            ))}
        </ol>
    );
}
