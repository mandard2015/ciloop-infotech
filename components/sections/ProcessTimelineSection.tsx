"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessTimelineSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Development Process"
        description="A business-first approach with agile planning, design, development, and ongoing support."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {siteConfig.processSteps.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Step {index + 1}</p>
            <p className="mt-3 text-lg font-semibold text-slate-950">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
