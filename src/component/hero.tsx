import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-[1220px] mx-auto px-0 md:px-6 my-20 md:my-26 sm:my-0">
      
      {/* ================= BLOC MOBILE ================= */}
      <div className="block md:hidden relative w-full h-[85vh] mt-0 overflow-hidden shadow-xl">
        <Image
          src="/hero/mainhero2.jpeg"
          alt="La Cité Asiatique — restaurant asiatique à Alger, ambiance sakura"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        
        {/* Overlay progressif vertical */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Contenu mobile : aligné en bas, centré */}
        <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 text-white z-10">
          <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold mb-2">
            Alger • Sakura & Wok
          </span>
          <h1 className="text-3xl font-serif font-bold leading-tight mb-3">
            La Cité Asiatique
          </h1>
          <p className="text-xs text-stone-200 mb-6 font-light max-w-xs leading-relaxed">
            Une immersion culinaire raffinée au cœur de la capitale.
          </p>

          <div className="flex flex-col w-full gap-2.5 max-w-xs">
            <Link
              href="#reserver"
              className="w-full py-3 rounded-xl bg-rose-600 active:bg-rose-700 text-white text-xs font-semibold tracking-wide shadow-md transition"
            >
              Réserver une table
            </Link>
            <Link
              href="#menu"
              className="w-full py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 active:bg-white/20 text-white text-xs font-semibold tracking-wide transition"
            >
              Consulter le menu
            </Link>
          </div>
        </div>
      </div>

      {/* ================= BLOC DESKTOP ================= */}
      <div className="hidden md:block relative w-full h-[78vh]  overflow-hidden shadow-2xl">
        <Image
          src="/hero/mainhero.jpeg"
          alt="La Cité Asiatique — restaurant asiatique à Alger, ambiance sakura"
          fill
          priority
          sizes="1220px"
          className="object-cover"
        />

       
      </div>

    </section>
  );
}