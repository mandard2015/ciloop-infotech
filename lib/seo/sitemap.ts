import { siteConfig } from "@/lib/siteConfig";

export function generateSitemapXml(routes: string[] = ["/", "/about", "/services", "/contact"]): string {
  const urls = routes.map((route) => `  <url>\n    <loc>${siteConfig.url}${route}</loc>\n  </url>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}
