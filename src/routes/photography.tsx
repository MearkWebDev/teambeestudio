import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Wedding Photography Coimbatore — Candid & Cinematic | Team Bee" },
      { name: "description", content: "Wedding, pre-wedding, engagement, candid and maternity photography in Coimbatore. Cinematic frames, premium editing, 45-day delivery by Team Bee Creative Studios." },
      { property: "og:title", content: "Photography — Team Bee Creative Studios" },
      { property: "og:description", content: "Every picture is a frame from your story." },
      { property: "og:image", content: IMG.weddingGarland },
      { property: "og:url", content: "/photography" },
    ],
    links: [{ rel: "canonical", href: "/photography" }],
  }),
  component: PhotographyPage,
});

const sections = [
  { tag: "Wedding Photography", title: "Wedding Celebrations", img: IMG.weddingGarland, copy: "A wedding is two families becoming one. We capture the rituals, the colour and the energy of your day — from early-morning preparations to the final farewell — working quietly so you can be fully present." },
  { tag: "Pre-Wedding Photography", title: "Pre-Wedding Stories", img: IMG.coupleBridge, copy: "Before the wedding day arrives, there is a beautiful chapter waiting to be told — your story as a couple. Designed around your personalities and the places that mean something to you." },
  { tag: "Engagement", title: "Engagement Moments", img: IMG.coupleNature, copy: "The first chapter of your love story. Warm, natural images full of promise — the excitement, the nervousness and the happiness of where it all begins." },
  { tag: "Candid Photography", title: "Candid Frames", img: IMG.bridePortrait, copy: "The shared laughter, a parent's tears, a quiet glance between the couple. Some of the most cherished memories happen when no one is posing." },
];

function PhotographyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Photography" title="Every frame, a chapter of your story" subtitle="Wedding, pre-wedding, engagement, candid and maternity photography in Coimbatore and across Tamil Nadu." image={IMG.weddingGarland} />

      <div className="py-24">
        {sections.map((s, i) => (
          <section key={s.title} className="px-6 py-16 border-b border-border last:border-0">
            <div className={`mx-auto max-w-[1400px] grid md:grid-cols-2 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <figure className="relative aspect-[4/5] overflow-hidden group">
                <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </figure>
              <div className="md:px-8">
                <div className="text-[11px] tracking-luxe uppercase text-gold mb-4">{s.tag}</div>
                <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">{s.title}</h2>
                <div className="hairline w-16 my-7" />
                <p className="text-ivory/75 text-lg font-light leading-relaxed">{s.copy}</p>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-luxe hover:gap-3 transition-all">
                  Enquire about {s.tag} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-3 text-center">Featured Gallery</div>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">A glimpse into the archive</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[IMG.weddingGarland, IMG.bridePortrait, IMG.coupleNature, IMG.coupleBridge, IMG.streetArt, IMG.weddingGarland, IMG.coupleNature, IMG.bridePortrait].map((src, i) => (
              <figure key={i} className="relative aspect-[3/4] overflow-hidden group">
                <img src={src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
