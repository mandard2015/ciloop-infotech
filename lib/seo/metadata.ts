import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import type { MetadataInput } from "@/types/seo";

export const defaultMetadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: siteConfig.keywords as string[] | undefined,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
    images: [{ url: `${siteConfig.url}/social-card.png`, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export function createPageMetadata(input: MetadataInput): Metadata {
  const title = `${input.title} | ${siteConfig.companyName}`;

  return {
    title,
    description: input.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title,
      description: input.description,
      url: `${siteConfig.url}${input.path ?? ""}`,
      type: "website",
      images: [
        {
          url: input.image ?? `${siteConfig.url}/social-card.png`,
          alt: input.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: input.description,
    },
    keywords: input.keywords,
  };
}
