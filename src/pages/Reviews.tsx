import { useSeo } from "@/lib/useSeo";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { TESTIMONIALS, WEDDING } from "@/lib/site";

const WRITTEN = [
  { name: "Priya & Arun", type: "Wedding · Coimbatore", text: "Team Bee captured every moment we missed living through. Watching our film feels like reliving the day in cinema.", rating: 5 },
  { name: "Meena & Suresh", type: "Pre-Wedding · Valparai", text: "Calm, warm, professional — they made us feel like ourselves. The photos are pure poetry.", rating: 5 },
  { name: "Aishwarya & Vignesh", type: "Wedding · Pollachi", text: "Delivered in 40 days. Every album page is a memory we will hand down. Absolutely worth every rupee.", rating: 5 },
  { name: "Kavya & Rohit", type: "Destination · Kodaikanal", text: "Mr. Shan and team turned our hill-station wedding into a cinematic film. Pure magic.", rating: 5 },
  { name: "Divya & Karthik", type: "Reception · Chennai", text: "Editing, color grading, framing — everything felt premium. Worth recommending to every couple.", rating: 5 },
  { name: "Sandhya & Rahul", type: "Wedding · Tiruppur", text: "Such kind humans behind the cameras. Felt like family by the end of the day.", rating: 5 },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function ReviewsPage() {
  useSeo({
    title: "Reviews & Client Testimonials — Team Bee Creative Studios, Coimbatore",
    description: "Read what our couples say about Team Bee Creative Studios. Verified wedding photography reviews and video testimonials from couples across Tamil Nadu.",
    image: WEDDING[3],
    canonical: "/reviews",
    jsonLd: WRITTEN.slice(0, 3).map((r) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      itemReviewed: { "@type": "LocalBusiness", name: "Team Bee Creative Studios" },
    })),
  });

  return (
    <SiteLayout>
      <PageHero eyebrow="Loved by Couples" title="Real Stories. Real Reviews." subtitle="Honest words from the families who trusted us with their most precious days." image={WEDDING[3]} breadcrumb="Reviews" />

      {/* COUNTERS */}
      <section className="py-20 px-6 border-b border-border bg-card/30">
        <div className="mx-auto max-w-[1300px] grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: 15, s: "+", l: "Years Experience" },
            { n: 800, s: "+", l: "Weddings Covered" },
            { n: 45, s: " Days", l: "Delivery Promise" },
            { n: 100, s: "%", l: "Happy Couples" },
          ].map((c) => (
            <div key={c.l}>
              <div className="font-serif text-5xl md:text-6xl text-gold">
                <Counter to={c.n} suffix={c.s} />
              </div>
              <div className="text-[11px] tracking-luxe uppercase text-ivory/60 mt-3">{c.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Video Testimonials</div>
            <h2 className="font-serif text-4xl md:text-5xl">In their own words</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="relative bg-background/40 backdrop-blur-xl border border-border p-3">
                <div className="relative aspect-video overflow-hidden">
                  <video src={t.src} poster={t.poster} controls preload="metadata" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <Quote className="h-5 w-5 text-gold/60 mb-2" />
                    <div className="font-serif text-xl text-ivory">{t.name}</div>
                    <div className="text-[10px] tracking-luxe uppercase text-gold mt-1">Verified Client</div>
                  </div>
                  <div className="text-gold text-sm">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITTEN REVIEWS */}
      <section className="py-24 px-6 border-t border-border bg-card/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Google-Style Reviews</div>
            <h2 className="font-serif text-4xl md:text-5xl">Kind words from our couples</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WRITTEN.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (i % 3) * 0.08 }} className="bg-card border border-border p-8">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-serif text-base text-ivory/85 leading-relaxed italic mb-6">"{r.text}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-serif text-ivory">{r.name}</div>
                  <div className="text-[10px] tracking-luxe uppercase text-gold mt-1">{r.type}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
