"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** A faded number that slowly ticks upward — the ambient "real-time" layer. */
function GhostCounter({
  start,
  className,
  step = 1,
}: {
  start: number;
  className?: string;
  step?: number;
}) {
  const [n, setN] = useState(start);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setN((v) => v + Math.floor(Math.random() * step) + 1),
      900
    );
    return () => clearInterval(id);
  }, [reduce, step]);

  return (
    <span className={className}>{n.toLocaleString("de-DE")}</span>
  );
}

/**
 * Decorative, non-interactive hero background:
 * faint grid, gold/cyan glows, drifting beer glyphs and ghostly live
 * counters. Sits behind the content and is hidden from assistive tech.
 */
export function HeroBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />

      {/* Radial glows */}
      <div className="absolute inset-0 bg-radial-gold" />
      <div className="absolute inset-0 bg-radial-cyan" />

      {/* Big drifting amber orb */}
      <motion.div
        className="absolute -left-32 top-20 size-[28rem] rounded-full bg-gold/10 blur-[120px]"
        animate={reduce ? undefined : { y: [0, 30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 top-40 size-[24rem] rounded-full bg-cyan/10 blur-[120px]"
        animate={reduce ? undefined : { y: [0, -30, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ghostly live counters in the corners */}
      <div className="absolute left-[6%] top-[28%] hidden font-display text-7xl font-extrabold text-white/[0.025] lg:block">
        <GhostCounter start={12847} step={3} />
      </div>
      <div className="absolute right-[8%] bottom-[20%] hidden font-display text-6xl font-extrabold text-white/[0.03] lg:block">
        <GhostCounter start={3192} step={2} />
      </div>

      {/* Drifting beer glyphs */}
      {!reduce &&
        [
          { e: "🍺", x: "12%", y: "62%", d: 7, s: "text-4xl" },
          { e: "🍻", x: "82%", y: "30%", d: 9, s: "text-3xl" },
          { e: "🌿", x: "70%", y: "70%", d: 8, s: "text-2xl" },
        ].map((g) => (
          <motion.span
            key={g.x}
            className={`absolute ${g.s} opacity-[0.12]`}
            style={{ left: g.x, top: g.y }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: g.d, repeat: Infinity, ease: "easeInOut" }}
          >
            {g.e}
          </motion.span>
        ))}
    </div>
  );
}
