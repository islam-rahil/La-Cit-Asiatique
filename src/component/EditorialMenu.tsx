import Image from "next/image";

/**
 * EditorialMenuSection
 * Section "menu éditorial" : liste de plats numérotés à gauche,
 * image + accroche à droite. Tailwind CSS uniquement.
 */
export default function EditorialMenu({
  eyebrow = "Sélection saisonnière",
  title = "Gestes & Métamorphoses",
  intro = "Chaque création est exécutée à la commande, dans l'exacte pulsation du feu ou la précision du tranchant.",
  items = [
    {
      number: "01",
      name: "Otoro Fumée au Bois de Cèdre",
      price: "3 800 DZD",
      description:
        "Thon rouge méditerranéen gras sélectionné à l'aube, fumage minute aux aiguilles de cyprès, riz koshihikari perlé au vinaigre rouge akazu de trois ans d'âge.",
    },
    {
      number: "02",
      name: "Bouillon Dashi d'Or & Canard Laqué",
      price: "3 400 DZD",
      description:
        "Extraction limpide de kombu de Rishiri et bonite séchée katsuobushi. Poitrine de canard rôtie aux cinq parfums d'Orient, pousses de bambou d'hiver et ciboule négui ciselée.",
    },
    {
      number: "03",
      name: "Gyoza de Langoustines Côtières au Wok",
      price: "2 900 DZD",
      description:
        "Dentelle translucide croustillante, farce fine de langoustines vivantes, gingembre noir et poivre sauvage de Kampot. Condiment ponzu maison au yuzu pressé.",
    },
  ],
  imageSrc = "/hero/hero3.webp",
  imageAlt = "Détail d'un plat préparé avec des baguettes",
  imageCaptionLabel = "Précision du geste",
  imageCaptionText = "Artisanat vivant",
}) {
  return (
    <section id="carte" className="scroll-mt-20 bg-[#FDF9F4] text-[#1C1C19] px-6 sm:px-10 lg:px-16 py-14">
      <div className="mx-auto max-w-[1200px]">
        {/* En-tête */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-[#A3502C] text-xs tracking-wide mb-3">
              {eyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] text-[#1C1C19]">
              {title}
            </h2>
          </div>

          <p className="text-[#5C5750] text-sm leading-relaxed max-w-xs">
            {intro}
          </p>
        </div>

        <hr className="border-t border-[#1C1C19]/20 mb-2" />

        {/* Corps : liste de plats + image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
          {/* Liste des plats */}
          <div>
            {items.map((item, i) => (
              <div key={i}>
                <div className="py-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="text-[#6B665F] text-xs mt-2 shrink-0">
                        {item.number}
                      </span>
                      <h3 className="font-serif text-2xl text-[#1C1C19]">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-[#A3502C] text-sm whitespace-nowrap shrink-0">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#6B665F] text-sm leading-relaxed mt-3 ml-0 sm:ml-8 max-w-xl">
                    {item.description}
                  </p>
                </div>
                {i < items.length - 1 && (
                  <hr className="border-t border-[#1C1C19]/15" />
                )}
              </div>
            ))}
          </div>

          {/* Image + légende */}
          <div>
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 460px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-[#A3502C] text-[11px] tracking-wide">
                {imageCaptionLabel}
              </p>
              <p className="text-[#1C1C19]/80 text-sm flex items-center gap-2">
                {imageCaptionText}
                <span aria-hidden="true" className="inline-flex gap-[2px]">
                  <span className="w-[2px] h-3 bg-[#C9673F] rotate-12" />
                  <span className="w-[2px] h-3 bg-[#C9673F]" />
                  <span className="w-[2px] h-3 bg-[#C9673F] -rotate-12" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}