import React from "react";

/**
 * ReservationCTASection
 * Section de transition claire, centrée : accroche + double appel à l'action.
 * Tailwind CSS uniquement.
 */
export default function ReservationCTA({
  eyebrow = "Réservation anticipée",
  title = "Prenez place dans la quiétude.",
  subtitle = "Pour préserver la pureté du service et la sérénité du lieu, le nombre de couverts par heure demeure strictement mesuré.",
  primaryLabel = "Réserver une table",
  primaryHref = "#",
  secondaryLabel = "Consulter le menu complet",
  secondaryHref = "#",
}) {
  return (
    <section className="bg-[#FDF9F4] text-[#1A1A1A] px-6 sm:px-10 lg:px-16 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-[#C9673F] text-xs tracking-wide mb-4">
          {eyebrow}
        </p>

        <h2 className="font-serif text-4xl sm:text-5xl leading-[1.15] text-[#1A1A1A] mb-6">
          {title}
        </h2>

        <p className="text-[#C9673F] text-base leading-relaxed max-w-lg mx-auto mb-10">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={primaryHref}
            className="bg-[#1A1A1A] text-[#F5F2EC] text-sm px-8 py-4 hover:bg-[#2A2A2A] transition-colors duration-200"
          >
            {primaryLabel}
          </a>

          <a
            href={secondaryHref}
            className="text-sm text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:opacity-70 transition-opacity duration-200"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}