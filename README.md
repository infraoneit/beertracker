# Biertracker

High-End Landingpage für **Biertracker** – Echtzeit-Biertracking für Festivals, Bars und Gruppenkämpfe. Von der iOS/Android-App direkt auf das Big-Screen-Leaderboard, lauffähig schon auf einem Raspberry Pi.

## Tech-Stack

- **[Next.js 15](https://nextjs.org/)** (App Router, Server Components)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS v3](https://tailwindcss.com/)** (Design-Tokens in `tailwind.config.ts`)
- **[Framer Motion](https://www.framer.com/motion/)** (Scroll- & Echtzeit-Animationen)
- **[Lucide React](https://lucide.dev/)** (Icons)

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # Production-Build
npm run start    # Production-Server
```

## Projektstruktur

```
app/                 Routen (App Router) + Metadaten, sitemap, robots, OG-Image, manifest
  page.tsx           Landingpage
  ueber-uns/         Über uns
  impressum/         Impressum (Platzhalter ausfüllen)
  datenschutz/       Datenschutzerklärung (Platzhalter ausfüllen)
components/
  sections/          Hero, Marquee, Features, HowItWorks, FAQ, FinalCTA, BetaForm, Footer …
  mockups/           Leaderboard-, Phone- & Hardware-Mockups
  ui/                Button, BentoCard, SectionWrapper, Reveal, AnimatedCounter …
  seo/               JSON-LD (SoftwareApplication, Product, Organization, WebSite)
lib/site.ts          Zentrale Inhalte & Konfiguration (Texte, Nav, FAQ, Domain, E-Mail)
public/__forms.html  Statische Form-Definition für Netlify Forms
```

## Deployment (Netlify)

Konfiguriert über [`netlify.toml`](./netlify.toml) mit dem `@netlify/plugin-nextjs`.

Das Beta-Formular nutzt **Netlify Forms**: die statische `public/__forms.html` deklariert die Felder für die Build-Erkennung, das React-Formular sendet an `/__forms.html`. Einsendungen erscheinen im Netlify-Dashboard unter **Forms → `beta-anmeldung`**.

### Umgebungsvariablen (optional)

| Variable | Zweck |
| --- | --- |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console Verifizierung |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools Verifizierung |

## SEO & Discoverability

JSON-LD (Organization, WebSite, SoftwareApplication, Product, FAQPage, BreadcrumbList), `sitemap.xml`, `robots.txt` (alle Such- & KI-Crawler erlaubt), dynamisches Open-Graph-Bild, `llms.txt`, Web-Manifest und Apple-Touch-Icon.

## To-do vor Go-Live

- [ ] Live-Domain in `lib/site.ts` prüfen (aktuell `beertracker.ch`)
- [ ] Impressum & Datenschutz: `[Platzhalter]` mit echten Angaben ersetzen
- [ ] Google Search Console & Bing Webmaster verifizieren, Sitemap einreichen
