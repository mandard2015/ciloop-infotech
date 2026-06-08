import Link from "next/link";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Services | Ciloop Infotech",
  description: "Enterprise-grade services for digital transformation, process automation, managed operations, and cloud-native systems.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <section className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Services that improve operations and reduce costs.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            We deliver services across outsourcing, managed IT, cloud, software engineering, automation, and analytics — all focused on measurable operational outcomes.
          </p>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {siteConfig.serviceDetails.map((service) => (
            <article key={service.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">{service.title}</h2>
                  <p className="mt-3 text-slate-600">{service.description}</p>
                </div>
                <Link href={`/services/${service.id}`} className="text-sm font-semibold text-sky-600 hover:text-sky-700">
                  View details →
                </Link>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
