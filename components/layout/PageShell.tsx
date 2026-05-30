import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/lib/site";

type Breadcrumb = { name: string; path: string };

/**
 * Shared shell for standalone subpages (legal / about).
 * Provides the navbar, a padded content area with a breadcrumb, and the
 * footer. When `breadcrumb` is set it also emits BreadcrumbList JSON-LD.
 */
export function PageShell({
  children,
  breadcrumb,
}: {
  children: React.ReactNode;
  breadcrumb?: Breadcrumb;
}) {
  const breadcrumbLd = breadcrumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Start",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumb.name,
            item: `${siteConfig.url}${breadcrumb.path}`,
          },
        ],
      }
    : null;

  return (
    <>
      <Navbar />
      {breadcrumbLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      ) : null}
      <main className="relative w-full overflow-hidden px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-40 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-radial-gold opacity-40"
        />
        <div className="mx-auto max-w-5xl">
          {breadcrumb ? (
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-muted"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <ArrowLeft className="size-3.5" aria-hidden />
                Start
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground/70" aria-current="page">
                {breadcrumb.name}
              </span>
            </nav>
          ) : (
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Zurück zur Startseite
            </Link>
          )}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: React.ReactNode;
}) {
  return (
    <header className="mb-12 mt-8 border-b border-white/10 pb-10">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-balance sm:text-5xl">
        {title}
      </h1>
      {intro ? (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {intro}
        </p>
      ) : null}
    </header>
  );
}
