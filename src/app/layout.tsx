import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Polices variables : un seul fichier par style couvre toutes les graisses.
const playfairDisplay = localFont({
  src: [
    { path: "../../public/font/PlayfairDisplay-VariableFont_wght.ttf", weight: "400 900", style: "normal" },
    { path: "../../public/font/PlayfairDisplay-Italic-VariableFont_wght.ttf", weight: "400 900", style: "italic" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakartaSans = localFont({
  src: [
    { path: "../../public/font/PlusJakartaSans-VariableFont_wght.ttf", weight: "200 800", style: "normal" },
    { path: "../../public/font/PlusJakartaSans-Italic-VariableFont_wght.ttf", weight: "200 800", style: "italic" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Restaurant asiatique à Val d'Hydra, Alger : sushis, wok, ramen et gyozas. Ouvert 7j/7 de 11h à minuit. Réservation par téléphone.";

export const metadata: Metadata = {
  title: {
    default: "La Cité Asiatique — Restaurant asiatique à Val d'Hydra, Alger",
    template: "%s · La Cité Asiatique",
  },
  description,
  keywords: ["restaurant asiatique Alger", "sushi Alger", "Hydra", "Val d'Hydra", "ramen", "wok", "La Cité Asiatique"],
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    siteName: "La Cité Asiatique",
    title: "La Cité Asiatique — Restaurant asiatique à Alger",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "La Cité Asiatique — Restaurant asiatique à Alger",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}