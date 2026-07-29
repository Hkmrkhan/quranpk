import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Comprehensive list of marketing scrapers, AI crawlers, and aggressive bots to block
  const badBots = [
    "AhrefsBot",
    "SemrushBot",
    "MJ12bot",
    "DotBot",
    "PetalBot",
    "DataForSeoBot",
    "BLEXBot",
    "ZoominfoBot",
    "MegaIndex.ru",
    "SerpstatBot",
    "LinkpadBot",
    "Scrapy",
    "GPTBot",
    "ChatGPT-User",
    "CCBot",
    "ClaudeBot",
    "Anthropic-AI",
    "PerplexityBot",
    "Google-Extended",
    "Bytespider",
    "Baiduspider",
    "Sogou",
    "YandexBot",
    "Exabot",
    "SeznamBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...badBots.map((bot) => ({
        userAgent: bot,
        disallow: ["/"],
      })),
    ],
    sitemap: "https://quranpk.vercel.app/sitemap.xml",
  };
}
