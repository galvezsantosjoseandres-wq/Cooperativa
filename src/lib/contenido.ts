/**
 * Todo el contenido de la landing en un solo lugar.
 *
 * Regla del proyecto (PRODUCT.md): no existe ninguna cifra, tasa, plazo, monto,
 * cantidad de socios ni dato institucional real. Lo que no existe se declara
 * como `pendiente` y la interfaz lo dibuja como un CABO SUELTO visible, nunca
 * como un número plausible. Un dato falso en una web financiera es riesgo legal.
 */

export type Pendiente = { pendiente: string };

export const esPendiente = (v: unknown): v is Pendiente =>
  typeof v === "object" && v !== null && "pendiente" in v;

export const marca = {
  nombre: "Cooperativa Raíz",
  corto: "Raíz",
  tesis: "Una hebra sola no carga nada.",
  bajada:
    "Trenzadas, cargan peso real. Eso es una cooperativa de ahorro y crédito: tu dinero y el de los demás socios sosteniéndose entre sí, sin accionistas en el medio.",
} as const;

export const navegacion = [
  { href: "#socio", texto: "Ser socio" },
  { href: "#productos", texto: "Productos" },
  { href: "#gobierno", texto: "Cómo se gobierna" },
  { href: "#asociarse", texto: "Asociarse" },
  { href: "#contacto", texto: "Contacto" },
] as const;

/** El mecanismo: socio ≠ cliente. Cada afirmación va con su maquinaria al lado. */
export const mecanismo = [
  {
    afirmacion: "No eres cliente. Eres dueño.",
    explica:
      "Al asociarte aportas capital y pasas a ser copropietario de la institución. No compras un servicio: adquieres una parte de quien lo presta.",
    maquinaria:
      "Tu aportación queda registrada a tu nombre en el libro de socios y se te entrega constancia. Si te retiras, se te devuelve conforme al estatuto.",
  },
  {
    afirmacion: "Un socio, un voto.",
    explica:
      "En la asamblea general el socio con la aportación más pequeña tiene exactamente el mismo voto que el más grande. El capital no compra poder de decisión.",
    maquinaria:
      "La asamblea elige el Consejo de Administración y el Consejo de Vigilancia, y aprueba o rechaza los estados financieros del ejercicio.",
  },
  {
    afirmacion: "El excedente vuelve a ti.",
    explica:
      "Lo que sobra después de reservas y gastos no sale hacia accionistas externos, porque no existen. Se distribuye entre los socios o se reinvierte por decisión de la asamblea.",
    maquinaria:
      "El reparto se calcula en proporción al uso que cada socio hizo de los servicios y a su aportación, y queda asentado en el acta de la asamblea que lo aprueba.",
  },
  {
    afirmacion: "Nos vigilan, y por dentro también.",
    explica:
      "Las cooperativas de ahorro y crédito en República Dominicana operan bajo la Ley 127-64 y la incorporación otorgada por el Estado.",
    maquinaria:
      "El Consejo de Vigilancia es un órgano electo por los propios socios, independiente del Consejo de Administración, con acceso a los libros.",
  },
] as const;

