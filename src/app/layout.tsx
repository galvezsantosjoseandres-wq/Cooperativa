import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--fuente-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const texto = Archivo({
  variable: "--fuente-texto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cooperativa Raíz — Ahorro y crédito de los socios, para los socios",
  description:
    "Cooperativa de ahorro y crédito. Aquí no hay clientes: hay socios que son dueños. Ahorro, crédito, certificados financieros y servicios para socios en República Dominicana.",
  metadataBase: new URL("https://example.invalid"),
  openGraph: {
    title: "Cooperativa Raíz",
    description:
      "Una hebra sola no carga nada. Cooperativa de ahorro y crédito donde el socio es dueño.",
    locale: "es_DO",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-DO"
      className={`${display.variable} ${texto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
