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
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  title: `Servicio técnico de electrodomésticos a domicilio en ${siteConfig.ciudadPrincipal} | ${siteConfig.nombreEmpresa}`,
  description:
    `Reparación, mantenimiento e instalación de electrodomésticos a domicilio en ${siteConfig.ciudadPrincipal}. Agenda por WhatsApp, llamada o formulario con atención rápida y garantía.`,
  keywords: [
    `servicio técnico de electrodomésticos en ${siteConfig.ciudadPrincipal}`,
    `reparación de neveras en ${siteConfig.ciudadPrincipal}`,
    "reparación de lavadoras a domicilio",
    "mantenimiento de aire acondicionado",
    "instalación de calentadores",
    "reparación de televisores",
  ],
  openGraph: {
    title: `Servicio técnico de electrodomésticos en ${siteConfig.ciudadPrincipal}`,
    description:
      "Agenda tu visita técnica por WhatsApp o formulario. Atención a domicilio con técnicos certificados.",
    type: "website",
    locale: "es_CO",
    siteName: siteConfig.nombreEmpresa,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `Servicio técnico de electrodomésticos en ${siteConfig.ciudadPrincipal}`,
    description:
      "Reparación, mantenimiento e instalación con atención rápida a domicilio y soporte por WhatsApp.",
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
