"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesPreviewSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Our Services"
        description="End-to-end services to design, build, and operate digital products."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {siteConfig.services.map((service) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700">
              Learn more
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link href="/services">
          <Button variant="secondary">Explore all services</Button>
        </Link>
      </div>
    </section>
  );
}
