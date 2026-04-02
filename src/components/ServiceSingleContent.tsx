import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/config/site";
import { siteConfig } from "@/config/site";
import { serviceImageById } from "@/config/serviceImages";
import { BrandsStrip } from "@/components/BrandsStrip";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { whatsappSolidButton } from "@/config/whatsappUi";

type ServiceSingleContentProps = {
  servicio: ServiceItem;
};

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 4.5l2.25 6 6.75 1.5-6.75 9-2.25-6-6.75-1.5z" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A9.97 9.97 0 0112 2.25c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.773 2 12 6.477 2 12 2c.73 0 1.439.074 2.126.214"
      />
    </svg>
  );
}

function IconThermo({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v9.75" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3a1.5 1.5 0 00-1.5 1.5v7.5a3.75 3.75 0 107.5 0V4.5A1.5 1.5 0 0012 3z"
      />
    </svg>
  );
}

function IconDroplet({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c4.5 6.5 7.5 10.128 7.5 13.036A5.464 5.464 0 0112 21.75 5.464 5.464 0 014.5 16.036C4.5 13.128 7.5 9.5 12 3z"
      />
    </svg>
  );
}

function IconSound({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343a3.99 3.99 0 000 5.657m2.828-7.07a8 8 0 000 11.314M12 18.75V5.25l-4.5 3H5.25v7.5H7.5l4.5 3z"
      />
    </svg>
  );
}

function IconSnow({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v18M8.25 5.25l7.5 13.5M15.75 5.25l-7.5 13.5M5.25 12h13.5"
      />
    </svg>
  );
}

const fallaVisuals = [
  { Icon: IconThermo, tone: "from-[#e8edff] to-[#f4f6ff] text-[#2f4fb7] ring-[#2f4fb7]/15" },
  { Icon: IconSnow, tone: "from-sky-50 to-indigo-50 text-sky-700 ring-sky-200/60" },
  { Icon: IconDroplet, tone: "from-blue-50 to-slate-50 text-blue-600 ring-blue-200/50" },
  { Icon: IconSound, tone: "from-violet-50 to-slate-50 text-violet-600 ring-violet-200/50" },
] as const;

