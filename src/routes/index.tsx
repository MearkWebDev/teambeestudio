import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Camera, Film, Heart, Award, Clock, Users, Sparkles, Quote, Play } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { IMG, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team Bee Creative Studios — Wedding Photography & Cinematic Films, Coimbatore" },
      { name: "description", content: "Premium wedding photography and cinematic films in Coimbatore since 2017. Candid storytelling, pre-wedding shoots, destination weddings — 45-day delivery." },
      { property: "og:title", content: "Team Bee Creative Studios — Coimbatore" },
      { property: "og:description", content: "Cinematic wedding films & candid photography. Stories told the way they deserve." },
      { property: "og:image", content: IMG.weddingGarland },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const slides = [
  {
    image: IMG.weddingGarland,
    eyebrow: "Wedding Photography",
    title: "Capturing Moments,\nCreating Memories",
    subtitle: "Award-worthy wedding photography & cinematic films in Coimbatore.",
    cta1: { label: "Book Your Wedding", to: "/contact" as const },
    cta2: { label: "View Portfolio", to: "/portfolio" as const },
  },
  {
    image: IMG.coupleBridge,
    eyebrow: "Pre-Wedding Stories",
    title: "Your Love Story\nDeserves A Beautiful Frame",
    subtitle: "Romantic, story-driven shoots designed around you as a couple.",
    cta1: { label: "Explore Photography", to: "/photography" as const },
    cta2: { label: "Watch Films", to: "/films" as const },
  },
  {
    image: IMG.coupleNature,
    eyebrow: "Cinematic Films",
    title: "Real Emotions.\nTimeless Memories.",
    subtitle: "Where every glance becomes a film you can press play on, forever.",
    cta1: { label: "Watch Stories", to: "/films" as const },
    cta2: { label: "Our Approach", to: "/about" as const },
  },
];

function HomePage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1500"
            style={{ opacity: i === active ? 1 : 0, transitionDuration: "1500ms" }}
            aria-hidden={i !== active}
          >
            <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover kenburns" />
            <div className="absolute inset-0 bg-overlay" />
            <div className="absolute inset-0 bg-vignette" />
          </div>
        ))}

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-16">
          <div key={active} className="reveal">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">
              {slides[active].eyebrow}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory text-balance leading-[1.05] whitespace-pre-line">
              {slides[active].title}
            </h1>
            <p className="mt-7 text-base md:text-lg text-ivory/85 max-w-2xl mx-auto font-light">
              {slides[active].subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                to={slides[active].cta1.to}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all"
              >
                {slides[active].cta1.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={slides[active].cta2.to}
                className="inline-flex items-center px-8 py-4 border border-ivory/40 text-ivory text-[11px] uppercase tracking-luxe hover:border-gold hover:text-gold transition-all"
              >
                {slides[active].cta2.label}
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-[2px] transition-all ${i === active ? "w-12 bg-gold" : "w-6 bg-ivory/30"}`}
                />
              ))}
            </div>
            <div className="text-[10px] tracking-luxe uppercase text-ivory/60">Scroll</div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">Est. {SITE.established} · Coimbatore</div>
          <p className="font-script text-4xl md:text-5xl text-gold mb-8">{SITE.tagline}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory text-balance leading-tight">
            A wedding is not just a celebration —<br />
            <em className="text-gold">it is a once-in-a-lifetime story.</em>
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-lg text-ivory/75 leading-relaxed max-w-3xl mx-auto font-light">
            Welcome to Team Bee Creative Studios. Since 2017, we have been turning everyday
            emotions into timeless memories — every smile, every glance, every tear of joy.
            From intimate engagements to grand wedding celebrations, our team blends creativity
            with genuine care to deliver photographs and films you will treasure for a lifetime.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { n: "9+", l: "Years" },
              { n: "500+", l: "Couples" },
              { n: "45", l: "Day Delivery" },
              { n: "100%", l: "Stories Told" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-4xl text-gold">{s.n}</div>
                <div className="text-[10px] tracking-luxe uppercase text-ivory/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-20">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">The Studio</div>
            <h2 className="font-serif text-4xl md:text-6xl">Why couples choose Team Bee</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { icon: Award, t: "Established 2017", d: "Nearly a decade of weddings, films and trusted creative direction." },
              { icon: Heart, t: "500+ Happy Couples", d: "A growing family of celebrations across Tamil Nadu and beyond." },
              { icon: Film, t: "Cinematic Storytelling", d: "Films crafted with mood, motion and emotion — not just edits." },
              { icon: Sparkles, t: "Premium Editing", d: "Hand-graded colour, careful retouching, magazine-grade frames." },
              { icon: Camera, t: "Candid First", d: "We blend in — so you can be fully present in your celebration." },
              { icon: Clock, t: "45-Day Delivery", d: "Memories deserve to be relived without waiting. We deliver on time." },
              { icon: Users, t: "Professional Team", d: "Experienced photographers, cinematographers, editors and designers." },
              { icon: ArrowRight, t: "Destination Ready", d: "From Pollachi to Nilgiris and across India — we travel with you." },
            ].map((f) => (
              <div key={f.t} className="bg-background p-10 group hover:bg-card transition-colors">
                <f.icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-serif text-2xl mb-3 text-ivory">{f.t}</h3>
                <p className="text-sm text-ivory/65 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Featured Work</div>
              <h2 className="font-serif text-4xl md:text-6xl max-w-2xl">Stories captured in light & emotion</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-luxe hover:gap-3 transition-all">
              View Full Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <GalleryTile className="col-span-12 md:col-span-8 row-span-2 aspect-[16/11]" src={IMG.weddingGarland} category="Wedding" title="The Garland Exchange" />
            <GalleryTile className="col-span-6 md:col-span-4 aspect-[4/5]" src={IMG.bridePortrait} category="Bridal" title="Crimson Portrait" />
            <GalleryTile className="col-span-6 md:col-span-4 aspect-[4/5]" src={IMG.coupleNature} category="Pre-Wedding" title="Among the Bamboo" />
            <GalleryTile className="col-span-12 md:col-span-8 aspect-[16/9]" src={IMG.coupleBridge} category="Engagement" title="Across the Lake" />
            <GalleryTile className="col-span-12 md:col-span-6 aspect-[4/3]" src={IMG.streetArt} category="Cultural" title="Street of Arts" />
            <GalleryTile className="col-span-12 md:col-span-6 aspect-[4/3]" src={IMG.weddingGarland} category="Candid" title="Quiet Moments" />
          </div>
        </div>
      </section>

      {/* FILMS */}
      <section className="relative py-32 px-6 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Cinematic Films</div>
            <h2 className="font-serif text-4xl md:text-6xl">A photograph captures a moment.<br /><em className="text-gold">A film brings it back to life.</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: IMG.coupleNature, title: "Aishwarya × Karthik", loc: "Coimbatore", dur: "4:32" },
              { img: IMG.weddingGarland, title: "Divya × Hari", loc: "Pollachi", dur: "3:58" },
              { img: IMG.coupleBridge, title: "Sneha × Vignesh", loc: "Valparai", dur: "5:14" },
            ].map((f) => (
              <a key={f.title} href="#" className="group relative block overflow-hidden aspect-[3/4]">
                <img src={f.img} alt={f.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-gold/90 backdrop-blur grid place-items-center group-hover:scale-110 transition-transform">
                    <Play className="h-7 w-7 text-ink fill-ink ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="text-[10px] tracking-luxe uppercase text-gold mb-2">{f.loc} · {f.dur}</div>
                  <div className="font-serif text-2xl text-ivory">{f.title}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/films" className="inline-flex items-center px-8 py-4 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all">
              Watch All Films
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Loved by Couples</div>
            <h2 className="font-serif text-4xl md:text-6xl">Kind words, real stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Priya & Arun", type: "Wedding · Coimbatore", text: "Team Bee captured every moment we missed living through. Watching our film feels like reliving the day in cinema." },
              { name: "Meena & Suresh", type: "Pre-Wedding · Valparai", text: "Calm, warm, professional — they made us feel like ourselves. The photos are pure poetry." },
              { name: "Aishwarya & Vignesh", type: "Wedding · Pollachi", text: "Delivered in 40 days. Every album page is a memory we will hand down. Absolutely worth every rupee." },
            ].map((r) => (
              <div key={r.name} className="relative bg-card border border-border p-10">
                <Quote className="h-8 w-8 text-gold/40 mb-5" />
                <p className="font-serif text-lg text-ivory/85 leading-relaxed mb-7 italic">"{r.text}"</p>
                <div className="flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <div className="font-serif text-ivory">{r.name}</div>
                    <div className="text-[10px] tracking-luxe uppercase text-gold mt-1">{r.type}</div>
                  </div>
                  <div className="text-gold text-sm">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <img src={IMG.bridePortrait} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">Begin Your Story</div>
          <h2 className="font-serif text-5xl md:text-7xl text-ivory text-balance leading-tight">
            Let's create memories <em className="text-gold">together.</em>
          </h2>
          <p className="font-script text-3xl text-gold mt-6">{SITE.tagline}</p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center px-10 py-5 border border-ivory/40 text-ivory text-[11px] uppercase tracking-luxe hover:border-gold hover:text-gold transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function GalleryTile({ src, category, title, className = "" }: { src: string; category: string; title: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden bg-card ${className}`}>
      <img src={src} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
      <figcaption className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
        <div className="text-[10px] tracking-luxe uppercase text-gold mb-1">{category}</div>
        <div className="font-serif text-xl text-ivory">{title}</div>
      </figcaption>
    </figure>
  );
}
