/**
 * Marcas e iconos dibujados a mano en SVG.
 *
 * Un solo trazo para todo el juego: 1.7 sobre lienzo de 24, remates rectos
 * (la fibra de pleita se corta a filo, no se redondea). Sin emoji, sin glifos
 * unicode haciendo de icono.
 */

type Props = { className?: string; size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "butt" as const,
  strokeLinejoin: "miter" as const,
  "aria-hidden": true,
  focusable: "false" as const,
});

/**
 * Isotipo: un tejido de 2×2 con el cruce alterno de verdad.
 *
 * Dos hebras verticales y dos horizontales. En cada uno de los cuatro cruces
 * alterna quién pasa por encima, igual que en la pleita. Se dibuja con
 * encasquillado del fondo, así que el hueco del cruce es real y la marca se
 * lee como tejido incluso a 26px.
 */
export function Isotipo({ className, size = 34 }: Props) {
  const F = "var(--anil-850)"; // encasquillado: abre el hueco del cruce
  const G = 7;                 // grosor de hebra
  const V = [11, 23];          // ejes verticales
  const H = [11, 23];          // ejes horizontales
  // true = la horizontal pasa por encima en ese cruce
  const encima = (iv: number, ih: number) => (iv + ih) % 2 === 0;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 34 34"
      aria-hidden="true"
      focusable="false"
    >
      {/* verticales completas */}
      {V.map((x) => (
        <line key={`v${x}`} x1={x} y1={1.5} x2={x} y2={32.5} stroke="currentColor" strokeWidth={G} />
      ))}
      {/* horizontales, abriendo hueco sólo donde les toca pasar por encima */}
      {H.map((y, ih) => (
        <g key={`h${y}`}>
          {V.map((x, iv) =>
            encima(iv, ih) ? (
              <line
                key={`c${x}${y}`}
                x1={x}
                y1={y - G / 2 - 2.2}
                x2={x}
                y2={y + G / 2 + 2.2}
                stroke={F}
                strokeWidth={G + 4.4}
              />
            ) : null,
          )}
          <line x1={1.5} y1={y} x2={32.5} y2={y} stroke="currentColor" strokeWidth={G} />
          {/* y las verticales que van por encima vuelven al frente */}
          {V.map((x, iv) =>
            encima(iv, ih) ? null : (
              <line
                key={`r${x}${y}`}
                x1={x}
                y1={y - G / 2 - 2.6}
                x2={x}
                y2={y + G / 2 + 2.6}
                stroke="currentColor"
                strokeWidth={G}
              />
            ),
          )}
        </g>
      ))}
    </svg>
  );
}

/** Cabo suelto: la hebra que se deshilacha. Marca de dato inexistente. */
export function IconoCabo({ className, size = 18 }: Props) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M2 12h9" />
      <path d="M11 12l8-4.5" />
      <path d="M11 12l8.5 1" />
      <path d="M11 12l7 5.5" />
    </svg>
  );
}

/** Cruce: una hebra pasa por encima de otra. Marca de estado activo. */
export function IconoCruce({ className, size = 18 }: Props) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M3 17c4 0 5-10 9-10s5 10 9 10" />
      <path d="M3 7h5.5" />
      <path d="M15.5 7H21" />
    </svg>
  );
}

export function IconoSucursal({ className, size = 20 }: Props) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M3 21V9.5L12 4l9 5.5V21" />
      <path d="M3 21h18" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

export function IconoTelefono({ className, size = 20 }: Props) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M4 3h4l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v4h-3A13 13 0 013 6V3z" />
    </svg>
  );
}

export function IconoSobre({ className, size = 20 }: Props) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M2.5 5.5h19v13h-19z" />
      <path d="M2.5 5.5L12 13l9.5-7.5" />
    </svg>
  );
}

export function IconoDocumento({ className, size = 20 }: Props) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M5 2.5h8.5L19 8v13.5H5z" />
      <path d="M13.5 2.5V8H19" />
      <path d="M8.5 13h7M8.5 17h4.5" />
    </svg>
  );
}

export function IconoAsamblea({ className, size = 20 }: Props) {
  return (
    <svg className={className} {...base(size)}>
      <path d="M12 3.5l7 3.5-7 3.5-7-3.5z" />
      <path d="M5 11.5l7 3.5 7-3.5" />
      <path d="M5 16l7 3.5 7-3.5" />
    </svg>
  );
}

/** El marcador de dato pendiente, en el vocabulario del mundo. */
export function Cabo({ children }: { children: React.ReactNode }) {
  return (
    <span className="cabo">
      <IconoCabo />
      <span>{children}</span>
      <span className="sr-only"> — dato pendiente de confirmar</span>
    </span>
  );
}
