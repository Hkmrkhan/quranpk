import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Allow search-focused AI crawlers so ChatGPT Search, Perplexity & Gemini can recommend the website
  const allowedAISearchBots = ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot"];

  // Block spammy SEO tools and aggressive scrapers
  const blockedSpamBots = [
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
    "Bytespider",
    "Baiduspider",
    "Sogou",
    "YandexBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...allowedAISearchBots.map((bot) => ({
        userAgent: bot,
        allow: "/",
      })),
      ...blockedSpamBots.map((bot) => ({
        userAgent: bot,
        disallow: ["/"],
      })),
    ],
    sitemap: "https://quranpk.vercel.app/sitemap.xml",
  };
}
