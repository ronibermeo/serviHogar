import { siteConfig } from "@/config/site";
import { whatsappSolidButton } from "@/config/whatsappUi";

export function TopBar() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero agendar un servicio técnico en ${siteConfig.ciudadPrincipal}.`
  )}`;

  return (
    <div className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 text-sm md:px-6">
        <p>
          <span className="font-semibold">Ciudad:</span> {siteConfig.ciudadPrincipal}
        </p>
        <p>
          <span className="font-semibold">Horario:</span> {siteConfig.horario}
        </p>
        <p>
          <span className="font-semibold">Tel:</span> {siteConfig.telefono}
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full px-4 py-1.5 ${whatsappSolidButton}`}
        >
          WhatsApp directo
        </a>
      </div>
    </div>
  );
}
