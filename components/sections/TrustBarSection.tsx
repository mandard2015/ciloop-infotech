"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export function TrustBarSection() {
  return (
    <section className="rounded-[2rem] bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-4">
        {siteConfig.stats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-slate-50 p-6 text-center"
          >
            <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
