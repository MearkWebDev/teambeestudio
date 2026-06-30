import { useSeo } from "@/lib/useSeo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Heart, Clock, Users, Plane, Play, Camera, Film, Sparkles, Quote, Star } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { SITE, WEDDING, PRE_WEDDING, DESTINATION, MATERNITY, FILMS, PHOTO_CATEGORIES, ytThumb, ytThumbFallback, ytEmbed } from "@/lib/site";

const AZ = "https://teambee.blob.core.windows.net";

const slides = [
  {
    image: `${AZ}/wedding/ARU08627.jpg`,
    eyebrow: "Wedding Photography · Coimbatore",
    title: "Every Wedding Has A Beautiful Story.\nWe Capture It Forever.",
    subtitle: "Luxury Wedding Photography & Cinematic Films in Coimbatore.",
    cta1: { label: "View Portfolio", to: "/photography" },
    cta2: { label: "Book Your Wedding", to: "/contact?event=Wedding" },
  },
  {
    image: `${AZ}/destination-wedding/ARU00954%20CC.jpg`,
    eyebrow: "Destination Weddings",
    title: "Where Love Meets\nBeautiful Destinations",
    subtitle: "Destination Wedding Photography crafted with timeless elegance and cinematic storytelling.",
    cta1: { label: "Explore Destination Weddings", to: "/photography?cat=destination" },
    cta2: { label: "Get a Quote", to: "/contact?event=Destination" },
  },
  {
    image: `${AZ}/pre-wedding/dsc08531.jpg`,
    eyebrow: "Pre Wedding Stories",
    title: "Before Forever Begins,\nLet's Capture Your Story",
    subtitle: "Creative Pre-Wedding Photography with natural emotions and cinematic frames.",
    cta1: { label: "Explore Pre-Wedding", to: "/photography?cat=pre-wedding" },
    cta2: { label: "Book Your Shoot", to: "/contact?event=Pre+Wedding" },
  },
];


const services = [
  { icon: Camera, t: "Wedding Photography" },
  { icon: Film, t: "Wedding Cinematography" },
  { icon: Heart, t: "Pre Wedding" },
  { icon: Plane, t: "Destination Wedding" },
  { icon: Sparkles, t: "Maternity & Baby Shower" },
  { icon: Award, t: "Reception & Engagement" },
];

const homeFaqs = [
  { q: "Why choose Team Bee Creative Studios?", a: "Established in 2009, Team Bee Creative Studios is one of Coimbatore's most trusted wedding photography and cinematic film studios — known for candid storytelling, premium editing, and a 45-day delivery promise." },
  { q: "Which areas in Tamil Nadu do you cover?", a: "Coimbatore, R.S. Puram, Pollachi, Tiruppur, Erode, Salem, Chennai and destination weddings across India and overseas." },
  { q: "How early should I book?", a: "We recommend booking 4–8 months in advance to secure your dates, especially during peak wedding season." },
  { q: "Do you deliver on time?", a: "Yes — every wedding deliverable reaches you within 45 days, edited and album-ready." },
];

