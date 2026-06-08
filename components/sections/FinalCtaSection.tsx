import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="rounded-[2rem] bg-sky-600 px-6 py-16 text-white shadow-2xl shadow-slate-950/10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100/80">Ready to launch</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="mt-4 max-w-xl text-sky-100/90">
            Schedule a consultation and let’s define a digital product that drives growth, efficiency, and trust.
          </p>
        </div>
        <Link href="/contact">
          <Button variant="secondary">Schedule Consultation</Button>
        </Link>
      </div>
    </section>
  );
}
