export type SiteNavLink = {
  title: string;
  href: string;
};

export type ContactDetails = {
  email: string;
  phone: string;
  address: string;
  hours: string;
};

export type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
};

export type ServiceCategory = "Technology Services" | "Business Solutions" | "Transformation Services";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  highlights: string[];
  slug: string;
};

export type Industry = {
  id: string;
  title: string;
  icon: string;
  description: string;
  challenges: string[];
  solutions: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: string[];
  technologies: string[];
  slug: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type CareerOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  slug: string;
  isOpen: boolean;
};

export type BlogPostFrontMatter = {
  title: string;
  slug: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  tags: string[];
  ogImage?: string;
};

export type SiteConfig = {
  companyName: string;
  title: string;
  description: string;
  defaultTagline: string;
  url: string;
  logo: string;
  nav: SiteNavLink[];
  contact: ContactDetails;
  social: SocialLinks;
  serviceCategories: ServiceCategory[];
  environment: {
    analytics: {
      googleAnalyticsId?: string;
      clarityProjectId?: string;
    };
    integrations: {
      whatsappNumber?: string;
      tawkToPropertyId?: string;
      newsletterProvider?: string;
      emailServiceProvider?: string;
    };
  };
};
