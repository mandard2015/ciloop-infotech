import { generateSitemapXml } from "@/lib/seo/sitemap";

export function GET() {
  return new Response(generateSitemapXml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
