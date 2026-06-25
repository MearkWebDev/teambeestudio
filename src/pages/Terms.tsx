import { useSeo } from "@/lib/useSeo";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { WEDDING, SITE } from "@/lib/site";

export default function TermsPage() {
  useSeo({
    title: "Terms of Use — Team Bee Creative Studios",
    description: "Terms of use for the Team Bee Creative Studios website and photography services in Coimbatore, Tamil Nadu.",
    image: WEDDING[5],
    canonical: "/terms",
  });

  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms of Use" image={WEDDING[5]} breadcrumb="Terms of Use" />
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl prose prose-invert space-y-8 text-ivory/80 leading-relaxed">
          <p className="text-sm text-ivory/60">Last updated: {new Date().getFullYear()}</p>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the {SITE.name} website, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website or services.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">2. Services</h2>
            <p>{SITE.name} offers wedding photography, cinematic films, pre-wedding shoots, maternity, destination wedding coverage and related creative services. All bookings are subject to availability and a signed agreement between you and the studio.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">3. Intellectual Property</h2>
            <p>All photographs, films, designs and content on this website are the exclusive property of {SITE.name} and are protected under Indian and international copyright laws. Images may not be downloaded, copied, reproduced, edited or used without prior written consent.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">4. Bookings & Payments</h2>
            <p>A non-refundable advance is required to confirm any booking. Balance payments are due as per the signed agreement. Dates are blocked only upon receipt of advance payment.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">5. Delivery</h2>
            <p>We aim to deliver every wedding within 45 days of the final event date. Delivery timelines may vary slightly during peak season or due to factors beyond our control.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">6. Client Responsibilities</h2>
            <p>Clients are responsible for sharing accurate event schedules, providing access to venues, and informing us of any special requests in advance.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">7. Usage of Imagery</h2>
            <p>Unless otherwise agreed in writing, {SITE.name} reserves the right to use captured images and films for portfolio, social media, marketing, exhibitions and editorial purposes.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">8. Limitation of Liability</h2>
            <p>{SITE.name} shall not be liable for any indirect, incidental or consequential damages arising from the use of our services or website.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">9. Governing Law</h2>
            <p>These terms shall be governed by the laws of India and any disputes shall fall under the exclusive jurisdiction of the courts of Coimbatore, Tamil Nadu.</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-ivory mb-3">10. Contact</h2>
            <p>For any questions, write to <a href={`mailto:${SITE.email}`} className="text-gold">{SITE.email}</a> or call {SITE.phone}.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
