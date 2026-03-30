import type { Metadata } from "next";
import { AboutLocal } from "@/components/AboutLocal";
import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Nosotros | ${siteConfig.nombreEmpresa}`,
  description: `Conoce como trabaja ${siteConfig.nombreEmpresa} en ${siteConfig.ciudadPrincipal} para reparacion, mantenimiento e instalacion de electrodomesticos.`,
};

export default function NosotrosPage() {
  return (
    <SiteFrame>
      <AboutLocal />
    </SiteFrame>
  );
}
