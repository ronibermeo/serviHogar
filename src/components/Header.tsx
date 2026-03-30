"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";
import { navItems, siteConfig } from "@/config/site";
import { serviceImageById } from "@/config/serviceImages";
import { whatsappSolidButton } from "@/config/whatsappUi";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function ServicesMegaPanel({ onNavigate, compact }: { onNavigate?: () => void; compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "grid grid-cols-1 gap-2 p-2"
          : "grid grid-cols-1 gap-2 p-3 sm:grid-cols-2 lg:grid-cols-3"
      }
    >
      {siteConfig.servicios.map((servicio) => {
        const src = serviceImageById[servicio.id];
        return (
          <Link
            key={servicio.id}
            href={`/servicios/${servicio.id}`}
            onClick={() => onNavigate?.()}
            className="group flex gap-3 rounded-xl p-2.5 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d3a8f]/20"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200/80">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="56px"
              />
            </div>
            <div className="min-w-0 flex-1 py-0.5">
              <p className="text-sm font-semibold leading-tight text-slate-900 group-hover:text-[#1d3a8f]">
                {servicio.nombre}
              </p>
              <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-slate-500">{servicio.resumen}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero solicitar servicio tecnico en ${siteConfig.ciudadPrincipal}.`
  )}`;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function closeMobileNav() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  const navLinkClass =
    "relative inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-[13px] font-medium tracking-tight text-slate-500 transition hover:text-slate-900 " +
    "after:absolute after:inset-x-2 after:bottom-1 after:h-px after:scale-x-0 after:bg-[#1d3a8f] after:transition after:content-[''] hover:after:scale-x-100 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d3a8f]/15";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-[4.25rem] items-center justify-between gap-4 md:gap-6">
          <Link
            href="/"
            className="shrink-0 text-base font-bold tracking-tight text-slate-900 transition hover:text-[#1d3a8f] md:text-lg"
          >
            {siteConfig.nombreEmpresa}
          </Link>

          <nav aria-label="Principal" className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-0.5 lg:gap-1">
              {navItems
                .filter((item) => item.label !== "Servicios")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={navLinkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}

              <li className="group relative z-[60] pl-1">
                <button
                  type="button"
                  className={`${navLinkClass} cursor-pointer border-0 bg-transparent`}
                  aria-haspopup="true"
                >
                  Servicios
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 transition duration-200 group-hover:rotate-180 group-hover:text-slate-600" />
                </button>

                <div
                  className={
                    "invisible absolute left-1/2 top-full z-50 w-[min(92vw,44rem)] -translate-x-1/2 pt-3 " +
                    "opacity-0 transition duration-200 ease-out " +
                    "pointer-events-none group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto " +
                    "group-focus-within:visible group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
                  }
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-black/5">
                    <div className="border-b border-slate-100 px-4 py-2.5">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        Elige tu equipo
                      </p>
                      <p className="text-xs text-slate-400">
                        Servicio técnico a domicilio en {siteConfig.ciudadPrincipal}
                      </p>
                    </div>
                    <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain">
                      <ServicesMegaPanel />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center md:flex">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-10 items-center gap-2 rounded-full px-5 text-[13px] ${whatsappSolidButton}`}
            >
              <WhatsAppGlyph className="h-4 w-4 opacity-95" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              if (menuOpen) closeMobileNav();
              else setMenuOpen(true);
            }}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/90 text-slate-600 transition hover:bg-slate-50 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
            menuOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <ul className="space-y-1 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-lg shadow-slate-200/50">
              {navItems
                .filter((item) => item.label !== "Servicios")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMobileNav}
                      className="flex rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li className="px-2 py-1">
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services-panel"
                >
                  Servicios
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  id="mobile-services-panel"
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                    servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 rounded-xl border border-slate-100 bg-slate-50/80">
                    <div className="max-h-[50vh] overflow-y-auto overscroll-contain p-2">
                      <ServicesMegaPanel compact onNavigate={closeMobileNav} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-2 pb-1 pt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMobileNav}
                  className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm ${whatsappSolidButton}`}
                >
                  <WhatsAppGlyph className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
