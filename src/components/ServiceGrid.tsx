import Image from "next/image";
import Link from "next/link";
import { serviceImageById } from "@/config/serviceImages";
import { siteConfig } from "@/config/site";

const CITY_HERO = "/img/califondo.jpg";

export function ServiceGrid() {
  return (
    <section id="servicios" className="scroll-mt-24 py-14 md:py-16">
      <div className="overflow-hidden rounded-[36px] border border-slate-200/90 bg-slate-950 shadow-[0_32px_80px_-28px_rgba(15,23,42,0.35)] md:rounded-[44px]">
        {/* Banda hero local a gran formato */}
        <div className="relative min-h-[min(58vw,320px)] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[440px]">
          <Image
            src={CITY_HERO}
            alt={`Servicio técnico a domicilio en ${siteConfig.ciudadPrincipal} y municipios cercanos`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-900/20"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent md:from-slate-950/40" aria-hidden />

          <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end px-6 pb-10 pt-24 md:px-12 md:pb-12 md:pt-32 lg:px-14 lg:pb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/75">
              {siteConfig.ciudadPrincipal} · municipios cercanos
            </p>
            <h2
              className="mt-3 max-w-3xl text-balance font-[family-name:var(--font-playfair)] text-[2rem] font-semibold leading-[1.12] tracking-tight text-white md:text-5xl md:leading-[1.08] lg:text-[3.25rem]"
            >
              Servicio técnico con la ciudad como telón de fondo
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/88 md:text-lg">
              Visitas a domicilio coordinadas, diagnóstico claro y soluciones profesionales para tu hogar en{" "}
              {siteConfig.ciudadPrincipal}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/#inicio"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:border-white/40 hover:bg-white/15"
              >
                Cómo agendar
                <span aria-hidden className="text-lg leading-none">
                  ↓
                </span>
              </Link>
              <p className="text-sm text-white/65">
                Elige tu equipo abajo · respuesta por WhatsApp o llamada
              </p>
            </div>
          </div>
        </div>

        {/* Cuadrícula de servicios */}
        <div className="border-t border-white/10 bg-gradient-to-b from-slate-100 to-white px-5 py-10 md:px-10 md:py-14 lg:px-12">
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2f4fb7]">
              Catálogo de servicios
            </p>
            <h3 className="mt-3 text-balance font-[family-name:var(--font-playfair)] text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Servicios con visita técnica a domicilio
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Elige tu equipo en {siteConfig.ciudadPrincipal}. Diagnóstico claro y solución profesional.
            </p>
          </header>

          <ul className="mt-12 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {siteConfig.servicios.map((servicio) => {
              const src = serviceImageById[servicio.id];
              return (
                <li key={servicio.id}>
                  <article
                    className={
                      "group flex h-full flex-col overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.45)] " +
                      "ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-18px_rgba(29,58,143,0.35)] hover:ring-[#2f4fb7]/30 md:rounded-[32px]"
                    }
                  >
                    <Link
                      href={`/servicios/${servicio.id}`}
                      className="relative block aspect-square overflow-hidden"
                    >
                      <Image
                        src={src}
                        alt={servicio.nombre}
                        fill
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={servicio.id === "neveras"}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10 opacity-95 transition duration-300 group-hover:via-slate-950/65"
                        aria-hidden
                      />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col p-4 md:p-5">
                        <h4 className="font-[family-name:var(--font-playfair)] text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {servicio.nombre}
                        </h4>
                        <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-white/80 sm:text-sm sm:leading-relaxed">
                          {servicio.resumen}
                        </p>
                        <span
                          className={
                            "mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-white/10 px-3 py-2 text-xs font-semibold " +
                            "text-white backdrop-blur-sm transition sm:mt-4 sm:px-4 sm:py-2.5 sm:text-sm group-hover:border-white/55 group-hover:bg-white/15"
                          }
                        >
                          Ver servicio
                          <span aria-hidden className="transition group-hover:translate-x-0.5">
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                    <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-slate-900/95 px-5 py-4 md:px-6">
                      <span className="text-xs font-medium text-slate-400">
                        Reparación · mantenimiento · instalación
                      </span>
                      <Link
                        href={`/servicios/${servicio.id}`}
                        className="shrink-0 text-sm font-bold text-sky-300 transition hover:text-white"
                      >
                        {servicio.cta}
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
