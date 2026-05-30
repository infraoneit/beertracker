import type { Metadata } from "next";
import { Cpu, ShieldCheck, Zap } from "lucide-react";
import { PageShell, PageHeader } from "@/components/layout/PageShell";
import { BentoCard, IconBadge } from "@/components/ui/BentoCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Die Crew hinter Biertracker: ein kleines Team, das aus einer Bierlaune die smarteste Tracking-Software für Festivals, Bars und Vereinsfeste gemacht hat.",
  alternates: { canonical: "/ueber-uns" },
};

const values = [
  {
    icon: Zap,
    tone: "gold" as const,
    title: "Echtzeit oder gar nicht",
    text: "Ein Leaderboard, das erst morgen stimmt, ist kein Leaderboard. Bei uns zählt jeder Schluck — in der Sekunde, in der er passiert.",
  },
  {
    icon: Cpu,
    tone: "cyan" as const,
    title: "Läuft auf allem",
    text: "Wir sind besessen davon, dass alles auf minimaler Hardware flüssig läuft. Ein Raspberry Pi reicht. Ein Toaster fast.",
  },
  {
    icon: ShieldCheck,
    tone: "gold" as const,
    title: "Deine Daten gehören dir",
    text: "Self-hostbar, transparent und ohne Daten-Verkauf. Was auf deinem Event passiert, bleibt auf deinem Event.",
  },
];

export default function UeberUnsPage() {
  return (
    <PageShell breadcrumb={{ name: "Über uns", path: "/ueber-uns" }}>
      <PageHeader
        eyebrow="Über uns"
        title="Wir zählen Biere — damit ihr es nicht müsst."
        intro="Ein kleines Team aus Entwicklern, Festival-Gängern und mindestens einem selbsternannten Bier-Sommelier."
      />

      <div className="longform">
        <p>
          Angefangen hat alles mit einem Streit am Lagerfeuer:{" "}
          <strong>Wer hat heute eigentlich am meisten getrunken?</strong>{" "}
          Niemand wusste es. Behauptet wurde viel, bewiesen nichts. Also haben
          wir aufgehört zu diskutieren und angefangen zu messen. Aus einer
          Bierlaune wurde Biertracker.
        </p>
        <p>
          Heute sorgt unsere Software dafür, dass auf Festivals, in Bars und bei
          Vereinsfesten kein Bier mehr ungezählt bleibt — in Echtzeit, direkt auf
          dem Big Screen und mit einem gesunden Schuss Wettkampf. Veranstalter
          bekommen mehr Umsatz, Gäste bekommen Ruhm. Win-win, würden wir sagen.
        </p>
        <p>
          Wir sind klein, schnell und ein bisschen verrückt nach sauberem Code
          und kaltem Bier — in genau dieser Reihenfolge (meistens).
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {values.map((v) => (
          <BentoCard key={v.title} tone={v.tone} className="h-full">
            <IconBadge icon={v.icon} tone={v.tone} />
            <h2 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
              {v.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
          </BentoCard>
        ))}
      </div>

      {/* Closing CTA */}
      <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-4xl border border-white/10 bg-gradient-to-br from-gold/[0.08] to-transparent p-8 sm:flex-row sm:items-center md:p-10">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
            Lust, mitzumachen?
          </h2>
          <p className="mt-2 max-w-md text-muted">
            Wir suchen Veranstalter, die ihr nächstes Event zur Legende machen
            wollen. Sichere dir deinen Beta-Zugang.
          </p>
        </div>
        <Button href="/#beta" variant="primary" size="lg" withArrow>
          Beta-Zugang sichern
        </Button>
      </div>
    </PageShell>
  );
}
