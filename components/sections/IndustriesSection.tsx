"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/ui/section-heading";

export function IndustriesSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Industries We Serve"
        description="Domain expertise across healthcare, finance, education, retail, logistics, and more."
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {siteConfig.industries.map((industry) => (
          <motion.div
            key={industry.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-950">{industry.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
