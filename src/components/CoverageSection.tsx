import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export function CoverageSection() {
  return (
    <section id="cobertura" className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <SectionHeading
        title={`Cobertura de servicio técnico en ${siteConfig.ciudadPrincipal} y alrededores`}
        subtitle="Si tu zona no aparece en el listado, escríbenos y validamos disponibilidad en minutos."
      />
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.coberturaZonas.map((zona) => (
            <p key={zona} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
              {zona}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
