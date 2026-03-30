import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export function FAQ() {
  return (
    <section id="preguntas-frecuentes" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <SectionHeading
        title="Preguntas frecuentes"
        subtitle="Resolvemos las dudas mas comunes antes de agendar tu visita."
      />
      <div className="mt-8 space-y-3">
        {siteConfig.preguntasFrecuentes.map((item) => (
          <details key={item.pregunta} className="rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer list-none font-semibold text-slate-900">
              {item.pregunta}
            </summary>
            <p className="mt-3 text-slate-700">{item.respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
