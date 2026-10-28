export const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const draw = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.9, ease } },
};