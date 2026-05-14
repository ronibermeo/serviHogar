import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { getDireccionOperadorCompleta, legalIdentity, siteConfig } from "@/config/site";
import { whatsappSolidButton } from "@/config/whatsappUi";

export const metadata: Metadata = {
  title: `Contacto | ${siteConfig.nombreEmpresa}`,
  description: `Datos de contacto del servicio técnico en ${siteConfig.ciudadPrincipal}: responsable, correo, teléfono y ubicación.`,
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, quiero solicitar información sobre un servicio técnico."
  )}`;
  const callHref = `tel:${siteConfig.telefono.replace(/\s/g, "")}`;
  const mailHref = `mailto:${siteConfig.email}`;

  return (
    <SiteFrame>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Contacto</h1>
          <p className="mt-3 text-slate-600">
            Coordinación de visitas y cotizaciones. Responde el mismo canal que uses para escribirnos.
          </p>

          <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-700">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Responsable del servicio</h2>
              <p className="mt-2 leading-relaxed">
                {legalIdentity.titularNombreCompleto}, {legalIdentity.titularTipo} en Colombia. Opera el servicio
                bajo el nombre comercial {siteConfig.nombreEmpresa} / {legalIdentity.marcaCopyright} en{" "}
                {legalIdentity.ubicacionCorta}.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">Ubicación y dirección de referencia</h2>
              <p className="mt-2 leading-relaxed">
                <strong>{getDireccionOperadorCompleta()}</strong>
              </p>
              <p className="mt-2 text-sm text-slate-600">
                El servicio técnico se presta principalmente a domicilio en {siteConfig.cobertura}. La dirección indicada
                corresponde al operador ({legalIdentity.titularNombreCompleto}) y sirve como referencia de ubicación
                general; el detalle de visita se coordina por los canales de contacto.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">Datos de facturación (NIT)</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Si necesita identificación tributaria (NIT) u otros datos fiscales para facturación electrónica o
                constancias, solicítelos por correo a {siteConfig.email} indicando el motivo. Solo se facilitan datos
                oficiales vigentes; no se publica un NIT en esta página hasta que corresponda de forma estable a la
                actividad declarada.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">Correo electrónico</h2>
              <p className="mt-2">
                <a href={mailHref} className="font-medium text-sky-800 underline-offset-2 hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">Teléfono y WhatsApp</h2>
              <p className="mt-2">
                <a href={callHref} className="font-medium text-sky-800 underline-offset-2 hover:underline">
                  {siteConfig.telefono}
                </a>{" "}
                (mismo número para llamadas y WhatsApp).
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm ${whatsappSolidButton}`}
              >
                <WhatsAppGlyph className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={callHref}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#2f4fb7] px-6 text-sm font-semibold text-white shadow-lg shadow-[#2f4fb7]/25 transition hover:bg-[#243d8f]"
              >
                Llamar
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
