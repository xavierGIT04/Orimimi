"use client";
import type { UseFormReturn } from "react-hook-form";
import { BIENS, ZONES, DELAIS, type DevisValues } from "@/lib/validation/devis";
import { services } from "@/lib/site";

const pick = (list: readonly { value: string; label: string }[], v: string) => list.find((x) => x.value === v)?.label ?? v;

export function StepRecap({ form, onEdit }: { form: UseFormReturn<DevisValues>; onEdit: (step: number) => void }) {
  const v = form.getValues();
  const groups: { title: string; step: number; rows: [string, string][] }[] = [
    { title: "Services", step: 0, rows: [["Travaux", v.services.map((s) => services.find((x) => x.slug === s)?.name ?? s).join(", ")]] },
    { title: "Projet", step: 1, rows: [
      ["Bien", pick(BIENS, v.bien)], ["Zone", pick(ZONES, v.zone)], ["Ville", v.ville],
      ["Surface", v.surface || "Non précisée"], ["Délai", pick(DELAIS, v.delai)], ["Description", v.description],
    ] },
    { title: "Coordonnées", step: 2, rows: [["Nom", v.nom], ["E-mail", v.email], ["Téléphone", v.telephone]] },
  ];
  return (
    <div className="space-y-6">
      {groups.map((g) => (
        <section key={g.title} className="rounded-2xl border border-primary-100 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-primary-800">{g.title}</h3>
            <button type="button" onClick={() => onEdit(g.step)} className="text-sm font-medium text-primary-700 underline underline-offset-2">Modifier</button>
          </div>
          <dl className="mt-3 space-y-2 text-sm">
            {g.rows.map(([k, val]) => (
              <div key={k} className="grid gap-1 sm:grid-cols-[9rem_1fr]">
                <dt className="text-primary-900/60">{k}</dt>
                <dd className="whitespace-pre-wrap break-words text-primary-900">{val}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
