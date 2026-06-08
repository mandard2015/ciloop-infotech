import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "Learn how Ciloop Infotech uses cookies and similar tracking technologies.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-6 py-14 md:px-8">
        <article className="prose prose-sm max-w-none rounded-[2rem] bg-white p-8 shadow-sm sm:p-10 md:prose-base">
          <h1 className="text-4xl font-semibold text-slate-950">Cookie Policy</h1>
          <p className="text-slate-600">
            <strong>Effective Date:</strong> January 2026
          </p>

          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small data files stored on your device (computer, tablet, or mobile phone) when you visit a website. They contain information about your browsing activity and preferences. Cookies help websites remember your choices and improve your experience.
          </p>

          <h2>2. Types of Cookies We Use</h2>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for our website to function properly. They enable basic functionality such as page navigation and access to secure areas. Essential cookies cannot be disabled without affecting website performance.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use Google Analytics and Microsoft Clarity to understand how visitors use our website. These cookies collect information about page visits, session duration, and user interactions to help us improve our services.
          </p>

          <h3>Marketing Cookies</h3>
          <p>
            These cookies track your online activity to deliver targeted advertisements and marketing content based on your interests. They may be set by third-party advertising networks.
          </p>

          <h3>Functional Cookies</h3>
          <p>
            Functional cookies remember your preferences and settings to enhance your user experience on subsequent visits.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            We may use cookies from third-party providers for analytics, advertising, and social media integration. These providers may collect information about your activity across multiple websites.
          </p>

          <h2>4. Cookie Management</h2>
          <p>
            Most web browsers allow you to control cookies through your browser settings. You can:
          </p>
          <ul>
            <li>Accept or reject cookies</li>
            <li>Delete cookies from your device</li>
            <li>Disable cookies for specific websites</li>
            <li>Set your browser to notify you when a cookie is sent</li>
          </ul>
          <p>
            Note: Disabling essential cookies may limit website functionality. For browser-specific instructions, please visit your browser provider's support page.
          </p>

          <h2>5. Do Not Track (DNT)</h2>
          <p>
            Some browsers include a "Do Not Track" (DNT) feature. Our website does not respond to DNT signals at this time, but you can use browser settings to control cookies independently.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            Cookies are retained based on their type and purpose. Session cookies are deleted when you close your browser. Persistent cookies may remain for several months or years depending on their function.
          </p>

          <h2>7. Our Commitment to Privacy</h2>
          <p>
            We are committed to protecting your privacy and using cookies responsibly. We do not sell cookie data to third parties. All cookie usage complies with our{" "}
            <Link href="/privacy-policy" className="text-sky-600 hover:text-sky-700">
              Privacy Policy
            </Link>
            .
          </p>

          <h2>8. Analytics Tools</h2>

          <h3>Google Analytics</h3>
          <p>
            We use Google Analytics to track website performance and user behavior. Google Analytics collects data such as your IP address, browser type, and pages visited. Google processes this data according to its privacy policy. You can opt out of Google Analytics tracking by installing the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h3>Microsoft Clarity</h3>
          <p>
            We use Microsoft Clarity to understand user interactions through session recordings and heatmaps. Clarity collects data about page visits and user actions. You can manage Clarity settings through your browser or visit Microsoft's privacy page for more information.
          </p>

          <h2>9. Consent Management</h2>
          <p>
            By continuing to use our website, you consent to our use of cookies as described in this policy. If you do not wish to accept cookies, please adjust your browser settings or discontinue use of our website.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy to reflect changes in technology, privacy regulations, or our practices. Updates will be posted on this page with the new effective date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about our cookie practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <Link href="mailto:privacy@ciloopinfotech.com" className="text-sky-600 hover:text-sky-700">
                privacy@ciloopinfotech.com
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
