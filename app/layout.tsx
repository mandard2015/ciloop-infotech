import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AnalyticsProviders } from "@/components/AnalyticsProviders";
import { siteConfig } from "@/config/site";
import { defaultMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} min-h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-950">
        <AnalyticsProviders
          googleAnalyticsId={siteConfig.environment.analytics.googleAnalyticsId}
          clarityProjectId={siteConfig.environment.analytics.clarityProjectId}
        />
        {children}
      </body>
    </html>
  );
}
