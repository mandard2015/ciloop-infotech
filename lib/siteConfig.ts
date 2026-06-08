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
  title: "Ciloop Infotech | IT Services & Software Development",
  description:
    "Custom software development, AI solutions, cloud infrastructure, and digital transformation services for modern businesses.",
  url: "https://example.com",
  nav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ] as NavLink[],
  contact: {
    email: "hello@ciloopinfotech.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, City, State",
    hours: "Mon–Fri 9am–6pm",
  },
  hero: {
    title: "Building Scalable Digital Solutions for Modern Businesses",
    description:
      "Custom software, AI solutions, cloud infrastructure, and digital transformation services.",
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "120+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12", label: "Countries Served" },
  ] as Statistic[],
  services: [
    {
      title: "Custom Software Development",
      description: "Enterprise applications, CRM systems, ERP solutions, and SaaS platforms.",
      href: "/services/software",
    },
    {
      title: "AI & Automation",
      description: "AI chatbots, workflow automation, document intelligence, and generative AI.",
      href: "/services/ai",
    },
    {
      title: "Mobile App Development",
      description: "Android, iOS, and cross-platform mobile applications.",
      href: "/services/mobile",
    },
    {
      title: "Cloud Services",
      description: "Cloud migration, architecture design, and infrastructure optimization.",
      href: "/services/cloud",
    },
    {
      title: "Data Analytics",
      description: "Reporting, dashboards, business intelligence, and predictive analytics.",
      href: "/services/data",
    },
    {
      title: "DevOps & Automation",
      description: "CI/CD, containerization, monitoring, and Kubernetes support.",
      href: "/services/devops",
    },
  ] as ServiceCard[],
  serviceDetails: [
    {
      id: "software",
      title: "Custom Software Development",
      description:
        "Bespoke, enterprise-grade applications designed for scalability, security, and long-term growth.",
      highlights: [
        "Enterprise applications",
        "CRM systems",
        "ERP solutions",
        "SaaS platforms",
      ],
    },
    {
      id: "ai",
      title: "AI & Automation",
      description:
        "AI-driven experiences that automate workflows, improve decision-making, and unlock business intelligence.",
      highlights: [
        "AI chatbots",
        "Agentic AI",
        "Workflow automation",
        "Document intelligence",
      ],
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      description:
        "Mobile solutions built for iOS, Android, and cross-platform delivery with premium performance.",
      highlights: [
        "Android apps",
        "iOS apps",
        "Cross-platform builds",
        "App store readiness",
      ],
    },
    {
      id: "cloud",
      title: "Cloud Services",
      description:
        "Cloud strategy and architecture that improve reliability, reduce costs, and accelerate delivery.",
      highlights: [
        "Cloud migration",
        "Architecture design",
        "Infrastructure optimization",
        "Cloud-native operations",
      ],
    },
    {
      id: "data",
      title: "Data Analytics",
      description:
        "Analytics and BI solutions that turn business data into actionable insights and measurable outcomes.",
      highlights: [
        "Dashboards",
        "Reporting",
        "Business intelligence",
        "Predictive analytics",
      ],
    },
    {
      id: "devops",
      title: "DevOps & Automation",
      description:
        "DevOps practices that accelerate releases, improve quality, and make operations repeatable and secure.",
      highlights: [
        "CI/CD",
        "Monitoring",
        "Containerization",
        "Kubernetes",
      ],
    },
  ] as ServiceDetail[],
  industries: [
    { title: "Healthcare", description: "Secure patient portals and health data workflows." },
    { title: "Finance", description: "Regulatory compliance, payments, and trading platforms." },
    { title: "Education", description: "Learning platforms, student portals, and analytics." },
    { title: "Retail", description: "Commerce systems, inventory automation, and personalization." },
    { title: "Logistics", description: "Supply chain tracking, fleet management, and route optimization." },
    { title: "Manufacturing", description: "Production monitoring, automation, and quality control." },
    { title: "Real Estate", description: "Market intelligence, property portals, and client experiences." },
    { title: "Startups", description: "MVPs, rapid prototyping, and scalable engineering teams." },
  ] as IndustryCard[],
  processSteps: [
    "Discovery",
    "Planning",
    "Design",
    "Development",
    "Testing",
    "Deployment",
    "Support",
  ] as string[],
  caseStudies: [
    {
      title: "Enterprise workflow automation for a fintech leader",
      challenge:
        "The client needed end-to-end automation across underwriting, approvals, and reporting.",
      solution:
        "We delivered a secure cloud-native platform with automated workflows, low-latency APIs, and analytics dashboards.",
      results: "Reduced approval time by 65% and improved audit visibility across teams.",
    },
    {
      title: "AI-powered document intelligence for legal operations",
      challenge:
        "The legal team struggled with manual contract review and data extraction.",
      solution:
        "We built an AI assistant that classifies documents, extracts clauses, and highlights risks.",
      results: "Cut review time by 70% and accelerated contract processing.",
    },
    {
      title: "Mobile commerce platform for a retail brand",
      challenge:
        "The existing app was slow and could not support real-time personalization.",
      solution:
        "We launched a cross-platform app with modern architecture, performance optimization, and personalized offers.",
      results: "Increased mobile conversions by 48% and improved engagement metrics.",
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
    "LangChain",
    "SQL",
  ],
  testimonials: [
    {
      quote:
        "Ciloop Infotech helped us launch a reliable digital product in record time with exceptional quality.",
      author: "Samantha Jones",
      role: "VP of Product, Fintech Company",
    },
    {
      quote:
        "Their team understood our business priorities and delivered a secure, scalable platform that our users love.",
      author: "Ravi Patel",
      role: "Director of Operations, Healthcare Provider",
    },
  ] as Testimonial[],
  faqs: [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary by scope; most MVPs are delivered in 3 to 6 months.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes. We build secure integrations with ERPs, CRMs, cloud services, and analytics platforms.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "We offer maintenance, monitoring, and support packages tailored to each client.",
    },
  ] as FaqItem[],
};
