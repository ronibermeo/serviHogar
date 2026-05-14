import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { legalIdentity, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Aviso Legal | ${siteConfig.nombreEmpresa}`,
  description: "Aviso legal e identificación del titular del sitio Marcatecnicos.",
  alternates: {
    canonical: "/aviso-legal",
  },
};

export default function AvisoLegalPage() {
  return (
    <SiteFrame>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Aviso Legal</h1>

          <div className="mt-8 space-y-6 leading-relaxed text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">1. Titular del sitio</h2>
              <p className="mt-2">
                El dominio y los contenidos informativos del servicio técnico publicitado como {siteConfig.nombreEmpresa}{" "}
                son responsabilidad de <strong>{legalIdentity.titularNombreCompleto}</strong>, {legalIdentity.titularTipo}{" "}
                en {legalIdentity.ubicacionLarga}. El nombre {legalIdentity.marcaCopyright} se usa en el pie de página
                del sitio para identificar la misma actividad. No se declara la existencia de una persona jurídica
                distinta ni de un NIT empresarial asociado a este aviso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">2. Datos de contacto</h2>
              <p className="mt-2">
                Correo:{" "}
                <a className="text-sky-800 underline-offset-2 hover:underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                . Teléfono / WhatsApp:{" "}
                <a className="text-sky-800 underline-offset-2 hover:underline" href={`tel:${siteConfig.telefono.replace(/\s/g, "")}`}>
                  {siteConfig.telefono}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">3. Objeto del sitio</h2>
              <p className="mt-2">
                Este sitio web informa sobre servicios de diagnóstico, reparación y mantenimiento de electrodomésticos a
                domicilio en {siteConfig.ciudadPrincipal} y municipios cercanos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">4. Propiedad intelectual</h2>
              <p className="mt-2">
                Los textos, imágenes y diseño propios del sitio pertenecen a su titular o se usan con licencia. Los
                nombres y logotipos de fabricantes son propiedad de sus titulares y aparecen solo con carácter referencial
                para describir equipos atendidos, sin implicar afiliación oficial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5. Legislación aplicable</h2>
              <p className="mt-2">Este aviso se rige por las leyes de la República de Colombia.</p>
            </section>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
