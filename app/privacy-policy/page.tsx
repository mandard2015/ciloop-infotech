import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "Learn how Ciloop Infotech collects, uses, and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-6 py-14 md:px-8">
        <article className="prose prose-sm max-w-none rounded-[2rem] bg-white p-8 shadow-sm sm:p-10 md:prose-base">
          <h1 className="text-4xl font-semibold text-slate-950">Privacy Policy</h1>
          <p className="text-slate-600">
            <strong>Effective Date:</strong> January 2026
          </p>

          <h2>1. Introduction</h2>
          <p>
            Ciloop Infotech Pvt Ltd ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Information you provide:</strong> Name, email address, phone number, company details, and messages submitted through contact forms or inquiries.
            </li>
            <li>
              <strong>Automatically collected data:</strong> IP address, browser type, pages visited, time spent on pages, and referral sources through analytics tools (Google Analytics, Microsoft Clarity).
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze site usage.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect for:</p>
          <ul>
            <li>Responding to your inquiries and providing requested services</li>
            <li>Sending newsletters and marketing communications (with consent)</li>
            <li>Improving our website and services</li>
            <li>Analyzing website usage and trends</li>
            <li>Complying with legal obligations</li>
            <li>Detecting and preventing fraud or security issues</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in website operations, email delivery, and analytics</li>
            <li>Legal authorities if required by law or to protect our rights</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide our services, respond to your inquiries, and comply with legal obligations. Unused contact information may be retained for up to 2 years unless you request deletion.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption, firewalls, and access controls to protect your information. However, no transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Your Rights and Choices</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li>Access to your personal information</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <Link href="mailto:privacy@ciloopinfotech.com" className="text-sky-600 hover:text-sky-700">
              privacy@ciloopinfotech.com
            </Link>
            .
          </p>

          <h2>8. Cookies and Tracking</h2>
          <p>
            Our website uses cookies for analytics and functionality. Most browsers allow you to control cookies through settings. Disabling cookies may affect website functionality.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before providing any information.
          </p>

          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 13 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete it immediately.
          </p>

          <h2>11. International Data Transfers</h2>
          <p>
            Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws different from your home country.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the "Effective Date" above.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:hello@ciloopinfotech.com" className="text-sky-600 hover:text-sky-700">
                hello@ciloopinfotech.com
              </Link>
            </li>
            <li>
              <strong>Address:</strong> 123 Innovation Drive, Enterprise City
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <Link href="tel:+15551234567" className="text-sky-600 hover:text-sky-700">
                +1 (555) 123-4567
              </Link>
            </li>
          </ul>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
