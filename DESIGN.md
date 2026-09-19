---
name: Cooperativa Raíz
description: Pleita dominicana tejida en código — fibra de palma teñida en anilina sobre verde saturado, donde cada estado lleva marca física.
colors:
  anil-900: "#061c15"
  anil-850: "#08231b"
  anil-800: "#0c3026"
  anil-700: "#114036"
  anil-600: "#17564a"
  anil-tinte: "#0f5d4b"
  fibra: "#e8e2cc"
  fibra-media: "#cfcbb0"
  fibra-honda: "#7d8271"
  anilina: "#e8407f"
  anilina-claro: "#ff7fae"
  anilina-honda: "#b9345f"
  ocre: "#e5a052"
  ocre-tinte: "#f5c78e"
  ocre-hondo: "#c07b33"
  borde: "color-mix(in oklab, #e8e2cc 16%, transparent)"
  borde-firme: "color-mix(in oklab, #e8e2cc 30%, transparent)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.2vw, 5.2rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.3rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.028em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.028em"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-guia:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.025em"
  cabo:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  none: "0"
  foco: "1px"
spacing:
  hebra-gap: "12px"
  texto-paso: "24px"
  bloque: "56px"
  seccion: "clamp(4.5rem, 9vw, 7.5rem)"
  borde-pagina: "20px"
  borde-pagina-sm: "32px"
  trama-paso: "20px"
  trama-hebra: "13px"
components:
  hebra-encima:
    backgroundColor: "{colors.anil-700}"
    textColor: "{colors.fibra}"
    rounded: "{rounded.none}"
    padding: "24px 32px"
  hebra-debajo:
    backgroundColor: "{colors.anil-800}"
    textColor: "{colors.fibra}"
    rounded: "{rounded.none}"
    padding: "20px 32px"
  hebra-debajo-hover:
    backgroundColor: "{colors.anil-700}"
    textColor: "{colors.fibra}"
  boton-anilina:
    backgroundColor: "{colors.anilina}"
    textColor: "{colors.anil-900}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
  cabo:
    textColor: "{colors.ocre}"
    typography: "{typography.cabo}"
    rounded: "{rounded.none}"
  nav-enlace:
    textColor: "{colors.fibra-media}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  nav-enlace-hover:
    textColor: "{colors.fibra}"
  region-tinte:
    backgroundColor: "{colors.anil-tinte}"
    textColor: "{colors.fibra}"
    rounded: "{rounded.none}"
    padding: "{spacing.seccion}"
  aviso-ocre:
    backgroundColor: "{colors.anil-900}"
    textColor: "{colors.fibra-media}"
    rounded: "{rounded.none}"
    padding: "20px"
---

# Sistema de diseño: Cooperativa Raíz

## Overview

**Creative North Star: "La Pleita"**

La pleita es el trenzado de fibra de palma dominicano: hebras planas, cortadas a filo, que
por separado no cargan nada y trenzadas cargan una casa. Este sistema no *ilustra* la pleita,
la construye: el trenzado del primer viewport, la trama de fondo, el espinazo que recorre la
página y las filas de acción son todos el mismo material, dibujado en código con cruces
reales donde una hebra pasa por encima de otra y le abre el hueco al pasar. Con todo el
contenido retirado, la página sigue siendo reconocible.

El mundo es oscuro y saturado, no oscuro y neutro. El verde anilina ocupa regiones enteras
—no acentos— y cambia de baño al cambiar de sección; la tinta es fibra cruda, un hueso
cálido, nunca blanco puro. Los acentos son dos tinturas, fucsia de anilina y ocre quemado, y
se usan por inmersión: cada color existe en varios baños de la misma tintura, no en mezclas
arbitrarias. La densidad es alta en texto y baja en cromo: no hay tarjetas flotando en una
rejilla, hay hebras apiladas con 12px de aire entre ellas y reglas finas de 1px por dentro.

Rechazo confirmado por el contrato de dirección y sostenido por el build: el surco del sector
financiero —rejilla de tarjetas iguales con iconito, héroe de cifra grande, azul corporativo
con foto de familia sonriendo— no entra aquí. Tampoco entra el relleno: donde no hay dato, se
dibuja un **cabo suelto** deshilachado, nunca un número plausible.

