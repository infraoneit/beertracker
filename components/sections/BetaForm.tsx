"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { SectionWrapper, Eyebrow } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type FormStatus = "idle" | "submitting" | "success" | "error";

const benefits = [
  "Kostenlos während der gesamten Beta-Phase",
  "Persönliches Onboarding & Setup-Support",
  "Läuft auf deiner Hardware — schon ein Raspberry Pi reicht",
  "Big-Screen-Leaderboard ohne Zusatzkosten",
];

const eventTypes = [
  "Festival",
  "Zeltfest",
  "Bar / Club",
  "Brauerei",
  "Verein / Schützenfest",
  "Privat / WG-Party",
  "Andere",
];

const labelClass = "mb-2 block text-sm font-medium text-foreground";
const fieldClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-gold/50 focus:ring-2 focus:ring-gold/15";

export function BetaForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to URLSearchParams for Netlify Forms.
    const body = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      body.append(key, String(value));
    }

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => setStatus("idle");

  return (
    <SectionWrapper id="beta" className="py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left — pitch & benefits */}
        <Reveal>
          <div>
            <Eyebrow>Beta · Limitierte Plätze</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-balance sm:text-5xl">
              Sichere dir deinen{" "}
              <span className="text-gradient-gold">Beta-Zugang</span>.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted text-pretty">
              Trag dich ein und wir melden uns mit deinem Zugang für die erste
              Festival-Saison. Kein Risiko, keine Kreditkarte — nur volle
              Big-Screen-Energy.
            </p>

            <ul className="mt-8 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="mailto:hello@beertracker.ch"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/20"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <Mail className="size-4" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-muted">
                  Lieber direkt schreiben?
                </span>
                <span className="text-sm font-semibold text-foreground">
                  hello@beertracker.ch
                </span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* Right — the form card */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/15 to-cyan/10 opacity-60 blur-2xl"
            />
            <div className="glass rounded-4xl p-6 sm:p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                  aria-live="polite"
                >
                  <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold shadow-glow-gold-sm">
                    <CheckCircle2 className="size-8" aria-hidden />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Du bist dabei! 🍺
                  </h3>
                  <p className="mt-2 max-w-sm text-muted">
                    Deine Anfrage ist raus. Wir melden uns in der Regel
                    innerhalb von 48 Stunden mit deinem Beta-Zugang.
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    className="mt-6"
                    onClick={resetForm}
                  >
                    Weitere Anfrage senden
                  </Button>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-10 text-center"
                  aria-live="assertive"
                >
                  <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                    <AlertCircle className="size-8" aria-hidden />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Da ist was schiefgelaufen
                  </h3>
                  <p className="mt-2 max-w-sm text-muted">
                    Bitte versuch es noch einmal oder schreib uns direkt an
                    hello@beertracker.ch.
                  </p>
                  <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    className="mt-6"
                    onClick={resetForm}
                  >
                    Erneut versuchen
                  </Button>
                </motion.div>
              ) : (
                <form
                  name="beta-anmeldung"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="beta-anmeldung" />
                  <div hidden aria-hidden="true">
                    <label>
                      Bitte nicht ausfüllen:{" "}
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Dein Name"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="du@beispiel.de"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="organisation" className={labelClass}>
                      Veranstaltung / Location
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      placeholder="Festival, Bar, Verein …"
                      className={fieldClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="event-typ" className={labelClass}>
                      Event-Typ *
                    </label>
                    <select
                      id="event-typ"
                      name="event-typ"
                      required
                      defaultValue=""
                      className={fieldClass}
                    >
                      <option value="" disabled>
                        Bitte wählen …
                      </option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t} className="bg-obsidian-800">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Erzähl uns kurz von deinem Event …"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="size-5 animate-spin" aria-hidden />
                        Wird gesendet …
                      </>
                    ) : (
                      <>
                        <Send className="size-5" aria-hidden />
                        Beta-Zugang sichern
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted">
                    Mit dem Absenden stimmst du zu, dass wir dich zu deinem
                    Beta-Zugang kontaktieren.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
