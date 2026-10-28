"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, m } from "motion/react";
import { devisSchema, type DevisValues } from "@/lib/validation/devis";
import { envoyerDevis } from "@/lib/actions/envoyerDevis";
import { site, type ServiceSlug } from "@/lib/site";
import { ease } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { StepIndicator } from "./StepIndicator";
import { StepService } from "./steps/StepService";
import { StepProjet } from "./steps/StepProjet";
import { StepContact } from "./steps/StepContact";
import { StepRecap } from "./steps/StepRecap";

const STEPS: { title: string; fields: (keyof DevisValues)[] }[] = [
    { title: "Services", fields: ["services"] },
    { title: "Projet", fields: ["bien", "zone", "ville", "surface", "delai", "description"] },
    { title: "Coordonnées", fields: ["nom", "email", "telephone", "consentement"] },
    { title: "Récapitulatif", fields: [] },
];
const LAST = STEPS.length - 1;

// Transition directionnelle : l'étape suivante arrive par la droite, le retour par la gauche.
const slide = {
    enter: (d: number) => ({ opacity: 0, x: 24 * d }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: -24 * d }),
};

export function DevisWizard({ initialService, initialVille }: { initialService?: ServiceSlug; initialVille?: string }) {
    const router = useRouter();
    const [step, setStep] = useState(initialService ? 1 : 0);
    const [dir, setDir] = useState(1);
    const [serverError, setServerError] = useState<string | null>(null);
    const [pending, startTransition] = useTransition();
    const headingRef = useRef<HTMLHeadingElement>(null);
    const first = useRef(true);

    const form = useForm<DevisValues>({
        resolver: zodResolver(devisSchema),
        mode: "onTouched",
        defaultValues: {
            services: initialService ? [initialService] : [],
            bien: "maison", zone: "interieur", delai: "flexible",
            ville: initialVille ?? "", surface: "", description: "", nom: "", email: "", telephone: "",
            consentement: false, website: "",
        },
    });

    // Accessibilité : le focus suit le titre de l’étape
    useEffect(() => {
        if (first.current) { first.current = false; return; }
        headingRef.current?.focus();
    }, [step]);

    function go(n: number) {
        setDir(n > step ? 1 : -1);
        setStep(n);
    }

    async function next() {
        const ok = await form.trigger(STEPS[step].fields);
        if (ok) go(Math.min(step + 1, LAST));
    }

    function submit(values: DevisValues) {
        setServerError(null);
        startTransition(async () => {
            const res = await envoyerDevis(values);
            if (res.ok) router.push("/devis/merci");
            else setServerError(res.error);
        });
    }

    return (
        <div>
            <StepIndicator titles={STEPS.map((s) => s.title)} current={step} />
            <form
                noValidate
                className="relative mt-8"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (step < LAST) void next();
                    else void form.handleSubmit(submit)();
                }}
            >
                <h2 ref={headingRef} tabIndex={-1} className="mb-6 text-2xl font-bold text-primary-800 outline-none">
                    Étape {step + 1} sur {STEPS.length} — {STEPS[step].title}
                </h2>

                <AnimatePresence mode="wait" initial={false} custom={dir}>
                    <m.div
                        key={step}
                        custom={dir}
                        variants={slide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease }}
                    >
                        {step === 0 && <StepService form={form} />}
                        {step === 1 && <StepProjet form={form} />}
                        {step === 2 && <StepContact form={form} />}
                        {step === 3 && <StepRecap form={form} onEdit={go} />}
                    </m.div>
                </AnimatePresence>

                {serverError && (
                    <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                        {serverError} Vous pouvez aussi nous joindre au {site.phone}.
                    </p>
                )}

                <div className="mt-8 flex items-center justify-between gap-4">
                    {step > 0 ? (
                        <Button type="button" variant="outline" onClick={() => go(step - 1)}>Retour</Button>
                    ) : <span />}
                    <Button type="submit" disabled={pending}>
                        {step < LAST ? "Continuer" : pending ? "Envoi en cours…" : "Envoyer ma demande"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