**Key Characteristics:**
- Verde anilina en regiones completas, con baños que cambian por sección (`anil-900` → `anil-tinte`).
- Cero radios: todo canto es recto porque la fibra se corta a filo.
- Todo estado lleva marca física —punzón, levantamiento, hundido, deshilachado— nunca solo tono.
- Un solo tramo continuo (el espinazo) recorre la página; cada rotura es una junta deliberada.
- Trama, trenzado, isotipo e iconos dibujados a mano en SVG; sin glifos, sin emoji, sin librería de iconos.
- Toda cifra inexistente se muestra como cabo suelto, con su equivalente para lectores de pantalla.

## Colors

Una tierra verde en cinco baños, una tinta de fibra cruda y dos tinturas de acento; ningún
color entra si no es un baño de una tintura que ya existe.

### Primary
- **Anilina fucsia** (`{colors.anilina}`): la hebra activa. Pinta el punzón que sujeta toda
  hebra que pasa por encima, el botón primario del encabezado, el numeral de paso en
  «Cómo te vuelves dueño» y una de las cinco hebras del trenzado y del espinazo. Sobre
  `anil-850` da 4.32:1 — sirve para texto grande y marcas, no para cuerpo.
- **Anilina clara** (`{colors.anilina-claro}`): el baño que sí lee en pequeño (7.03:1 sobre
  `anil-850`). Anillo de foco de toda la página, caret de campos, etiquetas de anuncio de
  estado y la flecha de cruce del botón primario.
- **Anilina honda** (`{colors.anilina-honda}`): el mismo tinte en inmersión larga. Solo como
  hebra de trenzado en la capa de atrás, para que el cruce se lea por profundidad.

### Secondary
- **Ocre quemado** (`{colors.ocre}`): la segunda tintura, reservada a lo pendiente y a lo
  advertido: el cabo suelto, el rótulo «La maquinaria» y el marco del aviso de demostración.
- **Ocre de tinte** (`{colors.ocre-tinte}`): el mismo ocre subido para que aguante sobre el
  fondo claro; se activa solo, por remapeo, dentro de una región teñida.
- **Ocre hondo** (`{colors.ocre-hondo}`): baño profundo, únicamente como hebra de trenzado.

### Neutral
- **Anil 900** (`{colors.anil-900}`): la tierra más honda. Encabezado pegajoso (al 92% con
  desenfoque de 2px), sección de gobierno, pie de página, canal del scrollbar y encasquillado
  del isotipo.
- **Anil 850** (`{colors.anil-850}`): el fondo del documento y el de la portada y los
  productos. Es el color del `html`, así que el sobredesplazamiento nunca deja ver blanco.
- **Anil 800** (`{colors.anil-800}`): fondo de la sección «Cómo te vuelves dueño» y de toda
  hebra en reposo (`debajo`).
- **Anil 700** (`{colors.anil-700}`): la hebra que pasa por encima y el estado hover de la
  que está debajo. Es el único salto de fondo que hace el sistema al interactuar.
- **Anil 600** (`{colors.anil-600}`): pulgar del scrollbar; la única superficie de cromo del
  navegador que el sistema pinta.
- **Anil tinte** (`{colors.anil-tinte}`): el baño donde la anilina por fin se lee como
  tintura y no como casi negro. Ocupa regiones enteras (el mecanismo y el contacto).
- **Fibra** (`{colors.fibra}`): la tinta. Todo titular y todo texto que carga sentido;
  12.78:1 sobre `anil-850`, 6.02:1 sobre `anil-tinte`.
- **Fibra media** (`{colors.fibra-media}`): texto de apoyo y navegación. 10.12:1 sobre
  `anil-850`, 4.77:1 sobre `anil-tinte`.
- **Fibra honda** (`{colors.fibra-honda}`): **material no textual.** Iconos de acompañamiento,
  la marca de 46px de la junta, el placeholder y el pulgar del scrollbar en hover. Sobre
  cualquier tierra queda por debajo de 4.5:1 y no califica como color de texto.
- **Borde** / **Borde firme** (`{colors.borde}` / `{colors.borde-firme}`): la fibra misma
  rebajada por mezcla. El borde firme marca la hebra activa y el corte del pie.

### Named Rules

