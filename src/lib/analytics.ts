type GtagCommand = (
  command: "js" | "config" | "event",
  target: string | Date,
  params?: Record<string, string>,
) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: GtagCommand;
  }
}

export const googleAdsAwId = "AW-18052329917";
/** Etiqueta del fragmento de teléfono (conversión por llamada desde la web). */
export const googleAdsPhoneConversionLabel = "K-9MCOL17KAcEL3jgqBD";
/** Etiqueta del fragmento de conversión clic WhatsApp (Google Ads). */
export const googleAdsWhatsappConversionLabel = "r171CMyQhaIcEL3jgqBD";
export const googleAdsCallLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_LABEL?.trim() ?? "";
export const googleAdsWhatsappLabel =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL?.trim() || googleAdsWhatsappConversionLabel;

export const isGoogleAdsEnabled = /^AW-\d+$/.test(googleAdsAwId);

function getSendTo(label: string) {
  if (!isGoogleAdsEnabled) return "";
  return label ? `${googleAdsAwId}/${label}` : googleAdsAwId;
}

export function trackContactConversion(channel: "call" | "whatsapp") {
  if (typeof window === "undefined" || typeof window.gtag !== "function" || !isGoogleAdsEnabled) return;

  const sendTo = getSendTo(channel === "call" ? googleAdsCallLabel : googleAdsWhatsappLabel);
  if (!sendTo) return;

  window.gtag("event", "conversion", {
    send_to: sendTo,
    event_category: "contact",
    event_label: channel,
  });
}
