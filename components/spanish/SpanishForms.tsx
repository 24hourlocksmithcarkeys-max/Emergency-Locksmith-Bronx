"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { sendTelegramLead } from "@/lib/api";
import { trackEvent } from "@/lib/analytics";

const bookingSchema = z.object({
  name: z.string().min(2, "Escriba su nombre (mínimo 2 caracteres)."),
  phone: z.string().min(10, "Escriba un teléfono válido de al menos 10 dígitos."),
  serviceType: z.string().min(1, "Seleccione el servicio que necesita."),
  dateTime: z.string().min(1, "Seleccione una fecha y hora preferidas."),
  location: z.string().min(5, "Indique una ubicación de servicio en el Bronx."),
  message: z.string().optional(),
});
type BookingValues = z.infer<typeof bookingSchema>;
const quoteSchema = z.object({
  name: z.string().min(2, "Escriba su nombre (mínimo 2 caracteres)."),
  phone: z.string().min(10, "Escriba un teléfono válido de al menos 10 dígitos."),
  email: z.string().email("Escriba un correo electrónico válido."),
  message: z.string().min(5, "Describa su solicitud en al menos 5 caracteres."),
});
type QuoteValues = z.infer<typeof quoteSchema>;

function leadError(error?: string) {
  if (!error || error === "Configuration error") return "No se pudo enviar la solicitud. Llame al (646) 264-1901 o inténtelo de nuevo.";
  if (error === "Failed to send lead to Telegram") return "No se pudo enviar la solicitud en este momento. Llame al (646) 264-1901.";
  return "Ocurrió un error al enviar la solicitud. Llame al (646) 264-1901.";
}