**La Regla del Baño.** Un color nuevo se obtiene sumergiendo más tiempo una tintura que ya
existe, nunca mezclando dos. Toda variante es `<tintura>` / `<tintura>-claro` /
`<tintura>-hondo`; si un tono no cabe en esa familia, no entra en el sistema.

**La Regla de la Región Teñida.** Al cambiar la tierra se cambian los tokens que dependen de
ella, no los textos. `[data-tinte="si"]` pinta la región con `anil-tinte` y remapea en el
mismo sitio `--ocre` → `ocre-tinte`, `--borde` 16% → 22%, `--borde-firme` 30% → 38% y
`--casquillo` → `anil-tinte`, de modo que el contraste y el hueco del cruce sobreviven al
cambio de fondo. Cualquier tierra nueva se introduce con su propio bloque de remapeo o no se
introduce.

**La Regla de la Fibra Honda.** `fibra-honda` dibuja, no habla. Iconos, reglas y marcas
físicas sí; texto legible nunca.

## Typography

**Display Font:** Bricolage Grotesque (con `system-ui, sans-serif` de reserva), pesos 500 / 700 / 800
**Body Font:** Archivo (con `system-ui, sans-serif` de reserva), pesos 400 / 500 / 600 / 700

Ambas se sirven desde el propio dominio vía `next/font`, con `display: swap` y
`font-synthesis-weight: none`: si un peso no está, no se finge.

