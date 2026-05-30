import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "gold" | "cyan";

type BentoCardProps = {
  children: React.ReactNode;
  className?: string;
  tone?: Tone;
  as?: React.ElementType;
};

/**
 * Asymmetric Bento-grid card with a subtle top sheen and a soft glow
 * that blooms on hover. Pure CSS interactions so it stays a Server Component.
 */
export function BentoCard({
  children,
  className,
  tone = "gold",
  as: Tag = "article",
}: BentoCardProps) {
  return (
    <Tag
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 transition-all duration-500 ease-out hover:border-white/25 sm:p-8",
        tone === "gold" ? "hover:shadow-glow-gold-sm" : "hover:shadow-glow-cyan-sm",
        className
      )}
    >
      {/* Hairline sheen across the top edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      {/* Glow bloom on hover */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100",
          tone === "gold" ? "bg-gold/25" : "bg-cyan/25"
        )}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </Tag>
  );
}

export function IconBadge({
  icon: Icon,
  tone = "gold",
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-500 group-hover:scale-105",
        tone === "gold"
          ? "border-gold/25 bg-gold/10 text-gold"
          : "border-cyan/25 bg-cyan/10 text-cyan",
        className
      )}
    >
      <Icon className="size-6" strokeWidth={1.75} aria-hidden />
    </div>
  );
}
