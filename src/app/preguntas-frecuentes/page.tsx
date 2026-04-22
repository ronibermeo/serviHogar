import type { Metadata } from "next";
import { SiteFrame } from "@/components/SiteFrame";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    q: "¿Atienden a domicilio?",
    a: "Sí, atendemos directamente en domicilio para agilizar diagnóstico y solución.",
  },
  {
    q: "¿Cuánto tarda la atención?",
    a: "Normalmente atendemos el mismo día o al siguiente, según disponibilidad.",
  },
  {
    q: "¿Cómo solicito un técnico?",
    a: "Puedes llamarnos o escribir por WhatsApp para coordinar de inmediato.",
  },
];

export const metadata: Metadata = {
  title: `FAQ | ${siteConfig.nombreEmpresa}`,
  description: "Respuestas rápidas sobre cobertura, tiempos y solicitud de servicio técnico.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <SiteFrame>
      <section className="mx-auto max-w-4xl px-4 py-14 md:px-6">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Preguntas frecuentes
        </h1>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer list-none font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-3 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
