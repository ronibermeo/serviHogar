import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Cobertura | ${siteConfig.nombreEmpresa}`,
  description: `Conoce la cobertura de atención técnica a domicilio en ${siteConfig.ciudadPrincipal}.`,
};

export default function CoberturaPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Cobertura</h1>
        <p className="mt-4 text-lg text-slate-600">
          Atendemos {siteConfig.cobertura}. Si tienes dudas sobre tu zona, escríbenos por WhatsApp y
          te confirmamos de inmediato.
        </p>
      </section>
    </SiteFrame>
  );
}
