import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

/**
 * Fluid, edge-to-edge section shell.
 * Intentionally avoids narrow `max-w-7xl` containers — the design system
 * uses the full viewport width with generous responsive side padding
 * (`w-full px-6 md:px-12 lg:px-24`) for that wide, high-end SaaS feel.
 */
export function SectionWrapper({
  id,
  as: Tag = "section",
  className,
  children,
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      className={cn("relative w-full px-6 md:px-12 lg:px-24", className)}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "cyan";
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm",
        tone === "gold" ? "text-gold" : "text-cyan",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full animate-pulse-glow",
          tone === "gold" ? "bg-gold" : "bg-cyan"
        )}
        aria-hidden
      />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "gold" | "cyan";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "gold",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={cn(
          "max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-balance sm:text-5xl lg:text-6xl",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
