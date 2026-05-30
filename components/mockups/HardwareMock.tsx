"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Activity, Cpu, MemoryStick, Smartphone, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Raspberry-Pi host dashboard mock. Live-ish CPU and throughput numbers
 * stay impressively low to sell "runs on minimal hardware".
 */
export function HardwareMock({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40px" });
  const reduce = useReducedMotion();
  const [cpu, setCpu] = useState(11);
  const [throughput, setThroughput] = useState(1248);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => {
      setCpu(8 + Math.floor(Math.random() * 7));
      setThroughput(1180 + Math.floor(Math.random() * 140));
    }, 1500);
    return () => clearInterval(id);
  }, [inView, reduce]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-white/10 bg-obsidian-800/80 p-5 font-mono shadow-2xl backdrop-blur-sm sm:p-6",
        className
      )}
    >
      {/* Header: device + status */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10">
            <Cpu className="size-[1.125rem] text-cyan" aria-hidden />
          </div>
          <div className="leading-tight">
            <p className="text-[0.8rem] font-semibold text-foreground">
              raspberrypi-host
            </p>
            <p className="text-[0.65rem] text-muted">Raspberry Pi 4 · 2GB</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-green-400/20 bg-green-400/10 px-2.5 py-1 text-[0.65rem] font-semibold text-green-400">
          <span className="size-1.5 rounded-full bg-green-400 animate-pulse-glow" />
          ONLINE
        </span>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-2 gap-3">
        <Stat
          icon={Cpu}
          label="CPU"
          value={`${cpu}%`}
          pct={cpu}
          hint="Auslastung"
        />
        <Stat
          icon={MemoryStick}
          label="RAM"
          value="312 MB"
          pct={18}
          hint="von 2 GB"
        />
        <Stat
          icon={Activity}
          label="Throughput"
          value={throughput.toLocaleString("de-DE")}
          pct={42}
          hint="events / s"
          tone="gold"
        />
        <Stat
          icon={Smartphone}
          label="Verbunden"
          value="1.284"
          pct={64}
          hint="Geräte live"
          tone="gold"
        />
      </div>

      {/* Terminal line */}
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/5 bg-black/40 px-3 py-2.5 text-[0.7rem]">
        <Wifi className="size-3.5 shrink-0 text-green-400" aria-hidden />
        <span className="text-muted">systemctl status biertracker →</span>
        <span className="font-semibold text-green-400">active (running)</span>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  pct,
  hint,
  tone = "cyan",
}: {
  icon: typeof Cpu;
  label: string;
  value: string;
  pct: number;
  hint: string;
  tone?: "cyan" | "gold";
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className="mb-2 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-muted">
        <Icon className="size-3.5" aria-hidden />
        {label}
      </div>
      <p className="mb-2 text-lg font-bold tabular-nums text-foreground">
        {value}
      </p>
      <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-700 ease-out",
            tone === "gold" ? "bg-gold" : "bg-cyan"
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-1.5 text-[0.6rem] text-muted">{hint}</p>
    </div>
  );
}