const pasosHero = [
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

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconGrid({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75A2.25 2.25 0 0115.75 18H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 15.75h-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25z"
      />
    </svg>
  );
}

export function ServiceSingleContent({ servicio }: ServiceSingleContentProps) {
  const heroImage = serviceImageById[servicio.id];
  const callHref = `tel:${siteConfig.telefono.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero soporte para ${servicio.nombre} en ${siteConfig.ciudadPrincipal}.`
  )}`;

  return (
    <div className="bg-transparent px-0 py-0 md:px-6 md:py-10">
      <div className="mx-auto w-full max-w-7xl rounded-none border-0 bg-transparent p-0 shadow-none">
        <div className="overflow-visible rounded-none border-0 bg-transparent">
          <div className="bg-transparent px-4 pt-4 md:px-3 md:pt-3">
            <nav
              aria-label="Ruta"
              className="mb-4 hidden flex-wrap items-center gap-x-2 gap-y-1 px-1 text-[13px] text-slate-500 md:flex md:px-2"
            >
              <Link href="/" className="font-medium text-[#2f4fb7] transition hover:text-[#1f358d]">
                Inicio
              </Link>
              <span aria-hidden className="text-slate-300">
                /
              </span>
              <Link href="/#servicios" className="font-medium text-[#2f4fb7] transition hover:text-[#1f358d]">
                Servicios
              </Link>
              <span aria-hidden className="text-slate-300">
                /
              </span>
              <span className="font-medium text-slate-600">{servicio.nombre}</span>
            </nav>

            {/* Vista móvil: ancho completo sobre fondo blanco (sin marco vidrio extra) */}
            <div className="md:hidden space-y-5">
                <h1 className="text-balance text-[1.65rem] font-black leading-[1.15] tracking-tight text-slate-900">
                  ¿Necesitas técnico para tu {servicio.nombre.toLowerCase()}?
                </h1>

                <div className="mt-4 flex gap-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-w-0 flex-1 items-center gap-2.5 rounded-full border border-slate-200/90 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm"
                  >
                    <IconSearch className="h-5 w-5 shrink-0 text-slate-400" />
                    <span className="truncate">WhatsApp…</span>
                  </a>
                  <a
                    href="#fallas-heading"
                    className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-600 shadow-sm"
                    aria-label="Ver fallas frecuentes"
                  >
                    <IconBolt className="h-5 w-5" />
                  </a>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#070b14] via-[#152a52] to-[#1a2744] p-5 shadow-[0_24px_56px_-18px_rgba(15,23,42,0.55)] ring-1 ring-black/20">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#2f4fb7]/25 via-transparent to-sky-300/15"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -right-10 -top-14 h-44 w-44 rounded-full bg-[#4d6fd4]/35 blur-3xl"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-[100%] bg-[#0a1628]/90 blur-2xl"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-0 bg-white/[0.05]" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="min-w-0 flex-1 text-left">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-200/90">
                        {servicio.nombre} · {siteConfig.ciudadPrincipal}
                      </p>
                      <h2 className="mt-2 text-balance text-[1.0625rem] font-bold leading-snug tracking-tight text-white [text-shadow:0_1px_24px_rgba(0,0,0,0.35)]">
                        {servicio.intencion}
                      </h2>
                      <a
                        href={callHref}
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.45)] transition hover:border-white/40 hover:bg-slate-50 active:scale-[0.98]"
                      >
                        <IconPhone className="h-4 w-4 opacity-80" aria-hidden />
                        Llamar
                      </a>
                    </div>
                    <div className="relative shrink-0" aria-hidden>
                      <div className="absolute inset-0 -m-0.5 rounded-full bg-gradient-to-br from-white/25 via-sky-200/20 to-transparent opacity-80 blur-[2px]" />
                      <div className="relative h-[7.5rem] w-[7.5rem] overflow-hidden rounded-full border-2 border-white/25 bg-slate-900/60 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.55)] ring-2 ring-[#2f4fb7]/30">
                        <Image
                          src={heroImage}
                          alt=""
                          width={200}
                          height={200}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h2 className="text-base font-bold text-slate-900">Atajos</h2>
                    <Link href="/#servicios" className="text-xs font-semibold text-[#2f4fb7]">
                      Todo ›
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={callHref}
                      className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200/80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#2f4fb7]">
                        <IconPhone className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-semibold text-slate-800">Llamar</span>
                      <IconChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200/80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dcf8e8] text-[#128C54]">
                        <WhatsAppGlyph className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-semibold text-slate-800">WhatsApp</span>
                      <IconChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                    </a>
                    <Link
                      href="/#servicios"
                      className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200/80"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <IconGrid className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-semibold text-slate-800">Servicios</span>
                      <IconChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                    </Link>
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200/80">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-amber-600">
                        <IconClock className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1 text-sm font-semibold leading-tight text-slate-800">
                        {siteConfig.horarioCorto}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="text-base font-bold text-slate-900">Más equipos</h2>
                    <Link href="/#servicios" className="text-xs font-semibold text-[#2f4fb7]">
                      Catálogo ›
                    </Link>
                  </div>
                  <div className="-mx-1 flex gap-3 overflow-x-auto pb-1 pt-0.5 [scrollbar-width:none]">
                    {siteConfig.servicios
                      .filter((s) => s.id !== servicio.id)
                      .slice(0, 8)
                      .map((s) => (
                        <Link
                          key={s.id}
                          href={`/servicios/${s.id}`}
                          className="w-[7.25rem] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/80"
                        >
                          <div className="relative aspect-[4/3] w-full bg-slate-100">
                            <Image
                              src={serviceImageById[s.id]}
                              alt={s.nombre}
                              fill
                              className="object-cover"
                              sizes="120px"
                            />
                            <span className="absolute left-2 top-2 rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[10px] font-bold text-white">
                              {s.nombre}
                            </span>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
            </div>

            <div className="hidden md:block">
              <div className="relative grid items-center gap-10 pb-6 pt-2 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-6 xl:gap-10 md:pb-10 md:pt-4">
                <div className="relative z-10 flex min-w-0 gap-5 md:gap-7">
                  <div className="hidden shrink-0 flex-col items-center pt-1 sm:flex" aria-hidden>
                    {pasosHero.map((p, i) => (
                      <div key={p.titulo} className="flex flex-col items-center">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200/90 bg-white text-xs font-bold text-[#1d3a8f] shadow-sm shadow-slate-200/60">
                          {i + 1}
                        </span>
                        {i < pasosHero.length - 1 ? (
                          <span className="my-1.5 h-10 w-0.5 rounded-full bg-gradient-to-b from-sky-300/80 to-sky-100" />
                        ) : null}
                      </div>
                    ))}
                  </div>

                  <div className="min-w-0 space-y-5 md:space-y-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2f4fb7] md:text-xs">
                      {servicio.nombre} · {siteConfig.ciudadPrincipal}
                    </p>

                    <h1 className="text-balance text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-[3.05rem] lg:leading-[1.08]">
                      {servicio.detalleTitulo}
                    </h1>

                    <ul className="space-y-2.5 sm:hidden">
                      {pasosHero.map((p) => (
                        <li key={p.titulo} className="flex gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2f4fb7]" aria-hidden />
                          <span>
                            <span className="font-semibold text-slate-800">{p.titulo}.</span> {p.desc}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="hidden sm:block">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Cómo trabajamos
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {pasosHero.map((p) => (
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
                        className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#2f4fb7] px-8 text-base font-bold text-white shadow-lg shadow-[#2f4fb7]/30 transition hover:bg-[#243d8f]"
                      >
                        <IconPhone className="h-4 w-4 opacity-90" />
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
                          WhatsApp para tu {servicio.nombre.toLowerCase()}
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
                      src={heroImage}
                      alt={`${servicio.nombre}: servicio técnico en ${siteConfig.ciudadPrincipal}`}
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
                    Ver más servicios
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>

                  <div
                    className={
                      "absolute right-4 top-4 max-w-[13rem] rounded-2xl border border-white/80 bg-white/90 px-3 py-2.5 " +
                      "shadow-lg shadow-slate-900/10 backdrop-blur-md md:right-5 md:top-5 md:max-w-[14rem] md:px-4"
                    }
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {servicio.nombre}
                    </p>
                    <p className="mt-0.5 text-xs font-medium leading-snug text-slate-600">{servicio.resumen}</p>
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
            </div>
          </div>

          <BrandsStrip />

          <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-5 md:pb-20 md:pt-4">
            <section className="mt-8 md:mt-10" aria-labelledby="fallas-heading">
              <div className="rounded-[28px] border border-sky-100/90 bg-gradient-to-b from-white via-sky-50/30 to-[#f0f6ff]/80 p-6 shadow-sm shadow-sky-100/50 md:p-8">
            <div className="max-w-2xl">
              <h2
                id="fallas-heading"
                className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl"
              >
                Fallas que resolvemos con frecuencia
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                Si reconoces alguno de estos síntomas en tu <span className="font-medium text-slate-800">{servicio.nombre.toLowerCase()}</span>,
                puedes solicitar visita: diagnosticamos en sitio y te explicamos la solución con claridad.
              </p>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {servicio.fallasComunes.map((falla, index) => {
                const { Icon, tone } = fallaVisuals[index % fallaVisuals.length];
                const n = String(index + 1).padStart(2, "0");
                return (
                  <li key={falla}>
                    <div className="group relative flex h-full gap-4 rounded-2xl border border-slate-200/80 bg-white/95 p-4 pr-5 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#2f4fb7]/25 hover:shadow-md hover:shadow-slate-200/50 md:p-5">
                      <div className="pointer-events-none absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#2f4fb7] to-[#5b7fd9] opacity-90" aria-hidden />
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} ring-1`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#2f4fb7]/80">
                          Síntoma {n}
                        </p>
                        <p className="mt-1 text-base font-semibold leading-snug tracking-tight text-slate-900">
                          {falla}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
              </div>
            </section>

            <section className="mt-10 md:mt-14" aria-labelledby="solucion-heading">
              <h2 id="solucion-heading" className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
                Cómo te ayudamos
              </h2>
              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_minmax(0,0.9fr)]">
                <article className="rounded-2xl border border-sky-100/80 bg-white p-6 shadow-sm md:p-7">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef2ff] text-[#2f4fb7]">
                      <IconShield className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">Servicio técnico ordenado</h3>
                      <p className="mt-3 leading-relaxed text-slate-600">{servicio.soluciones}</p>
                    </div>
                  </div>
                </article>
                <aside className="flex flex-col justify-center rounded-2xl border border-[#2f4fb7]/20 bg-gradient-to-br from-[#f8f9ff] to-white p-6 md:p-7">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#2f4fb7]">En tu zona</p>
                  <p className="mt-2 text-base leading-relaxed text-slate-700">{servicio.seoLocal}</p>
                </aside>
              </div>
            </section>

            <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f358d] via-[#2f4fb7] to-[#3d61c9] px-6 py-10 text-center text-white shadow-xl shadow-[#0f1d5a]/25 md:px-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/75">Siguiente paso</p>
              <h3 className="mx-auto mt-2 max-w-xl text-2xl font-black tracking-tight text-balance md:text-3xl">
                {servicio.cta}
              </h3>
              <p className="mx-auto mt-1 max-w-lg text-base font-medium text-white/90">
                {servicio.nombre} en {siteConfig.ciudadPrincipal}
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm text-slate-100/95">
                Escríbenos o llámanos: coordinamos visita en {siteConfig.ciudadPrincipal} con ventana clara de
                tiempo.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-sm ${whatsappSolidButton}`}
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={callHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 text-sm font-semibold text-[#233d9a] shadow-sm transition hover:bg-slate-100"
                >
                  <IconPhone className="h-4 w-4" />
                  Llamar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
