import Image from "next/image";
import Link from "next/link";
import { routes } from "./site";

export default function Essence() {
  return (
    <section className="w-full max-w-[1220px] mx-auto px-6 pb-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
        {/* Colonne texte */}
        <div className="flex gap-4 md:gap-6">
          {/* Kanji vertical */}
          <span
            className="hidden sm:block text-[#AE2F35]/60 text-lg tracking-[0.3em] shrink-0 font-serif"
            style={{ writingMode: "vertical-rl" }}
          >
            都の都市
          </span>

          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#AE2F35]" />
              <span className="text-xs tracking-[0.2em] font-semibold text-[#AE2F35]">
                SANCTUAIRE CULINAIRE — VAL D&apos;HYDRA
              </span>
            </div>

            {/* Titre */}
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1C1C19] leading-[1.1] mb-6">
              L&apos;Essence Pure
              <br />
              d&apos;Asie.
            </h2>

            {/* Description */}
            <p className="text-[#AE2F35]/90 leading-relaxed max-w-md mb-8">
              L&apos;effervescence millimétrée des ruelles de Bangkok
              rencontre la discipline ascétique des maîtres de Kyoto. À
              Alger, la matière brute retrouve son silence.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <Link
                href={routes.menu}
                className="text-sm font-semibold tracking-wide text-[#1C1C19] border-b border-[#1C1C19] pb-1 hover:text-[#AE2F35] hover:border-[#AE2F35] transition-colors duration-200"
              >
                DÉCOUVRIR LA CARTE
              </Link>
              <Link
                href={routes.booking}
                className="text-sm font-semibold tracking-wide text-[#AE2F35] hover:text-[#C40723] transition-colors duration-200"
              >
                RÉSERVER UNE TABLE
              </Link>
            </div>

            {/* Séparateur */}
            <div className="w-full h-px bg-[#C4C7C7]/50 mb-8" />

            {/* Infos */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-xs font-semibold tracking-[0.15em] text-[#AE2F35] mb-2">
                  RITUEL &amp; TABLE
                </span>
                <span className="block text-sm text-[#1C1C19]/80">
                  Service Midi &amp; Nocturne
                </span>
              </div>
              <div>
                <span className="block text-xs font-semibold tracking-[0.15em] text-[#AE2F35] mb-2">
                  REPÈRE
                </span>
                <span className="block text-sm text-[#1C1C19]/80">
                  Val D&apos;Hydra, Alger
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne image */}
        <div className="relative w-full aspect-square md:aspect-[3/4] overflow-hidden">
          <Image
            src="/hero/hero2.webp"
            alt="Sushi préparé avec soin, esthétique de la cuisine japonaise"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />

          {/* Caption superposée */}
          <div className="absolute bottom-0 right-0 left-0 sm:left-auto sm:right-4 sm:bottom-4 bg-[#FDF9F4] px-5 py-3 flex items-center gap-3">
            <span className="text-xs font-semibold text-[#AE2F35]">01</span>
            <span className="text-xs sm:text-sm text-[#1C1C19]/80 tracking-wide">
              Pêche côtière &amp; riz de Niigata maturé
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}