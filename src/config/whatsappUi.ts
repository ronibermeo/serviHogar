/**
 * Estilos de CTA alineados con el verde característico de WhatsApp.
 * Referencia aproximada: #25D366 (principal) y #128C7E (hover / secundario).
 */

/** Botón relleno estándar (header, secciones, formularios). */
export const whatsappSolidButton =
  "bg-[#25D366] font-semibold text-white shadow-sm shadow-black/10 transition hover:bg-[#128C7E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40";

/** Botón flotante circular WhatsApp (posición: usar contenedor `FloatingContactButtons`). */
export const whatsappFabButton =
  "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:bg-[#128C7E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2";

/** Botón flotante circular para llamada (misma talla que WhatsApp). */
export const phoneFabButton =
  "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2f4fb7] text-white transition hover:bg-[#243d8f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f4fb7]/40 focus-visible:ring-offset-2";

/** Enlace de texto que abre WhatsApp (p. ej. tarjetas sin botón sólido). */
export const whatsappTextLink =
  "font-semibold text-[#128C54] underline-offset-2 transition hover:text-[#075E54] hover:underline";
