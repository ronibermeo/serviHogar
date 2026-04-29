import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Aviso Legal | ${siteConfig.nombreEmpresa}`,
  description: "Aviso legal del sitio web Marcatecnicos.",
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
              <h2 className="text-xl font-bold text-slate-900">1. Datos de contacto</h2>
              <p className="mt-2">
                Datos de contacto: Correo: marcatecnicos@gmail.com. Teléfono: 3180771016.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">2. Objeto del sitio</h2>
              <p className="mt-2">
                Este sitio web tiene como finalidad informar sobre los servicios técnicos de reparación y mantenimiento
                de electrodomésticos a domicilio que presta Marcatecnicos en Cali y municipios cercanos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">3. Propiedad intelectual</h2>
              <p className="mt-2">
                Los contenidos, textos, imágenes y diseño de este sitio son propiedad de Marcatecnicos o tienen
                licencia de uso. Los nombres y logos de marcas de fabricantes mostrados en este sitio son propiedad de
                sus respectivos titulares y se usan únicamente con carácter referencial para indicar los tipos de
                equipos atendidos. Marcatecnicos no tiene ninguna afiliación oficial con dichas marcas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">4. Exoneración de responsabilidad</h2>
              <p className="mt-2">
                Marcatecnicos no se responsabiliza por daños derivados del uso indebido de la información publicada en
                este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5. Legislación aplicable</h2>
              <p className="mt-2">Este aviso se rige por las leyes de Colombia.</p>
            </section>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
