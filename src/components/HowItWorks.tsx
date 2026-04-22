import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Cuéntanos qué equipo presenta falla",
    desc: "Nos compartes el tipo de electrodoméstico y una descripción breve de lo que ocurre.",
  },
  {
    number: "02",
    title: "Agenda la visita",
    desc: "Seleccionas fecha, franja horaria y datos de contacto para confirmar disponibilidad.",
  },
  {
    number: "03",
    title: "Recibe diagnóstico técnico a domicilio",
    desc: "El técnico evalúa el equipo en sitio y te explica opciones, tiempos y costes.",
  },
  {
    number: "04",
    title: "Reparamos, instalamos o hacemos mantenimiento",
    desc: "Ejecutamos el servicio aprobado y validamos funcionamiento antes de cerrar la visita.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Cómo funciona nuestro servicio técnico"
          subtitle="Un proceso simple para que agendes rápido y recibas atención confiable."
          centered
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-extrabold text-sky-700">{step.number}</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
