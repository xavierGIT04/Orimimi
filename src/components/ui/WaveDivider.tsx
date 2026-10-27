// Vague à deux tons inspirée du logo. `className` donne la couleur de la vague principale (text-*).
// `flip` retourne la vague pour l'utiliser au-dessus d'une section colorée.
export function WaveDivider({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div aria-hidden className={`-my-px leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="block h-10 w-full md:h-16">
        <path className="fill-accent-400" d="M0 0H1440V58C1200 98 930 24 650 56 390 84 170 76 0 48Z" />
        <path className="fill-current" d="M0 0H1440V38C1180 82 930 10 640 42 380 70 170 62 0 32Z" />
      </svg>
    </div>
  );
}
