import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { legalIdentity, siteConfig } from "@/config/site";
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
            Coordinación de visitas y cotizaciones. Responde el mismo canal que uses para escribirnos o llamarnos.
          </p>

          <div className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-slate-700">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Responsable del servicio</h2>
              <p className="mt-2 leading-relaxed">
                <strong>{legalIdentity.titularNombreCompleto}</strong>, {legalIdentity.titularTipo} en Colombia. Opera
                el servicio bajo el nombre comercial <strong>{siteConfig.nombreEmpresa}</strong> /{" "}
                <strong>{legalIdentity.marcaCopyright}</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">Ubicación general</h2>
              <p className="mt-2 leading-relaxed">
                <strong>{legalIdentity.ubicacionLarga}</strong> (ciudad principal de atención: {siteConfig.ciudadPrincipal}).
              </p>
              <p className="mt-2 text-sm text-slate-600">
                El servicio es a domicilio; la dirección de referencia en Cali puede indicarse al agendar la visita.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">Horario de atención</h2>
              <p className="mt-2 leading-relaxed">{siteConfig.horario}</p>
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
