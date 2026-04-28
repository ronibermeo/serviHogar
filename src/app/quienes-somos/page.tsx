import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { siteConfig } from "@/config/site";
import { whatsappSolidButton } from "@/config/whatsappUi";

export const metadata: Metadata = {
  title: `Quiénes somos | ${siteConfig.nombreEmpresa}`,
  description:
    "Conoce cómo opera Marcatecnicos como servicio técnico independiente en Cali, Colombia.",
  alternates: {
    canonical: "/quienes-somos",
  },
};

export default function QuienesSomosPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, quiero solicitar información sobre un servicio técnico."
  )}`;
  const callHref = `tel:${siteConfig.telefono.replace(/\s/g, "")}`;

  return (
    <SiteFrame>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Quiénes somos</h1>

          <div className="mt-8 space-y-8 text-slate-700">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Somos un servicio técnico independiente</h2>
              <p className="mt-3 leading-relaxed">
                Marcatecnicos es un emprendimiento independiente con sede en Cali, Colombia. Ofrecemos servicio
                técnico de diagnóstico, reparación y mantenimiento de electrodomésticos a domicilio. No somos el
                servicio técnico oficial de ninguna marca ni fabricante. No tenemos ninguna relación comercial, de
                afiliación, franquicia ni autorización con Samsung, LG, Whirlpool, Mabe, Haceb, Bosch, Electrolux ni
                con ningún otro fabricante de electrodomésticos.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Cómo operamos</h2>
              <p className="mt-3 leading-relaxed">
                Recibimos solicitudes de clientes a través de WhatsApp y teléfono, coordinamos una visita a domicilio,
                realizamos el diagnóstico en el lugar y proponemos la solución con presupuesto claro antes de
                proceder. Todos nuestros servicios incluyen garantía por escrito sobre mano de obra y piezas
                instaladas.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Contacto</h2>
              <ul className="mt-3 space-y-2 leading-relaxed">
                <li>
                  <span className="font-semibold text-slate-900">Teléfono / WhatsApp:</span> 3180771016
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Correo:</span> marcatecnicos@gmail.com
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
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
            </section>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
