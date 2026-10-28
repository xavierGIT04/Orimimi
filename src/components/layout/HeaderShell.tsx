"use client";
import { useEffect, useState } from "react";

// Header en verre dépoli : quasi transparent en haut, plus opaque avec bordure et ombre dès qu'on scrolle.
export function HeaderShell({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const on = () => setScrolled(window.scrollY > 8);
        on();
        window.addEventListener("scroll", on, { passive: true });
        return () => window.removeEventListener("scroll", on);
    }, []);

    return (
        <header
            data-scrolled={scrolled}
            className="sticky top-0 z-40 border-b border-transparent bg-white/70 backdrop-blur-md backdrop-saturate-150
        transition-[background-color,border-color,box-shadow] duration-300
        data-[scrolled=true]:border-primary-100 data-[scrolled=true]:bg-white/85
        data-[scrolled=true]:shadow-[0_8px_30px_-12px_rgba(3,52,45,0.18)]"
        >
            {children}
        </header>
    );
}
