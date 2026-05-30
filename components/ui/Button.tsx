import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "cyan" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-obsidian shadow-glow-gold-sm hover:bg-gold-400 hover:shadow-glow-gold hover:-translate-y-0.5 focus-visible:ring-gold",
  cyan: "bg-cyan text-obsidian shadow-glow-cyan-sm hover:bg-cyan-400 hover:shadow-glow-cyan hover:-translate-y-0.5 focus-visible:ring-cyan",
  ghost:
    "border border-white/15 bg-white/[0.03] text-foreground backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.07] focus-visible:ring-white/40",
  subtle:
    "text-muted hover:text-foreground focus-visible:ring-white/30",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (typeof props.href === "string") {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {content}
    </button>
  );
}
