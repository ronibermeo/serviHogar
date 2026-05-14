import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { legalIdentity, siteConfig } from "@/config/site";

const fechaActualizacion = "14 de mayo de 2026";

export const metadata: Metadata = {
  title: `Términos y Condiciones | ${siteConfig.nombreEmpresa}`,
  description: "Términos y condiciones de prestación de servicios técnicos a domicilio.",
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
              <h2 className="text-xl font-bold text-slate-900">1. Identidad del responsable</h2>
              <p className="mt-2">
                El sitio web y el servicio técnico ofrecido bajo el nombre {siteConfig.nombreEmpresa} (también
                referido como {legalIdentity.marcaCopyright} en piezas de comunicación) son prestados por{" "}
                <strong>{legalIdentity.titularNombreCompleto}</strong>, persona natural con actividad en{" "}
                {legalIdentity.ubicacionLarga}. No existe una persona jurídica, NIT ni razón social distinta
                de la identidad indicada: la prestación del servicio es en carácter personal y la responsabilidad
                comercial corresponde a la misma persona natural.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">2. Objeto</h2>
              <p className="mt-2">
                Se ofrecen servicios de diagnóstico, reparación, mantenimiento e instalación de electrodomésticos a
                domicilio en {siteConfig.ciudadPrincipal} y municipios cercanos, según disponibilidad y tipo de
                equipo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">3. No somos servicio oficial de ninguna marca</h2>
              <p className="mt-2">
                El servicio es independiente. No hay afiliación, autorización ni representación con fabricantes de
                electrodomésticos. Los nombres de marcas en el sitio son referenciales para describir los equipos que
                pueden atenderse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">4. Proceso del servicio técnico</h2>
              <p className="mt-2">
                El cliente solicita el servicio por WhatsApp, teléfono o formulario web. Se coordina la visita. En el
                lugar se realiza el diagnóstico y se informa el alcance y costo antes de ejecutar reparaciones que lo
                requieran. Cuando corresponda, se entrega garantía por escrito sobre mano de obra y piezas instaladas,
                con las condiciones acordadas en cada caso.
              </p>
              <p className="mt-2">
                Si debes cancelar o reprogramar, avisa con la mayor antelación posible por el mismo canal utilizado
                para agendar, para liberar el cupo y reorganizar la agenda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5. Precios</h2>
              <p className="mt-2">
                Los valores de visita, diagnóstico y reparación se comunican antes de proceder. No se cobran trabajos ni
                conceptos no autorizados por el cliente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">6. Garantía</h2>
              <p className="mt-2">
                Cuando aplique, la garantía sobre mano de obra y repuestos instalados se documenta de forma clara al
                momento del servicio, dentro de lo razonable para el tipo de intervención.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">7. Limitación de responsabilidad</h2>
              <p className="mt-2">
                No se responde por daños indirectos, lucro cesante ni daños derivados de causas ajenas al servicio
                efectivamente prestado, dentro de los límites permitidos por la ley colombiana.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">8. Ley aplicable</h2>
              <p className="mt-2">Estos términos se rigen por las leyes de la República de Colombia.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">9. Datos de contacto del titular</h2>
              <p className="mt-2">
                Correo:{" "}
                <a className="text-sky-800 underline-offset-2 hover:underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
                . Teléfono y WhatsApp:{" "}
                <a
                  className="text-sky-800 underline-offset-2 hover:underline"
                  href={`tel:${siteConfig.telefono.replace(/\s/g, "")}`}
                >
                  {siteConfig.telefono}
                </a>
                . Página de contacto:{" "}
                <a className="text-sky-800 underline-offset-2 hover:underline" href="/contacto">
                  Contacto
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
