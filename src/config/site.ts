export type ServiceItem = {
  id: string;
  nombre: string;
  resumen: string;
  intencion: string;
  cta: string;
  detalleTitulo: string;
  detalleDescripcion: string;
  fallasComunes: string[];
  soluciones: string;
  seoLocal: string;
};

export type Testimonio = {
  nombre: string;
  zona: string;
  comentario: string;
};

export type PreguntaFrecuente = {
  pregunta: string;
  respuesta: string;
};

export const siteConfig = {
  nombreEmpresa: "Marcatecnicos",
  ciudadPrincipal: "Medellín",
  telefono: "+57 604 589 4021",
  whatsapp: "+57 300 456 7812",
  horario: "Lunes a sábado de 7:00 a.m. a 7:00 p.m.",
  /** Etiqueta corta para UI compacta (p. ej. tarjetas en móvil). */
  horarioCorto: "Lun–sáb · 7–19 h",
  cobertura: "Medellín y área metropolitana",
  direccion: "Cra. 43A #8 Sur-15, El Poblado, Medellín",
  email: "agenda@servihogartecnico.com",
  descripcionCorta:
    "Servicio técnico de electrodomésticos a domicilio con atención rápida, diagnóstico preciso y garantía por escrito.",
  coberturaZonas: [
    "El Poblado",
    "Laureles - Estadio",
    "Belén",
    "La América",
    "Robledo",
    "Castilla",
    "Manrique",
    "Aranjuez",
    "Buenos Aires",
    "Guayabal",
    "Itagüí",
    "Envigado",
    "Sabaneta",
    "Bello",
    "Copacabana",
  ],
  servicios: [
    {
      id: "neveras",
      nombre: "Neveras",
      resumen: "Diagnóstico y reparación de neveras a domicilio.",
      intencion: "Reparación de neveras a domicilio en Medellín.",
      cta: "Agendar revisión",
      detalleTitulo: "Reparación de neveras en Medellín",
      detalleDescripcion:
        "Atendemos neveras que no enfrían, presentan escarcha excesiva, fugas de agua o ruido irregular. Nuestro técnico revisa sistema de enfriamiento, sensores y tarjeta electrónica en casa.",
      fallasComunes: ["No enfría", "Escarcha excesiva", "Goteo interno", "Ruido constante"],
      soluciones:
        "Reparación de componentes, mantenimiento preventivo y cambio de piezas compatibles con garantía.",
      seoLocal:
        "Si buscas servicio técnico de neveras en Medellín, agenda una visita rápida con diagnóstico claro y solución en el menor tiempo posible.",
    },
    {
      id: "nevecones",
      nombre: "Nevecones",
      resumen: "Soporte técnico para nevecones side by side e inverter.",
      intencion: "Corrige variaciones de temperatura y fallas en dispensador de hielo o agua.",
      cta: "Solicitar técnico",
      detalleTitulo: "Servicio técnico para nevecones a domicilio",
      detalleDescripcion:
        "Revisamos nevecones con alarma de temperatura, panel bloqueado, bajo rendimiento o fuga. Trabajamos con protocolos de revisión segura y pruebas de funcionamiento completas.",
      fallasComunes: ["Panel sin respuesta", "No produce hielo", "Frío inestable", "Fuga de agua"],
      soluciones:
        "Ajuste de sensores, limpieza técnica, corrección de sellos y reparación electrónica.",
      seoLocal:
        "Nuestro equipo realiza reparación de nevecones en Medellín con atención puntual y explicación técnica sencilla para el cliente.",
    },
    {
      id: "congeladores",
      nombre: "Congeladores",
      resumen: "Reparación y mantenimiento de congeladores verticales y horizontales.",
      intencion: "Mantén cadena de frío segura para hogar, negocio o emprendimiento.",
      cta: "Agendar revisión",
      detalleTitulo: "Reparación de congeladores en Medellín",
      detalleDescripcion:
        "Atendemos congeladores que no congelan, trabajan de forma intermitente o consumen energía en exceso. Verificamos compresor, termostato y estado del aislamiento.",
      fallasComunes: ["No congela", "Arranca y se apaga", "Consumo alto", "Hielo irregular"],
      soluciones:
        "Diagnóstico preciso, mantenimiento de rendimiento y reparación técnica con repuestos confiables.",
      seoLocal:
        "Solicita servicio técnico para congeladores en Medellín y recibe soporte profesional en tu domicilio o local.",
    },
    {
      id: "estufas",
      nombre: "Estufas",
      resumen: "Servicio técnico para estufas a gas y eléctricas.",
      intencion: "Mejora seguridad y cocción uniforme en tu cocina.",
      cta: "Solicitar técnico",
      detalleTitulo: "Reparación de estufas a domicilio",
      detalleDescripcion:
        "Corregimos encendido deficiente, fugas de gas, resistencias sin calor y fallas de termocuplas. Priorizamos pruebas de seguridad y calibración de llama.",
      fallasComunes: ["No enciende", "Fuga de gas", "Llama débil", "Quemador bloqueado"],
      soluciones:
        "Ajustes de seguridad, mantenimiento profundo e instalación de componentes certificados.",
      seoLocal:
        "Brindamos reparación de estufas en Medellín con enfoque en seguridad y funcionamiento estable.",
    },
    {
      id: "hornos",
      nombre: "Hornos",
      resumen: "Revisión y reparación de hornos empotrables y convencionales.",
      intencion: "Recupera temperatura exacta y cocción pareja.",
      cta: "Agendar revisión",
      detalleTitulo: "Servicio técnico de hornos en Medellín",
      detalleDescripcion:
        "Si tu horno no calienta, quema los alimentos o tarda en alcanzar temperatura, realizamos diagnóstico integral de resistencia, termostato y control electrónico.",
      fallasComunes: ["No calienta", "Temperatura inestable", "Puerta no sella", "Apagado repentino"],
      soluciones:
        "Reparación, calibración térmica y mantenimiento preventivo para prolongar la vida útil del equipo.",
      seoLocal:
        "Agenda reparación de hornos a domicilio en Medellín con atención clara, profesional y garantizada.",
    },
    {
      id: "microondas",
      nombre: "Microondas",
      resumen: "Diagnóstico de microondas que no calientan o hacen ruido.",
      intencion: "Vuelve a usar tu equipo con seguridad y rendimiento adecuado.",
      cta: "Ver servicio",
      detalleTitulo: "Reparación de microondas a domicilio",
      detalleDescripcion:
        "Atendemos microondas con plato sin giro, chispa interna o panel táctil intermitente. Aplicamos revisión eléctrica y funcional antes de cualquier intervención.",
      fallasComunes: ["No calienta", "Chispa interna", "No gira el plato", "Botonera fallando"],
      soluciones:
        "Mantenimiento, reparación de módulos y recomendaciones de uso seguro para evitar daños recurrentes.",
      seoLocal:
        "Si necesitas reparación de microondas en Medellín, contamos con técnicos capacitados y agenda ágil.",
    },
    {
      id: "campanas-extractoras",
      nombre: "Campanas Extractoras",
      resumen: "Limpieza técnica y reparación de campanas de cocina.",
      intencion: "Elimina humo y olores para una cocina más cómoda y segura.",
      cta: "Solicitar técnico",
      detalleTitulo: "Servicio técnico para campanas extractoras",
      detalleDescripcion:
        "Realizamos revisión de motor, iluminación, botonera y filtros. También hacemos instalación y ajuste para optimizar extracción según tu espacio.",
      fallasComunes: ["No extrae humo", "Ruido fuerte", "No enciende", "Luz dañada"],
      soluciones:
        "Mantenimiento, reparación del sistema de ventilación e instalación correcta del equipo.",
      seoLocal:
        "Atendemos campanas extractoras en Medellín con soporte a domicilio y servicio puntual.",
    },
    {
      id: "freidoras-de-aire",
      nombre: "Freidoras de Aire",
      resumen: "Reparación técnica para freidoras de aire domésticas.",
      intencion: "Recupera potencia térmica y tiempos de cocción estables.",
      cta: "Agendar revisión",
      detalleTitulo: "Reparación de freidoras de aire en Medellín",
      detalleDescripcion:
        "Diagnosticamos freidoras que no encienden, no calientan correctamente o muestran errores en pantalla. Revisamos resistencias, ventilación y panel digital.",
      fallasComunes: ["No enciende", "No calienta", "Error en panel", "Apagado automático"],
      soluciones:
        "Mantenimiento interno y reparación de componentes para uso seguro y continuo.",
      seoLocal:
        "Ofrecemos servicio técnico de freidoras de aire en Medellín con atención rápida y garantía.",
    },
    {
      id: "dispensadores-de-agua",
      nombre: "Dispensadores de Agua",
      resumen: "Soporte para dispensadores que no enfrían o no calientan.",
      intencion: "Mantén tu dispensador funcional para casa u oficina.",
      cta: "Solicitar técnico",
      detalleTitulo: "Servicio técnico para dispensadores de agua",
      detalleDescripcion:
        "Corregimos fallas de temperatura, ruidos y fugas en dispensadores. Incluye limpieza técnica y revisión de sistemas de seguridad para uso diario.",
      fallasComunes: ["No enfría", "No calienta", "Fugas", "Ruido constante"],
      soluciones:
        "Reparación funcional, mantenimiento preventivo e instalación de repuestos compatibles.",
      seoLocal:
        "Solicita reparación de dispensadores de agua en Medellín y recibe asistencia confiable a domicilio.",
    },
    {
      id: "lavavajillas",
      nombre: "Lavavajillas",
      resumen: "Revisión de ciclos, drenaje y limpieza técnica de lavavajillas.",
      intencion: "Evita ciclos incompletos y prolonga la vida útil del equipo.",
      cta: "Ver servicio",
      detalleTitulo: "Reparación de lavavajillas en Medellín",
      detalleDescripcion:
        "Atendemos lavavajillas que no drenan, dejan residuos, generan malos olores o muestran errores de ciclo. Verificamos bomba, sensores y sistema de carga de agua.",
      fallasComunes: ["No drena", "No lava bien", "Error de ciclo", "Mal olor"],
      soluciones:
        "Mantenimiento correctivo, limpieza profunda y reparación de módulos hidráulicos/electrónicos.",
      seoLocal:
        "Nuestro servicio técnico de lavavajillas en Medellín mejora rendimiento y reduce fallas repetitivas.",
    },
    {
      id: "lavadoras",
      nombre: "Lavadoras",
      resumen: "Soporte técnico para lavadoras carga frontal y superior.",
      intencion: "Resuelve fallas de centrifugado, drenaje y golpes en el tambor.",
      cta: "Agendar revisión",
      detalleTitulo: "Servicio técnico para lavadoras a domicilio",
      detalleDescripcion:
        "Diagnosticamos lavadoras que no centrifugan, no drenan o vibran en exceso. Revisamos transmisión, bomba de agua, sensores y tarjeta electrónica.",
      fallasComunes: ["No centrifuga", "No drena", "Vibra mucho", "No inicia ciclo"],
      soluciones:
        "Reparación en domicilio, mantenimiento preventivo y ajuste de niveles para uso estable.",
      seoLocal:
        "Si necesitas reparación de lavadoras a domicilio en Medellín, agenda hoy y te confirmamos por WhatsApp.",
    },
    {
      id: "secadoras",
      nombre: "Secadoras",
      resumen: "Mantenimiento y reparación de secadoras eléctricas y de gas.",
      intencion: "Recupera secado eficiente y reduce tiempos de ciclo.",
      cta: "Solicitar técnico",
      detalleTitulo: "Reparación de secadoras en Medellín",
      detalleDescripcion:
        "Resolvemos secadoras que no calientan, tardan en secar o presentan ruidos. Verificamos sistema térmico, sensores de humedad y flujo de aire.",
      fallasComunes: ["No calienta", "Secado lento", "Ruido en giro", "Se apaga sola"],
      soluciones:
        "Limpieza técnica, reparación de partes críticas y mejora de rendimiento energético.",
      seoLocal:
        "Brindamos servicio técnico para secadoras en Medellín con visita domiciliaria y garantía.",
    },
    {
      id: "calentadores",
      nombre: "Calentadores",
      resumen: "Instalación y reparación de calentadores de agua.",
      intencion: "Mantén agua caliente segura y estable en tu hogar.",
      cta: "Agendar instalación",
      detalleTitulo: "Instalación y reparación de calentadores",
      detalleDescripcion:
        "Atendemos calentadores que no encienden, pierden presión o varían temperatura. También instalamos equipos nuevos con revisión de conexiones y seguridad.",
      fallasComunes: ["No enciende", "Agua tibia", "Baja presión", "Apagado intermitente"],
      soluciones:
        "Instalación, mantenimiento preventivo y reparación con protocolos de seguridad.",
      seoLocal:
        "Ofrecemos instalación de calentadores y soporte técnico en Medellín para hogares y apartamentos.",
    },
    {
      id: "aire-acondicionado",
      nombre: "Aire Acondicionado",
      resumen: "Revisión, mantenimiento e instalación de aire acondicionado.",
      intencion: "Mejora confort térmico y eficiencia del equipo.",
      cta: "Agendar mantenimiento",
      detalleTitulo: "Mantenimiento de aire acondicionado en Medellín",
      detalleDescripcion:
        "Realizamos limpieza de serpentines, verificación de presión, revisión eléctrica e instalación de equipos nuevos según área y necesidad de uso.",
      fallasComunes: ["No enfría bien", "Goteo", "Ruido", "Olor desagradable"],
      soluciones:
        "Mantenimiento preventivo, reparación y montaje técnico con pruebas de funcionamiento.",
      seoLocal:
        "Agenda mantenimiento de aire acondicionado en Medellín para asegurar frío constante y menor consumo.",
    },
    {
      id: "televisores",
      nombre: "Televisores",
      resumen: "Servicio técnico para televisores Smart TV y convencionales.",
      intencion: "Resuelve fallas de imagen, sonido y encendido sin complicaciones.",
      cta: "Ver servicio",
      detalleTitulo: "Reparación de televisores en Medellín",
      detalleDescripcion:
        "Revisamos televisores con pantalla sin imagen, audio defectuoso o apagado repentino. Evaluamos fuente de poder, placa principal y conectividad.",
      fallasComunes: ["Sin imagen", "Sin sonido", "No enciende", "Reinicios frecuentes"],
      soluciones:
        "Diagnóstico electrónico, reparación de módulos y ajuste de configuración del sistema.",
      seoLocal:
        "Nuestro servicio de reparación de televisores en Medellín brinda atención clara y resultados confiables.",
    },
  ] as ServiceItem[],
  testimonios: [
    {
      nombre: "María Fernanda Gómez",
      zona: "Laureles",
      comentario:
        "Agendé por WhatsApp en la mañana y en la tarde ya estaban revisando la lavadora. Fueron puntuales, explicaron todo y la dejaron funcionando el mismo día.",
    },
    {
      nombre: "Julián Restrepo",
      zona: "Envigado",
      comentario:
        "Tenía problema con la nevera desde hace días. Me gustó que hicieron diagnóstico claro, precio transparente y cumplieron con la garantía.",
    },
    {
      nombre: "Carolina Mejía",
      zona: "Belén",
      comentario:
        "Excelente atención. El técnico revisó el aire acondicionado, hizo mantenimiento completo y me dio recomendaciones para alargar la vida útil.",
    },
    {
      nombre: "Andrés Castaño",
      zona: "Sabaneta",
      comentario:
        "Servicio muy ordenado y amable. Repararon el horno de mi apartamento y dejaron todo probado antes de retirarse.",
    },
    {
      nombre: "Paula Londoño",
      zona: "El Poblado",
      comentario:
        "Me ayudaron con un televisor que no prendía. La comunicación fue rápida y me confirmaron cada paso por WhatsApp.",
    },
  ] as Testimonio[],
  preguntasFrecuentes: [
    {
      pregunta: "¿Atienden a domicilio?",
      respuesta:
        "Sí. Nuestro servicio es principalmente a domicilio en Medellín y zona metropolitana. Coordinamos la visita según disponibilidad y tipo de equipo.",
    },
    {
      pregunta: "¿Qué servicios ofrecen?",
      respuesta:
        "Realizamos reparación, mantenimiento e instalación de electrodomésticos. El objetivo es resolver la falla y dejar recomendaciones para evitar reincidencias.",
    },
    {
      pregunta: "¿Trabajan los 15 tipos de electrodomésticos indicados?",
      respuesta:
        "Sí. Atendemos exactamente los 15 servicios publicados en esta página: desde neveras y lavadoras hasta aire acondicionado y televisores.",
    },
    {
      pregunta: "¿La visita técnica tiene costo?",
      respuesta:
        "La visita y diagnóstico tienen un costo base que te informamos antes de agendar. Si apruebas el servicio, ese valor puede aplicarse al trabajo final según el caso.",
    },
    {
      pregunta: "¿Ofrecen garantía?",
      respuesta:
        "Sí. Todos nuestros servicios incluyen garantía por escrito sobre mano de obra y piezas instaladas, con condiciones claras desde el inicio.",
    },
    {
      pregunta: "¿Cuánto tarda la atención?",
      respuesta:
        "La mayoría de solicitudes se atienden el mismo día o al día siguiente. Te confirmamos franja horaria por WhatsApp al registrar la solicitud.",
    },
    {
      pregunta: "¿Cómo agendo por WhatsApp?",
      respuesta:
        "Solo debes tocar el botón de WhatsApp, enviarnos tu nombre, zona y equipo con falla. Te respondemos con disponibilidad y pasos para confirmar.",
    },
    {
      pregunta: "¿También hacen mantenimiento?",
      respuesta:
        "Sí. Hacemos mantenimiento preventivo para mejorar rendimiento, reducir consumo energético y disminuir el riesgo de fallas inesperadas.",
    },
    {
      pregunta: "¿Instalan equipos nuevos?",
      respuesta:
        "Sí. Instalamos calentadores, campanas y aires acondicionados, entre otros equipos que requieran montaje y verificación técnica.",
    },
    {
      pregunta: "¿Atienden todas las zonas?",
      respuesta:
        "Atendemos una cobertura amplia. Si tu zona no aparece en el listado, escríbenos y validamos disponibilidad de inmediato.",
    },
    {
      pregunta: "¿Puedo agendar el mismo día?",
      respuesta:
        "Sí, siempre que haya cupos disponibles. Te sugerimos agendar temprano para tener más opciones de horario.",
    },
    {
      pregunta: "¿Qué pasa si no sé exactamente qué falla tiene el equipo?",
      respuesta:
        "No hay problema. Nuestro técnico realiza diagnóstico en sitio, identifica la causa y te explica la mejor solución antes de iniciar cualquier reparación.",
    },
  ] as PreguntaFrecuente[],
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#servicios" },
];

export const franjasHorario = [
  "7:00 a.m. - 9:00 a.m.",
  "9:00 a.m. - 11:00 a.m.",
  "11:00 a.m. - 1:00 p.m.",
  "2:00 p.m. - 4:00 p.m.",
  "4:00 p.m. - 6:00 p.m.",
];

export function getServiceById(id: string) {
  return siteConfig.servicios.find((servicio) => servicio.id === id);
}
