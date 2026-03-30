import Image from "next/image";
import { siteConfig } from "@/config/site";
import { whatsappSolidButton } from "@/config/whatsappUi";

export function AboutLocal() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero información de servicio técnico en ${siteConfig.ciudadPrincipal}.`
  )}`;
  const callHref = `tel:${siteConfig.telefono.replace(/\s/g, "")}`;

  return (
    <section id="nosotros" className="scroll-mt-24 bg-white py-12 md:py-14">
      <div className="rounded-[28px] border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-[#eef2ff]/40 p-6 md:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2f4fb7]">
              Quiénes somos
            </p>
            <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Servicio técnico en {siteConfig.ciudadPrincipal} con respuesta real
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {siteConfig.nombreEmpresa} atiende hogares, apartamentos y negocios con visitas a
              domicilio: escuchamos el problema, diagnosticamos con claridad y te proponemos la mejor
              solución sin relleno comercial.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Reparación, mantenimiento e instalación en el lugar que necesitas.",
                "Proceso ordenado: te contamos qué pasa, qué hace falta y qué implica.",
                "Comunicación por WhatsApp o llamada, sin formularios largos.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1d3a8f] text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm ${whatsappSolidButton}`}
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href={callHref}
                className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Llamar ahora
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200/80">
              <Image
                src="/img/hero-medellin.jpg"
                alt={`${siteConfig.nombreEmpresa} en ${siteConfig.ciudadPrincipal}: servicio técnico local`}
                width={640}
                height={480}
                className="h-full w-full object-cover object-center"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/55 to-transparent" />
            </div>

            <div className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-[min(100%,20rem)]">
              <div className="rounded-2xl border border-white/20 bg-white/95 p-5 shadow-lg backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2f4fb7]">
                  Datos rápidos
                </p>
                <dl className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="text-slate-500">Ciudad</dt>
                    <dd className="font-semibold text-slate-900">{siteConfig.ciudadPrincipal}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="text-slate-500">Cobertura</dt>
                    <dd className="text-right font-medium text-slate-900">{siteConfig.cobertura}</dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-100 pb-2">
                    <dt className="text-slate-500">Horario</dt>
                    <dd className="text-right font-medium text-slate-900">{siteConfig.horario}</dd>
                  </div>
                  <div className="flex justify-between gap-4 pt-1">
                    <dt className="text-slate-500">Teléfono</dt>
                    <dd>
                      <a href={callHref} className="font-semibold text-[#1d3a8f] hover:underline">
                        {siteConfig.telefono}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
