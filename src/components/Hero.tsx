import Image from "next/image";
import Link from "next/link";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { siteConfig } from "@/config/site";
import { whatsappSolidButton } from "@/config/whatsappUi";

const HERO_IMAGE = "/img/hero-medellin.jpg";

const pasos = [
  { titulo: "Nos escribes o llamas", desc: "Cuéntanos el equipo y la falla." },
  { titulo: "Visitamos tu domicilio", desc: "Técnico en tu zona con agenda clara." },
  { titulo: "Diagnóstico y solución", desc: "Te explicamos y reparamos con garantía." },
] as const;

function brandInitials() {
  return siteConfig.nombreEmpresa
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase())
    .filter(Boolean)
    .slice(0, 3);
}

export function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero una visita técnica para un electrodoméstico en ${siteConfig.ciudadPrincipal}.`
  )}`;

  const callHref = `tel:${siteConfig.telefono.replace(/\s/g, "")}`;

  return (
    <section id="inicio" className="scroll-mt-[5.5rem]">
      <div className="relative pb-2 pt-1 md:pb-4 md:pt-2">
        <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-6 xl:gap-10">
          <div className="relative z-10 flex min-w-0 gap-5 md:gap-7">
            <div className="hidden shrink-0 flex-col items-center pt-1 sm:flex" aria-hidden>
              {pasos.map((_, i) => (
                <div key={pasos[i].titulo} className="flex flex-col items-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200/90 bg-white text-xs font-bold text-[#1d3a8f] shadow-sm shadow-slate-200/60">
                    {i + 1}
                  </span>
                  {i < pasos.length - 1 ? (
                    <span className="my-1.5 h-10 w-0.5 rounded-full bg-gradient-to-b from-sky-300/80 to-sky-100" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="min-w-0 space-y-5 md:space-y-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2f4fb7] md:text-xs">
                Servicio técnico · {siteConfig.ciudadPrincipal}
              </p>
              <h1 className="text-balance text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-[3.15rem] lg:leading-[1.06]">
                Reparación y mantenimiento a domicilio, con respuesta clara
              </h1>

              <ul className="space-y-2.5 sm:hidden">
                {pasos.map((p) => (
                  <li key={p.titulo} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f4fb7]" aria-hidden />
                    <span>
                      <span className="font-semibold text-slate-800">{p.titulo}.</span> {p.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="hidden sm:block">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Cómo trabajamos</p>
                <ul className="mt-3 space-y-2.5">
                  {pasos.map((p) => (
                    <li key={p.titulo} className="text-sm text-slate-600">
                      <span className="font-semibold text-slate-800">{p.titulo}</span>
                      <span className="text-slate-500"> — {p.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={callHref}
                  className="inline-flex h-14 shrink-0 items-center justify-center rounded-2xl bg-[#2f4fb7] px-8 text-base font-bold text-white shadow-lg shadow-[#2f4fb7]/30 transition hover:bg-[#243d8f]"
                >
                  Agendar llamada
                </a>
                <div className="flex items-center gap-2 sm:pl-1">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${whatsappSolidButton}`}
                    aria-label="Abrir WhatsApp"
                  >
                    <WhatsAppGlyph className="h-7 w-7" />
                  </a>
                  <span className="max-w-[10rem] text-xs font-medium leading-snug text-slate-500 sm:max-w-none sm:text-sm">
                    O escríbenos por WhatsApp al instante
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div
              className={
                "relative aspect-[4/3] overflow-hidden rounded-[28px] border border-slate-200/90 bg-slate-100 " +
                "shadow-[0_20px_50px_-12px_rgba(29,58,143,0.25)] ring-1 ring-slate-200/40 md:aspect-[5/4] lg:aspect-auto lg:min-h-[380px]"
              }
            >
              <Image
                src={HERO_IMAGE}
                alt={`Vista de ${siteConfig.ciudadPrincipal}: servicio técnico de electrodomésticos a domicilio`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d3a8f]/25 via-transparent to-white/10"
                aria-hidden
              />
            </div>

            <Link
              href="/#servicios"
              className={
                "absolute bottom-5 left-4 flex items-center gap-2 rounded-full border border-white/90 " +
                "bg-white/95 px-4 py-2.5 text-sm font-semibold text-[#1d3a8f] shadow-lg shadow-slate-900/10 backdrop-blur-md " +
                "transition hover:bg-white md:bottom-6 md:left-5"
              }
            >
              Ver equipos que reparamos
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <div
              className={
                "absolute right-4 top-4 max-w-[12rem] rounded-2xl border border-white/80 " +
                "bg-white/90 px-3 py-2.5 shadow-lg shadow-slate-900/10 backdrop-blur-md md:right-5 md:top-5 md:max-w-[14rem] md:px-4"
              }
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Zona de cobertura</p>
              <p className="mt-0.5 text-sm font-bold leading-snug text-slate-800">{siteConfig.cobertura}</p>
              <div className="mt-2 flex -space-x-1.5" aria-hidden>
                {brandInitials().map((letter, i) => (
                  <span
                    key={`${letter}-${i}`}
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-sky-200 to-sky-400 text-[10px] font-bold text-white"
                  >
                    {letter}
                  </span>
                ))}
                <span className="flex h-7 min-w-[1.75rem] items-center justify-center rounded-full border-2 border-white bg-slate-100 px-1 text-[10px] font-bold text-slate-600">
                  +15
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            "relative z-10 mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-3 shadow-sm shadow-slate-200/40 " +
            "md:mt-10 md:rounded-3xl md:p-5"
          }
        >
          <p className="text-center text-[11px] font-semibold uppercase tracking-wider text-slate-500 md:text-left">
            Por qué contactarnos hoy
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3 sm:gap-5">
            <div className="flex gap-3 rounded-2xl bg-white/80 p-3 ring-1 ring-sky-100/80">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100/90 text-[#2f4fb7]"
                aria-hidden
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.125-7.5 11.25-7.5 11.25S4.5 17.625 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-900">Cobertura real</p>
                <p className="mt-0.5 text-sm leading-snug text-slate-600">{siteConfig.cobertura}</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white/80 p-3 ring-1 ring-sky-100/80">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100/90 text-[#2f4fb7]"
                aria-hidden
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-900">Horario de atención</p>
                <p className="mt-0.5 text-sm leading-snug text-slate-600">{siteConfig.horario}</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white/80 p-3 ring-1 ring-sky-100/80">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100/90 text-[#2f4fb7]"
                aria-hidden
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A9.97 9.97 0 0112 2.25c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.773 2 12 6.477 2 12 2c.73 0 1.439.074 2.126.214M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-900">Servicio a domicilio</p>
                <p className="mt-0.5 text-sm leading-snug text-slate-600">
                  Diagnóstico claro, repuestos acordados y garantía por escrito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
