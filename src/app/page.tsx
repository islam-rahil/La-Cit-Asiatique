import Navbar from "../component/nav";
import Hero from "../component/hero";
import Essence from "../component/essence";
import Philosophy from "../component/philosophy";
import Sanctuary from "../component/sanctuary";
import EditorialMenu from "../component/EditorialMenu";
import ReservationCTA from "../component/ReservationCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF9F4] text-stone-100 flex flex-col selection:bg-rose-500 selection:text-white">
      {/* Barre de navigation pleine largeur */}
      <Navbar />

      {/* Conteneur principal qui structure les sections */}
      <main className="flex-1 w-full flex flex-col items-start justify-start">
        <Hero />
        <Essence />        
      </main>
      <Philosophy />
      <EditorialMenu/>
      <Sanctuary />
      <ReservationCTA />

      

    </div>
  );
}