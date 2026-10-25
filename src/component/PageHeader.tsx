/**
 * PageHeader
 * En-tête commun des pages intérieures (Carte, Réservation, Contact).
 */
export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="px-6 sm:px-10 lg:px-16 pt-32 md:pt-40 pb-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#AE2F35]" />
          <span className="text-xs tracking-[0.2em] font-semibold text-[#AE2F35] uppercase">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-[#1C1C19] mb-5">
          {title}
        </h1>
        {intro && (
          <p className="text-[#5C5750] leading-relaxed max-w-xl">{intro}</p>
        )}
      </div>
    </header>
  );
}
