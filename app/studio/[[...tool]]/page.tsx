 export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <img
          src="/milkyway.png"
          alt="Via Lactea"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />

        <div className="relative z-10 text-center px-6">
          <img
            src="/logo-madrid-astronomy-clean.png"
            alt="Madrid Astronomy"
            className="w-40 mx-auto mb-8"
          />

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Madrid Astronomy
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Descubre el universo desde la montaña
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#galeria"
              className="bg-[#d6b46a] text-black px-8 py-4 rounded-xl font-bold"
            >
              Ver galería
            </a>

            <a
              href="#contacto"
              className="border border-white/20 px-8 py-4 rounded-xl font-bold"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <section
        id="galeria"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <h2 className="text-4xl font-black text-center mb-16">
          Galería Astronómica
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <img
            src="/milkyway.png"
            className="rounded-3xl h-[350px] w-full object-cover"
          />

          <img
            src="/telescopio.png"
            className="rounded-3xl h-[350px] w-full object-cover"
          />

          <img
            src="/perseidas.png"
            className="rounded-3xl h-[350px] w-full object-cover"
          />

          <img
            src="/explorador.png"
            className="rounded-3xl h-[350px] w-full object-cover"
          />

          <img
            src="/observatorio.png"
            className="rounded-3xl h-[350px] w-full object-cover md:col-span-2"
          />

        </div>
      </section>

      <section
        id="contacto"
        className="py-24 text-center"
      >
        <h2 className="text-4xl font-black mb-6">
          ¿Listo para mirar las estrellas?
        </h2>

        <a
          href="https://wa.me/34600000000"
          className="inline-block bg-[#d6b46a] text-black px-10 py-4 rounded-xl font-bold"
        >
          Reservar por WhatsApp
        </a>
      </section>
    </main>
  );
}