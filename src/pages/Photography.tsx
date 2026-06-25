import { useSeo } from "@/lib/useSeo";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { PHOTO_CATEGORIES, WEDDING } from "@/lib/site";

export default function PhotographyPage() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("cat") || "wedding";
  const [active, setActive] = useState(initial);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const c = params.get("cat") || "wedding";
    setActive(c);
  }, [params]);

  const cat = useMemo(() => PHOTO_CATEGORIES.find((c) => c.key === active) || PHOTO_CATEGORIES[0], [active]);
  const images = cat.images;

  useSeo({
    title: `${cat.label} Photography Coimbatore — Team Bee Creative Studios`,
    description: `${cat.label} photography in Coimbatore and across Tamil Nadu — candid storytelling, cinematic frames and timeless memories by Team Bee Creative Studios.`,
    image: images[0],
    canonical: `/photography?cat=${cat.key}`,
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, images.length]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Photography"
        title="Galleries & Stories"
        subtitle="Wedding, Pre Wedding, Destination and Maternity — every frame, a chapter of your story."
        image={WEDDING[2]}
        breadcrumb="Photography"
      />

      {/* FILTERS */}
      <section className="py-12 px-6 border-b border-border sticky top-20 z-30 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto max-w-[1500px] flex flex-wrap gap-3 justify-center">
          {PHOTO_CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setParams({ cat: c.key })}
              className={`px-6 py-3 text-[11px] uppercase tracking-luxe border transition-all ${
                active === c.key ? "bg-gold text-ink border-gold" : "border-border text-ivory/75 hover:border-gold hover:text-gold"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* CATEGORY HEADER */}
      <section className="py-16 px-6 text-center">
        <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">{cat.label}</div>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">{cat.label} Photography</h2>
        <p className="text-ivory/70 max-w-2xl mx-auto">{cat.blurb}</p>
      </section>

      {/* MASONRY GALLERY */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {images.map((src, i) => (
              <motion.button
                key={src}
                onClick={() => setLightbox(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                className="block w-full mb-4 break-inside-avoid overflow-hidden group relative"
              >
                <img src={src} alt={`${cat.label} ${i + 1}`} loading="lazy" className="w-full h-auto transition-transform duration-[1500ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border text-center bg-card/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Love what you see?</h2>
          <p className="text-ivory/75 mb-8">Tell us about your celebration and we'll craft something timeless together.</p>
          <Link to={`/contact?event=${encodeURIComponent(cat.label)}`} className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
            Book {cat.label} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-ink/97 backdrop-blur-xl grid place-items-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-5 right-5 h-12 w-12 grid place-items-center text-ivory hover:text-gold" aria-label="Close" onClick={() => setLightbox(null)}>
            <X className="h-6 w-6" />
          </button>
          <button className="absolute left-4 md:left-10 h-12 w-12 grid place-items-center text-ivory hover:text-gold" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length)); }}>
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button className="absolute right-4 md:right-10 h-12 w-12 grid place-items-center text-ivory hover:text-gold" aria-label="Next" onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i === null ? null : (i + 1) % images.length)); }}>
            <ChevronRight className="h-7 w-7" />
          </button>
          <img src={images[lightbox]} alt="" className="max-h-[88vh] max-w-[92vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <div className="absolute bottom-5 left-0 right-0 text-center text-[11px] tracking-luxe uppercase text-ivory/60">
            {lightbox + 1} / {images.length} · {cat.label}
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
