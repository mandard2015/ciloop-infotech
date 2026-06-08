import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/lib/siteConfig";
import { createPageMetadata } from "@/lib/seo/metadata";

interface ServicePageProps {
  params: { service: string };
}

export function generateMetadata({ params }: ServicePageProps) {
  const service = siteConfig.serviceDetails.find((item) => item.id === params.service);
  if (!service) return { title: "Service" };

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.id}`,
  });
}

export const generateStaticParams = () => {
  return siteConfig.serviceDetails.map((service) => ({ service: service.id }));
};

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = siteConfig.serviceDetails.find((item) => item.id === params.service);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-14 md:px-8">
        <section className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Service detail</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">{service.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">{service.description}</p>
          <div className="mt-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            {service.highlights.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="mt-8 inline-flex text-sm font-semibold text-sky-600 hover:text-sky-700">
            Schedule a consultation →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
