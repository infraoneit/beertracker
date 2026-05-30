import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 px-6 py-16 md:px-12 lg:px-24">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Echtzeit-Biertracking für Festivals, Bars und Gruppenkämpfe. Von der
            App direkt auf die Leinwand — stabil bis zum letzten Bier.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
            <span className="size-1.5 animate-pulse-glow rounded-full bg-green-400" />
            Alle Systeme live
          </p>
        </div>

        {/* Nav columns */}
        {Object.entries(footerNav).map(([heading, links]) => (
          <nav key={heading} aria-label={heading}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              {heading}
            </h2>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {siteConfig.name}. Alle Rechte vorbehalten.
        </p>
        <p className="text-sm text-muted">
          Entwickelt für den Härtetest — auf Festivals, Zeltfesten und in Bars.
        </p>
      </div>
    </footer>
  );
}
