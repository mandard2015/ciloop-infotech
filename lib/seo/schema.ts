import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/types/content";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.companyName,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer support",
      areaServed: "Global",
      availableLanguage: ["English"],
    },
  ],
};

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
