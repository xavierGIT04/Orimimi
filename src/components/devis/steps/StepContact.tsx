"use client";
import type { UseFormReturn } from "react-hook-form";
import type { DevisValues } from "@/lib/validation/devis";
import { Field, inputClass } from "../fields";

export function StepContact({ form }: { form: UseFormReturn<DevisValues> }) {
  const { register, formState: { errors } } = form;
  return (
    <div className="space-y-5">
      <Field id="nom" label="Nom et prénom" error={errors.nom?.message}>
        <input id="nom" autoComplete="name" className={inputClass} aria-invalid={!!errors.nom} aria-describedby={errors.nom ? "nom-err" : undefined} {...register("nom")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="E-mail" error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} {...register("email")} />
        </Field>
        <Field id="telephone" label="Téléphone" error={errors.telephone?.message}>
          <input id="telephone" type="tel" autoComplete="tel" className={inputClass} aria-invalid={!!errors.telephone} aria-describedby={errors.telephone ? "telephone-err" : undefined} {...register("telephone")} />
        </Field>
      </div>
      {/* Honeypot : invisible pour les humains */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>Ne pas remplir<input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm text-primary-900">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-primary-700" {...register("consentement")} />
          <span>J’accepte que mes informations soient utilisées pour répondre à ma demande de devis.</span>
        </label>
        {errors.consentement && <p role="alert" className="mt-1 text-sm text-red-700">{errors.consentement.message}</p>}
      </div>
    </div>
  );
}
