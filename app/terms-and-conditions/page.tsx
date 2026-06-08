import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "Review the terms and conditions that govern your use of Ciloop Infotech services.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-6 py-14 md:px-8">
        <article className="prose prose-sm max-w-none rounded-[2rem] bg-white p-8 shadow-sm sm:p-10 md:prose-base">
          <h1 className="text-4xl font-semibold text-slate-950">Terms and Conditions</h1>
          <p className="text-slate-600">
            <strong>Effective Date:</strong> January 2026
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website and our services, you agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, please discontinue use of our services immediately.
          </p>

          <h2>2. Use License</h2>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to view, use, and access our website and services for lawful purposes only. You may not:
          </p>
          <ul>
            <li>Reproduce, duplicate, copy, or sell any portion of our content or services</li>
            <li>Engage in any form of data scraping or automated access</li>
            <li>Attempt to reverse-engineer or decode our systems</li>
            <li>Use our services for illegal or fraudulent purposes</li>
            <li>Harass, abuse, or threaten other users or our staff</li>
            <li>Transmit viruses, malware, or any harmful code</li>
          </ul>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            All content on our website, including text, graphics, logos, images, and software, is the property of Ciloop Infotech or licensed to us and is protected by copyright and other intellectual property laws. You may not use any content without our express written consent.
          </p>

          <h2>4. Service Description</h2>
          <p>
            Ciloop Infotech provides technology consulting, business process outsourcing, managed IT services, software development, digital transformation, and related services. Services are described on our website and are subject to specific service agreements.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, CILOOP INFOTECH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST DATA, OR BUSINESS INTERRUPTION, ARISING FROM YOUR USE OR INABILITY TO USE OUR WEBSITE OR SERVICES.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            Our website and services are provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express and implied, including fitness for a particular purpose and non-infringement.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Ciloop Infotech, its officers, and employees from any claims, damages, or expenses arising from your use of our website, violation of these terms, or infringement of any third-party rights.
          </p>

          <h2>8. User Conduct</h2>
          <p>You agree to use our website and services in compliance with all applicable laws and regulations. You are solely responsible for your conduct on our platform.</p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites and services. We are not responsible for their content, accuracy, or privacy practices. Your use of external links is at your own risk.
          </p>

          <h2>10. Modification of Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the updated terms.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may terminate or restrict your access to our website and services at any time, with or without cause, at our sole discretion.
          </p>

          <h2>12. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Ciloop Infotech operates, without regard to its conflict of law principles.
          </p>

          <h2>13. Dispute Resolution</h2>
          <p>
            Any disputes arising from these terms or your use of our services shall be subject to the jurisdiction of the appropriate courts in the jurisdiction where Ciloop Infotech is located.
          </p>

          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>

          <h2>15. Contact Us</h2>
          <p>
            For questions regarding these Terms and Conditions, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:legal@ciloopinfotech.com" className="text-sky-600 hover:text-sky-700">
                legal@ciloopinfotech.com
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
