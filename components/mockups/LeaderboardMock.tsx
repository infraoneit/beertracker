"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Crown, Radio } from "lucide-react";
import { cn } from "@/lib/utils";

type Row = { name: string; emoji: string; score: number };

const INITIAL: Row[] = [
  { name: "Die Bierbarone", emoji: "🍺", score: 247 },
  { name: "Hopfen-Helden", emoji: "🌿", score: 238 },
  { name: "Team Reinheitsgebot", emoji: "🍻", score: 196 },
  { name: "Die Maßkrüge", emoji: "🥨", score: 158 },
  { name: "Sektion Suff", emoji: "🎉", score: 131 },
];

/**
 * Live Big-Screen leaderboard mock. Scores tick up while visible and rows
 * re-order with a spring layout animation — selling the real-time feel.
 */
export function LeaderboardMock({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40px" });
  const reduce = useReducedMotion();
  const [rows, setRows] = useState<Row[]>(INITIAL);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => {
      setRows((prev) =>
        prev.map((r) =>
          Math.random() > 0.5
            ? { ...r, score: r.score + 1 + Math.floor(Math.random() * 2) }
            : r
        )
      );
    }, 1300);
    return () => clearInterval(id);
  }, [inView, reduce]);

  const sorted = [...rows].sort((a, b) => b.score - a.score);
  const max = sorted[0].score;

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-obsidian-800/80 p-5 shadow-2xl backdrop-blur-sm sm:p-6",
        className
      )}
    >
      {/* Screen header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-cyan" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
            Live Leaderboard
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[0.7rem] font-medium text-muted">
          <Radio className="size-3.5 text-cyan" aria-hidden />
          Big Screen
        </div>
      </div>

      {/* Ranked rows */}
      <div className="flex flex-col gap-2.5">
        {sorted.map((r, i) => {
          const pct = Math.round((r.score / max) * 100);
          const leader = i === 0;
          return (
            <motion.div
              key={r.name}
              layout
              transition={{ type: "spring", stiffness: 520, damping: 42 }}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-3 py-2.5",
                leader
                  ? "border-gold/30 bg-gold/[0.07]"
                  : "border-white/5 bg-white/[0.02]"
              )}
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold tabular-nums",
                  leader ? "bg-gold text-obsidian" : "bg-white/5 text-muted"
                )}
              >
                {leader ? <Crown className="size-3.5" aria-hidden /> : i + 1}
              </span>
              <span className="text-base" aria-hidden>
                {r.emoji}
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {r.name}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-sm font-bold tabular-nums",
                      leader ? "text-gold" : "text-muted"
                    )}
                  >
                    {r.score}
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className={cn(
                      "h-full rounded-full transition-[width] duration-700 ease-out",
                      leader
                        ? "bg-gradient-to-r from-gold-600 to-gold"
                        : "bg-gradient-to-r from-cyan-600/60 to-cyan/60"
                    )}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
