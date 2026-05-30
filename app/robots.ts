import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * We want maximum reach: traditional search engines AND AI answer engines
 * (which cite sources and drive referral traffic). So everything is allowed
 * and the key crawlers are listed explicitly to signal intent.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          // Classic search engines
          "Googlebot",
          "Bingbot",
          "Applebot",
          "DuckDuckBot",
          "Slurp",
          "YandexBot",
          // AI search & retrieval (cited answers → referral traffic)
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "Perplexity-User",
          "Claude-SearchBot",
          "Claude-User",
          // AI training crawlers (brand presence in model knowledge)
          "GPTBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Amazonbot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
