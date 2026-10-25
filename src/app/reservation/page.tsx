import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import PageHeader from "../../component/PageHeader";
import { routes, site } from "../../component/site";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réservez votre table à La Cité Asiatique, Val d'Hydra, Alger : par téléphone ou WhatsApp, 7j/7 de 11h à minuit.",
};

// Message pré-rempli à l'ouverture de WhatsApp.
const whatsappText = encodeURIComponent(
  "Bonjour, je souhaite réserver une table à La Cité Asiatique. Date : … Heure : … Nombre de personnes : …"
);

const steps = [
  { label: "La date", text: "Le jour souhaité, aujourd'hui ou plus tard dans la semaine." },
  { label: "L'heure", text: `Service continu, ${site.hours}.` },
  { label: "Le nombre de personnes", text: "Les alcôves privatives se réservent à l'avance." },
];

export default function ReservationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réservation"
        title="Réserver une table"
        intro="Le nombre de couverts par heure reste mesuré pour préserver la sérénité du lieu. Appelez-nous ou écrivez-nous sur WhatsApp, 7j/7."
      />

      <div className="px-6 sm:px-10 lg:px-16 pb-20">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
          {/* Numéros */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {site.phones.map((phone) => (
              <li
                key={phone.href}
                className="bg-white/60 border border-[#1C1C19]/10 p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
              >
                <p className="font-serif text-2xl text-[#1C1C19]">{phone.label}</p>
                <div className="flex flex-col sm:flex-col lg:flex-row gap-2">
                  <a
                    href={phone.href}
                    className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-[#F5F2EC] text-sm px-5 py-3 hover:bg-[#2A2A2A] transition-colors duration-200"
                  >
                    <Phone size={16} aria-hidden="true" />
                    Appeler
                  </a>
                  <a
                    href={`${phone.whatsapp}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#1F7A4D] text-white text-sm px-5 py-3 hover:bg-[#186640] transition-colors duration-200"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {/* À préciser */}
          <div>
            <p className="text-[#A3502C] text-xs tracking-wide mb-4">À préciser lors de votre réservation</p>
            <ol className="space-y-6">
              {steps.map((step, i) => (
                <li key={step.label} className="flex gap-4">
                  <span className="text-xs font-semibold text-[#AE2F35] mt-1.5">0{i + 1}</span>
                  <div>
                    <p className="font-serif text-xl text-[#1C1C19]">{step.label}</p>
                    <p className="text-sm text-[#5C5750] mt-1">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 pt-6 border-t border-[#1C1C19]/15 flex flex-wrap gap-6">
              <Link
                href={routes.menu}
                className="text-sm font-semibold tracking-wide text-[#1C1C19] border-b border-[#1C1C19] pb-1 hover:text-[#AE2F35] hover:border-[#AE2F35] transition-colors duration-200"
              >
                Voir la carte
              </Link>
              <Link
                href={routes.contact}
                className="text-sm font-semibold tracking-wide text-[#AE2F35] hover:text-[#C40723] transition-colors duration-200"
              >
                Adresse &amp; accès
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
