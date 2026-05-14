import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { legalIdentity, siteConfig } from "@/config/site";

const fechaActualizacion = "14 de mayo de 2026";

export const metadata: Metadata = {
  title: `Política de Privacidad | ${siteConfig.nombreEmpresa}`,
  description: "Política de privacidad y tratamiento de datos personales del servicio técnico.",
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
              <h2 className="text-xl font-bold text-slate-900">1. Responsable del tratamiento</h2>
              <p className="mt-2">
                El responsable del tratamiento de los datos personales obtenidos a través de este sitio y de los
                canales asociados (WhatsApp, llamada, formularios) es <strong>{legalIdentity.titularNombreCompleto}</strong>
                , <strong>{legalIdentity.titularTipo}</strong> en Colombia, con actividad en {legalIdentity.ubicacionLarga}
                , quien opera el servicio bajo el nombre {siteConfig.nombreEmpresa} / {legalIdentity.marcaCopyright}. No
                actúa en nombre de una persona jurídica distinta para fines de esta política.
              </p>
              <p className="mt-2">
                Para ejercer derechos de habeas data, consultas sobre privacidad o rectificación de datos puede
                escribir a{" "}
                <a className="text-sky-800 underline-offset-2 hover:underline" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>{" "}
                o contactar por teléfono o WhatsApp al{" "}
                <a
                  className="text-sky-800 underline-offset-2 hover:underline"
                  href={`tel:${siteConfig.telefono.replace(/\s/g, "")}`}
                >
                  {siteConfig.telefono}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">2. Datos que recopilamos</h2>
              <p className="mt-2">
                <strong>Formulario de agendamiento o contacto en el sitio:</strong> cuando lo usas, podemos recibir
                nombre, teléfono, tipo de servicio o equipo, fecha y franja preferida de visita, y un mensaje opcional,
                con la finalidad de coordinar la visita técnica.
              </p>
              <p className="mt-2">
                <strong>WhatsApp y llamada:</strong> si te comunicas por estos medios, nos facilitas de forma voluntaria
                datos como nombre, teléfono y dirección o barrio para la visita.
              </p>
              <p className="mt-2">
                No recopilamos datos de pago (tarjetas u otros medios) a través de este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">3. Finalidad del tratamiento</h2>
              <p className="mt-2">
                Los datos se usan para coordinar y prestar el servicio técnico, contactarte respecto a la visita,
                emitir información de garantía cuando corresponda y dar respuesta a solicitudes relacionadas con el
                servicio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">4. Derechos del titular</h2>
              <p className="mt-2">
                Puedes solicitar acceso, actualización, rectificación o supresión de tus datos cuando la ley lo permita,
                escribiendo a {siteConfig.email} desde el mismo correo o identificando de forma razonable tu solicitud.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5. Compartición de datos</h2>
              <p className="mt-2">
                No vendemos datos personales. Solo podrían tratarse por proveedores estrictamente necesarios para el
                funcionamiento del sitio (por ejemplo, hosting), bajo obligaciones de confidencialidad y seguridad
                acordes a la práctica habitual.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">6. Cookies y mediciones</h2>
              <p className="mt-2">
                El sitio puede emplear cookies técnicas necesarias para su funcionamiento. Si accedes desde publicidad
                en Google, pueden aplicarse herramientas de medición de Google (por ejemplo, etiquetas de conversión)
                según la configuración activa en la campaña.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">7. Legislación aplicable</h2>
              <p className="mt-2">
                Esta política se interpreta conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia, en lo
                pertinente al tratamiento de datos personales.
              </p>
            </section>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
