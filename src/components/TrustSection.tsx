import Image from "next/image";
import { siteConfig } from "@/config/site";

const stats = [
  { k: "Atención", t: "personalizada", variant: "dark" as const },
  { k: "12", t: "Servicios técnicos", variant: "light" as const },
  { k: "Lun–Sáb", t: "7:30–17:30", variant: "light" as const },
  { k: "1", t: "Objetivo: resolver rápido", variant: "dark" as const },
];

const values = [
  {
    title: "Técnicos capacitados",
    desc: "Diagnóstico seguro y protocolos claros en cada visita.",
    Icon: IconTechnician,
  },
  {
    title: "Atención a domicilio",
    desc: "Te visitamos para ahorrar tiempo y evitar traslados del equipo.",
    Icon: IconHomeVisit,
  },
  {
    title: "Diagnóstico preciso",
    desc: "Te explicamos la causa antes de recomendar cualquier trabajo.",
    Icon: IconSearch,
  },
  {
    title: "Precios transparentes",
    desc: "Alcance y costos acordados con honestidad desde el inicio.",
    Icon: IconTag,
  },
  {
    title: "Garantía del servicio",
    desc: "Respaldo por escrito en mano de obra y piezas instaladas.",
    Icon: IconShield,
  },
  {
    title: "Respuesta rápida por WhatsApp",
    desc: "Coordinación ágil para cotizar, dudas y confirmar visitas.",
    Icon: IconChat,
  },
];

function IconTechnician(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 0-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
    </svg>
  );
}

function IconHomeVisit(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function IconSearch(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function IconTag(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607l-9.581-9.581A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
}

function IconShield(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconChat(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337L5.05 21l1.395-3.72C5.512 15.042 5 13.574 5 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}

export function TrustSection() {
  return (
    <section className="bg-white py-12 md:py-14">
      <div className="trust-surface rounded-[28px] border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-6 shadow-inner shadow-slate-200/40 md:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2f4fb7]">
              Confianza y resultados
            </p>
            <h2 className="mt-2 text-balance text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Tu equipo técnico de confianza en {siteConfig.ciudadPrincipal}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Cifras claras y un servicio centrado en resolver: visita a domicilio, explicación honesta
              y respaldo con garantía.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) =>
                stat.variant === "dark" ? (
                  <article
                    key={stat.t}
                    className="rounded-3xl bg-[#1d3a8f] px-5 py-6 text-white shadow-md shadow-[#1d3a8f]/25"
                  >
                    <p className="text-3xl font-black tracking-tight md:text-4xl">{stat.k}</p>
                    <p className="mt-1 text-sm font-medium text-white/85">{stat.t}</p>
                  </article>
                ) : (
                  <article
                    key={stat.t}
                    className="rounded-3xl border border-slate-200/80 bg-[#eef2ff] px-5 py-6 shadow-sm"
                  >
                    <p className="text-3xl font-black tracking-tight text-[#1d3a8f] md:text-4xl">{stat.k}</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">{stat.t}</p>
                  </article>
                )
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute left-0 top-4 z-10 w-[58%] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 transition duration-500 hover:z-20 hover:scale-[1.02]">
                <Image
                  src="/img/nevera-page.avif"
                  alt="Servicio técnico en neveras"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute right-0 top-0 z-20 w-[55%] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 transition duration-500 hover:z-30 hover:scale-[1.02]">
                <Image
                  src="/img/lavadora-page.jpg"
                  alt="Servicio técnico en lavadoras"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-[12%] z-30 w-[48%] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 transition duration-500 hover:scale-[1.03]">
                <Image
                  src="/img/aire_acondicionado-page.avif"
                  alt="Servicio técnico en aire acondicionado"
                  width={360}
                  height={270}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200/80 pt-10">
          <h3 className="text-center text-xl font-bold text-slate-900 md:text-2xl">
            Por qué nos eligen
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600 md:text-base">
            Beneficios concretos, sin promesas vacías. Todo lo que importa en una visita técnica
            profesional.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <article
                key={value.title}
                className={
                  i === 0
                    ? "rounded-3xl border border-[#1d3a8f]/20 bg-[#1d3a8f] p-6 text-white shadow-lg shadow-[#1d3a8f]/20"
                    : "rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
                }
              >
                <value.Icon
                  className={
                    i === 0 ? "h-7 w-7 text-white" : "h-7 w-7 text-[#2f4fb7]"
                  }
                />
                <h4 className={`mt-4 text-lg font-bold ${i === 0 ? "text-white" : "text-slate-900"}`}>
                  {value.title}
                </h4>
                <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/90" : "text-slate-600"}`}>
                  {value.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
