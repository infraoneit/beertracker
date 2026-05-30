"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneMock } from "@/components/mockups/PhoneMock";
import { HardwareMock } from "@/components/mockups/HardwareMock";
import { LeaderboardMock } from "@/components/mockups/LeaderboardMock";
import { steps } from "@/lib/site";
import { cn } from "@/lib/utils";

const panelLabels = ["App", "Echtzeit-Server", "Big Screen"];

function StepVisual({ index }: { index: number }) {
  if (index === 0) return <PhoneMock />;
  if (index === 1) return <HardwareMock className="max-w-md" />;
  return (
    <div className="relative w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-b from-gold/20 to-cyan/10 opacity-60 blur-2xl"
      />
      <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-obsidian-700 to-obsidian-800 p-2.5 shadow-2xl">
        <LeaderboardMock />
      </div>
    </div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(v < 0.34 ? 0 : v < 0.67 ? 1 : 2);
  });

  return (
    <section
      id="how"
      ref={ref}
      className="relative w-full px-6 py-24 md:px-12 md:py-28 lg:px-24"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — sticky narrative */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-24">
          <Reveal>
            <Eyebrow>So funktioniert&apos;s</Eyebrow>
            <h2 className="mt-5 max-w-md font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-balance sm:text-5xl">
              In drei Schritten zur{" "}
              <span className="text-gradient-gold">Eskalation</span>.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Von der App bis auf die Leinwand — Biertracker macht aus jedem
              Schluck ein Live-Event.
            </p>
          </Reveal>

          {/* Steps */}
          <ol className="relative mt-10 space-y-2">
            {/* Connecting line */}
            <div
              aria-hidden
              className="absolute left-[1.125rem] top-3 bottom-3 w-px bg-white/10"
            />
            <motion.div
              aria-hidden
              style={{ scaleY: reduce ? 1 : scrollYProgress }}
              className="absolute left-[1.125rem] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-gold to-cyan"
            />

            {steps.map((s, i) => {
              const isActive = active === i;
              return (
                <li key={s.n}>
                  <div
                    className={cn(
                      "relative flex gap-4 rounded-2xl p-3 transition-colors duration-300",
                      isActive ? "bg-white/[0.03]" : "bg-transparent"
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-bold tabular-nums transition-all duration-300",
                        isActive
                          ? "border-gold bg-gold text-obsidian shadow-glow-gold-sm"
                          : "border-white/15 bg-obsidian-700 text-muted"
                      )}
                    >
                      {s.n}
                    </span>
                    <div className="pt-1">
                      <h3
                        className={cn(
                          "font-display text-xl font-bold tracking-tight transition-colors duration-300",
                          isActive ? "text-foreground" : "text-muted"
                        )}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-1.5 text-sm leading-relaxed transition-colors duration-300",
                          isActive ? "text-muted" : "text-muted/50"
                        )}
                      >
                        {s.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* RIGHT — scrolling visuals */}
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="flex min-h-[80vh] flex-col items-center justify-center lg:min-h-screen"
            >
              <Reveal className="w-full">
                <div className="flex flex-col items-center">
                  <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    <span className="text-gold">{s.n}</span> · {panelLabels[i]}
                  </span>
                  <StepVisual index={i} />
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <ChevronDown
                  className="mt-10 size-6 animate-bounce text-muted/40 lg:hidden"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
