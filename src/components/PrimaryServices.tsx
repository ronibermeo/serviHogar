import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { whatsappTextLink } from "@/config/whatsappUi";

const pillars = [
  {
    title: "Reparación",
    desc: "Corregimos fallas eléctricas, mecánicas y electrónicas con diagnóstico técnico en sitio.",
    benefit: "Recupera tu equipo sin perder tiempo en traslados.",
    cta: "Solicitar reparación",
  },
  {
    title: "Mantenimiento",
    desc: "Limpieza técnica, ajustes y revisión preventiva para mejorar rendimiento y evitar daños.",
    benefit: "Menos averías inesperadas y mejor eficiencia energética.",
    cta: "Agendar mantenimiento",
  },
  {
    title: "Instalación",
    desc: "Montaje profesional de equipos nuevos con verificación de seguridad y funcionamiento.",
    benefit: "Instalación correcta desde el primer día.",
    cta: "Programar instalación",
  },
];

export function PrimaryServices() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, quiero asesoria para servicio tecnico."
  )}`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6" aria-labelledby="pilares-title">
      <SectionHeading
        title="Soluciones técnicas para cada etapa de tu electrodoméstico"
        subtitle="Un solo equipo para reparar, mantener e instalar con protocolos claros y atención a domicilio."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {pillars.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.desc}</p>
            <p className="mt-4 text-sm font-medium text-slate-800">{item.benefit}</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className={`mt-5 inline-flex text-sm ${whatsappTextLink}`}
            >
              {item.cta} →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
