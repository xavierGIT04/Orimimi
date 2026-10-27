"use client";
import type { UseFormReturn } from "react-hook-form";
import type { DevisValues } from "@/lib/validation/devis";
import { services } from "@/lib/site";
import { ChoiceGroup } from "../fields";

export function StepService({ form }: { form: UseFormReturn<DevisValues> }) {
  return (
    <ChoiceGroup
      legend="Quels travaux envisagez-vous ? (plusieurs choix possibles)"
      name="services" type="checkbox" register={form.register}
      options={services.map((s) => ({ value: s.slug, label: s.name, hint: s.short }))}
      error={form.formState.errors.services?.message as string | undefined}
    />
  );
}
