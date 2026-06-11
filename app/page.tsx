"use client";

import { useState } from "react";
const activities = [
  [
    "Senderismo Estelar",
    "Ruta de montaña al atardecer, interpretación del cielo nocturno, constelaciones, mitología y observación con telescopios.",
    "/ruta-astronomica-01.jpg",
  ],
  [
    "Observación astronómica guiada",
    "Descubre planetas, cúmulos, nebulosas, galaxias y estrellas dobles con telescopios y explicaciones claras.",
    "/observacion-telescopio.jpg",
  ],
  [
    "Eventos especiales",
    "Eclipses, Perseidas, noches temáticas y experiencias privadas para grupos, alojamientos y empresas.",
    "/puesta-sol-guadarrama.jpg",
  ],
];

const gallery = [
  "/puesta-sol-guadarrama.jpg",
  "/ruta-astronomica-01.jpg",
  "/ruta-astronomica-02.jpg",
  "/observacion-telescopio.jpg",
  "/hero-senderismo-estelar.jpg",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/85 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/logo-madrid-astronomy-clean.png"
              className="w-14 h-14 object-contain"
              alt="Madrid Astronomy"
            />
            <strong>Madrid Astronomy</strong>
          </div>
 <div className="md:hidden relative z-[99999]">
  <button
    type="button"
    onClick={() => setMenuOpen(!menuOpen)}
    className="relative z-[99999] text-white text-3xl"
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  {menuOpen && (
    <div className="fixed top-24 right-4 w-72 rounded-2xl bg-[#020617] border border-white/20 p-6 shadow-2xl z-[99999]">
      <a href="#actividades" className="block py-3 text-white/80">
        Experiencias
      </a>

      <a href="#proximas" className="block py-3 text-white/80">
        Próximas actividades
      </a>

      <a href="#galeria" className="block py-3 text-white/80">
        Galería
      </a>

      <a href="#contacto" className="block py-3 text-white/80">
        Contacto
      </a>
    </div>
  )}
</div>
          <nav className="hidden md:flex gap-8 text-white/70 text-sm">
            <a href="#actividades" className="hover:text-[#d6b46a]">Experiencias</a>
            <a href="#proximas" className="hover:text-[#d6b46a]">Próximas actividades</a>
            <a href="#galeria" className="hover:text-[#d6b46a]">Galería</a>
            <a href="#contacto" className="hover:text-[#d6b46a]">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24">
        <img
          src="/hero-principal.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-95"
          alt="Senderismo Estelar en la Sierra de Guadarrama"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 w-full">
          <div className="max-w-3xl">
            <p className="text-[#d6b46a] uppercase tracking-[0.35em] text-sm font-bold mb-6">
              Astronomía en montaña
            </p>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              Descubre el cielo desde la montaña.
            </h1>

            <p className="text-lg text-white/85 max-w-xl mb-10 leading-relaxed">
              Senderismo estelar, observación astronómica, astrofotografía y
              experiencias privadas en la Sierra de Guadarrama.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#proximas"
                className="bg-[#d6b46a] text-black px-8 py-4 rounded-xl font-bold"
              >
                Ver próximas actividades
              </a>

              <a
                href="#contacto"
                className="border border-[#d6b46a]/70 px-8 py-4 rounded-xl font-bold hover:bg-[#d6b46a]/10"
              >
                Reservar experiencia
              </a>
            </div>
          </div>

          <div className="mt-20 bg-black/45 border border-white/15 backdrop-blur-xl rounded-3xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["4000+", "Participantes"],
              ["130+", "Experiencias realizadas"],
              ["20", "Años explorando el cielo"],
              ["100%", "Pasión por la astronomía"],
            ].map(([number, label]) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-black text-[#d6b46a]">{number}</div>
                <p className="text-white/75 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="actividades" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="/ruta-astronomica-02.jpg"
            alt="Senderismo Estelar"
            className="rounded-3xl w-full h-[600px] object-cover border border-white/10"
          />

          <div>
            <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm mb-4">
              Actividad principal
            </p>

            <h2 className="text-5xl font-black mb-8">Senderismo Estelar</h2>

            <p className="text-xl text-white/75 leading-relaxed mb-10">
              Caminamos al atardecer por entornos de montaña y, cuando cae la
              noche, interpretamos el cielo con telescopios, constelaciones,
              mitología y objetos de cielo profundo.
            </p>

            <div className="space-y-4 text-lg text-white/80">
              <div>✓ Ruta guiada de montaña</div>
              <div>✓ Puesta de sol en lugares privilegiados</div>
              <div>✓ Interpretación del cielo nocturno</div>
              <div>✓ Mitología y constelaciones</div>
              <div>✓ Observación con telescopios</div>
            </div>

            <a
              href="#proximas"
              className="inline-block mt-10 bg-[#d6b46a] text-black px-8 py-4 rounded-xl font-bold"
            >
              Ver próximas fechas
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm text-center mb-4">
          Experiencias
        </p>

        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
          Actividades astronómicas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map(([title, text, image]) => (
            <article
              key={title}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition"
            >
              <img src={image} alt={title} className="w-full h-72 object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-white/65 leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm mb-4">
              Bajo las estrellas
            </p>

            <h2 className="text-5xl font-black mb-8">Observación Astronómica</h2>

            <p className="text-xl text-white/75 leading-relaxed mb-10">
              Utilizamos telescopios para observar la Luna, planetas, cúmulos
              estelares, nebulosas, galaxias y estrellas dobles. La actividad
              está pensada para disfrutar y entender el cielo sin experiencia previa.
            </p>

            <div className="space-y-4 text-lg text-white/80">
              <div>✓ Telescopios de calidad</div>
              <div>✓ Explicaciones sencillas y directas</div>
              <div>✓ Objetos visibles según la época del año</div>
              <div>✓ Modo nocturno con luz roja</div>
            </div>
          </div>

          <img
            src="/observacion-telescopio.jpg"
            alt="Observación Astronómica"
            className="rounded-3xl w-full h-[600px] object-cover border border-white/10"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm text-center mb-4">
          Todo preparado
        </p>

        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
          ¿Qué incluye la experiencia?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["🔭", "Telescopios de calidad", "Observación con equipos seleccionados para disfrutar de la Luna, planetas y cielo profundo."],
            ["🌌", "Interpretación del cielo", "Explicaciones sencillas para reconocer constelaciones, estrellas y objetos visibles."],
            ["📸", "Astrofotografía", "Consejos prácticos para fotografiar la noche con cámara o móvil."],
            ["🏔️", "Entornos privilegiados", "Lugares elegidos por su oscuridad, paisaje y comodidad para la actividad."],
          ].map(([icon, title, text]) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </section>
<section className="px-6 py-24 bg-gradient-to-r from-[#0b1220] to-[#111827]">
  <div className="max-w-6xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>
        <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm mb-4">
          Próxima actividad destacada
        </p>

        <h2 className="text-5xl lg:text-6xl font-black mb-6">
          Senderismo Estelar
        </h2>

        <p className="text-white/70 text-xl mb-8">
          Ruta al atardecer seguida de observación astronómica guiada
          con telescopios bajo los cielos de la Sierra de Guadarrama.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-8">

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="text-[#d6b46a] text-sm mb-1">Fecha</div>
            <div className="font-bold text-xl">21 Junio 2026</div>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="text-[#d6b46a] text-sm mb-1">Precio</div>
            <div className="font-bold text-xl">39 €</div>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="text-[#d6b46a] text-sm mb-1">Lugar</div>
            <div className="font-bold text-xl">Guadarrama</div>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
            <div className="text-[#d6b46a] text-sm mb-1">Plazas</div>
            <div className="font-bold text-xl">Limitadas</div>
          </div>

        </div>

        <a
          href="#contacto"
          className="inline-block bg-[#d6b46a] text-black px-10 py-4 rounded-xl font-bold text-lg"
        >
          Reservar plaza
        </a>
      </div>

      <div>
        <img
          src="/hero-principal.jpg"
          alt="Senderismo Estelar"
          className="rounded-3xl w-full h-[550px] object-cover border border-white/10"
        />
      </div>

    </div>

  </div>
</section>
      <section id="proximas" className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm text-center mb-4">
          Próximas actividades
        </p>

        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
          Próximas experiencias
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["21 Junio 2026", "Senderismo Estelar", "Ruta al atardecer y observación astronómica en la Sierra de Guadarrama."],
            ["5 Julio 2026", "Astrofotografía nocturna", "Aprende a fotografiar la Vía Láctea y el paisaje nocturno."],
            ["12 Agosto 2026", "Perseidas bajo cielo oscuro", "Una de las noches más esperadas del año para observar estrellas fugaces."],
          ].map(([date, title, text]) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <p className="text-[#d6b46a] font-bold mb-3">{date}</p>
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="text-white/65 mb-6">{text}</p>
              <a href="#contacto" className="text-[#d6b46a] font-bold">
                Solicitar información →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="galeria" className="bg-[#07111f] px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm text-center mb-4">
            Galería
          </p>

          <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
            Experiencias reales en la montaña
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={image}
                className={index === 0 ? "md:col-span-2 overflow-hidden rounded-3xl" : "overflow-hidden rounded-3xl"}
              >
                <img
                  src={image}
                  alt="Madrid Astronomy"
                  className="h-[420px] w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm text-center mb-4">
          Opiniones
        </p>

        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16">
          Lo que dicen quienes ya han venido
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Laura M.", "Una experiencia preciosa, clara y emocionante."],
            ["Carlos R.", "Nunca había visto el cielo así."],
            ["Marta G.", "Perfecto para desconectar y vivir una noche especial."],
          ].map(([name, text]) => (
            <div key={name} className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="text-[#d6b46a] mb-4">★★★★★</div>
              <p className="text-white/70 mb-6">“{text}”</p>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 py-24">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm mb-4">
        Qué podrás observar
      </p>

      <h2 className="text-4xl lg:text-6xl font-black mb-6">
        El cielo cambia cada noche
      </h2>

      <p className="text-white/70 max-w-3xl mx-auto text-lg">
        Dependiendo de la época del año podremos observar distintos objetos
        astronómicos mediante telescopios y observación a simple vista.
      </p>
    </div>

    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

      {[
        ["🌙", "Luna"],
        ["🪐", "Planetas"],
        ["⭐", "Estrellas"],
        ["✨", "Dobles"],
        ["🌌", "Nebulosas"],
        ["🌠", "Galaxias"],
      ].map(([icon, title]) => (
        <div
          key={title}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
        >
          <div className="text-5xl mb-4">{icon}</div>
          <div className="font-bold">{title}</div>
        </div>
      ))}

    </div>

  </div>
</section>
 <section className="px-6 py-28 bg-black">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm mb-4">
        Astrofotografía
      </p>

      <h2 className="text-4xl lg:text-6xl font-black mb-6">
        El Universo a través de nuestros telescopios
      </h2>

      <p className="text-white/70 text-lg max-w-3xl mx-auto">
        Fotografías captadas durante nuestras observaciones astronómicas con telescopios digitales avanzados en algunos de los mejores cielos de la Sierra de Guadarrama.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img
  src="/luna.jpg"
  alt="Luna"
  className="w-full h-72 object-contain bg-black p-4"
/>
        <div className="p-5">
          <h3 className="text-xl font-bold">La Luna</h3>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img src="/m16.jpg" alt="M16" className="w-full h-72 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-bold">M16</h3>
          <p className="text-white/60">Nebulosa del Águila</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img src="/m17.jpg" alt="M17" className="w-full h-72 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-bold">M17</h3>
          <p className="text-white/60">Nebulosa Omega</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img src="/m27.jpg" alt="M27" className="w-full h-72 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-bold">M27</h3>
          <p className="text-white/60">Nebulosa Dumbbell</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img src="/m51.jpg" alt="M51" className="w-full h-72 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-bold">M51</h3>
          <p className="text-white/60">Galaxia del Remolino</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <img src="/m101.jpg" alt="M101" className="w-full h-72 object-cover" />
        <div className="p-5">
          <h3 className="text-xl font-bold">M101</h3>
          <p className="text-white/60">Galaxia del Molinete</p>
        </div>
      </div>

    </div>

  </div>
</section>
<section className="px-6 py-24">
  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <img
          src="/hero-principal.jpg"
          alt="Guía astronómico"
          className="w-full rounded-3xl object-cover h-[650px]"
        />
      </div>

      <div>

        <p className="text-[#d6b46a] uppercase tracking-[0.3em] text-sm mb-4">
          Tu guía
        </p>

        <h2 className="text-5xl font-black mb-6">
          Más de 20 años observando el cielo
        </h2>

        <p className="text-white/75 text-lg leading-relaxed mb-6">
          Mi objetivo es acercar la astronomía a cualquier persona de forma sencilla,
          práctica y entretenida. Durante cada actividad aprenderás a reconocer
          constelaciones, estrellas brillantes, cúmulos, nebulosas y galaxias visibles
          desde nuestros cielos.
        </p>

        <p className="text-white/75 text-lg leading-relaxed mb-8">
          Todas las observaciones se realizan con telescopios digitales y ópticos de última
          generación y explicaciones adaptadas tanto para principiantes como para
          aficionados avanzados.
        </p>

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-white/5 rounded-2xl p-5">
            <div className="text-3xl font-black text-[#d6b46a]">
              20+
            </div>
            <div className="text-white/70">
              Años observando
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-5">
            <div className="text-3xl font-black text-[#d6b46a]">
              4000+
            </div>
            <div className="text-white/70">
              Participantes
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-5">
            <div className="text-3xl font-black text-[#d6b46a]">
              130+
            </div>
            <div className="text-white/70">
              Actividades
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-5">
            <div className="text-3xl font-black text-[#d6b46a]">
              100%
            </div>
            <div className="text-white/70">
              Pasión por la astronomía
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      <section id="contacto" className="px-6 pb-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#d6b46a] to-[#b99042] rounded-[2rem] p-12 lg:p-16 text-black text-center">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            ¿Listo para mirar las estrellas?
          </h2>

          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-10">
            Solicita información para próximas salidas, grupos privados o experiencias especiales.
          </p>

          <a href="https://wa.me/34600000000" className="inline-block bg-black text-white px-10 py-4 rounded-xl font-bold">
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      <a href="https://wa.me/34600000000" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-black px-5 py-4 rounded-full font-black shadow-2xl">
        WhatsApp
      </a>
      <footer className="border-t border-white/10 mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12">

    <div className="grid md:grid-cols-3 gap-10">

      <div>
        <h3 className="font-black text-2xl mb-4">
          Madrid Astronomy
        </h3>

        <p className="text-white/60">
          Astronomía y montaña en la Sierra de Guadarrama.
        </p>
      </div>

      <div>
        <h4 className="font-bold mb-4">Actividades</h4>

        <ul className="space-y-2 text-white/60">
          <li>Senderismo Estelar</li>
          <li>Observación Astronómica</li>
          <li>Astrofotografía</li>
          <li>Eventos Privados</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-4">Contacto</h4>

        <p className="text-white/60">
          Sierra de Guadarrama · Madrid
        </p>
      </div>

    </div>

    <div className="border-t border-white/10 mt-10 pt-8 text-center text-white/40">
      © 2026 Madrid Astronomy
    </div>

  </div>
</footer>
    </main>
  );
} 