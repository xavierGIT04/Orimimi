export function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 lg:px-8 ${className}`}>{children}</div>;
}
