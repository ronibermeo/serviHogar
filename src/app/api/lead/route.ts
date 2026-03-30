import { NextResponse } from "next/server";

type LeadPayload = {
  tipo?: "agendamiento" | "contacto" | string;
  servicio?: string;
  fecha?: string;
  franja?: string;
  nombre?: string;
  telefono?: string;
  mensaje?: string;
};

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const nombre = body.nombre?.trim() ?? "";
    const telefono = body.telefono?.trim() ?? "";
    const servicio = body.servicio?.trim() ?? "";
    const tipo = body.tipo ?? "contacto";

    if (!nombre || !telefono || !servicio) {
      return NextResponse.json(
        { ok: false, message: "Completa nombre, telefono y servicio para continuar." },
        { status: 400 }
      );
    }

    if (!isValidPhone(telefono)) {
      return NextResponse.json(
        { ok: false, message: "Ingresa un telefono valido para confirmar la visita." },
        { status: 400 }
      );
    }

    if (tipo === "agendamiento" && (!body.fecha || !body.franja)) {
      return NextResponse.json(
        { ok: false, message: "Selecciona fecha y franja horaria para agendar." },
        { status: 400 }
      );
    }

    // En produccion, aqui puedes conectar CRM, email, WhatsApp API o base de datos.
    return NextResponse.json({
      ok: true,
      message: "Solicitud registrada correctamente.",
      lead: {
        tipo,
        nombre,
        telefono,
        servicio,
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "No fue posible procesar la solicitud. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
