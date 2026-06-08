import { ContactForm } from "@/components/contact/ContactForm";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/header";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact | Ciloop Infotech",
  description: "Get in touch with Ciloop Infotech to start a discovery call, request a proposal, or learn about outsourcing options.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-5xl px-6 py-14 md:px-8">
        <section className="rounded-[2rem] bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">Start with a discovery call</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Tell us about your operational challenges and goals — we’ll assess opportunities for automation, cost reduction, and digital transformation.
          </p>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <ContactForm />
          <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact details</p>
              <p className="mt-4 text-lg font-semibold text-slate-950">{siteConfig.contact.email}</p>
              <p className="mt-2 text-slate-600">{siteConfig.contact.phone}</p>
            </div>
            <div className="mt-8 space-y-4 text-slate-600">
              <div>
                <h3 className="text-sm font-semibold text-slate-950">Address</h3>
                <p className="mt-2">{siteConfig.contact.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-950">Business hours</h3>
                <p className="mt-2">{siteConfig.contact.hours}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-950">Quick contact</h3>
                <p className="mt-2">Prefer messaging? Reach us on WhatsApp at {siteConfig.environment.integrations.whatsappNumber ?? "(via website)"} or use the form.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
