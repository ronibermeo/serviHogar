import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/config/site";

const fechaActualizacion = "28 de abril de 2026";

export const metadata: Metadata = {
  title: `Política de Privacidad | ${siteConfig.nombreEmpresa}`,
  description: "Política de privacidad y tratamiento de datos personales de Marcatecnicos.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <SiteFrame>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Política de Privacidad</h1>
          <p className="mt-3 text-sm text-slate-600">Fecha de última actualización: {fechaActualizacion}</p>

          <div className="mt-8 space-y-6 leading-relaxed text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">1. Datos que recopilamos</h2>
              <p className="mt-2">
                A través del sitio web www.marcatecnicos.com no recopilamos datos personales de forma automática
                mediante formularios. El usuario que se comunica por WhatsApp o teléfono comparte voluntariamente su
                nombre, número de teléfono y dirección para coordinar el servicio técnico. No recopilamos datos
                bancarios ni de pago a través del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">2. Finalidad del tratamiento</h2>
              <p className="mt-2">
                Los datos recopilados se usan exclusivamente para coordinar y prestar el servicio técnico solicitado,
                comunicarnos con el cliente y emitir garantías del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">3. Derechos del titular</h2>
              <p className="mt-2">
                El titular de los datos tiene derecho a conocer, actualizar, rectificar y suprimir su información
                personal. Para ejercer estos derechos puede escribirnos a marcatecnicos@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">4. Compartición de datos</h2>
              <p className="mt-2">No vendemos ni compartimos datos personales con terceros con fines comerciales.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5. Cookies</h2>
              <p className="mt-2">
                Este sitio puede usar cookies técnicas para el funcionamiento básico del sitio. No usamos cookies de
                seguimiento publicitario de terceros, salvo las propias de Google Ads cuando el usuario llega desde un
                anuncio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">6. Legislación aplicable</h2>
              <p className="mt-2">
                Esta política se rige por la Ley 1581 de 2012 (Habeas Data) y el Decreto 1377 de 2013 de Colombia.
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
