import { Smartphone, TrendingUp } from "lucide-react";
import { LeaderboardMock } from "@/components/mockups/LeaderboardMock";

/**
 * Hero "money shot": the live leaderboard framed as a big screen, with
 * floating glass cards implying the App → Server → Big Screen pipeline.
 */
export function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Glow pedestal */}
      <div
        aria-hidden
        className="absolute inset-x-8 -bottom-8 top-12 rounded-[3rem] bg-gradient-to-b from-gold/25 via-gold/5 to-cyan/15 opacity-60 blur-3xl"
      />

      {/* Screen bezel */}
      <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-obsidian-700 to-obsidian-800 p-2.5 shadow-2xl sm:p-3">
        <div className="rounded-[1.6rem] border border-white/5 bg-background/70 p-4 sm:p-6">
          <LeaderboardMock className="border-0 bg-transparent p-0 shadow-none backdrop-blur-none" />
        </div>
      </div>

      {/* Floating: app feed (top-right) */}
      <div className="absolute -right-6 top-10 hidden animate-float items-center gap-2.5 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 shadow-glow-gold-sm backdrop-blur-xl lg:flex">
        <span className="flex size-9 items-center justify-center rounded-xl bg-gold/15 text-gold">
          <Smartphone className="size-[1.125rem]" aria-hidden />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-foreground">Live von der App</p>
          <p className="text-[0.7rem] text-muted">Max hat getrackt · +1 🍺</p>
        </div>
      </div>

      {/* Floating: revenue (bottom-left) */}
      <div
        className="absolute -left-6 bottom-6 hidden animate-float items-center gap-2.5 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 shadow-glow-cyan-sm backdrop-blur-xl lg:flex"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="flex size-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
          <TrendingUp className="size-[1.125rem]" aria-hidden />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-foreground">Umsatz heute</p>
          <p className="text-[0.7rem] text-muted">+38 % durch Gamification</p>
        </div>
      </div>
    </div>
  );
}
