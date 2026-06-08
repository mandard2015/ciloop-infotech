"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/ui/section-heading";

export function CaseStudiesSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Featured Case Studies"
        description="Proof of capability through real business outcomes and measurable results."
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {siteConfig.caseStudies.map((caseStudy) => (
          <motion.article
            key={caseStudy.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-950">{caseStudy.title}</h3>
            <p className="mt-4 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">Challenge:</span> {caseStudy.challenge}
            </p>
            <p className="mt-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">Solution:</span> {caseStudy.solution}
            </p>
            <p className="mt-3 text-sm text-slate-500">
              <span className="font-semibold text-slate-900">Results:</span> {caseStudy.results}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
