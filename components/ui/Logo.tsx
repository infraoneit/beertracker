import Link from "next/link";
import { Beer } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Biertracker — zur Startseite"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 shadow-glow-gold-sm transition-transform duration-300 group-hover:scale-105">
        <Beer className="size-5 text-obsidian" strokeWidth={2.25} aria-hidden />
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
        Bier<span className="text-gold">tracker</span>
      </span>
    </Link>
  );
}
