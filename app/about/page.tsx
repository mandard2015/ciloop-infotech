import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";

export const metadata = {
  title: "About | Ciloop Infotech",
  description: "Learn about our mission, leadership, culture, and why clients trust us.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-14 md:px-8">
        <section className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">About us</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Building technology partnerships that scale.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            We help businesses innovate with modern software, AI, cloud, and automation. Our focus is on transparent communication,
            security-first engineering, and delivering measurable business outcomes.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Mission</h2>
            <p className="mt-4 text-slate-600">
              Deliver technology solutions that empower organizations to grow, adapt, and lead in their market.
            </p>
          </article>
          <article className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-950">Vision</h2>
            <p className="mt-4 text-slate-600">
              Be a trusted partner for digital transformation with sustainable, future-ready software.
            </p>
          </article>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Collaboration</h3>
            <p className="mt-3 text-slate-600">We align with business goals and deliver transparent workstreams.</p>
          </article>
          <article className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Innovation</h3>
            <p className="mt-3 text-slate-600">We combine modern design systems, AI, and cloud best practices.</p>
          </article>
          <article className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">Ownership</h3>
            <p className="mt-3 text-slate-600">We take responsibility for technical quality and business outcomes.</p>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
