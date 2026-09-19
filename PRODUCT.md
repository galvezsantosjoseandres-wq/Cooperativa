# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

**delegated** — El usuario dejó la decisión a criterio del diseño ("tú decides"). Elegido:
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui, con render
estático (SSG) por defecto y JavaScript de cliente solo donde una interacción lo exija.

Razón: las skills de diseño instaladas en este proyecto asumen React/Tailwind/shadcn;
shadcn aporta primitivas Radix accesibles, lo que importa en una institución financiera
con público de edad mixta; y el App Router permite crecer a rutas de productos, tasas,
sucursales, transparencia y noticias sin recablear el proyecto.

Contraargumento registrado: Astro enviaría menos JavaScript en una landing puramente
institucional. Se descartó por encaje de ecosistema, no por rendimiento. Si el proyecto
nunca crece más allá de páginas estáticas, Astro sería la opción técnicamente superior.

## Users

**Primario:** adultos en República Dominicana que buscan una alternativa a la banca
múltiple para ahorrar o financiarse, y que llegan a la web para *evaluar si esta
cooperativa es confiable* antes de acercarse a una sucursal o a un oficial.
Situación: comparando instituciones, a menudo desde el teléfono, con desconfianza previa
hacia entidades financieras y sin familiaridad con la figura cooperativa.
Trabajo que intentan hacer: entender qué es, si es seguro, qué ofrece y cómo se asocian.

**Secundario:** socios actuales que buscan información de referencia (requisitos,
sucursales, horarios, documentos institucionales), no operaciones.

**Terciario:** terceros que evalúan a la institución — empleadores para convenios de
nómina, periodistas, organismos. Necesitan gobernanza, memorias y datos institucionales.

## Product Purpose

Sitio web institucional de una cooperativa de ahorro y crédito. Existe para *establecer
credibilidad y explicar la oferta*, no para operar. Éxito = un visitante que no conocía
la institución entiende qué es una cooperativa de ahorro y crédito, confía en esta en
particular, sabe cuál producto le sirve y sabe cuál es el siguiente paso presencial o
de contacto.

Fuera de alcance, confirmado por el usuario: **no hay portal transaccional de socios.**
Sin login, sin consulta de saldos, sin pagos, sin solicitudes en línea vinculadas a core
bancario.

## Positioning

Propiedad cooperativa: el socio no es cliente, es dueño. Los excedentes vuelven a los
socios en lugar de a accionistas externos, y el gobierno de la institución es un socio =
un voto en asamblea. Un banco múltiple no puede copiar esa afirmación sin dejar de ser
banco. Toda la página deriva su autoridad de este hecho estructural.

## Operating Context

- El visitante llega desde búsqueda, redes o recomendación boca a boca, mayoritariamente
  en móvil y con conexiones variables.
- La decisión real se cierra fuera de la web: en sucursal, por teléfono o WhatsApp, o vía
  un oficial de negocios. La web precalifica y reduce la fricción de esa conversación.
- Los convenios de nómina con empleadores son un canal de captación relevante en el sector
  cooperativo dominicano.
- La afiliación requiere trámite presencial con documentos físicos (cédula, aportación
  inicial), lo que la web debe anticipar en lugar de prometer instantaneidad.

## Capabilities and Constraints

Familias de producto a representar (confirmadas por el usuario):

1. **Cuentas de ahorro** — a la vista, programado, infantil/juvenil.
2. **Créditos** — consumo, vehículo, hipotecario, pyme/microcrédito, educativo.
3. **Certificados financieros** — depósitos a plazo con rendimiento.
4. **Servicios complementarios** — seguros, remesas, educación financiera, beneficios
   para socios.

Restricciones:

- Sitio estático. Sin backend propio, sin base de datos, sin autenticación.
- Español dominicano. Moneda RD$.
- El formulario de contacto no tiene destino real todavía: queda como decisión abierta
  (servicio de formularios, correo o integración CRM).
- **Cifras, tasas, plazos, montos, número de socios, activos y años de operación están
  SIN DEFINIR.** Deben quedar como marcadores visibles, nunca como números plausibles
  inventados. Una tasa falsa en una web financiera es un riesgo legal y reputacional real.

## Brand Commitments

- **Marca ficticia creada para este proyecto**, por instrucción del usuario ("proyecto
  demo — inventa la marca"). Nombre adoptado: **Cooperativa Raíz** (marca corta: *Raíz*).
  Elegido por su carga semántica cooperativa: pertenencia, arraigo comunitario y
  patrimonio que crece desde abajo.
- **Advertencia registrada:** no se pudo verificar que el nombre no colisione con una
  institución real existente. Antes de cualquier uso público hay que hacer búsqueda de
  disponibilidad en ONAPI y en el registro de IDECOOP. El sitio debe llevar un aviso
  visible de que es una demostración.
- Voz: confiable y moderna. Clara y directa, sin jerga financiera innecesaria, sin
  paternalismo y sin lenguaje de banco corporativo. Tutea con respeto.
- Sin logo, sin tipografía ni paleta heredada: la identidad visual se define después, en
  el flujo de trabajo visual, no aquí.

## Evidence on Hand

**Ninguna.** No existen: logo, fotografías, testimonios de socios, memorias anuales,
cifras de crecimiento, tasas vigentes, listado real de sucursales, nombres de consejo de
administración, ni certificaciones.

Prohibido fabricar cualquiera de ellos y presentarlo como real. Todo contenido de ese
tipo se marca explícitamente como contenido de ejemplo pendiente de reemplazo, y las
imágenes se resuelven con ilustración, fotografía con licencia o marcadores declarados,
nunca con supuestos hechos institucionales.

## Product Principles

1. **La confianza se gana con verificabilidad, no con adjetivos.** Antes que "somos
   sólidos", mostrar gobernanza, supervisión, cifras auditadas y documentos. Cuando el
   dato no existe, dejar el hueco visible en lugar de rellenarlo con retórica.
2. **Explicar la figura cooperativa es parte del producto.** Buena parte de la audiencia
   no sabe la diferencia entre socio y cliente. Ese es el argumento diferenciador, así
   que se enseña, no se asume.
3. **La web precalifica, la sucursal cierra.** Cada sección debe terminar en un siguiente
   paso humano concreto y honesto sobre lo que exige presencia física.
4. **Accesible por obligación, no por cortesía.** La audiencia incluye adultos mayores y
   usuarios de conexión lenta en móvil. Legibilidad y contraste son requisitos, no
   preferencias.
5. **Ninguna cifra sin fuente.** Ningún número aparece en la interfaz sin un dato real
   detrás o una marca explícita de pendiente.

## Accessibility & Inclusion

Objetivo WCAG 2.2 nivel AA. Requisitos derivados de la audiencia, no genéricos:

- Cuerpo de texto nunca por debajo de 16px; el contenido denso (requisitos, condiciones)
  se diseña para lectura cómoda a 18px.
- Contraste mínimo 4.5:1 en texto y 3:1 en elementos de interfaz, verificado, no estimado.
- Operable por teclado y con foco visible en todo elemento interactivo.
- Cifras y condiciones legibles como texto, nunca embebidas solo en imágenes.
- Respeta `prefers-reduced-motion` en toda la animación.
