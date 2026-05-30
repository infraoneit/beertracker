import { Mail, Plus } from "lucide-react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { faqs, siteConfig } from "@/lib/site";

/**
 * FAQ accordion built on native <details>/<summary>:
 * - content is always in the DOM (crawler- & LLM-friendly, works without JS)
 * - emits FAQPage structured data for answer engines and rich results.
 */
export function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <SectionWrapper id="faq" className="py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left — heading + contact (sticky on desktop) */}
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Häufige <span className="text-gradient-gold">Fragen</span>.
                </>
              }
              description="Alles, was Veranstalter und Gäste vor dem ersten Bier wissen wollen."
            />

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-white/20"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <Mail className="size-4" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-muted">
                  Noch eine Frage offen?
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {siteConfig.email}
                </span>
              </span>
            </a>
          </div>
        </Reveal>

        {/* Right — accordion cards */}
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 open:border-gold/30 open:bg-gold/[0.04] hover:border-white/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-base font-semibold text-foreground transition-colors duration-300 group-open:text-gold sm:text-lg">
                    {f.q}
                  </h3>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition-all duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-obsidian">
                    <Plus className="size-4" strokeWidth={2.5} aria-hidden />
                  </span>
                </summary>
                <p className="-mt-1 max-w-2xl px-5 pb-6 leading-relaxed text-muted sm:px-6">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