export default function HomePage() {
  useSeo({
    title: "Team Bee Creative Studios — Wedding Photography & Cinematic Films, Coimbatore",
    description: "Premium wedding photography, candid storytelling and cinematic wedding films in Coimbatore, Tiruppur, Erode, Salem, Chennai & across Tamil Nadu. 45-day delivery, since 2009.",
    image: WEDDING[0],
    canonical: "/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: SITE.name,
        image: WEDDING[0],
        telephone: SITE.phone,
        email: SITE.email,
        address: { "@type": "PostalAddress", streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`, addressLocality: "Coimbatore", addressRegion: "Tamil Nadu", postalCode: "641002", addressCountry: "IN" },
        url: "https://teambeestudio.lovable.app/",
        founder: "Mr. Shan",
        foundingDate: "2009",
        priceRange: "₹₹₹",
        sameAs: [SITE.socials.instagram, SITE.socials.facebook, SITE.socials.youtube],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  });

  const [active, setActive] = useState(0);
  const [homeFilm, setHomeFilm] = useState<number | null>(null);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className="absolute inset-0 transition-opacity" style={{ opacity: i === active ? 1 : 0, transitionDuration: "1500ms" }} aria-hidden={i !== active}>
            <img
              src={s.image}
              alt={s.title}
              {...(i === 0
                ? { fetchPriority: "high" as const, loading: "eager" as const, decoding: "sync" as const }
                : { loading: "lazy" as const, decoding: "async" as const })}
              className="absolute inset-0 h-full w-full object-cover kenburns"
            />
            <div className="absolute inset-0 bg-overlay" />
            <div className="absolute inset-0 bg-vignette" />
          </div>
        ))}

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-16">
          <div key={active} className="reveal">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">{slides[active].eyebrow}</div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory text-balance leading-[1.05] whitespace-pre-line">
              {slides[active].title}
            </h1>
            <p className="mt-7 text-base md:text-lg text-ivory/85 max-w-2xl mx-auto font-light">{slides[active].subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to={slides[active].cta1.to} className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
                {slides[active].cta1.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to={slides[active].cta2.to} className="inline-flex items-center px-8 py-4 border border-ivory/40 text-ivory text-[11px] uppercase tracking-luxe hover:border-gold hover:text-gold transition-all">
                {slides[active].cta2.label}
              </Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} className={`h-[2px] transition-all ${i === active ? "w-12 bg-gold" : "w-6 bg-ivory/30"}`} />
              ))}
            </div>
            <div className="text-[10px] tracking-luxe uppercase text-ivory/60">Scroll</div>
          </div>
        </div>
      </section>

      {/* ABOUT BRIEF */}
      <section className="relative py-32 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">Est. {SITE.established} · Coimbatore · Tamil Nadu</div>
          <p className="font-script text-4xl md:text-5xl text-gold mb-8">{SITE.tagline}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-ivory text-balance leading-tight">
            Every story begins with a moment —<br />
            <em className="text-gold">a smile, a feeling, a memory.</em>
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-lg text-ivory/75 leading-relaxed max-w-3xl mx-auto font-light">
            Since 2009, Team Bee Creative Studios has been turning precious moments into timeless stories through the art of visual storytelling — wedding photography, candid films and cinematic memories crafted with elegance and authenticity.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 px-8 py-4 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all">
            Read Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-20">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Why Choose Team Bee</div>
            <h2 className="font-serif text-4xl md:text-6xl">Crafted with experience, delivered on time</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {[
              { icon: Award, t: "15+ Years Experience", d: "Since 2009 — 800+ celebrations across Tamil Nadu and India." },
              { icon: Heart, t: "Story-Driven", d: "Films and frames led by emotion, not just composition." },
              { icon: Clock, t: "45-Day Delivery", d: "Every couple receives their full set in 45 days." },
              { icon: Users, t: "Creative Team", d: "Photographers, cinematographers, editors and album designers in-house." },
              { icon: Plane, t: "Destination Ready", d: "From Nilgiris to anywhere your story takes us." },
            ].map((f, i) => (
              <motion.div key={f.t} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="bg-background p-10 hover:bg-card transition-colors">
                <f.icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-serif text-2xl mb-3 text-ivory">{f.t}</h3>
                <p className="text-sm text-ivory/65 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTOGRAPHY — 4 categories */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Photography</div>
              <h2 className="font-serif text-4xl md:text-6xl max-w-2xl">Every frame, a chapter of your story</h2>
            </div>
            <Link to="/photography" className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-luxe hover:gap-3 transition-all">
              View All Galleries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PHOTO_CATEGORIES.map((c, i) => (
              <motion.div key={c.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}>
                <Link to={`/photography?cat=${c.key}`} className="group relative block overflow-hidden aspect-[4/3]">
                  <img src={c.images[0]} alt={`${c.label} Photography Coimbatore`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-[10px] tracking-luxe uppercase text-gold mb-2">Photography</div>
                    <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-2">{c.label}</h3>
                    <p className="text-sm text-ivory/75 max-w-md mb-4">{c.blurb}</p>
                    <div className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-luxe group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED FILMS — best 2 from YouTube, cinematic */}
      <section className="relative py-36 px-6 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3 inline-flex items-center gap-2">
              <Film className="h-3 w-3" /> Featured Wedding Films
            </div>
            <h2 className="font-serif text-4xl md:text-6xl">A photograph captures a moment.<br /><em className="text-gold">A film brings it back to life.</em></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {FILMS.slice(0, 2).map((f, i) => (
              <motion.button
                key={f.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setHomeFilm(i)}
                className="group flex flex-col text-left"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-ink mb-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7)]">
                  <img
                    src={ytThumb(f.id)}
                    onError={(e) => ((e.currentTarget as HTMLImageElement).src = ytThumbFallback(f.id))}
                    alt={`${f.title} — Cinematic Wedding Film, Coimbatore`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="h-24 w-24 rounded-full bg-gold/95 grid place-items-center shadow-gold transition-transform duration-500 group-hover:scale-110">
                      <Play className="h-9 w-9 text-ink fill-ink ml-1.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-5 left-5 text-[10px] tracking-luxe uppercase text-gold">{f.category}</div>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-3 group-hover:text-gold transition-colors">{f.title}</h3>
                <p className="text-sm text-ivory/65 leading-relaxed mb-5">
                  A cinematic {f.category.toLowerCase()} film by Team Bee Creative Studios — crafted with emotion, music and timeless storytelling in Coimbatore, Tamil Nadu.
                </p>
                <span className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-luxe group-hover:gap-3 transition-all">
                  Play Film <ArrowRight className="h-3 w-3" />
                </span>
              </motion.button>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/films" className="inline-flex items-center gap-3 px-10 py-4 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all">
              View All Wedding Films <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {homeFilm !== null && (
          <div className="fixed inset-0 z-[100] bg-ink/97 backdrop-blur-xl grid place-items-center p-4" onClick={() => setHomeFilm(null)}>
            <button className="absolute top-5 right-5 h-12 w-12 grid place-items-center text-ivory hover:text-gold" aria-label="Close" onClick={() => setHomeFilm(null)}>✕</button>
            <div className="w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={ytEmbed(FILMS[homeFilm].id)}
                title={FILMS[homeFilm].title}
                className="w-full h-full bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>


      {/* SERVICES PREVIEW */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Our Services</div>
            <h2 className="font-serif text-4xl md:text-6xl">Every part of your celebration, covered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.t} className="bg-background p-10 hover:bg-card transition-colors">
                <s.icon className="h-7 w-7 text-gold mb-5" strokeWidth={1.2} />
                <h3 className="font-serif text-xl text-ivory">{s.t}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold text-[11px] uppercase tracking-luxe hover:gap-3 transition-all">
              Explore All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="relative py-32 px-6 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Loved by Couples</div>
            <h2 className="font-serif text-4xl md:text-6xl">Real stories from real couples</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Priya & Arjun", place: "Coimbatore", quote: "Team Bee turned our wedding into a film we'll cherish forever. Every glance, every tear, every laugh — captured with so much soul." },
              { name: "Divya & Karthik", place: "Pollachi", quote: "The most professional and warm team. Our pre-wedding shoot felt effortless and the album is pure poetry." },
              { name: "Meera & Rohan", place: "Nilgiris", quote: "Destination wedding done flawlessly. Their cinematic film made our families cry — in the best way possible." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative bg-background/40 backdrop-blur-xl border border-border p-8 group hover:border-gold/40 transition-colors"
              >
                <Quote className="h-7 w-7 text-gold/60 mb-5" />
                <p className="font-serif italic text-ivory/85 text-lg leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <div>
                    <div className="font-serif text-lg text-ivory">{t.name}</div>
                    <div className="text-[10px] tracking-luxe uppercase text-gold mt-1">{t.place}</div>
                  </div>
                  <div className="flex gap-0.5 text-gold">
                    {[...Array(5)].map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-gold" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews" className="inline-flex items-center px-8 py-4 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM-STYLE MASONRY */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Follow Our Stories</div>
            <h2 className="font-serif text-4xl md:text-5xl">@teambee_creative_studio</h2>
          </div>
          <div className="columns-2 md:columns-4 gap-3 [column-fill:_balance]">
            {[...WEDDING.slice(0, 4), ...PRE_WEDDING.slice(0, 3), MATERNITY[0], DESTINATION[0]].map((src, i) => (
              <a key={i} href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="block mb-3 break-inside-avoid overflow-hidden group">
                <img src={src} alt="Team Bee Instagram feed" loading="lazy" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BEGIN STORY CTA */}
      <section className="relative py-40 px-6 overflow-hidden border-t border-border">
        <img src={WEDDING[6]} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 bg-vignette" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">Let's Create Memories Together</div>
          <h2 className="font-serif text-5xl md:text-7xl text-ivory text-balance leading-tight">
            Begin <em className="text-gold">your story</em> with us
          </h2>
          <p className="mt-7 text-lg text-ivory/85 max-w-2xl mx-auto font-light">
            A short conversation is all it takes. Let's craft something timeless together.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact?event=Wedding" className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
              Book Your Date <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center px-10 py-4 border border-ivory/50 text-ivory text-[11px] uppercase tracking-luxe hover:border-gold hover:text-gold transition-all">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}


