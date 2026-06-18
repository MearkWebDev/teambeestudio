import { useSeo } from "@/lib/useSeo";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG } from "@/lib/site";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Priya & Arun", type: "Wedding · Coimbatore", text: "Team Bee captured every moment we missed living through. Watching our film feels like reliving the day in cinema. Worth every rupee." },
  { name: "Meena & Suresh", type: "Pre-Wedding · Valparai", text: "Calm, warm, professional — they made us feel like ourselves. The photos are pure poetry." },
  { name: "Aishwarya & Vignesh", type: "Wedding · Pollachi", text: "Delivered in 40 days. Every album page is a memory we will hand down for generations." },
  { name: "Lakshmi & Surya", type: "Destination · Nilgiris", text: "They travelled with us, blended in, and brought back a film that moved both families to tears." },
  { name: "Divya & Hari", type: "Engagement · R.S. Puram", text: "Genuinely the most relaxed shoot we could imagine. We felt completely at ease in front of the camera." },
  { name: "Sneha & Vignesh", type: "Wedding · Coimbatore", text: "From the first call to the final delivery, Team Bee was thoughtful, organised and brilliant. Highly recommend." },
];

function ReviewsPage() {
  useSeo({ title: "Client Reviews — Team Bee Creative Studios Coimbatore", description: "Hear from couples across Coimbatore and Tamil Nadu about their experience with Team Bee Creative Studios — wedding photographers since 2017.", image: IMG.coupleNature, canonical: "/reviews" });
  return (
    <SiteLayout>
      <PageHero eyebrow="Loved by Couples" title="Kind words, real stories" subtitle="The most meaningful feedback we receive is the chance to be part of another story." image={IMG.coupleNature} />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-gold" />)}
            </div>
            <div className="text-ivory/70 text-sm">5.0 · 200+ verified couples</div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {reviews.map((r) => (
              <article key={r.name} className="bg-card border border-border p-10 relative">
                <Quote className="h-8 w-8 text-gold/40 mb-5" />
                <p className="font-serif text-lg italic text-ivory/85 leading-relaxed mb-7">"{r.text}"</p>
                <div className="flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <div className="font-serif text-ivory text-lg">{r.name}</div>
                    <div className="text-[10px] tracking-luxe uppercase text-gold mt-1">{r.type}</div>
                  </div>
                  <div className="flex text-gold">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-gold" />)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ReviewsPage;
