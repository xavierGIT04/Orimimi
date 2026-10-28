"use client";
import { m } from "motion/react";
import { fadeUp, stagger, draw } from "@/lib/motion";

const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Apparition d'un bloc. `immediate` = au chargement (hero), sinon au scroll. */
export function Reveal({ children, className, delay = 0, immediate = false }: {
    children: React.ReactNode; className?: string; delay?: number; immediate?: boolean;
}) {
    return (
        <m.div
            className={className}
            variants={fadeUp}
            initial="hidden"
            {...(immediate ? { animate: "show" } : { whileInView: "show", viewport })}
            transition={{ delay }}
        >
            {children}
        </m.div>
    );
}

/** Liste avec effet stagger. */
export function StaggerList({ as = "ul", children, className }: {
    as?: "ul" | "ol"; children: React.ReactNode; className?: string;
}) {
    const Tag = as === "ol" ? m.ol : m.ul;
    return (
        <Tag className={className} variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
            {children}
        </Tag>
    );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return <m.li className={className} variants={fadeUp}>{children}</m.li>;
}

/** Trait qui se dessine (hérite du stagger du parent). */
export function DrawLine({ className }: { className?: string }) {
    return <m.span aria-hidden variants={draw} className={`origin-left ${className ?? ""}`} />;
}