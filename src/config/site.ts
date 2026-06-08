import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  companyName: "Ciloop Infotech Pvt Ltd",
  title: "Ciloop Infotech | Operational Excellence Through Technology & Outsourcing",
  description:
    "Driving operational excellence through technology, outsourcing, and digital transformation services for enterprise organizations.",
  defaultTagline: "Driving Operational Excellence Through Technology & Outsourcing",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  logo: "/logo.svg",
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ],
  contact: {
    email: "hello@ciloopinfotech.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Enterprise City",
    hours: "Mon–Fri 9am–6pm",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/ciloop-infotech",
  },
  serviceCategories: ["Technology Services", "Business Solutions", "Transformation Services"],
  environment: {
    analytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
      clarityProjectId: process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_PROJECT_ID,
    },
    integrations: {
      whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
      tawkToPropertyId: process.env.NEXT_PUBLIC_TAWK_TO_PROPERTY_ID,
      newsletterProvider: process.env.NEXT_PUBLIC_NEWSLETTER_PROVIDER,
      emailServiceProvider: process.env.NEXT_PUBLIC_EMAIL_SERVICE_PROVIDER,
    },
  },
};
