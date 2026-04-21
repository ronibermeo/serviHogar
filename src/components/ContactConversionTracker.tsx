"use client";

import { useEffect } from "react";
import { trackContactConversion } from "@/lib/analytics";

function getContactTypeFromLink(href: string) {
  const normalized = href.trim().toLowerCase();
  if (normalized.startsWith("tel:")) return "call";
  if (normalized.includes("wa.me/")) return "whatsapp";
  return null;
}

export function ContactConversionTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const type = getContactTypeFromLink(href);
      if (!type) return;

      trackContactConversion(type);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
