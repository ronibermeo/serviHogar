import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servicio tecnico de electrodomesticos a domicilio en Medellin | ServiHogar Tecnico",
  description:
    "Reparacion, mantenimiento e instalacion de electrodomesticos a domicilio en Medellin. Agenda por WhatsApp, llamada o formulario con atencion rapida y garantia.",
  keywords: [
    "servicio tecnico de electrodomesticos en Medellin",
    "reparacion de neveras en Medellin",
    "reparacion de lavadoras a domicilio",
    "mantenimiento de aire acondicionado",
    "instalacion de calentadores",
    "reparacion de televisores",
  ],
  openGraph: {
    title: "Servicio tecnico de electrodomesticos en Medellin",
    description:
      "Agenda tu visita tecnica por WhatsApp o formulario. Atencion a domicilio con tecnicos certificados.",
    type: "website",
    locale: "es_CO",
    siteName: "ServiHogar Tecnico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicio tecnico de electrodomesticos en Medellin",
    description:
      "Reparacion, mantenimiento e instalacion con atencion rapida a domicilio y soporte por WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
