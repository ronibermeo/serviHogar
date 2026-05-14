import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { legalIdentity, siteConfig } from "@/config/site";
import { whatsappSolidButton } from "@/config/whatsappUi";

export const metadata: Metadata = {
  title: `Quiénes somos | ${siteConfig.nombreEmpresa}`,
  description: `Servicio técnico a domicilio en ${siteConfig.ciudadPrincipal}: titular, alcance del servicio y forma de trabajo.`,
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

          <p className="mt-3 max-w-2xl text-slate-600">
            Información clara sobre quién presta el servicio técnico y cómo trabajamos en {siteConfig.ciudadPrincipal} y
            alrededores.
          </p>

          <div className="mt-8 space-y-8 text-slate-700">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Titular del servicio</h2>
              <p className="mt-3 leading-relaxed">
                El servicio técnico que ves en este sitio como <strong>{siteConfig.nombreEmpresa}</strong> (nombre
                comercial) y como <strong>{legalIdentity.marcaCopyright}</strong> lo presta{" "}
                <strong>{legalIdentity.titularNombreCompleto}</strong>, <strong>{legalIdentity.titularTipo}</strong> en{" "}
                <strong>Colombia</strong>, con actividad en <strong>{legalIdentity.ubicacionLarga}</strong>. No
                representamos una sociedad, una razón social ni un NIT empresarial: la relación con el cliente es con la
                misma persona natural que coordina las visitas y la facturación cuando corresponde.
              </p>
              <p className="mt-3 leading-relaxed">
                Esta identificación debe coincidir con el titular asociado a medios de pago y a la actividad comercial
                anunciada, para que no haya duda sobre quién responde por el servicio.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Qué servicio ofrecemos</h2>
              <p className="mt-3 leading-relaxed">
                Visitas a domicilio para <strong>diagnóstico, reparación, mantenimiento e instalación</strong> de
                electrodomésticos en {siteConfig.ciudadPrincipal} y zona cercana. El flujo es sencillo: nos cuentas el
                equipo y la falla, acordamos visita, revisamos en tu hogar o negocio y te explicamos qué ocurre y qué
                opciones hay antes de realizar trabajos mayores. Los precios y alcances se comentan con claridad; no
                usamos lenguaje de “empresa líder” ni promesas que no podamos respaldar en la práctica.
              </p>
              <p className="mt-3 leading-relaxed">
                <strong>No somos el servicio técnico oficial</strong> de ninguna marca ni fabricante. No tenemos
                afiliación, franquicia ni autorización con Samsung, LG, Whirlpool, Mabe, Haceb, Bosch, Electrolux ni
                otros fabricantes; los nombres de marcas en el sitio sirven solo para indicar el tipo de equipo que
                podemos revisar.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Cómo operamos</h2>
              <p className="mt-3 leading-relaxed">
                Recibimos solicitudes por WhatsApp, llamada o formulario web, coordinamos la visita y, en sitio,
                realizamos el diagnóstico. Si procede la reparación, se acuerda contigo antes de ejecutarla. Cuando
                aplica, dejamos garantía por escrito sobre mano de obra y piezas instaladas, según lo acordado en cada
                caso.
              </p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Contacto</h2>
              <ul className="mt-3 space-y-2 leading-relaxed">
                <li>
                  <span className="font-semibold text-slate-900">Teléfono / WhatsApp:</span>{" "}
                  <a className="text-sky-800 underline-offset-2 hover:underline" href={callHref}>
                    {siteConfig.telefono}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Correo:</span>{" "}
                  <a className="text-sky-800 underline-offset-2 hover:underline" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
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
