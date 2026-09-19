import {
  ESPINAZO,
  TrenzaFondo,
  TrenzaFrente,
  TrenzaMovil,
  RemateEspinazo,
} from "@/components/trenza";
import {
  Cabo,
  IconoAsamblea,
  IconoCruce,
  IconoDocumento,
  IconoSobre,
  IconoSucursal,
  IconoTelefono,
  Isotipo,
} from "@/components/marcas";
import {
  asociarse,
  contacto,
  marca,
  mecanismo,
  navegacion,
  productos,
  transparencia,
} from "@/lib/contenido";

export default function Inicio() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-fibra focus:px-4 focus:py-2 focus:text-anil-900 focus:font-semibold"
      >
        Saltar al contenido
      </a>

      <Encabezado />

      <main id="contenido" className="flex-1">
        <Portada />

        {/* El espinazo arranca donde el trenzado del primer viewport termina:
            es la MISMA hebra saliendo del tejido y recorriendo la página. Va
            por encima del fondo de las secciones, cada frontera lleva su junta
            —la rotura es deliberada, no un corte— y al final se deshilacha en
            vez de terminar a escuadra. */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="espinazo pointer-events-none absolute top-0 bottom-0 left-1 w-[14px] opacity-80 sm:left-3 sm:w-[26px] sm:opacity-100"
            style={{ backgroundImage: ESPINAZO, backgroundSize: "100% 132px" }}
          />
          <RemateEspinazo className="pointer-events-none absolute bottom-0 left-1 z-[6] h-[46px] w-[14px] translate-y-[44px] sm:left-3 sm:w-[26px]" />

          <Mecanismo />
          <Productos />
          <Gobierno />
          <Asociarse />
          <Contacto />
        </div>
      </main>

      <PieDePagina />
    </>
  );
}

/** La rotura deliberada del tramo continuo, en la frontera de cada sección. */
function JuntaEspinazo() {
  return (
    <span
      aria-hidden="true"
      className="junta-espinazo absolute left-1 w-[14px] sm:left-3 sm:w-[26px]"
    />
  );
}

/* ---------------------------------------------------------------- Encabezado */

