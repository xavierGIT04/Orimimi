"use client";
import type { UseFormRegister } from "react-hook-form";
import type { DevisValues } from "@/lib/validation/devis";

export const inputClass =
    "w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-primary-900 placeholder:text-primary-900/40 transition-[border-color,box-shadow] duration-200 focus:border-primary-600 focus:shadow-[0_0_0_4px_rgba(29,122,101,0.12)]";

export function Field({ id, label, error, hint, children }: {
    id: string; label: string; error?: string; hint?: string; children: React.ReactNode;
}) {
    return (
        <div>
            <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-primary-800">{label}</label>
            {children}
            {hint && !error && <p className="mt-1 text-xs text-primary-900/60">{hint}</p>}
            {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-700">{error}</p>}
        </div>
    );
}

type Name = "services" | "bien" | "zone" | "delai";

export function ChoiceGroup({ legend, name, type, options, register, error, columns = 2 }: {
    legend: string; name: Name; type: "checkbox" | "radio";
    options: readonly { value: string; label: string; hint?: string }[];
    register: UseFormRegister<DevisValues>; error?: string; columns?: 1 | 2;
}) {
    return (
        <fieldset>
            <legend className="mb-2 text-sm font-semibold text-primary-800">{legend}</legend>
            <div className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
                {options.map((o) => (
                    <label key={o.value} className="block cursor-pointer">
                        <input type={type} value={o.value} className="peer sr-only" {...register(name)} />
                        <span className="block rounded-xl border-2 border-primary-100 bg-white px-4 py-3 transition-[transform,border-color,background-color,box-shadow] duration-200 hover:border-primary-300 active:scale-[0.98] peer-checked:border-primary-700 peer-checked:bg-primary-50 peer-checked:shadow-md peer-checked:shadow-primary-900/10 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-500">
              <span className="block font-semibold text-primary-800">{o.label}</span>
                            {o.hint && <span className="mt-0.5 block text-sm text-primary-900/70">{o.hint}</span>}
            </span>
                    </label>
                ))}
            </div>
            {error && <p role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
        </fieldset>
    );
}
