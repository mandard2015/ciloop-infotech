"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechnologiesSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Core Technologies"
        description="Modern frontend, backend, cloud, and AI tools used to build scalable digital products."
      />
      <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex min-w-[200%] gap-4 animate-marquee">
          {siteConfig.technologies.concat(siteConfig.technologies).map((technology, index) => (
            <motion.div
              key={`${technology}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
            >
              {technology}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
