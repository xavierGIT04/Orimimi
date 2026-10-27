"use client";
import type { UseFormReturn } from "react-hook-form";
import { BIENS, ZONES, DELAIS, type DevisValues } from "@/lib/validation/devis";
import { ChoiceGroup, Field, inputClass } from "../fields";

export function StepProjet({ form }: { form: UseFormReturn<DevisValues> }) {
  const { register, formState: { errors } } = form;
  return (
    <div className="space-y-6">
      <ChoiceGroup legend="Type de bien" name="bien" type="radio" options={BIENS} register={register} />
      <ChoiceGroup legend="Zone des travaux" name="zone" type="radio" options={ZONES} register={register} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="ville" label="Ville du chantier" error={errors.ville?.message}>
          <input id="ville" autoComplete="address-level2" className={inputClass} aria-describedby={errors.ville ? "ville-err" : undefined} aria-invalid={!!errors.ville} {...register("ville")} />
        </Field>
        <Field id="surface" label="Surface approximative (m²)" hint="Facultatif" error={errors.surface?.message}>
          <input id="surface" inputMode="numeric" className={inputClass} {...register("surface")} />
        </Field>
      </div>
      <ChoiceGroup legend="Délai souhaité" name="delai" type="radio" options={DELAIS} register={register} />
      <Field id="description" label="Décrivez votre projet" error={errors.description?.message}>
        <textarea id="description" rows={5} className={inputClass} placeholder="Pièces concernées, état actuel, ce que vous souhaitez obtenir…" aria-describedby={errors.description ? "description-err" : undefined} aria-invalid={!!errors.description} {...register("description")} />
      </Field>
    </div>
  );
}
