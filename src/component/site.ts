// Coordonnées partagées par la navigation, les sections et le pied de page.
export const site = {
  name: "La Cité Asiatique",
  phones: [
    { label: "0794 25 98 31", href: "tel:+213794259831", whatsapp: "https://wa.me/213794259831" },
    { label: "0698 89 39 97", href: "tel:+213698893997", whatsapp: "https://wa.me/213698893997" },
    { label: "0555 78 77 57", href: "tel:+213555787757", whatsapp: "https://wa.me/213555787757" },
  ],
  street: "04 Bd du 11 Décembre",
  area: "Val d'Hydra",
  city: "Alger",
  postalCode: "16000",
  geo: { latitude: 36.761804, longitude: 3.0243345 },
  hours: "11h00 — 00h00",
  mapsHref: "https://maps.app.goo.gl/DWX8Vm7Xz9RVEHjf7",
  instagram: { handle: "@laciteasiatique", href: "https://www.instagram.com/laciteasiatique/" },
};

// Pages du site.
export const routes = {
  home: "/",
  menu: "/carte",
  booking: "/reservation",
  contact: "/contact",
};
