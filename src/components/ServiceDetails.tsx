import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { whatsappSolidButton } from "@/config/whatsappUi";

export function ServiceDetails() {
  const whatsappBase = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <SectionHeading
        title={`Detalle de atención por equipo en ${siteConfig.ciudadPrincipal}`}
        subtitle="Cada servicio incluye diagnóstico técnico, recomendación clara y acompañamiento para una decisión segura."
      />
      <div className="mt-8 grid gap-5">
        {siteConfig.servicios.map((servicio) => (
          <article
            id={`servicio-${servicio.id}`}
            key={servicio.id}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-2xl font-bold text-slate-900">{servicio.detalleTitulo}</h3>
            <p className="mt-3 text-slate-600">{servicio.detalleDescripcion}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-slate-900">Fallas comunes</h4>
                <ul className="mt-2 list-disc pl-5 text-slate-700">
                  {servicio.fallasComunes.map((falla) => (
                    <li key={falla}>{falla}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Reparación, mantenimiento o instalación</h4>
                <p className="mt-2 text-slate-700">{servicio.soluciones}</p>
              </div>
            </div>
            <p className="mt-4 text-slate-700">{servicio.seoLocal}</p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent(
                `Hola, quiero soporte para ${servicio.nombre} en ${siteConfig.ciudadPrincipal}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className={`mt-5 inline-flex rounded-xl px-4 py-2.5 text-sm ${whatsappSolidButton}`}
            >
              Solicitar por WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
