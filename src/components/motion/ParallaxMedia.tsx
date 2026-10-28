// src/components/motion/ParallaxMedia.tsx
"use client";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

export function ParallaxMedia({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-5%", "5%"]);

    return (
        <div ref={ref} className="absolute inset-0">
            <m.div style={{ y, scale: 1.12 }} className="absolute inset-0">
                {children}
            </m.div>
        </div>
    );
}