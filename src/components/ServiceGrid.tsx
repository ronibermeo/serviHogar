import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceImageById } from "@/config/serviceImages";
import { siteConfig } from "@/config/site";

export function ServiceGrid() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-white py-12 md:py-14">
      <div className="rounded-[32px] border border-sky-100/90 bg-gradient-to-b from-white via-sky-50/40 to-[#f0f6ff]/80 p-5 shadow-sm shadow-sky-100/50 md:p-8">
        <SectionHeading
          title="Servicios con visita técnica a domicilio"
          subtitle={`Elige tu equipo en ${siteConfig.ciudadPrincipal}. Diagnóstico claro y solución profesional.`}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.servicios.map((servicio) => {
            const src = serviceImageById[servicio.id];
            return (
              <article
                key={servicio.id}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1d2e76]/12 hover:ring-slate-300/90"
              >
                <Link
                  href={`/servicios/${servicio.id}`}
                  className="relative block aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={servicio.nombre}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={servicio.id === "neveras"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/20 to-transparent opacity-90 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="text-lg font-bold tracking-tight text-white md:text-xl">
                      {servicio.nombre}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/85">{servicio.resumen}</p>
                  </div>
                </Link>
                <div className="flex items-center justify-between border-t border-slate-100 bg-white/95 px-4 py-3 backdrop-blur-sm md:px-5">
                  <span className="text-xs font-medium text-slate-500">
                    Reparación · mantenimiento · instalación
                  </span>
                  <Link
                    href={`/servicios/${servicio.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#2f4fb7] transition group-hover:gap-2"
                  >
                    {servicio.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
