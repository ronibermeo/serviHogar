import type { Metadata } from "next";
import { AboutLocal } from "@/components/AboutLocal";
import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Nosotros | ${siteConfig.nombreEmpresa}`,
  description: `Conoce cómo trabaja ${siteConfig.nombreEmpresa} en ${siteConfig.ciudadPrincipal} para reparación, mantenimiento e instalación de electrodomésticos.`,
};

export default function NosotrosPage() {
  return (
    <SiteFrame>
      <AboutLocal />
    </SiteFrame>
  );
}
