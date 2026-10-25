import Image from "next/image";
import { anchors, site } from "./site";

/**
 * Footer
 * Pied de page sombre : identité, adresse, horaires, contacts et réseaux.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-[#141414] text-[#EDEAE3] px-6 sm:px-10 lg:px-16 pt-16 pb-8"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          {/* Identité */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.jpg"
                alt=""
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg text-[#F5F2EC]">
                  LA CITÉ ASIATIQUE
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#EDEAE3]/60">
                  ALGER
                </span>
              </div>
            </div>
            <p className="text-sm text-[#EDEAE3]/70 leading-relaxed max-w-xs">
              Sushis, wok et bouillons d&apos;Asie, servis midi et soir au cœur
              de Val d&apos;Hydra.
            </p>
          </div>

          {/* Adresse */}
          <div>
            <p className="text-[#C9673F] text-[11px] tracking-wide mb-3">Adresse</p>
            <address className="not-italic text-sm leading-relaxed text-[#EDEAE3]/90">
              {site.street}
              <br />
              {site.area}, {site.city} {site.postalCode}
            </address>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#C9673F] border-b border-[#C9673F]/40 pb-0.5 hover:border-[#C9673F] transition-colors duration-200"
            >
              Itinéraire <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Horaires */}
          <div>
            <p className="text-[#C9673F] text-[11px] tracking-wide mb-3">Horaires</p>
            <p className="font-serif text-xl text-[#F5F2EC] mb-1">{site.hours}</p>
            <p className="text-sm text-[#EDEAE3]/70">7j/7, service continu</p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#C9673F] text-[11px] tracking-wide mb-3">Réservations</p>
            <ul className="space-y-1.5 text-sm">
              {site.phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="text-[#EDEAE3]/90 hover:text-[#C9673F] transition-colors duration-200"
                  >
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-[#C9673F] hover:text-[#E08A62] transition-colors duration-200"
            >
              Instagram {site.instagram.handle}
            </a>
          </div>
        </div>

        <hr className="border-t border-[#3A3A3A] mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#EDEAE3]/50">
          <p>© {year} {site.name}. Tous droits réservés.</p>
          <nav aria-label="Liens du pied de page" className="flex gap-6">
            <a href={anchors.menu} className="hover:text-[#EDEAE3] transition-colors duration-200">
              La carte
            </a>
            <a href={anchors.booking} className="hover:text-[#EDEAE3] transition-colors duration-200">
              Réserver
            </a>
            <a href="#top" className="hover:text-[#EDEAE3] transition-colors duration-200">
              Haut de page ↑
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
