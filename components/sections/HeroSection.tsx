import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-14 text-white shadow-2xl shadow-slate-900/10 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 inline-flex rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
            Trusted technology partner
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            {siteConfig.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact">
              <Button variant="primary">Book Free Consultation</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="ghost">View Our Work</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_35%)]" />
            <div className="relative rounded-[1.5rem] bg-slate-950 p-6 text-slate-100">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Live analytics</p>
                  <p className="text-2xl font-semibold">42.7k</p>
                </div>
                <div className="rounded-2xl bg-sky-500/10 px-3 py-2 text-xs text-sky-200">Cloud dashboard</div>
              </div>
              <div className="space-y-4">
                <div className="h-2 rounded-full bg-slate-800" />
                <div className="h-2 w-[70%] rounded-full bg-slate-800/80" />
                <div className="h-2 w-[55%] rounded-full bg-slate-800/80" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
