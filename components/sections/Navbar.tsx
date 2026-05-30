"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full px-6 transition-all duration-300 md:px-12 lg:px-24",
        scrolled
          ? "border-b border-white/10 bg-background/70 py-3 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent py-5"
      )}
    >
      <nav className="flex items-center justify-between gap-4">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <Button href="/#demo" variant="subtle" size="sm">
            Live-Demo
          </Button>
          <Button href="/#beta" variant="primary" size="sm">
            Beta sichern
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 flex flex-col gap-1 rounded-2xl border border-white/10 bg-background/90 p-3 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="/#beta"
            variant="primary"
            size="md"
            className="mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Beta-Zugang sichern
          </Button>
        </div>
      )}
    </header>
  );
}
