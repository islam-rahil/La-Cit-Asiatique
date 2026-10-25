import type { Metadata } from "next";
import PageHeader from "../../component/PageHeader";
import Sanctuary from "../../component/sanctuary";
import { site } from "../../component/site";

export const metadata: Metadata = {
  title: "Contact & accès",
  description:
    "La Cité Asiatique, 04 Bd du 11 Décembre, Val d'Hydra, Alger. Ouvert 7j/7 de 11h à minuit. Téléphone, WhatsApp, Instagram et itinéraire.",
};

const mapSrc = `https://www.google.com/maps?q=${site.geo.latitude},${site.geo.longitude}&z=16&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & accès"
        title="Nous trouver"
        intro={`${site.street}, ${site.area}, ${site.city} ${site.postalCode}. Ouvert tous les jours, ${site.hours}.`}
      />

      {/* Carte + coordonnées */}
      <div className="px-6 sm:px-10 lg:px-16 pb-16">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden rounded-sm border border-[#1C1C19]/10">
            <iframe
              src={mapSrc}
              title="Plan d'accès à La Cité Asiatique"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-[#A3502C] text-xs tracking-wide mb-2">Adresse</p>
              <address className="not-italic font-serif text-xl text-[#1C1C19] leading-snug">
                {site.street}
                <br />
                {site.area}, {site.city} {site.postalCode}
              </address>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-semibold text-[#1C1C19] border-b border-[#1C1C19] pb-0.5 hover:text-[#AE2F35] hover:border-[#AE2F35] transition-colors duration-200"
              >
                Ouvrir l&apos;itinéraire <span aria-hidden="true">→</span>
              </a>
            </div>

            <div>
              <p className="text-[#A3502C] text-xs tracking-wide mb-2">Téléphone & WhatsApp</p>
              <ul className="space-y-1">
                {site.phones.map((phone) => (
                  <li key={phone.href} className="flex items-center gap-3">
                    <a href={phone.href} className="font-serif text-xl text-[#1C1C19] hover:text-[#AE2F35] transition-colors duration-200">
                      {phone.label}
                    </a>
                    <a
                      href={phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#1F7A4D] hover:underline"
                    >
                      WhatsApp
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[#A3502C] text-xs tracking-wide mb-2">Instagram</p>
              <a
                href={site.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl text-[#1C1C19] hover:text-[#AE2F35] transition-colors duration-200"
              >
                {site.instagram.handle}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Sanctuary />
    </>
  );
}
