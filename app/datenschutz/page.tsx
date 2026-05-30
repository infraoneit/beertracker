import type { Metadata } from "next";
import { PageShell, PageHeader } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Biertracker — welche Personendaten wir bearbeiten, zu welchem Zweck und welche Rechte du hast.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <PageShell breadcrumb={{ name: "Datenschutz", path: "/datenschutz" }}>
      <PageHeader
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        intro="Der Schutz deiner Personendaten ist uns wichtig. Hier erklären wir, welche Daten wir bearbeiten, warum und wie lange — gemäss dem Schweizer Datenschutzgesetz (revDSG)."
      />

      <div className="longform">
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          Verantwortlich für die Bearbeitung von Personendaten auf dieser
          Website ist:
        </p>
        <p>
          <strong>[Firmenname / Vor- und Nachname]</strong>
          <br />
          [Strasse und Hausnummer]
          <br />
          [PLZ Ort], Schweiz
          <br />
          E-Mail:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>

        <h2>2. Bearbeitung von Personendaten</h2>
        <p>
          Wir bearbeiten Personendaten grundsätzlich nur, soweit dies für die
          Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte
          und Leistungen erforderlich ist. Eine Bearbeitung erfolgt nur mit
          deiner Einwilligung oder gestützt auf eine gesetzliche Grundlage.
        </p>

        <h2>3. Kontakt- und Beta-Formular</h2>
        <p>
          Wenn du uns über das Beta-Formular oder per E-Mail kontaktierst,
          bearbeiten wir die von dir übermittelten Daten, um deine Anfrage zu
          beantworten. Dazu gehören insbesondere:
        </p>
        <ul>
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Veranstaltung / Location (optional)</li>
          <li>Event-Typ</li>
          <li>Inhalt deiner Nachricht (optional)</li>
        </ul>
        <p>
          Diese Daten verwenden wir ausschliesslich zur Bearbeitung deiner
          Anfrage und zur Vergabe deines Beta-Zugangs. Eine Weitergabe an
          unbeteiligte Dritte findet nicht statt.
        </p>

        <h2>4. Hosting &amp; Formularverarbeitung (Netlify)</h2>
        <p>
          Diese Website wird bei <strong>Netlify</strong> (Netlify, Inc., USA)
          gehostet. Beim Aufruf der Website sowie beim Absenden von Formularen
          werden technisch notwendige Daten (z. B. IP-Adresse, Datum und
          Uhrzeit des Zugriffs, übermittelte Formulardaten) durch Netlify
          bearbeitet. Die Formularübermittlung erfolgt über den Dienst
          «Netlify Forms».
        </p>
        <p>
          Dabei können Daten in die USA übermittelt werden. Die Übermittlung
          stützt sich auf entsprechende vertragliche Garantien (u. a.
          Standardvertragsklauseln). Details findest du in der
          Datenschutzerklärung von Netlify:{" "}
          <a
            href="https://www.netlify.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            netlify.com/privacy
          </a>
          .
        </p>

        <h2>5. Server-Logfiles</h2>
        <p>
          Aus technischen und sicherheitsrelevanten Gründen werden beim Zugriff
          auf die Website automatisch Informationen in Server-Logfiles
          gespeichert (Browsertyp/-version, Betriebssystem, Referrer-URL,
          Zugriffszeitpunkt, IP-Adresse in gekürzter Form). Diese Daten werden
          nicht mit anderen Datenquellen zusammengeführt und dienen nicht der
          Identifikation einzelner Personen.
        </p>

        <h2>6. Cookies &amp; Tracking</h2>
        <p>
          Diese Website verwendet <strong>keine</strong> Tracking-Cookies und
          kein Web-Analyse- oder Werbe-Tracking. Es werden lediglich technisch
          notwendige Funktionen genutzt, die für den Betrieb der Seite
          erforderlich sind.
        </p>

        <h2>7. Aufbewahrung &amp; Löschung</h2>
        <p>
          Wir bewahren Personendaten nur so lange auf, wie es für den jeweiligen
          Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen es
          vorsehen. Anfragen über das Formular löschen wir, sobald sie
          abschliessend bearbeitet sind und keine gesetzlichen Pflichten
          entgegenstehen.
        </p>

        <h2>8. Datensicherheit</h2>
        <p>
          Wir treffen angemessene technische und organisatorische Massnahmen, um
          deine Daten gegen Verlust, Missbrauch und unberechtigten Zugriff zu
          schützen. Die Übertragung dieser Website erfolgt verschlüsselt über
          HTTPS (TLS).
        </p>

        <h2>9. Deine Rechte</h2>
        <p>
          Im Rahmen des anwendbaren Datenschutzrechts hast du das Recht auf
          Auskunft, Berichtigung, Löschung und Einschränkung der Bearbeitung
          deiner Personendaten sowie das Recht, eine erteilte Einwilligung
          jederzeit zu widerrufen. Wende dich dazu an{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <p>
          Zudem hast du das Recht, dich bei der zuständigen Aufsichtsbehörde zu
          beschweren — in der Schweiz beim Eidgenössischen Datenschutz- und
          Öffentlichkeitsbeauftragten (EDÖB).
        </p>

        <h2>10. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir können diese Datenschutzerklärung jederzeit anpassen, um sie an
          geänderte rechtliche oder technische Rahmenbedingungen anzupassen. Es
          gilt jeweils die hier veröffentlichte Fassung.
        </p>

        <p>
          <em>Stand: Mai 2026</em>
        </p>
      </div>
    </PageShell>
  );
}
