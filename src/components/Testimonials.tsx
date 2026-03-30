import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Experiencias reales de clientes"
          subtitle="Opiniones sobre rapidez, puntualidad y resultados en cada visita tecnica."
          centered
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.testimonios.map((testimonio) => (
            <blockquote key={testimonio.nombre} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-slate-700">&ldquo;{testimonio.comentario}&rdquo;</p>
              <footer className="mt-4 text-sm font-semibold text-slate-900">
                {testimonio.nombre} - {testimonio.zona}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
