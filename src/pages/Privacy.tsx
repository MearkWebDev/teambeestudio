import { useSeo } from "@/lib/useSeo";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { WEDDING, SITE } from "@/lib/site";

export default function PrivacyPage() {
  useSeo({
    title: "Privacy Policy — Team Bee Creative Studios",
    description: "Privacy policy for Team Bee Creative Studios — how we collect, use and protect your personal information.",
    image: WEDDING[6],
    canonical: "/privacy",
  });

  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" image={WEDDING[6]} />
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-ivory/80 leading-relaxed">
          <p className="text-sm text-ivory/60">Last updated: {new Date().getFullYear()}</p>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">1. Our Commitment</h2>
            <p>{SITE.name} respects your privacy. This policy outlines how we collect, use and protect the personal information you share when you visit our website or engage our services.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">2. Information We Collect</h2>
            <p>We may collect your name, phone number, email address, event date, venue, and any details you share via our enquiry form, WhatsApp, email or phone calls.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">3. How We Use Your Information</h2>
            <p>Your information is used solely to respond to enquiries, prepare quotations, coordinate event coverage, deliver final products and communicate updates related to your booking.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">4. Sharing of Information</h2>
            <p>We do not sell, trade or rent your personal information to third parties. Information may be shared only with trusted team members and partners directly involved in delivering your services.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">5. Photography & Imagery</h2>
            <p>Photographs and videos captured during your event remain the intellectual property of {SITE.name}. We may use selected images for portfolio and marketing purposes unless you explicitly request otherwise in writing.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">6. Cookies & Analytics</h2>
            <p>This website may use cookies and basic analytics tools to improve user experience and understand how visitors interact with the site. You can disable cookies in your browser settings.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">7. Data Security</h2>
            <p>We take reasonable measures to protect your personal data from unauthorized access, disclosure or misuse. However, no method of transmission over the internet is 100% secure.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">8. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href={`mailto:${SITE.email}`} className="text-gold">{SITE.email}</a>.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">9. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The latest version will always be available on this page.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">10. Contact</h2>
            <p>For privacy-related queries, write to <a href={`mailto:${SITE.email}`} className="text-gold">{SITE.email}</a> or call {SITE.phone}.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
