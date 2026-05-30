import {
  BarChart3,
  Check,
  Cpu,
  Smartphone,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { BentoCard, IconBadge } from "@/components/ui/BentoCard";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { LeaderboardMock } from "@/components/mockups/LeaderboardMock";
import { HardwareMock } from "@/components/mockups/HardwareMock";

function FeatureChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

function PlatformRow({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
      <Smartphone className="size-4 shrink-0 text-cyan" aria-hidden />
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-[0.7rem] text-muted">{sub}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-[0.7rem] font-medium text-cyan">
        <Check className="size-3.5" aria-hidden /> Native
      </span>
    </div>
  );
}

function MiniChart() {
  const bars = [32, 45, 40, 58, 52, 74, 88, 100];
  return (
    <div className="flex h-24 items-end gap-1.5">
      {bars.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-gold/25 to-gold transition-all"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

export function Features() {
  return (
    <SectionWrapper id="features" className="py-24 md:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 mx-auto h-[30rem] max-w-5xl bg-radial-gold opacity-50 blur-3xl"
      />

      <Reveal>
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Gebaut für{" "}
              <span className="text-gradient-gold">Big Screen Energy</span>.
            </>
          }
          description="Vom ersten Scan bis zur Eskalation auf der Leinwand — jedes Feature ist auf Echtzeit, Umsatz und maximalen Wettkampf getrimmt."
        />
      </Reveal>

      <Stagger
        className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3"
        stagger={0.12}
      >
        {/* Card 1 — Live Leaderboard (large) */}
        <StaggerItem className="h-full lg:col-span-2">
          <BentoCard tone="gold" className="h-full">
            <div className="grid h-full gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <IconBadge icon={Trophy} tone="gold" />
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Das Live Leaderboard
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">
                    Big Screen Energy.
                  </span>{" "}
                  Zeige in Echtzeit, welche Gruppe führt. Perfekt für Beamer und
                  Festival-Screens.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <FeatureChip>Echtzeit-Sync</FeatureChip>
                  <FeatureChip>Beamer-ready</FeatureChip>
                  <FeatureChip>Auto-Reorder</FeatureChip>
                </div>
              </div>
              <LeaderboardMock />
            </div>
          </BentoCard>
        </StaggerItem>

        {/* Card 2 — Cross-Platform (small) */}
        <StaggerItem className="h-full">
          <BentoCard tone="cyan" className="h-full">
            <IconBadge icon={Smartphone} tone="cyan" />
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
              Cross-Platform
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              <span className="font-semibold text-foreground">
                iOS &amp; Android.
              </span>{" "}
              Native Performance für jeden User in der Gruppe.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <PlatformRow label="iOS" sub="iPhone & iPad" />
              <PlatformRow label="Android" sub="Phone & Tablet" />
            </div>
          </BentoCard>
        </StaggerItem>

        {/* Card 3 — Hardware Agnostic (large) */}
        <StaggerItem className="h-full lg:col-span-2 lg:col-start-2 lg:row-start-2">
          <BentoCard tone="cyan" className="h-full">
            <div className="grid h-full gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <IconBadge icon={Cpu} tone="cyan" />
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Hardware Agnostic
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  <span className="font-semibold text-foreground">
                    Läuft auf einem Toaster.
                  </span>{" "}
                  Volle Power auf minimaler Hardware. Ein Raspberry Pi reicht
                  aus, um das komplette Festival-Tracking zu hosten. Zero-Config,
                  100 % stabil.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <FeatureChip>Raspberry Pi</FeatureChip>
                  <FeatureChip>Zero-Config</FeatureChip>
                  <FeatureChip>Self-Hosted</FeatureChip>
                </div>
              </div>
              <HardwareMock />
            </div>
          </BentoCard>
        </StaggerItem>

        {/* Card 4 — Analytics (small) */}
        <StaggerItem className="h-full lg:col-start-1 lg:row-start-2">
          <BentoCard tone="gold" className="h-full">
            <IconBadge icon={BarChart3} tone="gold" />
            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
              Analytics
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              <span className="font-semibold text-foreground">
                Umsatz-Boost durch Gamification.
              </span>{" "}
              Zahlen, die Wirte lieben.
            </p>
            <div className="mt-auto pt-6">
              <MiniChart />
              <div className="mt-4 flex items-baseline gap-2">
                <span className="inline-flex items-center gap-1 font-display text-3xl font-extrabold text-gold">
                  <TrendingUp className="size-6" aria-hidden />
                  +38 %
                </span>
                <span className="text-xs text-muted">Umsatz pro Event</span>
              </div>
            </div>
          </BentoCard>
        </StaggerItem>
      </Stagger>
    </SectionWrapper>
  );
}
