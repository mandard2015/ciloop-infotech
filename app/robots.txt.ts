import { generateRobotsTxt } from "@/lib/seo/robots";

export function GET() {
  return new Response(generateRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
