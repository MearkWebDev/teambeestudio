import { useSeo } from "@/lib/useSeo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Film as FilmIcon } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { FILMS, ytThumb, ytThumbFallback, ytEmbed } from "@/lib/site";

const CATEGORIES = ["All", "Wedding", "Pre Wedding", "Engagement", "Reception", "Ceremony", "Destination"];

export default function FilmsPage() {
  const [filter, setFilter] = useState("All");
  const [playing, setPlaying] = useState<number | null>(null);
  const filtered = filter === "All" ? FILMS : FILMS.filter((f) => f.category === filter);
  const featured = FILMS[0];

  useSeo({
    title: "Wedding Films & Cinematic Highlights — Team Bee Creative Studios Coimbatore",
    description: "Cinematic wedding films, pre-wedding stories, engagement and reception highlights from Coimbatore, Tiruppur, Erode, Salem & across Tamil Nadu by Team Bee Creative Studios.",
    image: ytThumb(featured.id),
    canonical: "/films",
    jsonLd: FILMS.slice(0, 6).map((f) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: `${f.title} — ${f.category} | Team Bee Creative Studios Coimbatore`,
      description: `${f.category} film by Team Bee Creative Studios, Coimbatore — cinematic wedding photography & films.`,
      thumbnailUrl: ytThumb(f.id),
      contentUrl: `https://www.youtube.com/watch?v=${f.id}`,
      embedUrl: `https://www.youtube.com/embed/${f.id}`,
      uploadDate: "2024-01-01",
    })),
  });

  useEffect(() => {
    if (playing === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [playing]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Cinematic Films"
        title="Where Every Glance Becomes A Film"
        subtitle="A premium gallery of wedding films, pre-wedding stories and cinematic highlights — crafted in Coimbatore, loved across Tamil Nadu."
        image={ytThumb(featured.id)}
        breadcrumb="Films"
      />

      {/* FEATURED */}
      <section className="py-24 px-6 border-b border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3 inline-flex items-center gap-2">
              <FilmIcon className="h-3 w-3" /> Featured Film
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-ivory">{featured.title}</h2>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            onClick={() => setPlaying(0)}
            className="group relative block w-full aspect-video overflow-hidden bg-ink shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]"
          >
            <img
              src={ytThumb(featured.id)}
              onError={(e) => ((e.currentTarget as HTMLImageElement).src = ytThumbFallback(featured.id))}
              alt={`${featured.title} — Wedding Film by Team Bee Creative Studios, Coimbatore`}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-24 w-24 rounded-full bg-gold/95 grid place-items-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                <Play className="h-9 w-9 text-ink fill-ink ml-1.5" />
              </div>
            </div>
          </motion.button>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 px-6 border-b border-border sticky top-20 z-30 bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto max-w-[1500px] flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-3 text-[11px] uppercase tracking-luxe border transition-all ${
                filter === c ? "bg-gold text-ink border-gold" : "border-border text-ivory/75 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1500px] grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((f, i) => {
            const realIdx = FILMS.indexOf(f);
            return (
              <motion.button
                key={f.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col text-left cursor-pointer"
                onClick={() => setPlaying(realIdx)}
                aria-label={`Play ${f.title}`}
              >
                <div className="relative w-full aspect-video overflow-hidden bg-ink shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:-translate-y-1">
                  <img
                    src={ytThumb(f.id)}
                    onError={(e) => ((e.currentTarget as HTMLImageElement).src = ytThumbFallback(f.id))}
                    alt={`${f.title} — ${f.category} Wedding Film, Coimbatore`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-16 w-16 rounded-full bg-gold/95 grid place-items-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                      <Play className="h-6 w-6 text-ink fill-ink ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <div className="text-[10px] tracking-luxe uppercase text-gold mb-2">{f.category}</div>
                  <h3 className="font-serif text-xl text-ivory group-hover:text-gold transition-colors">{f.title}</h3>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* MODAL */}
      {playing !== null && (
        <div className="fixed inset-0 z-[100] bg-ink/97 backdrop-blur-xl grid place-items-center p-4" onClick={() => setPlaying(null)}>
          <button className="absolute top-5 right-5 h-12 w-12 grid place-items-center text-ivory hover:text-gold" aria-label="Close" onClick={() => setPlaying(null)}>
            <X className="h-6 w-6" />
          </button>
          <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={ytEmbed(FILMS[playing].id)}
                title={FILMS[playing].title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="text-center mt-4">
              <div className="text-[11px] tracking-luxe uppercase text-gold">{FILMS[playing].category}</div>
              <div className="font-serif text-2xl text-ivory mt-1">{FILMS[playing].title}</div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
