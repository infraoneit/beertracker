import { CSSProperties } from "react";
import { marqueeItems } from "@/lib/site";

function Pill({ label }: { label: string }) {
  return (
    <span className="mr-4 inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-foreground/80">
      <span className="size-1.5 rounded-full bg-gold" aria-hidden />
      {label}
    </span>
  );
}

/**
 * Infinite, full-bleed social-proof marquee. Pure CSS animation (no JS),
 * so it stays a Server Component. The track holds two copies of the list
 * and translates -50% for a seamless loop.
 */
export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section
      aria-label="Einsatzgebiete von Biertracker"
      className="w-full border-y border-white/5 bg-white/[0.015] py-10 md:py-14"
    >
      <p className="px-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted md:px-12">
        Entwickelt für den Härtetest auf Festivals, Zeltfesten und in Bars.
      </p>

      <div className="mask-fade-x relative mt-8 flex w-full overflow-hidden">
        <div
          className="pause-on-hover flex w-max shrink-0 animate-marquee items-center"
          style={{ "--marquee-duration": "48s" } as CSSProperties}
        >
          {items.map((item, i) => (
            <Pill key={`${item}-${i}`} label={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
