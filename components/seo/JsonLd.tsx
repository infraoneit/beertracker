import { siteConfig } from "@/lib/site";

/**
 * Structured data (JSON-LD) for rich results.
 * Exposes a SoftwareApplication + Product graph as required for SEO,
 * plus Organization & WebSite nodes for entity disambiguation.
 *
 * Rendered as a plain <script> in a Server Component so it ships in the
 * initial HTML with zero client-side cost.
 */
export function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/icon.svg`,
        email: siteConfig.email,
        slogan: siteConfig.tagline,
        description: siteConfig.description,
        contactPoint: {
          "@type": "ContactPoint",
          email: siteConfig.email,
          contactType: "customer support",
          availableLanguage: ["German", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "de-CH",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#software`,
        name: siteConfig.name,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Event Management Software",
        operatingSystem: "iOS, Android, Web, Linux (Raspberry Pi)",
        description: siteConfig.description,
        url: siteConfig.url,
        featureList: [
          "Echtzeit-Biertracking",
          "Live Big-Screen Leaderboard",
          "iOS & Android App",
          "Gruppen-Wettkämpfe & Gamification",
          "Hardware Agnostic — läuft auf einem Raspberry Pi",
          "Umsatz-Analytics",
        ],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          description: "Kostenloser Beta-Zugang",
          availability: "https://schema.org/PreOrder",
        },
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product`,
        name: `${siteConfig.name} — ${siteConfig.tagline}`,
        description: siteConfig.description,
        brand: { "@id": `${siteConfig.url}/#organization` },
        category: "Event & Hospitality Software",
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/PreOrder",
          url: `${siteConfig.url}/#beta`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, machine-generated content from our own config.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
