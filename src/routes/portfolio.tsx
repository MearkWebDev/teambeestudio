import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Wedding Photography & Films | Team Bee Coimbatore" },
      { name: "description", content: "Browse our wedding, pre-wedding, engagement, candid, maternity and destination wedding portfolio from across Tamil Nadu." },
      { property: "og:title", content: "Portfolio — Team Bee Creative Studios" },
      { property: "og:description", content: "Selected work from weddings and stories captured since 2017." },
      { property: "og:image", content: IMG.coupleBridge },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const CATEGORIES = ["All", "Wedding", "Pre-Wedding", "Engagement", "Candid", "Maternity", "Destination", "Films"] as const;

const items = [
  { src: IMG.weddingGarland, cat: "Wedding", title: "The Garland Exchange", h: "tall" },
  { src: IMG.bridePortrait, cat: "Wedding", title: "Crimson Bride", h: "tall" },
  { src: IMG.coupleBridge, cat: "Engagement", title: "Across the Lake", h: "wide" },
  { src: IMG.coupleNature, cat: "Pre-Wedding", title: "Bamboo Whispers", h: "tall" },
  { src: IMG.streetArt, cat: "Candid", title: "Street of Arts", h: "tall" },
  { src: IMG.weddingGarland, cat: "Wedding", title: "Mandapam Light", h: "wide" },
  { src: IMG.coupleNature, cat: "Pre-Wedding", title: "Forest Story", h: "tall" },
  { src: IMG.coupleBridge, cat: "Destination", title: "Valparai Skies", h: "wide" },
  { src: IMG.bridePortrait, cat: "Maternity", title: "Glow", h: "tall" },
  { src: IMG.weddingGarland, cat: "Films", title: "Highlight · Divya × Hari", h: "wide" },
  { src: IMG.coupleNature, cat: "Films", title: "Wedding Film · Aishwarya", h: "tall" },
  { src: IMG.bridePortrait, cat: "Candid", title: "Quiet Glance", h: "tall" },
];

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const filtered = useMemo(() => (filter === "All" ? items : items.filter((i) => i.cat === filter)), [filter]);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <SiteLayout>
      <PageHero eyebrow="Selected Work" title="Portfolio" subtitle="A growing archive of weddings, stories and quiet moments." image={IMG.coupleBridge} />

      <section className="px-6 py-12 border-b border-border sticky top-20 bg-background/85 backdrop-blur z-30">
        <div className="mx-auto max-w-[1500px] flex flex-wrap gap-2 md:gap-3 justify-center">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2.5 text-[11px] uppercase tracking-luxe border transition-all ${
                filter === c ? "border-gold bg-gold text-ink" : "border-border text-ivory/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1500px] columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((it, i) => (
            <figure
              key={i}
              onClick={() => setLightbox(it.src)}
              className="relative break-inside-avoid overflow-hidden group cursor-zoom-in"
            >
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <div className="text-[10px] tracking-luxe uppercase text-gold">{it.cat}</div>
                <div className="font-serif text-lg text-ivory">{it.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl grid place-items-center p-6 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-h-[92vh] max-w-[92vw] object-contain shadow-luxe" />
        </div>
      )}
    </SiteLayout>
  );
}
