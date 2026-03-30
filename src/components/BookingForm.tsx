"use client";

import { FormEvent, useMemo, useState } from "react";
import { franjasHorario, siteConfig } from "@/config/site";

type BookingFormProps = {
  compact?: boolean;
};

const initialState = {
  tipo: "agendamiento",
  servicio: siteConfig.servicios[0]?.nombre ?? "",
  fecha: "",
  franja: franjasHorario[0] ?? "",
  nombre: "",
  telefono: "",
  mensaje: "",
};

export function BookingForm({ compact = false }: BookingFormProps) {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { ok: boolean; message: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "No se pudo registrar la solicitud.");
      }

      setStatus("success");
      setFeedback("Solicitud enviada. Te confirmamos por WhatsApp en pocos minutos.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Ocurrió un error. Intenta nuevamente.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 md:p-6"
      aria-label="Formulario rápido de agendamiento"
    >
      <h3 className="text-xl font-bold text-slate-900">Agenda en menos de un minuto</h3>
      <p className="mt-2 text-sm text-slate-600">
        Te confirmamos por WhatsApp. Visitas sujetas a disponibilidad.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-700">Servicio</span>
          <select
            required
            value={form.servicio}
            onChange={(e) => setForm({ ...form, servicio: e.target.value })}
            className="h-11 rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          >
            {siteConfig.servicios.map((servicio) => (
              <option key={servicio.id} value={servicio.nombre}>
                {servicio.nombre}
              </option>
            ))}
          </select>
        </label>

        <div className={compact ? "grid gap-4" : "grid gap-4 md:grid-cols-2"}>
          <label className="grid gap-1 text-sm">
            <span className="font-medium text-slate-700">Fecha</span>
            <input
              required
              type="date"
              min={minDate}
              value={form.fecha}
              onChange={(e) => setForm({ ...form, fecha: e.target.value })}
              className="h-11 rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span className="font-medium text-slate-700">Franja horaria</span>
            <select
              required
              value={form.franja}
              onChange={(e) => setForm({ ...form, franja: e.target.value })}
              className="h-11 rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            >
              {franjasHorario.map((franja) => (
                <option key={franja} value={franja}>
                  {franja}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-700">Nombre</span>
          <input
            required
            type="text"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            placeholder="Ej: Laura Martínez"
            className="h-11 rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-medium text-slate-700">Teléfono</span>
          <input
            required
            type="tel"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            placeholder="Ej: 300 123 4567"
            className="h-11 rounded-lg border border-slate-300 px-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
          />
        </label>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-12 items-center justify-center rounded-xl bg-sky-600 px-6 text-base font-semibold text-white transition hover:bg-sky-700 disabled:opacity-70"
        >
          {status === "loading" ? "Enviando..." : "Agendar visita"}
        </button>

        <p className="text-xs text-slate-500">
          Al enviar, aceptas el tratamiento de datos para gestionar tu solicitud de servicio.
        </p>

        {feedback ? (
          <p
            className={
              status === "success"
                ? "text-sm font-medium text-emerald-700"
                : "text-sm font-medium text-rose-700"
            }
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
