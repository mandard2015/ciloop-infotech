export type NavLink = {
  title: string;
  href: string;
};

export type Statistic = {
  value: string;
  label: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  href: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
};

export type IndustryCard = {
  title: string;
  description: string;
};

export type CaseStudy = {
  title: string;
  challenge: string;
  solution: string;
  results: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "Ciloop Infotech",
  companyName: "Ciloop Infotech Pvt Ltd",
  title: "Ciloop Infotech | Operational Efficiency. Outsourcing. Digital Transformation.",
  description:
    "Helping businesses streamline operations, reduce costs, and accelerate growth through technology-enabled outsourcing and digital transformation solutions.",
  defaultTagline: "Operational Efficiency. Outsourcing. Digital Transformation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ciloopinfotech.com",
  logo: "/file.svg",
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "Case Studies", href: "/portfolio" },
    { title: "Careers", href: "/careers" },
    { title: "Contact", href: "/contact" },
  ] as NavLink[],
  contact: {
    email: "hello@ciloopinfotech.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Enterprise City",
    hours: "Mon–Fri 9am–6pm",
  },
  hero: {
    title: "Operational Efficiency.\nOutsourcing.\nDigital Transformation.",
    description:
      "Helping businesses streamline operations, reduce costs, and accelerate growth through technology-enabled outsourcing and digital transformation solutions.",
  },
  stats: [
    { value: "20+", label: "Years Combined Experience" },
    { value: "120+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12+", label: "Countries Served" },
  ] as Statistic[],
  services: [
    { title: "Business Process Outsourcing", description: "Operational support, back-office functions, and customer support outsourcing.", href: "/services/bpo" },
    { title: "IT Consulting & Support", description: "Technology strategy, infrastructure advisory, and managed IT operations.", href: "/services/it-consulting" },
    { title: "Digital Transformation", description: "Workflow digitization, modernization, and process redesign for operational efficiency.", href: "/services/digital-transformation" },
    { title: "Software Development", description: "Custom enterprise applications, internal platforms, and web applications.", href: "/services/software" },
    { title: "Cloud Solutions", description: "Cloud migration, infrastructure management, and cloud optimization.", href: "/services/cloud" },
    { title: "Process Automation", description: "Workflow automation, RPA, and efficiency optimization.", href: "/services/automation" },
    { title: "Data Management & Analytics", description: "BI, dashboards, reporting, and governance.", href: "/services/data" },
    { title: "Managed IT Services", description: "Monitoring, maintenance, and infrastructure management.", href: "/services/managed-it" },
  ] as ServiceCard[],
  serviceDetails: [
    {
      id: "bpo",
      title: "Business Process Outsourcing",
      description: "End-to-end operational support that reduces costs and improves process reliability.",
      highlights: ["Back office operations", "Customer support", "Transaction processing", "Process optimization"],
    },
    {
      id: "it-consulting",
      title: "IT Consulting & Support",
      description: "Strategic technology advisory and managed IT services to keep systems secure and reliable.",
      highlights: ["Technology strategy", "Infrastructure advisory", "Help desk services", "Operations engineering"],
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Modernization and workflow digitization that align technology with business outcomes.",
      highlights: ["Process redesign", "Change management", "Platform modernization", "Outcome-driven delivery"],
    },
    {
      id: "software",
      title: "Software Development",
      description: "Custom enterprise software built for scalability, security, and long-term maintainability.",
      highlights: ["Internal platforms", "Enterprise apps", "Web applications", "Integration engineering"],
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Cloud migration, architecture, and operations to reduce costs and increase reliability.",
      highlights: ["Cloud migration", "Infrastructure management", "Cost optimization", "Security"],
    },
    {
      id: "automation",
      title: "Process Automation",
      description: "Automation of repetitive workflows to improve speed and reduce manual effort.",
      highlights: ["RPA", "Workflow automation", "Document processing", "Orchestration"],
    },
    {
      id: "data",
      title: "Data Management & Analytics",
      description: "Business intelligence, reporting, and analytics to drive informed decisions.",
      highlights: ["Dashboards", "Reporting", "Data governance", "Predictive analytics"],
    },
    {
      id: "managed-it",
      title: "Managed IT Services",
      description: "Ongoing monitoring, maintenance, and support to keep your technology running.",
      highlights: ["24/7 monitoring", "Incident management", "Patch management", "SLA-backed support"],
    },
  ] as ServiceDetail[],
  industries: [
    { title: "Healthcare", description: "Secure patient portals, interoperability, and health data workflows." },
    { title: "Finance", description: "Regulatory compliance, payments, and secure transaction systems." },
    { title: "Retail", description: "Commerce platforms, inventory automation, and customer experiences." },
    { title: "Education", description: "Learning platforms, student information systems, and analytics." },
    { title: "Manufacturing", description: "Production monitoring, automation, and quality control." },
    { title: "Logistics", description: "Supply chain tracking, fleet management, and route optimization." },
    { title: "Technology", description: "Platform engineering, product delivery, and integrations." },
    { title: "Professional Services", description: "Operational support, managed services, and business process optimization." },
  ] as IndustryCard[],
  processSteps: ["Assess", "Strategize", "Design", "Implement", "Optimize", "Scale"] as string[],
  caseStudies: [
    {
      title: "Enterprise workflow automation for a fintech leader",
      challenge: "The client needed end-to-end automation across underwriting and approvals.",
      solution: "We delivered a cloud-native platform with automated workflows and analytics dashboards.",
      results: "Improved approval throughput and audit visibility.",
    },
    {
      title: "Document intelligence for legal operations",
      challenge: "Manual contract review and slow extraction of key clauses.",
      solution: "We built an AI-assisted assistant to classify and extract contract data.",
      results: "Faster review cycles and improved risk detection.",
    },
    {
      title: "Mobile platform for retail engagement",
      challenge: "An outdated app that limited personalization and performance.",
      solution: "Launched a modern cross-platform app with performance and personalization.",
      results: "Improved mobile engagement and customer experience.",
    },
  ] as CaseStudy[],
  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Azure",
    "GCP",
    "OpenAI",
    "SQL",
  ],
  testimonials: [
    {
      quote: "Ciloop helped us streamline operations and deliver measurable improvements.",
      author: "Samantha Jones",
      role: "VP of Product",
    },
    {
      quote: "Their approach balanced business priorities with pragmatic engineering.",
      author: "Ravi Patel",
      role: "Director of Operations",
    },
  ] as Testimonial[],
  faqs: [
    {
      question: "How long does a typical engagement last?",
      answer: "Engagement length depends on scope; many operational improvement projects run 3–12 months.",
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Yes. We integrate securely with ERPs, CRMs, and cloud platforms.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "We provide ongoing managed services and support packages tailored to each client.",
    },
  ] as FaqItem[],
  serviceCategories: ["Technology Services", "Business Solutions", "Transformation Services"],
  keywords: [
    "Business Process Outsourcing",
    "Digital Transformation Services",
    "Managed IT Services",
    "Process Automation Solutions",
    "IT Consulting Services",
    "Cloud Solutions Provider",
    "Operational Efficiency Consulting",
    "Technology Outsourcing Partner",
  ],
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
