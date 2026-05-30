import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Eyebrow } from "@/components/ui/SectionWrapper";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroShowcase } from "./HeroShowcase";
import { heroStats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-24">
      <HeroBackdrop />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Live-Biertracking · Beta offen</Eyebrow>
        </Reveal>

        {/* LCP element — rendered visible on the server, no opacity gate. */}
        <h1 className="mt-7 max-w-5xl font-display font-extrabold leading-[0.95] tracking-tightest text-balance">
          <span className="block text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Wer trinkt das{" "}
            <span className="text-gradient-gold">Festival leer?</span>
          </span>
          <span className="mt-4 block text-2xl font-bold text-muted sm:text-3xl lg:text-[2.5rem]">
            Echtzeit-Biertracking für{" "}
            <span className="text-foreground">Legenden.</span>
          </span>
        </h1>

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
            Nicht einfach nur ein Tracker.{" "}
            <span className="font-semibold text-foreground">Ein Battle.</span>{" "}
            Gamifiziere deinen Ausschank, pushe den Umsatz und lass Gruppen auf
            den Big Screens gegeneinander antreten. Von der iOS/Android App
            direkt auf die Festival-Leinwand.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href="#demo" variant="primary" size="lg" withArrow>
              Live-Demo starten
            </Button>
            <Button href="#tech" variant="ghost" size="lg">
              Technologie entdecken
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-14 grid grid-cols-3 gap-5 sm:gap-12">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="font-display text-2xl font-extrabold tabular-nums text-foreground sm:text-4xl">
                  <AnimatedCounter
                    value={s.value}
                    decimals={s.decimals}
                    suffix={s.suffix}
                  />
                </span>
                <span className="mt-1.5 max-w-[10rem] text-xs text-muted sm:text-sm">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-16 md:mt-24">
        <HeroShowcase />
      </Reveal>
    </section>
  );
}
