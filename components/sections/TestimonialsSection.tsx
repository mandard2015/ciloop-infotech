"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/ui/section-heading";

export function TestimonialsSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Client Testimonials"
        description="Trusted by businesses that need software and AI partners who deliver results."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {siteConfig.testimonials.map((testimonial) => (
          <motion.blockquote
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
            <footer className="mt-6 text-sm text-slate-500">
              <p className="font-semibold text-slate-950">{testimonial.author}</p>
              <p>{testimonial.role}</p>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
