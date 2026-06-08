import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Portfolio | Ciloop Infotech",
  description: "Browse selected case studies and digital transformation outcomes.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <section className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Portfolio</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Case studies that prove our capability.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Real projects with measurable outcomes across fintech, healthcare, retail, and B2B SaaS.
          </p>
        </section>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {siteConfig.caseStudies.map((caseStudy) => (
            <article key={caseStudy.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-950">{caseStudy.title}</h2>
              <div className="mt-4 space-y-3 text-slate-600">
                <p>
                  <span className="font-semibold text-slate-950">Challenge:</span> {caseStudy.challenge}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Solution:</span> {caseStudy.solution}
                </p>
                <p>
                  <span className="font-semibold text-slate-950">Results:</span> {caseStudy.results}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
