import type { Metadata } from "next";
import { PageShell, PageHeader } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Biertracker.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <PageShell breadcrumb={{ name: "Impressum", path: "/impressum" }}>
      <PageHeader
        eyebrow="Rechtliches"
        title="Impressum"
        intro="Angaben gemäss schweizerischem Recht (Art. 3 Abs. 1 lit. s UWG)."
      />

      <div className="longform">
        <h2>Betreiber dieser Website</h2>
        <p>
          <strong>[Firmenname / Vor- und Nachname]</strong>
          <br />
          [Strasse und Hausnummer]
          <br />
          [PLZ Ort]
          <br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <br />
          Telefon: [+41 00 000 00 00]
        </p>

        <h2>Vertretungsberechtigte Person</h2>
        <p>[Vor- und Nachname]</p>

        <h2>Handelsregister &amp; Mehrwertsteuer</h2>
        <p>
          Eingetragener Firmenname: [Firmenname]
          <br />
          Handelsregisteramt: [Kanton]
          <br />
          Unternehmens-Identifikationsnummer: [CHE-123.456.789]
          <br />
          MWST-Nummer: [CHE-123.456.789 MWST]
        </p>
        <p>
          <em>
            Hinweis: Falls (noch) kein Handelsregister-Eintrag besteht, kann
            dieser Abschnitt entfallen.
          </em>
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
          Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
          Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor
          wegen Schäden materieller oder immaterieller Art, welche aus dem
          Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
          Informationen, durch Missbrauch der Verbindung oder durch technische
          Störungen entstanden sind, werden ausgeschlossen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
          Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
          Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
          erfolgen auf eigene Gefahr des jeweiligen Nutzers.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
          anderen Dateien auf dieser Website gehören ausschliesslich{" "}
          <strong>[Firmenname]</strong> oder den speziell genannten
          Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die
          schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
        </p>
      </div>
    </PageShell>
  );
}
