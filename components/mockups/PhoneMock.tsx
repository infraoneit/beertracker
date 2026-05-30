"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Beer, Plus, Users, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const ACTIVITY = [
  { who: "Max", time: "gerade eben", emoji: "🍺" },
  { who: "Lena", time: "vor 12s", emoji: "🍻" },
  { who: "Jonas", time: "vor 31s", emoji: "🥨" },
];

/**
 * Interactive phone mock of the native app. Tapping "+ Bier" bumps the
 * live counter and floats a +1 — a small moment of delight that mirrors
 * the real logging flow.
 */
export function PhoneMock({ className }: { className?: string }) {
  const [count, setCount] = useState(247);
  const [pops, setPops] = useState<number[]>([]);

  const addBeer = () => {
    setCount((c) => c + 1);
    setPops((p) => [...p, count + 1]);
  };

  return (
    <div
      className={cn(
        "relative mx-auto w-[260px] select-none rounded-[2.75rem] border border-white/15 bg-obsidian-700 p-2.5 shadow-2xl",
        className
      )}
    >
      {/* Glow behind the phone */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gold/20 blur-[60px]"
      />
      <div className="relative overflow-hidden rounded-[2.25rem] bg-obsidian-800">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pb-2 pt-3.5 text-[0.65rem] font-medium text-muted">
          <span>22:47</span>
          <span className="flex items-center gap-1">
            <Zap className="size-3 text-gold" aria-hidden /> LIVE
          </span>
        </div>

        {/* App content */}
        <div className="px-5 pb-6 pt-2">
          {/* Group header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[0.65rem] uppercase tracking-widest text-muted">
                Deine Gruppe
              </p>
              <p className="text-sm font-bold text-foreground">Die Bierbarone</p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[0.65rem] text-muted">
              <Users className="size-3" aria-hidden /> 6
            </div>
          </div>

          {/* Counter */}
          <div className="relative mb-5 rounded-2xl border border-gold/20 bg-gradient-to-b from-gold/10 to-transparent p-5 text-center">
            <p className="text-[0.65rem] uppercase tracking-widest text-gold/80">
              Biere heute
            </p>
            <div className="relative inline-block">
              <span className="font-display text-5xl font-extrabold tabular-nums text-foreground">
                {count}
              </span>
              {/* Floating +1s */}
              <AnimatePresence>
                {pops.map((id) => (
                  <motion.span
                    key={id}
                    initial={{ opacity: 0, y: 0, scale: 0.6 }}
                    animate={{ opacity: 1, y: -38, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    onAnimationComplete={() =>
                      setPops((p) => p.filter((x) => x !== id))
                    }
                    className="pointer-events-none absolute -right-6 top-0 text-sm font-bold text-gold"
                  >
                    +1
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Add button */}
          <button
            type="button"
            onClick={addBeer}
            className="mb-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gold py-3.5 font-semibold text-obsidian shadow-glow-gold-sm transition-transform active:scale-95"
          >
            <Plus className="size-4" strokeWidth={2.5} aria-hidden />
            Bier eintragen
          </button>

          {/* Activity */}
          <div className="space-y-2">
            {ACTIVITY.map((a) => (
              <div
                key={a.who}
                className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-2"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-white/5 text-xs">
                  {a.emoji}
                </span>
                <span className="flex-1 text-xs text-foreground">
                  <span className="font-semibold">{a.who}</span>
                  <span className="text-muted"> hat ein Bier getrackt</span>
                </span>
                <Beer className="size-3.5 text-gold/70" aria-hidden />
                <span className="sr-only">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