**Character:** Bricolage aporta anchos irregulares y trampas de tinta —tiene grano, como la
fibra—; Archivo aporta costados planos y una altura de x generosa que aguanta lectura larga
en móvil. La pareja suena artesanal en el titular y administrativa en el cuerpo, que es
exactamente la promesa: espectáculo arriba, maquinaria al lado.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 6.2vw, 5.2rem)`, 1.08, `-0.028em`, máx. 13ch): la tesis
  del primer viewport, leída *dentro* del trenzado. Una sola vez por página.
- **Headline** (700, `clamp(2rem, 4.2vw, 3.3rem)`, 1.02, `text-wrap: balance`): el titular de
  cada sección, limitado a 24–30ch para que rompa en dos o tres líneas macizas.
- **Title** (700, 1.22rem–1.6rem, 1.12): la afirmación de cada hebra, el nombre de cada
  consejo, el rótulo de cada canal de contacto.
- **Body** (400, 1.0625rem/17px, 1.6, `text-wrap: pretty`): el piso de legibilidad de la
  audiencia; el cuerpo nunca baja de ahí. Los párrafos de guía suben a 1.08rem y se cortan a
  `68ch` con la clase de medida.
- **Label** (600, 0.92rem, `0.025em`, versalitas): exclusivamente el anuncio de estado
  («Abre 3 modalidades» / «Cierra») junto a un título, en `anilina-claro`.
- **Cabo** (600, 0.9375rem, `0.01em`, en ocre): el texto de todo dato pendiente, siempre
  precedido por su icono deshilachado.

### Named Rules

**La Regla del Piso de 17px.** El cuerpo arranca en 1.0625rem y el texto denso —requisitos,
detalles de modalidad, notas al pie— no baja de 0.95rem. La audiencia incluye lectores
mayores en pantalla pequeña; el tamaño no se negocia por composición.

**La Regla de la Medida.** Todo bloque de prosa lleva su tope de línea: `68ch` para la
prosa de sección, 42–62ch para el texto dentro de una hebra. Ninguna línea cruza el ancho del
contenedor.

**La Regla de las Versalitas Cortas.** Las versalitas solo existen como anuncio de estado al
lado de un título, en línea de base compartida con él. Nunca encima de un titular, nunca como
categoría: un rótulo en versalitas sobre un título es un *eyebrow*, y este mundo no los usa.

## Layout

Un contenedor único de `max-width: 1240px` centrado, con margen de página de 20px que sube a
32px a partir de `sm`; la portada añade un sangrado izquierdo de `clamp(4.5rem, 7vw, 8rem)` a
partir de `md` para dejar salir el trenzado por el borde. Las secciones respiran con
`padding-block: clamp(4.5rem, 9vw, 7.5rem)` y se separan con un borde superior de 1px, nunca
con un hueco vacío.

El ritmo vertical es de tres pasos y no más: 12px entre hebras hermanas, 24px entre un
titular y su párrafo, 56px entre el bloque de entrada y la lista que lo desarrolla. Las
listas de hebras son columnas simples (`flex-col gap-3`) en todos los anchos; solo el
mecanismo (2 columnas con separación de 1px sobre `borde`, a partir de `md`), las modalidades
de producto (2 columnas con reglas finas, a partir de `sm`) y gobierno
(`1.05fr 1fr`, a partir de `lg`) se dividen, y siempre con número par de celdas para que
ninguna quede huérfana.

El primer viewport ocupa `min(78vh, 720px)` a partir de `md` y ahí el trenzado va en dos
capas, con el titular maquetado entre ellas. Por debajo de `md` el trenzado se sustituye por
una banda horizontal de 176px: **la trenza pierde el eje, nunca el grosor.** La navegación
completa solo aparece a partir de `lg`; por debajo queda el isotipo, el nombre y la acción
primaria, que rota su texto («Asociarme» / «Cómo asociarse») en lugar de encogerse.

### Named Rules

**La Regla del Espinazo.** Un solo tramo de trenza de longitud de onda exacta (26×132px,
repetido en vertical) recorre el `main` completo por el borde izquierdo, por encima del fondo
de las secciones. Recorre el scroll con `animation-timeline: scroll(root block)`, lleva una
junta en cada frontera de sección y termina deshilachado, no a escuadra. Toda sección nueva
hereda su junta.

## Elevation & Depth

La profundidad de este sistema es tejido, no capa de cristal. El orden de pintado importa más
que la sombra: cada hebra se corta donde cambia de profundidad, los tramos de atrás se pintan
antes y un trazo de encasquillado del color del fondo (42px de ancho bajo un trazo de fibra
de 30px) abre el hueco real del cruce. Por eso el trenzado se lee como tejido incluso cuando
el navegador no aplica ninguna sombra.

Las sombras existen y son difusas y direccionales —luz de arriba, nunca desplazamiento duro—
y solo aparecen sobre la hebra que pasa por encima y sobre su punzón. Sobre esa sombra se
suman tres marcas no cromáticas: un levantamiento de 2px, un borde que pasa de `borde` a
`borde-firme` y el punzón mismo.

### Shadow Vocabulary
- **Hebra encima** (`box-shadow: 0 12px 30px -10px rgb(0 0 0 / 0.62), 0 3px 6px -3px rgb(0 0 0 / 0.45)`):
  la hebra activa o la acción primaria. Es la única sombra doble del sistema.
- **Hebra en hover** (`box-shadow: 0 8px 22px -10px rgb(0 0 0 / 0.5)`): la hebra disponible
  cuando el puntero o el foco entra en ella.
- **Punzón** (`box-shadow: 0 3px 6px rgb(0 0 0 / 0.55)`): el alfiler de 11px girado 45° que
  sujeta la hebra al cruzar.
- **Junta del espinazo** (`box-shadow: 0 0 0 2px var(--anil-900)`): no es sombra sino cerco;
  aísla la rotura de 5px del tramo continuo para que se vea como corte y no como mancha.

### Named Rules

**La Regla del Tejido Antes que la Sombra.** La profundidad se declara cortando la hebra y
pintando el encasquillado. La sombra es confirmación, nunca la única prueba: si se quitan
todas las sombras, el cruce debe seguir leyéndose.

## Shapes

Radio cero en todo el sistema. La fibra de pleita se corta a filo, así que ninguna superficie
—hebra, botón, aviso, celda, isotipo— lleva esquina curva; la única excepción es el
`border-radius: 1px` del anillo de foco, que existe para que el trazo no se vea roto en las
esquinas.

Los bordes son direccionales, no contornos. Una hebra cortada tiene dos cantos largos y dos
extremos de corte: por eso `[data-hebra]` lleva borde arriba y abajo y nada a los lados. Las
listas se separan con reglas de 1px del mismo token de borde, y las rejillas usan una
separación de 1px sobre un fondo de `borde` en vez de dibujar cada celda.

Los iconos son un juego propio, todos dibujados a mano: lienzo de 24 (34 para el isotipo),
trazo de 1.7, `stroke-linecap: butt` y `stroke-linejoin: miter` —remates rectos, porque la
fibra no se redondea—, `fill: none` y `currentColor`. El isotipo es un tejido de 2×2 con
alternancia real de cruce y hueco encasquillado, legible a 26px.

### Named Rules

**La Regla del Canto Recto.** Radio 0 en toda superficie; remate a escuadra en todo trazo. Un
borde redondeado o un `stroke-linecap: round` es material equivocado, no una variante.

**La Regla de la Regla Fina.** Dentro de una hebra no entra otra hebra. La jerarquía interna
se dibuja con reglas de 1px sobre `borde`, de modo que el suelo de la hebra se ve a través.

## Components

El tacto general es de material trabajado: superficies planas y mates, cantos vivos, y un
movimiento corto y decelerado (260ms, `cubic-bezier(0.16, 1, 0.3, 1)`) cuando algo cambia de
profundidad.

### Buttons
- **Shape:** rectángulo puro, sin radio (`{rounded.none}`).
- **Primary:** fondo `anilina` con texto `anil-900` en 700, padding 10px/14px que sube a
  10px/16px en `sm` (4.62:1). Es el único botón relleno de la página y solo lleva la acción
  de asociarse.
- **Hover / Focus:** el relleno no cambia; el botón se levanta 2px
  (`transition-transform`, `hover:-translate-y-0.5`). Foco visible global: contorno de 2px en
  `anilina-claro` con 3px de separación.
- **Acción como hebra (variante dominante):** la acción principal de la portada no es un
  botón sino una hebra `encima` de ancho completo: título en display, apoyo en `fibra-media`
  e icono de cruce que se desliza 4px a la derecha en hover del grupo. Sale del trenzado en
  vez de flotar aparte.

### Cards / Containers
El sistema no tiene tarjetas. Tiene **hebras** (ver abajo) y **celdas de rejilla** separadas
por 1px de `borde` sobre fondo `anil-tinte`, con padding de 24px/32px vertical y 32px/40px en
`sm`. No hay superficie elevada sin estado que la justifique.

### Navigation
- **Encabezado pegajoso** (`anil-900` al 92% con `backdrop-blur(2px)`, borde inferior
  `borde`): isotipo de 28px + nombre en display 800 con `-0.03em`, lista de enlaces a partir
  de `lg`, y la acción primaria siempre visible.
- **Enlaces:** 0.95rem en 500, `fibra-media` sin subrayado, `hover` a `fibra` por transición
  de color. Sin subrayado activo, sin indicador de sección: la posición la da el espinazo.
- **Salto al contenido:** oculto hasta recibir foco, entonces fijo arriba a la izquierda con
  fondo `fibra` y texto `anil-900`.
- **Móvil:** la lista desaparece, no se colapsa en un menú; el pie de página repite la
  navegación completa.

### La hebra (componente firma)
La unidad de composición del sistema. Cualquier fila accionable o informativa es una hebra,
con estado declarado en `data-hebra`:
- **`debajo`** (disponible): fondo `anil-800`, borde superior e inferior de 1px en `borde`,
  padding 20px/32px. En `hover` o `focus-within` sube a `anil-700`, endurece el borde, se
  levanta 2px y toma la sombra de hover.
- **`encima`** (activa): fondo `anil-700`, borde `borde-firme`, sombra doble, levantamiento de
  2px y **punzón**: un cuadrado de 11px girado 45°, en `anilina`, con borde `anil-850`,
  clavado a 26px del canto izquierdo y sobresaliendo 6px por arriba.
- Toda hebra lleva una veta longitudinal de fibra (líneas de 1px cada 12px al 3% de `fibra`)
  y, dentro de una región teñida, sus dos fondos se recalculan por mezcla contra
  `anil-tinte`.

### El cabo suelto (componente firma)
La marca de dato inexistente: icono de hebra deshilachada de 18px + texto en ocre 600, con
`— dato pendiente de confirmar` para lectores de pantalla. Aparece donde iría una tasa, un
monto, un teléfono o un estado de documento. **No es un placeholder gris: es contenido que
declara su propia ausencia.**

### La junta (componente firma)
La rotura deliberada del tramo continuo: una regla de 1px en `borde` con un tramo de 46px×3px
en `fibra-honda` sobre el canto izquierdo. Cierra un bloque dentro de una hebra y separa el
cierre del pie. Sobre el espinazo se convierte en `junta-espinazo`: 5px de `fibra` con cerco
de 2px en `anil-900`, en la frontera de cada sección.

### La trama
El suelo tejido de una sección: hebras horizontales completas al 4.5% de `fibra` y verticales
al 7%, enmascaradas en tablero con un cono repetido para que el cruce alterne de verdad. Paso
de 20px/hebra de 13px por defecto; `[data-densa="si"]` lo aprieta a 13px/8px. Se dibuja en
`z-index: -1` con `isolation: isolate`, nunca sobre el texto.

### Disclosure (productos)
`<details>` nativo sobre una hebra `debajo`, con el marcador del navegador suprimido. El
`summary` lleva el título en display, el anuncio de estado en versalitas —**qué va a
aparecer, antes de abrirlo**: «Abre 3 modalidades» / «Cierra»— y el resumen en `fibra-media`.
Al abrir, una lista de definiciones a 2 columnas con reglas de 1px y un cabo suelto al pie.

### Named Rules

**La Regla del Estado con Marca.** Ningún estado se distingue solo por tono. Activo = punzón +
levantamiento + cambio de tierra. Disponible = hundido. Pendiente = deshilachado. Si el
cambio se puede describir únicamente como «otro color», falta la marca física.

**La Regla del Anuncio.** Toda interacción que cambia contenido se telegrafía antes: el
control dice qué va a aparecer y cuánto, no «Ver más».

## Do's and Don'ts

### Do:
- **Do** declarar el estado de toda fila accionable con `data-hebra="encima" | "debajo"` y
  dejar que el sistema aporte punzón, levantamiento y sombra.
- **Do** marcar toda región de tierra clara con `[data-tinte="si"]` para que `--ocre`,
  `--borde`, `--borde-firme` y `--casquillo` se remapeen y el contraste no se caiga.
- **Do** dibujar todo dato inexistente como cabo suelto, con su nota para lector de pantalla.
- **Do** mantener el cuerpo en 1.0625rem o más y todo bloque de prosa con su tope de medida
  (68ch de sección, 42–62ch dentro de una hebra).
- **Do** dar a cada sección nueva su borde superior de 1px y su `junta-espinazo`.
- **Do** dibujar cualquier icono nuevo a mano en el juego de la casa: lienzo 24, trazo 1.7,
  remates `butt` y `miter`, `currentColor`.
- **Do** dejar todo el CSS propio dentro de `@layer base` / `@layer components`, para que las
  utilidades de Tailwind sigan ganando.
- **Do** verificar 4.5:1 con la tierra real de la sección antes de usar un token de texto; la
  misma tinta cambia de 12.78:1 sobre `anil-850` a 6.02:1 sobre `anil-tinte`.

### Don't:
- **Don't** usar `fibra-honda` como color de texto: queda en 4.19:1 sobre `anil-850` y 3.62:1
  sobre `anil-800`. Es color de icono, de regla y de marca.
- **Don't** usar `anilina` para texto pequeño (4.32:1 sobre `anil-850`); para texto que deba
  leerse en cuerpo va `anilina-claro`.
- **Don't** redondear nada ni usar `stroke-linecap: round`: el radio es 0 y el remate es recto.
- **Don't** rodear una hebra con un borde completo; lleva canto arriba y abajo, y corte a los
  lados.
- **Don't** anidar una hebra dentro de otra ni convertir un grupo de hebras en una rejilla de
  tarjetas iguales con su iconito.
- **Don't** poner un rótulo en versalitas encima de un titular: las versalitas solo existen
  como anuncio de estado en la línea de base del título.
- **Don't** usar sombra de desplazamiento duro; las sombras de este sistema son difusas, con
  luz de arriba, y solo sobre la hebra activa.
- **Don't** usar glifos unicode, emoji o una librería de iconos en lugar del juego dibujado.
- **Don't** introducir un color que no sea otro baño de una tintura existente.
- **Don't** añadir movimiento: el único momento autorizado es el apriete de la trenza (una
  vez, 1250ms) y el avance del espinazo con el scroll, ambos bajo
  `prefers-reduced-motion: no-preference` y ambos con el estado final visible sin animación.
- **Don't** rellenar una cifra ausente con un número plausible ni con un guion gris.
