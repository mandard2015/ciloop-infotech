import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="max-w-lg">
          <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Premium technology services for software, AI, cloud, and digital transformation.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {siteConfig.services.slice(0, 4).map((service) => (
                <li key={service.title}>
                  <Link href={service.href} className="hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 bg-slate-950/90 px-6 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
