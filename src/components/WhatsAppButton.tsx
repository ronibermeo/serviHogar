import { siteConfig } from "@/config/site";
import { whatsappFabButton } from "@/config/whatsappUi";
import { WhatsAppGlyph } from "@/components/WhatsAppGlyph";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, deseo agendar un servicio tecnico en ${siteConfig.ciudadPrincipal}.`
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={whatsappFabButton}
      aria-label="Abrir chat de WhatsApp"
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
