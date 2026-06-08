import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { SectionHeading } from "@/components/ui/section-heading";

export function FaqSection() {
  return (
    <section className="py-12">
      <SectionHeading
        title="Frequently Asked Questions"
        description="Answers to the most common questions about our process, delivery, and engagement model."
      />
      <div className="mt-8 space-y-4">
        {siteConfig.faqs.map((faq) => (
          <motion.details
            key={faq.question}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="group rounded-[2rem] border border-slate-200 bg-white p-6"
          >
            <summary className="cursor-pointer text-lg font-semibold text-slate-950 transition group-open:text-sky-600">
              {faq.question}
            </summary>
            <p className="mt-4 text-slate-600">{faq.answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
