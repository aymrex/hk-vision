import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { contact } from "@/data/contact";

type FormState = "idle" | "loading" | "success" | "error";

const services = [
  "Instalacion de camaras / CCTV",
  "Ciberseguridad",
  "Desarrollo de software",
  "No estoy seguro, necesito orientacion",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const requestMessage = String(formData.get("message") ?? "").trim();

    if (name.length < 2 || !service || requestMessage.length < 10 || (!email && !phone)) {
      setState("error");
      setMessage("Completa nombre, servicio, mensaje y al menos un dato de contacto.");
      return;
    }

    const subject = encodeURIComponent(`Solicitud HK Vision - ${service}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email || "No indicado"}\nTelefono: ${
        phone || "No indicado"
      }\nServicio: ${service}\n\nMensaje:\n${requestMessage}`,
    );

    setState("success");
    setMessage(
      "Formulario preparado. Se abrira tu correo para enviar la solicitud; si no se abre, usa WhatsApp.",
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="surface-panel grid gap-5 p-6"
      onSubmit={handleSubmit}
      aria-describedby="form-status"
    >
      <input type="text" name="company_url" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-2">
        <label className="font-heading text-sm font-semibold text-hk-primary" htmlFor="name">
          Nombre
        </label>
        <input
          className="min-h-12 rounded-lg border border-hk-border px-4 text-hk-text outline-hk-accent"
          id="name"
          name="name"
          required
          minLength={2}
          placeholder="Tu nombre"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="font-heading text-sm font-semibold text-hk-primary" htmlFor="email">
            Correo
          </label>
          <input
            className="min-h-12 rounded-lg border border-hk-border px-4 text-hk-text outline-hk-accent"
            id="email"
            name="email"
            type="email"
            placeholder="correo@dominio.cl"
          />
        </div>
        <div className="grid gap-2">
          <label className="font-heading text-sm font-semibold text-hk-primary" htmlFor="phone">
            Telefono
          </label>
          <input
            className="min-h-12 rounded-lg border border-hk-border px-4 text-hk-text outline-hk-accent"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+56 9..."
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="font-heading text-sm font-semibold text-hk-primary" htmlFor="service">
          Servicio
        </label>
        <select
          className="min-h-12 rounded-lg border border-hk-border bg-white px-4 text-hk-text outline-hk-accent"
          id="service"
          name="service"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona una opcion
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label className="font-heading text-sm font-semibold text-hk-primary" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="min-h-36 rounded-lg border border-hk-border px-4 py-3 text-hk-text outline-hk-accent"
          id="message"
          name="message"
          required
          minLength={10}
          placeholder="Cuentanos que necesitas proteger o resolver."
        />
      </div>

      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-hk-primary-mid px-5 py-3 font-heading text-sm font-semibold text-white transition hover:bg-hk-primary disabled:cursor-not-allowed disabled:opacity-60"
        type="submit"
      >
        {state === "success" ? <CheckCircle2 size={18} aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
        Preparar correo
      </button>

      <p
        id="form-status"
        className={`text-sm ${state === "error" ? "text-[#C0392B]" : "text-[#1E8E5A]"}`}
        role={state === "idle" ? undefined : "status"}
      >
        {message}
      </p>
    </form>
  );
}
