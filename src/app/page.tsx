import Hero from "../component/hero";
import Essence from "../component/essence";
import Philosophy from "../component/philosophy";
import EditorialMenu from "../component/EditorialMenu";
import ReservationCTA from "../component/ReservationCTA";
import { site } from "../component/site";

// Données structurées pour Google (fiche restaurant, horaires, contact).
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: ["Asiatique", "Japonaise", "Thaïlandaise"],
  telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: `${site.area}, ${site.city}`,
    postalCode: site.postalCode,
    addressCountry: "DZ",
  },
  geo: { "@type": "GeoCoordinates", ...site.geo },
  hasMap: site.mapsHref,
  sameAs: [site.instagram.href],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "11:00",
    closes: "23:59",
  },
  acceptsReservations: true,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />

      <Hero />
      <Essence />
      <Philosophy />
      <EditorialMenu />
      <ReservationCTA />
    </>
  );
}
