"use client";
import { m } from "motion/react";
import { ease } from "@/lib/motion";

// Un template est remonté à chaque navigation : fondu + léger décalage à l'entrée uniquement.
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <m.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
            {children}
        </m.div>
    );
}
