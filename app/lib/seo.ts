import type { Metadata } from "next";

export const siteName = "Toulouse Tarn Transfert";
export const siteUrl = "https://transfert-toulouse-tarn.fr";
export const defaultSeoImage = "/Logo ttt 2.png";

type BuildSeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
};

export function buildSeoMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultSeoImage,
  imageAlt = siteName,
}: BuildSeoMetadataOptions): Metadata {
  const canonical = new URL(path, siteUrl).toString();
  const imageUrl = encodeURI(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
