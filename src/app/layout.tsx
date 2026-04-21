import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { googleAdsAwId, isGoogleAdsEnabled } from "@/lib/analytics";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const themeInitScript = `
(() => {
  try {
    const key = "theme-preference";
    const stored = window.localStorage.getItem(key);
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = stored === "light" || stored === "dark" ? stored : preferredDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
  } catch {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

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
    siteName: siteConfig.nombreEmpresa,
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
      className={`${inter.variable} ${manrope.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {isGoogleAdsEnabled ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsAwId}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${googleAdsAwId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
