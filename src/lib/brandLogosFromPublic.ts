import fs from "node:fs";
import path from "node:path";

const MARCAS_DIR = path.join(process.cwd(), "public", "img", "marcas");

const IMAGE_EXT = /\.(svg|png|webp|avif|jpe?g)$/i;

/** Prioridad por extensión: un solo archivo por marca (evita samsung.svg + samsung.png duplicados). */
const EXT_PRIORITY: Record<string, number> = {
  png: 5,
  webp: 4,
  avif: 4,
  svg: 3,
  jpg: 2,
  jpeg: 2,
};

function extOf(file: string): string {
  const m = file.match(/\.([^.]+)$/i);
  return m ? m[1].toLowerCase() : "";
}

function scoreFile(file: string): number {
  return EXT_PRIORITY[extOf(file)] ?? 0;
}

/** Nombres visibles cuando el nombre del archivo no basta */
const NOMBRE_POR_ARCHIVO: Record<string, string> = {
  "black-decker": "Black+Decker",
  imusa: "IMUSA",
  lg: "LG",
  ge: "GE",
  "general-electric": "GE",
  samsung: "Samsung",
  whirlpool: "Whirlpool",
  mabe: "Mabe",
  haceb: "Haceb",
  electrolux: "Electrolux",
  bosch: "Bosch",
  panasonic: "Panasonic",
  frigidaire: "Frigidaire",
  hisense: "Hisense",
  sony: "Sony",
  tcl: "TCL",
  hyundai: "Hyundai",
  kalley: "Kalley",
  centrales: "Centrales",
  challenger: "Challenger",
  abba: "Abba",
  kitchenaid: "KitchenAid",
};

export function nombreVisibleMarca(file: string): string {
  const base = file.replace(IMAGE_EXT, "").toLowerCase();
  if (NOMBRE_POR_ARCHIVO[base]) return NOMBRE_POR_ARCHIVO[base];
  return base
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Un logo por marca: imágenes en `public/img/marcas` (svg, png, webp, avif, jpg). */
export function getMarcasSvgFiles(): string[] {
  try {
    if (!fs.existsSync(MARCAS_DIR)) return [];
    const candidates = fs.readdirSync(MARCAS_DIR).filter((f) => IMAGE_EXT.test(f));

    const byBase = new Map<string, string>();
    for (const f of candidates) {
      const base = f.replace(IMAGE_EXT, "").toLowerCase();
      const prev = byBase.get(base);
      if (!prev || scoreFile(f) > scoreFile(prev)) {
        byBase.set(base, f);
      }
    }

    return [...byBase.values()].sort((a, b) =>
      nombreVisibleMarca(a).localeCompare(nombreVisibleMarca(b), "es", { sensitivity: "base" }),
    );
  } catch {
    return [];
  }
}
