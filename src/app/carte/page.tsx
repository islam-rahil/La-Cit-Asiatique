import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import PageHeader from "../../component/PageHeader";
import { routes } from "../../component/site";
import { menu, formatPrice, type Dish } from "../../data/menu";

export const metadata: Metadata = {
  title: "La carte",
  description:
    "La carte complète de La Cité Asiatique : sushis, california rolls, ramen, nouilles, poke bowls, bentos et desserts, avec les prix.",
};

// Une photo s'affiche dès qu'un fichier /public/menu/<id>.webp existe.
const photoDir = path.join(process.cwd(), "public", "menu");
const hasPhoto = (id: string) => fs.existsSync(path.join(photoDir, `${id}.webp`));

function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="flex items-start gap-4 py-5 border-b border-[#1C1C19]/10">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full overflow-hidden bg-[#F1EBE2] ring-1 ring-[#1C1C19]/10">
        {hasPhoto(dish.id) ? (
          <Image
            src={`/menu/${dish.id}.webp`}
            alt={dish.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        ) : (
          <UtensilsCrossed
            aria-hidden="true"
            className="absolute inset-0 m-auto text-[#AE2F35]/30"
            size={24}
          />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg sm:text-xl text-[#1C1C19] leading-snug">
            {dish.name}
          </h3>
          <div className="text-right shrink-0">
            {dish.prices.map((price) => (
              <p key={price.label ?? "prix"} className="text-sm whitespace-nowrap">
                {price.label && (
                  <span className="text-[#6B665F] mr-2">{price.label}</span>
                )}
                <span className="font-semibold text-[#A3502C]">
                  {formatPrice(price.amount)}
                </span>
              </p>
            ))}
          </div>
        </div>
        {dish.description && (
          <p className="text-sm text-[#6B665F] leading-relaxed mt-1 max-w-md">
            {dish.description}
          </p>
        )}
      </div>
    </li>
  );
}

export default function CartePage() {
  return (
    <>
      <PageHeader
        eyebrow="La carte"
        title="Toute la carte"
        intro="Entrées, soupes, sushis, plats chauds et desserts. Tous les prix sont en dinars algériens."
      />

      {/* Barre des catégories, collée sous la navigation */}
      <nav
        aria-label="Catégories de la carte"
        className="sticky top-16 md:top-20 z-40 bg-[#FDF9F4]/95 backdrop-blur-md border-y border-[#1C1C19]/10"
      >
        <ul className="mx-auto max-w-[1200px] flex gap-1 overflow-x-auto px-4 sm:px-8 lg:px-14 py-2 [scrollbar-width:none]">
          {menu.map((category) => (
            <li key={category.id} className="shrink-0">
              <a
                href={`#${category.id}`}
                className="block px-3 py-2 rounded-full text-sm text-[#1C1C19] hover:bg-[#AE2F35]/10 hover:text-[#AE2F35] transition-colors duration-200 whitespace-nowrap"
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 sm:px-10 lg:px-16 py-12">
        <div className="mx-auto max-w-[1200px] space-y-16">
          {menu.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-titre`}
              className="scroll-mt-36 md:scroll-mt-40"
            >
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-2 pb-4 border-b border-[#1C1C19]/30">
                <div>
                  <h2
                    id={`${category.id}-titre`}
                    className="font-serif text-3xl sm:text-4xl text-[#1C1C19]"
                  >
                    {category.title}
                  </h2>
                  {category.subtitle && (
                    <p className="text-sm text-[#A3502C] mt-1">{category.subtitle}</p>
                  )}
                </div>
                {category.notes && (
                  <div className="text-sm text-[#5C5750] sm:text-right max-w-md">
                    {category.notes.map((note) => (
                      <p key={note}>{note}</p>
                    ))}
                  </div>
                )}
              </div>

              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                {category.dishes.map((dish) => (
                  <DishRow key={dish.id} dish={dish} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mx-auto max-w-[1200px] mt-16 text-center">
          <Link
            href={routes.booking}
            className="inline-block bg-[#1A1A1A] text-[#F5F2EC] text-sm px-8 py-4 hover:bg-[#2A2A2A] transition-colors duration-200"
          >
            Réserver une table
          </Link>
        </div>
      </div>
    </>
  );
}
