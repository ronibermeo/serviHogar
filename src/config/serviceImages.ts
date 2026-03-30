import type { ServiceItem } from "@/config/site";

/** Rutas bajo /public/img — una imagen representativa por servicio */
export const serviceImageById: Record<ServiceItem["id"], string> = {
  neveras: "/img/nevera-page.avif",
  nevecones: "/img/nevecon-page.jpg",
  congeladores: "/img/congelador2-image.png",
  estufas: "/img/estufa-image.avif",
  hornos: "/img/horno-page.avif",
  microondas: "/img/microondas-page.jpg",
  "campanas-extractoras": "/img/campanas_extractoras-page.webp",
  "freidoras-de-aire": "/img/freidora-page.png",
  "dispensadores-de-agua": "/img/dispensador_agua-page.png",
  lavavajillas: "/img/lavavajillas2-page.avif",
  lavadoras: "/img/lavadora-page.jpg",
  secadoras: "/img/secadora-page.jpg",
  calentadores: "/img/calentador-page.jpeg",
  "aire-acondicionado": "/img/aire_acondicionado-page.avif",
  televisores: "/img/televisor-page.jpg",
};
