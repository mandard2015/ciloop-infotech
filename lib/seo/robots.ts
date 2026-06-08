import { siteConfig } from "@/config/site";

export function generateRobotsTxt(): string {
  return [
    "User-agent: *",
    "Allow: /",
    "Sitemap: /sitemap.xml",
    `Host: ${siteConfig.url}`,
  ].join("\n");
}
