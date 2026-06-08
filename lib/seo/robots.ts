import { siteConfig } from "@/lib/siteConfig";

export function generateRobotsTxt(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "Sitemap: /sitemap.xml",
    `Host: ${siteConfig.url}`,
  ].join("\n");
}
