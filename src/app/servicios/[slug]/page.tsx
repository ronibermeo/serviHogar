import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceSingleContent } from "@/components/ServiceSingleContent";
import { SiteFrame } from "@/components/SiteFrame";
import { getServiceById, siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return siteConfig.servicios.map((servicio) => ({ slug: servicio.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servicio = getServiceById(slug);

  if (!servicio) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: `${servicio.nombre} en ${siteConfig.ciudadPrincipal} | ${siteConfig.nombreEmpresa}`,
    description: `${servicio.resumen} ${servicio.seoLocal}`,
  };
}

export default async function ServicioDetallePage({ params }: Props) {
  const { slug } = await params;
  const servicio = getServiceById(slug);

  if (!servicio) {
    notFound();
  }

  return (
    <SiteFrame>
      <ServiceSingleContent servicio={servicio} />
    </SiteFrame>
  );
}
