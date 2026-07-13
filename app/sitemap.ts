import type { MetadataRoute } from "next";

import { transfers } from "./data/transfert";
import { siteUrl } from "./lib/seo";

const staticPaths = [
  "/",
  "/tarifs",
  "/contact",
  "/avis",
  "/a-propos",
  "/nos-services",
  "/nos-transferts",
  "/mentions-legales",
  "/confidentialite",
  "/cgv",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticPaths.map((path) => ({
      url: new URL(path, siteUrl).toString(),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...transfers.map((transfer) => ({
      url: new URL(`/transfert/${transfer.slug}`, siteUrl).toString(),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