/** Las cuatro familias. Cada una es una hebra, no una tarjeta. */
export const productos = [
  {
    id: "ahorro",
    titulo: "Ahorro",
    resumen: "Donde empieza todo. Tu aportación te hace socio y tu ahorro sostiene el crédito de otro socio.",
    items: [
      { nombre: "Ahorro a la vista", detalle: "Disponible cuando lo necesites, sin plazo de permanencia." },
      { nombre: "Ahorro programado", detalle: "Descuento fijo y periódico hacia una meta que tú fijas." },
      { nombre: "Ahorro infantil y juvenil", detalle: "A nombre del menor, administrado por madre, padre o tutor." },
    ],
    rendimiento: { pendiente: "Tasa de rendimiento vigente" },
  },
  {
    id: "credito",
    titulo: "Crédito",
    resumen: "Financiamiento evaluado por gente que conoce tu historial como socio, no sólo tu puntaje.",
    items: [
      { nombre: "Consumo", detalle: "Gastos personales, salud, estudios, imprevistos." },
      { nombre: "Vehículo", detalle: "Compra de vehículo nuevo o usado, con garantía sobre el bien." },
      { nombre: "Hipotecario", detalle: "Compra, construcción o mejora de vivienda." },
      { nombre: "Pyme y microcrédito", detalle: "Capital de trabajo y activos para negocio propio." },
      { nombre: "Educativo", detalle: "Matrícula y gastos de estudio, propios o de un familiar." },
    ],
    rendimiento: { pendiente: "Tasas y plazos por tipo de crédito" },
  },
  {
    id: "certificados",
    titulo: "Certificados financieros",
    resumen: "Colocas un monto a un plazo definido y recibes un rendimiento acordado por escrito.",
    items: [
      { nombre: "Plazo fijo", detalle: "Rendimiento pactado desde el día de la apertura." },
      { nombre: "Renovación automática", detalle: "Se renueva al vencimiento salvo instrucción contraria." },
    ],
    rendimiento: { pendiente: "Tabla de plazos, montos mínimos y rendimientos" },
  },
  {
    id: "servicios",
    titulo: "Servicios para socios",
    resumen: "Lo que una cooperativa hace además de mover dinero, porque responde a personas y no a un mercado.",
    items: [
      { nombre: "Seguros", detalle: "Coberturas colectivas contratadas en condiciones de grupo." },
      { nombre: "Remesas", detalle: "Recepción de envíos del exterior en sucursal." },
      { nombre: "Educación financiera", detalle: "Formación para socios sobre presupuesto, deuda y ahorro." },
      { nombre: "Beneficios de socio", detalle: "Convenios y asistencias disponibles por ser socio." },
    ],
    rendimiento: { pendiente: "Detalle de coberturas y convenios vigentes" },
  },
] as const;

/** El trámite real. Honesto sobre lo que exige presencia física. */
export const asociarse = {
  intro:
    "Asociarse no se resuelve en esta página, y preferimos decírtelo antes de que pierdas la tarde. Se resuelve en sucursal, con documentos en mano.",
  pasos: [
    {
      paso: "Reúne los documentos",
      detalle:
        "Cédula de identidad y electoral vigente, y comprobante de dirección. Si vas a asociar a un menor, su acta de nacimiento.",
    },
    {
      paso: "Ve a una sucursal",
      detalle:
        "Un oficial revisa tus documentos, te explica el estatuto y abre tu expediente de socio en el acto.",
    },
    {
      paso: "Paga la aportación inicial",
      detalle:
        "Es capital tuyo, no una comisión: queda registrado a tu nombre y se te devuelve si te retiras.",
      monto: { pendiente: "Monto de la aportación inicial" },
    },
    {
      paso: "Quedas inscrito en el libro de socios",
      detalle:
        "Desde ese asiento tienes voz y voto en asamblea, y acceso a ahorro, crédito y servicios.",
    },
  ],
} as const;

export const transparencia = [
  { documento: "Estatuto vigente", estado: { pendiente: "Documento por publicar" } },
  { documento: "Estados financieros auditados", estado: { pendiente: "Documento por publicar" } },
  { documento: "Memoria anual", estado: { pendiente: "Documento por publicar" } },
  { documento: "Acta de la última asamblea general", estado: { pendiente: "Documento por publicar" } },
  { documento: "Integrantes del Consejo de Administración", estado: { pendiente: "Nombres por confirmar" } },
  { documento: "Integrantes del Consejo de Vigilancia", estado: { pendiente: "Nombres por confirmar" } },
] as const;

export const contacto = {
  sucursales: { pendiente: "Direcciones, horarios y teléfonos de sucursales" },
  telefono: { pendiente: "Teléfono de atención al socio" },
  correo: { pendiente: "Correo de atención al socio" },
} as const;
