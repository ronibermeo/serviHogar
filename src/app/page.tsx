import { AboutLocal } from "@/components/AboutLocal";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { SiteFrame } from "@/components/SiteFrame";
import { TrustSection } from "@/components/TrustSection";
import { legalIdentity, siteConfig } from "@/config/site";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.nombreEmpresa,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    description: siteConfig.descripcionCorta,
    telephone: siteConfig.telefono,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.direccion,
      addressLocality: legalIdentity.ciudad,
      addressRegion: legalIdentity.departamento,
      addressCountry: "CO",
    },
    areaServed: siteConfig.cobertura,
    openingHours: "Mo-Sa 07:30-17:30",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: siteConfig.servicios.map((servicio, index) => ({
      "@type": "Service",
      position: index + 1,
      name: servicio.nombre,
      description: servicio.resumen,
      areaServed: siteConfig.ciudadPrincipal,
      provider: siteConfig.nombreEmpresa,
    })),
  };

  return (
    <SiteFrame>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-6 md:pb-20 md:pt-6">
          <Hero />
          <ServiceGrid />
          <TrustSection />
          <AboutLocal />
        </div>
      </div>
    </SiteFrame>
  );
}
