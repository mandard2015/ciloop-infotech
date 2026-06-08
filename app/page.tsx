import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBarSection } from "@/components/sections/TrustBarSection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ProcessTimelineSection } from "@/components/sections/ProcessTimelineSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TechnologiesSection } from "@/components/sections/TechnologiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/lib/siteConfig";
import { createPageMetadata } from "@/lib/seo/metadata";
import { organizationSchema, buildFaqSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata({
  title: "Home",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(buildFaqSchema(siteConfig.faqs))}
      </script>
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:px-8">
        <HeroSection />
        <div className="mt-12 space-y-12">
          <TrustBarSection />
          <ServicesPreviewSection />
          <IndustriesSection />
          <ProcessTimelineSection />
          <CaseStudiesSection />
          <TechnologiesSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
