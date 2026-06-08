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

export const metadata = {
  title: "Home | Ciloop Infotech",
  description:
    "Custom software development, AI solutions, cloud infrastructure, and digital transformation services for modern businesses.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
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
