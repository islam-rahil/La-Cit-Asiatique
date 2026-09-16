import React from "react";

/**
 * SanctuarySection
 * Section "hero + infos" sombre, inspirée d'une présentation d'espace / restaurant.
 * Tailwind CSS requis (classes utilitaires uniquement, pas de config custom nécessaire).
 *
 * Toutes les données sont passées en props avec des valeurs par défaut,
 * donc le composant fonctionne "out of the box" et reste facile à réutiliser
 * pour n'importe quel autre espace / lieu.
 */
export default function Sanctuary({
  eyebrow = "Architecture & Refuge",
  title = "Un pavillon de bois blond et de lin à l'abri du tumulte algérois.",
  ctaLabel = "Visiter le sanctuaire",
  ctaHref = "#",
  imageSrc = "/hero/hero4.png",
  imageAlt = "Intérieur du pavillon",
  infos = [
    {
      label: "Horaires d'ouverture",
      title: "11h00 — 00h00",
      subtitle: "Service continu & carte nocturne",
    },
    {
      label: "L'emplacement",
      title: "Val d'Hydra",
      subtitle: "Stationnement privé & service voiturier",
    },
    {
      label: "L'expérience",
      title: "Comptoir & Salons",
      subtitle: "Alcôves privatives sur réservation",
    },
    {
      label: "Réservation recommandée",
      title: "+213 794 25 98 31",
      subtitle: "Conciergerie disponible 7j/7",
    },
  ],
}) {
  return (
    <section className="bg-[#141414] text-[#EDEAE3] px-6 sm:px-10 lg:px-16 py-14">
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div>
            <p className="text-[#C9673F] text-xs tracking-wide mb-3">
              {eyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] max-w-2xl text-[#F5F2EC]">
              {title}
            </h2>
          </div>

          <a
            href={ctaHref}
            className="shrink-0 text-sm text-[#C9673F] border-b border-[#C9673F]/40 pb-1 hover:border-[#C9673F] transition-colors duration-200 self-start sm:self-end whitespace-nowrap"
          >
            {ctaLabel} <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Image */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-sm">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Séparateur */}
        <hr className="border-t border-[#3A3A3A] mt-12 mb-8" />

        {/* Infos pratiques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infos.map((info, i) => (
            <div key={i}>
              <p className="text-[#C9673F] text-[11px] tracking-wide mb-3">
                {info.label}
              </p>
              <p className="font-serif text-xl text-[#F5F2EC] mb-1">
                {info.title}
              </p>
              <p className="text-sm text-[#C9673F]/90">{info.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}