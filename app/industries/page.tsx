import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Industries | Ciloop Infotech",
  description: "Industry-specific technology solutions for finance, healthcare, retail, education, and more.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <section className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Industries</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Domain expertise across verticals.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            We help organizations in regulated, high-growth, and customer-centric industries build reliable digital products.
          </p>
        </section>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.industries.map((industry) => (
            <article key={industry.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{industry.title}</h2>
              <p className="mt-4 text-slate-600">{industry.description}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