export function SpanishBookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const started = useRef(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingValues>({ resolver: zodResolver(bookingSchema) });
  const serviceOptions = [
    ["", "Seleccione el servicio"], ["Emergency Lockout", "Apertura de emergencia (casa/auto/oficina)"], ["Residential Rekey", "Cambio de combinación residencial"], ["Smart Lock", "Cerradura inteligente"], ["Master Key", "Sistema comercial de llave maestra"], ["Panic Bar", "Barra antipánico o dispositivo de salida"], ["Car Key/Fob", "Llave o control remoto de auto"], ["Ignition", "Encendido de vehículo"], ["Safe", "Caja fuerte"], ["Mailbox", "Cerradura de buzón"],
  ];
  const onSubmit = async (data: BookingValues) => {
    setSubmitting(true); setStatus(null);
    const result = await sendTelegramLead({
      formType: "Reserva (formulario en español)", name: data.name, phone: data.phone,
      service: data.serviceType,
      message: `Fecha/hora preferidas: ${data.dateTime}\nUbicación: ${data.location}\nDetalles adicionales: ${data.message || "Ninguno"}`,
    });
    setSubmitting(false);
    if (result.success) {
      trackEvent("quote_form_success", { form_type: "booking", locale: "es", service_type: data.serviceType, page_path: window.location.pathname });
      setStatus({ ok: true, text: "Recibimos su solicitud. Llame para confirmar disponibilidad y coordinar los detalles; el envío del formulario no confirma una cita." }); reset();
    } else {
      trackEvent("quote_form_error", { form_type: "booking", locale: "es", page_path: window.location.pathname });
      setStatus({ ok: false, text: leadError(result.error) });
    }
  };
  return <div className="bg-brand-dark border border-zinc-800 p-6 sm:p-8 rounded-lg w-full text-white shadow-2xl" lang="es">
    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-yellow mb-2 uppercase tracking-wide">Solicitar una reserva</h2>
    <p className="text-zinc-400 mb-6 text-sm">Formulario de consulta; llame para confirmar disponibilidad. Enviar no confirma una cita ni activa un despacho en tiempo real.</p>
    {status && <p role="status" className={`p-4 mb-5 rounded text-sm ${status.ok ? "bg-green-900/50 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`}>{status.text}</p>}
    <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={() => { if (!started.current) { started.current = true; trackEvent("quote_form_start", { form_type: "booking", locale: "es", page_path: window.location.pathname }); } }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nombre" error={errors.name?.message}><input id="es-booking-name" autoComplete="name" {...register("name")} className={inputClass} placeholder="Su nombre" /></Field>
        <Field label="Teléfono" error={errors.phone?.message}><input id="es-booking-phone" type="tel" autoComplete="tel" {...register("phone")} className={inputClass} placeholder="+1 (646) 000-0000" /></Field>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Servicio" error={errors.serviceType?.message}><select id="es-booking-service" {...register("serviceType")} className={inputClass}>{serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></Field>
        <Field label="Fecha y hora preferidas" error={errors.dateTime?.message}><input id="es-booking-datetime" type="datetime-local" {...register("dateTime")} className={inputClass} /></Field>
      </div>
      <Field label="Ubicación del servicio en el Bronx" error={errors.location?.message}><input id="es-booking-location" autoComplete="street-address" {...register("location")} className={inputClass} placeholder="Dirección o intersección" /></Field>
      <Field label="Detalles adicionales (opcional)" required={false} error={errors.message?.message}><textarea id="es-booking-message" rows={3} {...register("message")} className={`${inputClass} resize-y`} placeholder="Describa brevemente la cerradura, el vehículo o la situación." /></Field>
      <button type="submit" disabled={submitting} className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black py-4 rounded font-bold tracking-wider uppercase text-sm disabled:opacity-50">{submitting ? "Enviando…" : "Enviar consulta"}</button>
    </form>
  </div>;
}

export function SpanishQuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const started = useRef(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema) });
  const onSubmit = async (data: QuoteValues) => {
    setSubmitting(true); setStatus(null);
    const result = await sendTelegramLead({ formType: "Consulta de cotización (español)", name: data.name, phone: data.phone, service: "Consulta general de cerrajería", message: `${data.message} (Correo: ${data.email})` });
    setSubmitting(false);
    if (result.success) {
      trackEvent("quote_form_success", { form_type: "quote", locale: "es", page_path: window.location.pathname });
      setStatus({ ok: true, text: "Su consulta se envió correctamente. Para disponibilidad actual o una emergencia, llame al (646) 264-1901." }); reset();
    } else {
      trackEvent("quote_form_error", { form_type: "quote", locale: "es", page_path: window.location.pathname });
      setStatus({ ok: false, text: leadError(result.error) });
    }
  };
  return <div className="bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 rounded-lg max-w-xl w-full" lang="es">
    <h2 className="text-2xl font-serif font-bold text-white mb-2">Enviar una consulta</h2>
    <p className="text-zinc-400 mb-5 text-sm">Para consultas que no sean urgentes. No es un canal de despacho en tiempo real.</p>
    {status && <p role="status" className={`p-4 mb-5 rounded text-sm ${status.ok ? "bg-green-900/50 text-green-300 border border-green-800" : "bg-red-900/30 text-red-300 border border-red-800"}`}>{status.text}</p>}
    <form onSubmit={handleSubmit(onSubmit)} onFocusCapture={() => { if (!started.current) { started.current = true; trackEvent("quote_form_start", { form_type: "quote", locale: "es", page_path: window.location.pathname }); } }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Nombre" error={errors.name?.message}><input id="es-quote-name" autoComplete="name" {...register("name")} className={inputClass} placeholder="Su nombre" /></Field>
        <Field label="Teléfono" error={errors.phone?.message}><input id="es-quote-phone" type="tel" autoComplete="tel" {...register("phone")} className={inputClass} placeholder="+1 (646) 000-0000" /></Field>
      </div>
      <Field label="Correo electrónico" error={errors.email?.message}><input id="es-quote-email" type="email" autoComplete="email" {...register("email")} className={inputClass} placeholder="nombre@ejemplo.com" /></Field>
      <Field label="Mensaje" error={errors.message?.message}><textarea id="es-quote-message" rows={4} {...register("message")} className={`${inputClass} resize-y`} placeholder="Describa la cerradura, el vehículo, la propiedad o la situación." /></Field>
      <button type="submit" disabled={submitting} className="w-full bg-brand-yellow hover:bg-brand-yellow-hover text-black py-4 rounded font-bold tracking-wider uppercase text-sm disabled:opacity-50">{submitting ? "Enviando…" : "Enviar consulta"}</button>
    </form>
  </div>;
}

const inputClass = "w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-yellow transition";
function Field({ label, error, required = true, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return <div><label className="block text-xs uppercase tracking-wider text-zinc-400 font-bold mb-2">{label}{required && <span className="text-brand-yellow"> *</span>}{children}</label>{error && <p role="alert" className="text-xs text-red-400 mt-1">{error}</p>}</div>;
}
