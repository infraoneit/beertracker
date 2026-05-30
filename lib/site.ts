/**
 * Central content & configuration for the Biertracker landing page.
 * Keeping copy and config here keeps the section components lean and
 * makes the page easy to maintain or localize.
 */

export const siteConfig = {
  name: "Biertracker",
  url: "https://beertracker.ch",
  email: "hello@beertracker.ch",
  tagline: "Echtzeit-Biertracking für Legenden",
  description:
    "Biertracker ist die Echtzeit-Tracking-Software für Festivals, Bars und Gruppenkämpfe. Gamifiziere deinen Ausschank, pushe den Umsatz und lass Gruppen live auf dem Big Screen gegeneinander antreten — von der iOS/Android App direkt auf die Festival-Leinwand. Läuft stabil auf minimaler Hardware, sogar auf einem Raspberry Pi.",
  ogImage: "/opengraph-image",
  keywords: [
    "Biertracker",
    "Biertracking",
    "Echtzeit Getränke Tracking",
    "Festival Software",
    "Leaderboard Big Screen",
    "Ausschank Gamification",
    "Bar Software",
    "Getränke App",
    "Raspberry Pi Festival",
    "Zeltfest Software",
    "Live Leaderboard",
  ],
  locale: "de_CH",
  links: {
    demo: "#demo",
    beta: "#beta",
  },
} as const;

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "So funktioniert's", href: "/#how" },
  { label: "Technologie", href: "/#tech" },
  { label: "Big Screen", href: "/#features" },
] as const;

/** Hero KPI strip — animated count-up values. */
export const heroStats = [
  { value: 2.4, decimals: 1, suffix: "M+", label: "Biere live getrackt" },
  { value: 99.9, decimals: 1, suffix: "%", label: "Uptime im Festivalbetrieb" },
  { value: 60, decimals: 0, suffix: "ms", label: "Latenz bis zum Big Screen" },
] as const;

/** Social-proof marquee — the environments Biertracker is built for. */
export const marqueeItems = [
  "Festivals",
  "Zeltfeste",
  "Bars & Clubs",
  "Brauereien",
  "Stadtfeste",
  "Vereinsheime",
  "Schützenfeste",
  "Oktoberfest-Zelte",
  "Après-Ski",
  "Craft-Beer-Bars",
  "Junggesellenabschiede",
  "WG-Partys",
] as const;

/** "So funktioniert's" — the three escalation steps. */
export const steps = [
  {
    n: "01",
    title: "Gruppe erstellen",
    description:
      "QR-Code am Tresen scannen, Team benennen, los geht's. In unter 10 Sekunden ist deine Crew live im Rennen — ganz ohne Account-Zwang.",
  },
  {
    n: "02",
    title: "Bier scannen & eintragen",
    description:
      "Jedes Getränk per Tap oder Scan erfassen. Die native App synced jeden Schluck in Echtzeit mit dem Server — offline-fähig, falls das Festival-WLAN mal schwächelt.",
  },
  {
    n: "03",
    title: "Auf dem Screen eskalieren",
    description:
      "Das Live-Leaderboard knallt auf jeden Beamer und Festival-Screen. Gruppen sehen sofort, wer führt — und geben Gas. Genau hier explodiert dein Umsatz.",
  },
] as const;

/**
 * FAQ — plain-text Q&A. Powers both the on-page accordion and the
 * FAQPage JSON-LD (answer-engine / AI discoverability + long-tail SEO).
 * Keep answers self-contained and factual so LLMs can cite them verbatim.
 */
export const faqs = [
  {
    q: "Was ist Biertracker?",
    a: "Biertracker ist eine Software für Echtzeit-Getränke-Tracking auf Festivals, in Bars und bei privaten Gruppenkämpfen. Gäste tracken ihre Biere per iOS- und Android-App, und ein Live-Leaderboard zeigt auf dem Big Screen, welche Gruppe gerade führt.",
  },
  {
    q: "Läuft Biertracker wirklich auf einem Raspberry Pi?",
    a: "Ja. Biertracker ist bewusst hardware-agnostisch und läuft flüssig auf minimaler Hardware. Ein einzelner Raspberry Pi reicht aus, um das komplette Tracking samt Live-Leaderboard für ein ganzes Event zu hosten – Zero-Config und ohne teure Server.",
  },
  {
    q: "Gibt es eine App für iOS und Android?",
    a: "Ja, Biertracker bietet native Apps für iOS und Android, damit jede Person in der Gruppe Getränke in Echtzeit eintragen kann – mit nativer Performance auf jedem Gerät.",
  },
  {
    q: "Wie funktioniert das Live-Leaderboard auf dem Beamer?",
    a: "Jedes getrackte Bier wird in Echtzeit mit dem Server synchronisiert und sofort auf dem Big-Screen-Leaderboard angezeigt. Du verbindest Beamer oder Festival-Screen mit der Anzeige – und die Gruppen sehen live, wer führt.",
  },
  {
    q: "Was kostet Biertracker?",
    a: "Während der Beta-Phase ist Biertracker kostenlos. Sichere dir über das Formular einen Beta-Zugang, und wir melden uns mit allen Details und Preisen für den regulären Betrieb.",
  },
  {
    q: "Brauche ich Internet oder WLAN auf dem Festival?",
    a: "Nein, keine dauerhafte Internetverbindung nötig. Biertracker läuft lokal auf minimaler Hardware – ein Raspberry Pi im eigenen Netzwerk genügt. Die App ist offline-fähig und synchronisiert nach, falls das Festival-WLAN einmal schwächelt.",
  },
  {
    q: "Für welche Events eignet sich Biertracker?",
    a: "Für Festivals, Zeltfeste, Bars, Clubs, Brauereien, Vereins- und Schützenfeste, Après-Ski sowie private Partys – überall, wo getrunken, gefeiert und mitgefiebert wird.",
  },
  {
    q: "Ist Biertracker datenschutzkonform?",
    a: "Ja. Biertracker ist self-hostbar, transparent und verkauft keine Daten. Was auf deinem Event passiert, bleibt auf deinem Event. Details findest du in unserer Datenschutzerklärung.",
  },
] as const;

export const footerNav = {
  Produkt: [
    { label: "Features", href: "/#features" },
    { label: "Big Screen", href: "/#features" },
    { label: "So funktioniert's", href: "/#how" },
    { label: "Beta-Zugang", href: "/#beta" },
  ],
  Technologie: [
    { label: "Hardware Agnostic", href: "/#tech" },
    { label: "iOS & Android", href: "/#features" },
    { label: "Echtzeit-Engine", href: "/#tech" },
    { label: "Big Screen", href: "/#features" },
  ],
  Unternehmen: [
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/#beta" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Impressum", href: "/impressum" },
  ],
} as const;
