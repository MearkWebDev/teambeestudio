import { useSeo } from "@/lib/useSeo";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { FILMS } from "@/lib/site";

const CATEGORIES = ["All", "Wedding", "Pre Wedding", "Engagement", "Reception", "Ceremony"];

export default function FilmsPage() {
  const [filter, setFilter] = useState("All");
  const [playing, setPlaying] = useState<number | null>(null);
  const filtered = filter === "All" ? FILMS : FILMS.filter((f) => f.category === filter);

  useSeo({
    title: "Wedding Films & Cinematic Highlights — Team Bee Creative Studios Coimbatore",
    description: "Cinematic wedding films, pre-wedding stories, engagement and reception highlights from Coimbatore. Watch our latest wedding films by Team Bee Creative Studios.",
    image: FILMS[0].poster,
    canonical: "/films",
    jsonLd: FILMS.slice(0, 4).map((f) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: f.title,
      description: `${f.category} film by Team Bee Creative Studios, Coimbatore`,
      thumbnailUrl: f.poster,
      contentUrl: f.src,
      uploadDate: "2024-01-01",
    })),
  });

  const featured = FILMS[0];

  return (
    <SiteLayout>
      {/* FEATURED HERO FILM */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <video src={featured.src} poster={featured.poster} muted loop autoPlay playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-6 reveal">Featured Film · {featured.category}</div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory text-balance leading-[1.05] reveal">
            {featured.title}
          </h1>
          <button onClick={() => setPlaying(0)} className="mt-10 group inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
            <Play className="h-4 w-4 fill-ink" /> Watch The Film
          </button>
        </div>
      </section>

      <PageHero eyebrow="Cinematic Films" title="Where every glance becomes a film" subtitle="Wedding films, pre-wedding stories and cinematic highlights — crafted to relive forever." image={FILMS[1].poster} />

      {/* FILTERS */}
      <section className="py-12 px-6 border-b border-border">
        <div className="mx-auto max-w-[1500px] flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`px-6 py-3 text-[11px] uppercase tracking-luxe border transition-all ${filter === c ? "bg-gold text-ink border-gold" : "border-border text-ivory/75 hover:border-gold hover:text-gold"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-[1500px] grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((f, i) => {
            const realIdx = FILMS.indexOf(f);
            return (
              <motion.button
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
                onClick={() => setPlaying(realIdx)}
                className="group relative block aspect-video overflow-hidden bg-ink text-left"
              >
                <video src={f.src} poster={f.poster} muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()} onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 grid place-items-center pointer-events-none">
                  <div className="h-16 w-16 rounded-full bg-gold/90 grid place-items-center shadow-gold transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 text-ink fill-ink ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
                  <div className="text-[10px] tracking-luxe uppercase text-gold mb-1">{f.category}</div>
                  <h3 className="font-serif text-xl text-ivory">{f.title}</h3>
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
          <div className="w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <video src={FILMS[playing].src} poster={FILMS[playing].poster} controls autoPlay className="w-full h-full object-contain bg-black" />
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
