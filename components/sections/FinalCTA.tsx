import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <SectionWrapper id="cta" className="py-24 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan/25 bg-gradient-to-br from-cyan/[0.12] via-obsidian-800 to-obsidian-800 px-7 py-16 text-center sm:px-12 md:px-16 md:py-24">
          {/* Decorative layers */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 size-80 rounded-full bg-cyan/25 blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-16 size-80 rounded-full bg-gold/20 blur-[110px]"
          />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              <span className="size-1.5 animate-pulse-glow rounded-full bg-cyan" />
              Beta · Limitierte Plätze
            </span>

            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tightest text-balance sm:text-5xl lg:text-6xl">
              Bereit für das nächste Level des{" "}
              <span className="text-gradient-cyan">Ausschanks</span>?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              Hol dir die Software, die dein Event zum Erlebnis macht.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#beta" variant="cyan" size="lg" withArrow>
                Jetzt Beta-Zugang sichern
              </Button>
              <Button href="#features" variant="ghost" size="lg">
                Features ansehen
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted">
              Kostenlos in der Beta · Keine Kreditkarte · Setup in Minuten
            </p>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
