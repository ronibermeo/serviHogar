import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/config/site";

const fechaActualizacion = "28 de abril de 2026";

export const metadata: Metadata = {
  title: `Términos y Condiciones | ${siteConfig.nombreEmpresa}`,
  description: "Términos y condiciones de prestación de servicios de Marcatecnicos.",
  alternates: {
    canonical: "/terminos",
  },
};

export default function TerminosPage() {
  return (
    <SiteFrame>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Términos y Condiciones</h1>
          <p className="mt-3 text-sm text-slate-600">Fecha de última actualización: {fechaActualizacion}</p>

          <div className="mt-8 space-y-6 leading-relaxed text-slate-700">
            <section>
              <h2 className="text-xl font-bold text-slate-900">1. Objeto</h2>
              <p className="mt-2">
                Marcatecnicos presta servicios de diagnóstico, reparación y mantenimiento de electrodomésticos a
                domicilio en Cali y municipios cercanos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">2. No somos servicio oficial de ninguna marca</h2>
              <p className="mt-2">
                Marcatecnicos es un servicio técnico independiente. No tenemos ninguna afiliación, autorización ni
                representación con ningún fabricante de electrodomésticos. Los nombres de marcas mencionados en el
                sitio corresponden a los tipos de equipos que atendemos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">3. Proceso del servicio</h2>
              <p className="mt-2">
                El cliente solicita el servicio por WhatsApp o teléfono. Se coordina una visita a domicilio. En sitio
                se realiza el diagnóstico y se presenta el presupuesto. El cliente aprueba antes de proceder con la
                reparación. El servicio incluye garantía por escrito sobre mano de obra y piezas instaladas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">4. Precios</h2>
              <p className="mt-2">
                Los precios de diagnóstico y reparación se informan antes de ejecutar el trabajo. No se cobra ningún
                valor sin el consentimiento previo del cliente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5. Garantía</h2>
              <p className="mt-2">
                Ofrecemos garantía por escrito sobre mano de obra y repuestos instalados. El alcance específico se
                comunica al cliente al momento de realizar el servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">6. Limitación de responsabilidad</h2>
              <p className="mt-2">
                Marcatecnicos no se hace responsable por daños indirectos, lucro cesante ni daños por causas ajenas al
                servicio prestado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">7. Ley aplicable</h2>
              <p className="mt-2">Estos términos se rigen por las leyes de la República de Colombia.</p>
            </section>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