function Encabezado() {
  return (
    <header className="sticky top-0 z-40 border-b border-borde bg-anil-900/92 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-[1240px] items-center gap-3 px-5 py-3.5 sm:gap-6 sm:px-8">
        <a href="#contenido" className="flex min-w-0 shrink items-center gap-2.5 text-fibra no-underline">
          <Isotipo size={28} className="shrink-0" />
          <span className="truncate font-display text-[1.05rem] leading-none font-extrabold tracking-[-0.03em] sm:text-[1.32rem]">
            {marca.nombre}
          </span>
        </a>

        <nav aria-label="Secciones" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacion.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="block px-3 py-2 text-[0.95rem] font-medium text-fibra-media no-underline transition-colors hover:text-fibra"
                >
                  {n.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#asociarse"
          className="ml-auto shrink-0 bg-anilina px-3.5 py-2.5 text-[0.92rem] leading-none font-bold text-anil-900 no-underline transition-transform hover:-translate-y-0.5 sm:px-4 sm:text-[0.95rem] lg:ml-0"
        >
          <span className="sm:hidden">Asociarme</span>
          <span className="hidden sm:inline">Cómo asociarse</span>
        </a>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------- Portada */

function Portada() {
  return (
    <section className="relative overflow-hidden border-b border-borde bg-anil-850">
      {/* En móvil la trenza pierde el eje, nunca el grosor */}
      <div className="relative h-[176px] overflow-hidden md:hidden">
        <TrenzaMovil className="absolute inset-0 h-full w-full" />
      </div>

      <div className="relative isolate md:min-h-[min(78vh,720px)]">
        {/* Capa de atrás del trenzado */}
        <TrenzaFondo className="absolute inset-0 -z-10 hidden h-full w-full md:block" />

        <div className="relative z-0 mx-auto max-w-[1240px] px-6 pt-[clamp(3.5rem,8vw,7rem)] pb-[clamp(4rem,9vw,7.5rem)] sm:px-8 md:pl-[clamp(4.5rem,7vw,8rem)]">
          <h1 className="max-w-[13ch] font-display text-[clamp(2.5rem,6.2vw,5.2rem)] leading-[1.08] font-extrabold">
            {marca.tesis}
          </h1>

          <p className="mt-8 max-w-[46ch] md:mt-16 text-[clamp(1.08rem,1.55vw,1.36rem)] leading-[1.5] text-fibra">
            {marca.bajada}
          </p>
        </div>

        {/* Capa de delante: estas hebras pasan POR ENCIMA del titular.
            Sin eventos de puntero, para no robar los clics de abajo. */}
        <TrenzaFrente className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full md:block" />
      </div>

      {/* La acción primaria sale del trenzado, no flota aparte */}
      <div className="relative z-20 mx-auto max-w-[1240px] px-6 pb-[clamp(3.5rem,8vw,6rem)] sm:px-8 md:-mt-[clamp(3rem,7vw,7.5rem)] md:pl-[clamp(4.5rem,7vw,8rem)]">
        <div className="flex max-w-[700px] flex-col gap-3">
          <a
            href="#asociarse"
            data-hebra="encima"
            className="group flex items-center justify-between gap-5 px-6 py-6 no-underline sm:px-8"
          >
            <span className="min-w-0">
              <span className="block font-display text-[clamp(1.3rem,2.4vw,1.7rem)] leading-tight font-bold text-fibra">
                Quiero asociarme
              </span>
              <span className="mt-1.5 block text-[1rem] text-fibra-media">
                Los cuatro pasos reales, sin promesas de trámite instantáneo
              </span>
            </span>
            <IconoCruce
              size={34}
              className="shrink-0 text-anilina-claro transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#socio"
            data-hebra="debajo"
            className="flex items-center justify-between gap-5 px-6 py-5 no-underline sm:px-8"
          >
            <span className="text-[1.06rem] font-semibold text-fibra">
              Primero explícame qué es una cooperativa
            </span>
            <IconoAsamblea size={28} className="shrink-0 text-fibra-honda" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ El mecanismo: socio ≠ cliente */

function Mecanismo() {
  return (
    <section
      id="socio"
      data-tinte="si"
      className="trama relative border-t border-borde py-[clamp(4.5rem,9vw,7.5rem)]"
    >
      <JuntaEspinazo />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="max-w-[30ch] font-display text-[clamp(2rem,4.2vw,3.3rem)] font-bold">
          Aquí no hay clientes. Hay dueños.
        </h2>
        <p className="medida mt-6 text-[1.08rem] text-fibra-media">
          Esa no es una frase de campaña: es la figura jurídica. Cada afirmación de abajo
          viene con la maquinaria que la sostiene, porque una afirmación sin maquinaria es
          publicidad.
        </p>

        <ul className="mt-14 grid gap-px bg-borde md:grid-cols-2">
          {mecanismo.map((m) => (
            <li key={m.afirmacion} className="bg-anil-tinte px-6 py-8 sm:px-8 sm:py-10">
              <h3 className="font-display text-[1.6rem] leading-[1.12] font-bold text-fibra">
                {m.afirmacion}
              </h3>
              <p className="mt-4 max-w-[46ch] text-[1.02rem] text-fibra">{m.explica}</p>

              <div className="junta mt-7 mb-5" />

              <p className="max-w-[46ch] text-[0.97rem] leading-[1.58] text-fibra-media">
                <span className="font-semibold text-ocre">La maquinaria. </span>
                {m.maquinaria}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Productos */

function Productos() {
  return (
    <section
      id="productos"
      className="relative border-t border-borde bg-anil-850 py-[clamp(4.5rem,9vw,7.5rem)]"
    >
      <JuntaEspinazo />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="max-w-[28ch] font-display text-[clamp(2rem,4.2vw,3.3rem)] font-bold">
          Cuatro hebras, un solo trenzado.
        </h2>
        <p className="medida mt-6 text-[1.08rem] text-fibra-media">
          Tu ahorro financia el crédito de otro socio, y el de otro socio financia el tuyo.
          Abre la hebra que te toca.
        </p>

        <div className="mt-14 flex flex-col gap-3">
          {productos.map((p) => (
            <details key={p.id} data-hebra="debajo" className="group px-6 py-5 sm:px-8">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                  <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-none font-bold text-fibra">
                    {p.titulo}
                  </h3>
                  {/* Anunciar antes de ejecutar: se dice qué va a aparecer, antes de abrirlo */}
                  <span className="text-[0.92rem] font-semibold tracking-wide text-anilina-claro uppercase">
                    <span className="group-open:hidden">Abre {p.items.length} modalidades</span>
                    <span className="hidden group-open:inline">Cierra</span>
                  </span>
                </div>
                <p className="mt-3 max-w-[62ch] text-[1.02rem] text-fibra-media">{p.resumen}</p>
              </summary>

              <div className="mt-7">
                {/* Reglas finas, no tarjetas dentro de tarjetas: el suelo de la
                    hebra se ve a través y no queda ninguna celda huérfana. */}
                <dl className="grid border-t border-borde sm:grid-cols-2">
                  {p.items.map((it) => (
                    <div
                      key={it.nombre}
                      className="border-b border-borde py-5 pr-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8"
                    >
                      <dt className="text-[1.04rem] font-semibold text-fibra">{it.nombre}</dt>
                      <dd className="mt-1.5 max-w-[42ch] text-[0.96rem] text-fibra-media">
                        {it.detalle}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 flex items-center gap-3">
                  <Cabo>{p.rendimiento.pendiente}</Cabo>
                </p>
              </div>
            </details>
          ))}
        </div>

        <p className="medida mt-10 text-[0.97rem] text-fibra-media">
          Los cabos sueltos de arriba no son un descuido de diseño: son las cifras que esta
          institución todavía no ha publicado. Preferimos dejarlas deshilachadas antes que
          rellenarlas con un número que suene bien.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Gobierno */

function Gobierno() {
  return (
    <section
      id="gobierno"
      data-densa="si"
      className="trama relative border-t border-borde bg-anil-900 py-[clamp(4.5rem,9vw,7.5rem)]"
    >
      <JuntaEspinazo />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="max-w-[26ch] font-display text-[clamp(2rem,4.2vw,3.3rem)] font-bold">
          Quien decide aquí eres tú, una vez al año.
        </h2>

        <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="medida text-[1.08rem] text-fibra">
              La asamblea general es el órgano máximo, y la componen los socios. Elige a los
              dos consejos, aprueba o rechaza los estados financieros del ejercicio y decide
              qué se hace con el excedente.
            </p>

            <dl className="mt-9 flex flex-col gap-7">
              <div>
                <dt className="font-display text-[1.22rem] font-bold text-fibra">
                  Consejo de Administración
                </dt>
                <dd className="mt-2 max-w-[46ch] text-[0.99rem] text-fibra-media">
                  Electo por la asamblea. Dirige la institución y responde ante los socios que
                  lo eligieron.
                </dd>
              </div>
              <div>
                <dt className="font-display text-[1.22rem] font-bold text-fibra">
                  Consejo de Vigilancia
                </dt>
                <dd className="mt-2 max-w-[46ch] text-[0.99rem] text-fibra-media">
                  También electo por la asamblea, e independiente del de Administración. Tiene
                  acceso a los libros y su trabajo es fiscalizar por dentro.
                </dd>
              </div>
              <div>
                <dt className="font-display text-[1.22rem] font-bold text-fibra">
                  Marco legal
                </dt>
                <dd className="mt-2 max-w-[46ch] text-[0.99rem] text-fibra-media">
                  Las cooperativas de ahorro y crédito dominicanas se rigen por la Ley 127-64
                  de Asociaciones Cooperativas y por su propio estatuto, aprobado en asamblea.
                </dd>
              </div>
            </dl>
          </div>

          {/* Los documentos como tramas que cruzan el espinazo */}
          <div>
            <h3 className="font-display text-[1.35rem] font-bold text-fibra">
              Documentos que puedes exigir
            </h3>
            <p className="mt-3 max-w-[42ch] text-[0.97rem] text-fibra-media">
              Ser dueño incluye el derecho a leer. Esta es la lista completa, con lo que falta
              por publicar a la vista.
            </p>
            <ul className="mt-7 flex flex-col">
              {transparencia.map((t) => (
                <li
                  key={t.documento}
                  className="grid gap-y-2 border-b border-borde py-4 first:border-t sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-x-8"
                >
                  <span className="flex items-start gap-3 text-[1.01rem] font-medium text-fibra">
                    <IconoDocumento size={19} className="mt-1 shrink-0 text-fibra-honda" />
                    {t.documento}
                  </span>
                  <Cabo>{t.estado.pendiente}</Cabo>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Asociarse */

function Asociarse() {
  return (
    <section
      id="asociarse"
      className="relative border-t border-borde bg-anil-800 py-[clamp(4.5rem,9vw,7.5rem)]"
    >
      <JuntaEspinazo />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <h2 className="max-w-[26ch] font-display text-[clamp(2rem,4.2vw,3.3rem)] font-bold">
          Cómo te vuelves dueño.
        </h2>
        <p className="medida mt-6 text-[1.08rem] text-fibra">{asociarse.intro}</p>

        <ol className="mt-14 flex flex-col gap-3">
          {asociarse.pasos.map((p, i) => (
            <li
              key={p.paso}
              data-hebra={i === 0 ? "encima" : "debajo"}
              className="flex flex-col gap-x-8 gap-y-3 px-6 py-7 sm:flex-row sm:px-8"
            >
              <span
                aria-hidden="true"
                className="shrink-0 font-display text-[1.6rem] leading-none font-extrabold text-anilina tabular-nums sm:w-10"
              >
                {i + 1}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[1.3rem] leading-tight font-bold text-fibra">
                  {p.paso}
                </span>
                <span className="mt-2.5 block max-w-[58ch] text-[1.01rem] text-fibra-media">
                  {p.detalle}
                </span>
                {"monto" in p && p.monto ? (
                  <span className="mt-4 block">
                    <Cabo>{p.monto.pendiente}</Cabo>
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Contacto */

function Contacto() {
  const canales = [
    {
      Icono: IconoSucursal,
      rotulo: "Ve a una sucursal",
      apoyo: "Es donde se abre el expediente y donde se firma. El canal principal.",
      valor: contacto.sucursales.pendiente,
      paso: "encima" as const,
    },
    {
      Icono: IconoTelefono,
      rotulo: "Llama antes de ir",
      apoyo: "Para confirmar horario y qué documentos te van a pedir.",
      valor: contacto.telefono.pendiente,
      paso: "debajo" as const,
    },
    {
      Icono: IconoSobre,
      rotulo: "Escribe si prefieres",
      apoyo: "Consultas que no requieren presencia, y dudas sobre el estatuto.",
      valor: contacto.correo.pendiente,
      paso: "debajo" as const,
    },
  ];

  return (
    <section
      id="contacto"
      data-tinte="si"
      className="trama relative border-t border-borde py-[clamp(4.5rem,9vw,7.5rem)]"
      style={{ ["--trama-v" as string]: "color-mix(in oklab, var(--fibra) 11%, transparent)" }}
    >
      <JuntaEspinazo />
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <h2 className="max-w-[24ch] font-display text-[clamp(2rem,4.2vw,3.3rem)] font-bold">
          El último paso lo damos en persona.
        </h2>
        <p className="medida mt-6 text-[1.08rem] text-fibra">
          Ninguna cooperativa seria te abre una cuenta por un formulario y sin verte la cédula.
          Ve a una sucursal, pregunta por un oficial de negocios y llévale esta lista.
        </p>

        {/* Tres hebras, no tres tarjetas iguales con su iconito */}
        <div className="mt-12 flex max-w-[860px] flex-col gap-3">
          {canales.map(({ Icono, rotulo, apoyo, valor, paso }) => (
            <div
              key={rotulo}
              data-hebra={paso}
              className="flex flex-col gap-x-8 gap-y-4 px-6 py-6 sm:flex-row sm:items-center sm:px-8"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[1.28rem] leading-tight font-bold text-fibra">
                  {rotulo}
                </span>
                <span className="mt-1.5 block max-w-[44ch] text-[0.99rem] text-fibra-media">
                  {apoyo}
                </span>
              </span>
              <span className="flex items-center gap-4 sm:shrink-0">
                <Cabo>{valor}</Cabo>
                <Icono size={22} className="shrink-0 text-fibra-honda" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Pie de página */

function PieDePagina() {
  return (
    <footer className="border-t border-borde-firme bg-anil-900">
      <div className="mx-auto max-w-[1240px] px-5 py-[clamp(3.5rem,7vw,6rem)] sm:px-8">
        {/* El cierre: la tesis vuelve, ya entendida */}
        <p className="max-w-[30ch] font-display text-[clamp(1.75rem,3.6vw,2.9rem)] leading-[1.06] font-bold text-fibra">
          Una hebra sola no carga nada. Trenzada, carga una casa.
        </p>

        <div className="junta mt-12 mb-10" />

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3 text-fibra">
            <Isotipo size={28} />
            <span className="font-display text-[1.1rem] leading-none font-extrabold">
              {marca.nombre}
            </span>
          </div>

          <nav aria-label="Secciones del pie">
            <ul className="flex flex-wrap gap-x-7 gap-y-2.5">
              {navegacion.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[0.97rem] text-fibra-media no-underline hover:text-fibra"
                  >
                    {n.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Aviso obligatorio: esto es una demostración, no una institución real */}
        <div className="mt-14 border border-ocre/45 px-5 py-5">
          <p className="max-w-[78ch] text-[0.95rem] leading-[1.6] text-fibra-media">
            <strong className="font-bold text-ocre">Esta web es una demostración de diseño.</strong>{" "}
            «{marca.nombre}» es una marca inventada para este proyecto: no existe como
            institución, no capta ahorros y no otorga créditos. No contiene tasas, plazos,
            montos, cifras ni nombres de directivos reales — todos los datos de ese tipo
            aparecen marcados como cabos sueltos, sin rellenar. Antes de cualquier uso público
            hay que verificar la disponibilidad del nombre en ONAPI y en el registro de
            IDECOOP.
          </p>
        </div>
      </div>
    </footer>
  );
}
