export default function Philosophy() {
  return (
    <section className="bg-[#C40723] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-10 h-px bg-white/40" />
          <span className="text-xs tracking-[0.25em] font-semibold text-white/90">
            L&apos;ESPRIT DU VIDE · 間
          </span>
          <span className="w-10 h-px bg-white/40" />
        </div>

        {/* Citation */}
        <blockquote className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-[1.25] mb-10">
          « Cuisiner avec retenue,
          <br />
          honorer chaque matière. »
        </blockquote>

        {/* Séparateur */}
        <div className="w-10 h-px bg-white/50 mx-auto mb-8" />

        {/* Attribution */}
        <div>
          <p className="text-sm tracking-[0.15em] font-semibold text-white mb-1">
            CHEF EXÉCUTIF
          </p>
          <p className="text-sm text-white/85">
            Héritage Kyotite &amp; Produits de Méditerranée
          </p>
        </div>
      </div>
    </section>
  );
}