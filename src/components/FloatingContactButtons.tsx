import { siteConfig } from "@/config/site";
import { phoneFabButton, whatsappFabButton } from "@/config/whatsappUi";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";

function IconPhoneFab({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

export function FloatingContactButtons() {
  const callHref = `tel:${siteConfig.telefono.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, deseo agendar un servicio tecnico en ${siteConfig.ciudadPrincipal}.`,
  )}`;

  return (
    <div
      className={
        "fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6 " +
        "[&>a]:shadow-lg [&>a]:shadow-black/15"
      }
      role="group"
      aria-label="Contacto rápido"
    >
      <a
        href={callHref}
        className={phoneFabButton}
        aria-label={`Llamar al ${siteConfig.telefono}`}
      >
        <IconPhoneFab className="h-7 w-7" />
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={whatsappFabButton}
        aria-label="Abrir chat de WhatsApp"
      >
        <WhatsAppGlyph className="h-7 w-7" />
      </a>
    </div>
  );
}
