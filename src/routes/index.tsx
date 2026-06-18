import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Camera, Film, Heart, Award, Clock, Users, Sparkles, Quote, Play, Baby, Plane, Image as ImageIcon, BookOpen } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { IMG, SITE } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const homeFaqs = [
  { q: "Why choose Team Bee Creative Studios?", a: "Since 2017, Team Bee Creative Studios has been one of Coimbatore's most trusted wedding photography and cinematic film studios — known for candid storytelling, cinematic films, premium editing, and a 45-day delivery promise." },
  { q: "What wedding photography services do you offer?", a: "Wedding photography, cinematic wedding films, pre-wedding shoots, engagement coverage, candid photography, maternity portraits, destination wedding coverage, drone coverage and premium wedding albums." },
  { q: "How much does wedding photography cost in Coimbatore?", a: "Investment depends on event days, team size, deliverables and travel. Share your dates and we will craft a tailored quote — most couples invest in a full-day package with films and albums." },
  { q: "How early should I book?", a: "We recommend booking 4–8 months in advance to secure your dates, especially during peak wedding season in Tamil Nadu." },
  { q: "Do you travel for destination weddings?", a: "Yes — we cover destination weddings across Tamil Nadu (Coimbatore, Tiruppur, Erode, Salem, Chennai, Pollachi, Nilgiris, Kodaikanal) and anywhere in India and overseas on request." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Team Bee Creative Studios — Best Wedding Photographer in Coimbatore, Tamil Nadu" },
      { name: "description", content: "Premium wedding photography, candid storytelling and cinematic wedding films in Coimbatore, Tiruppur, Erode, Salem, Chennai & across Tamil Nadu. 45-day delivery, since 2017." },
      { name: "keywords", content: "wedding photography, wedding photographer Coimbatore, candid wedding photography, best wedding photographer Tamil Nadu, destination wedding photography, wedding videography, wedding films, wedding photography studio, wedding photographer Tiruppur, wedding photographer Erode, wedding photographer Salem, wedding photographer Chennai" },
      { property: "og:title", content: "Team Bee Creative Studios — Coimbatore" },
      { property: "og:description", content: "Cinematic wedding films & candid photography. Stories told the way they deserve." },
      { property: "og:image", content: IMG.weddingGarland },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    image: IMG.weddingGarland,
    eyebrow: "Wedding Photography · Coimbatore",
    title: "Capturing Moments,\nCreating Memories",
    subtitle: "Best wedding photographer in Coimbatore — cinematic films, candid storytelling, 45-day delivery.",
    cta1: { label: "Book Your Wedding", to: "/contact" as const },
    cta2: { label: "Explore Photography", to: "/photography" as const },
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

const photoCategories = [
  { t: "Wedding Photography", img: IMG.weddingGarland },
  { t: "Pre-Wedding Photography", img: IMG.coupleBridge },
  { t: "Engagement Photography", img: IMG.coupleNature },
  { t: "Candid Photography", img: IMG.bridePortrait },
  { t: "Maternity Photography", img: IMG.streetArt },
  { t: "Destination Wedding Photography", img: IMG.coupleNature },
];

const filmCategories = [
  { t: "Wedding Films", img: IMG.weddingGarland, dur: "Highlight · 4–6 min" },
  { t: "Pre-Wedding Films", img: IMG.coupleBridge, dur: "Cinematic · 3–5 min" },
  { t: "Engagement Films", img: IMG.coupleNature, dur: "Story · 2–3 min" },
  { t: "Destination Wedding Films", img: IMG.bridePortrait, dur: "Travel · 5–7 min" },
  { t: "Couple Stories", img: IMG.coupleNature, dur: "Reel · 90 sec" },
];

const services = [
  { icon: Camera, t: "Wedding Photography" },
  { icon: Film, t: "Wedding Videography" },
  { icon: Heart, t: "Pre-Wedding Shoot" },
  { icon: Sparkles, t: "Engagement Photography" },
  { icon: ImageIcon, t: "Candid Photography" },
  { icon: Baby, t: "Maternity Photography" },
  { icon: Plane, t: "Destination Wedding Coverage" },
  { icon: BookOpen, t: "Wedding Albums & Drone Coverage" },
];

const topReviews = [
  { name: "Priya & Arun", type: "Wedding · Coimbatore", text: "Team Bee captured every moment we missed living through. Watching our film feels like reliving the day in cinema." },
  { name: "Meena & Suresh", type: "Pre-Wedding · Valparai", text: "Calm, warm, professional — they made us feel like ourselves. The photos are pure poetry." },
  { name: "Aishwarya & Vignesh", type: "Wedding · Pollachi", text: "Delivered in 40 days. Every album page is a memory we will hand down. Absolutely worth every rupee." },
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
            className="absolute inset-0 transition-opacity"
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
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">{slides[active].eyebrow}</div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory text-balance leading-[1.05] whitespace-pre-line">
              {slides[active].title}
            </h1>
            <p className="mt-7 text-base md:text-lg text-ivory/85 max-w-2xl mx-auto font-light">
              {slides[active].subtitle}
            </p>
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
            A wedding is not just a celebration —<br />
            <em className="text-gold">it is a once-in-a-lifetime story.</em>
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-lg text-ivory/75 leading-relaxed max-w-3xl mx-auto font-light">
            Welcome to Team Bee Creative Studios — wedding photographers in Coimbatore serving couples across Tiruppur, Erode, Salem, Chennai and all of Tamil Nadu. Since 2017 we have turned everyday emotions into timeless memories with cinematic films, candid photography and premium editing.
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
              { icon: Award, t: "Experience", d: "9+ years and 500+ weddings across Tamil Nadu and India." },
              { icon: Heart, t: "Storytelling Approach", d: "Films and frames led by emotion, not just composition." },
              { icon: Clock, t: "Fast Delivery", d: "Every couple receives their full set in 45 days." },
              { icon: Users, t: "Creative Team", d: "Photographers, cinematographers, editors and album designers in-house." },
              { icon: Plane, t: "Destination Coverage", d: "From Nilgiris to anywhere your story takes us." },
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

      {/* PHOTOGRAPHY CATEGORIES */}
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {photoCategories.map((c) => (
              <Link key={c.t} to="/photography" className="group relative block overflow-hidden aspect-[4/5]">
                <img src={c.img} alt={c.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl md:text-2xl text-ivory">{c.t}</h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-luxe opacity-80 group-hover:opacity-100 group-hover:gap-3 transition-all">
                    View Gallery <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FILMS CATEGORIES */}
      <section className="relative py-32 px-6 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Cinematic Films</div>
            <h2 className="font-serif text-4xl md:text-6xl">A photograph captures a moment.<br /><em className="text-gold">A film brings it back to life.</em></h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {filmCategories.map((f) => (
              <Link key={f.t} to="/films" className="group relative block overflow-hidden aspect-[3/4]">
                <img src={f.img} alt={f.t} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-gold/90 backdrop-blur grid place-items-center group-hover:scale-110 transition-transform shadow-gold">
                    <Play className="h-6 w-6 text-ink fill-ink ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[10px] tracking-luxe uppercase text-gold mb-1">{f.dur}</div>
                  <h3 className="font-serif text-lg text-ivory">{f.t}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/films" className="inline-flex items-center px-8 py-4 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all">
              Watch All Films
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Our Services</div>
            <h2 className="font-serif text-4xl md:text-6xl">Every part of your celebration, covered</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <div key={s.t} className="bg-background p-8 hover:bg-card transition-colors">
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

      {/* REVIEWS PREVIEW */}
      <section className="relative py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Loved by Couples</div>
            <h2 className="font-serif text-4xl md:text-6xl">Kind words, real stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topReviews.map((r) => (
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
          <div className="text-center mt-12">
            <Link to="/reviews" className="inline-flex items-center px-8 py-4 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32 px-6 border-t border-border bg-card/30">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Questions, Answered</div>
            <h2 className="font-serif text-4xl md:text-5xl">Frequently asked</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {homeFaqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-serif text-lg md:text-xl text-ivory hover:text-gold text-left py-6">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-ivory/75 text-base leading-relaxed pb-8">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* BEGIN YOUR STORY CTA */}
      <section className="relative py-40 px-6 overflow-hidden border-t border-border">
        <img src={IMG.bridePortrait} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">Begin Your Story</div>
          <h2 className="font-serif text-5xl md:text-7xl text-ivory text-balance leading-tight">
            Let's create memories <em className="text-gold">together.</em>
          </h2>
          <p className="font-script text-3xl text-gold mt-6">{SITE.tagline}</p>
          <p className="mt-6 text-ivory/75 text-lg font-light max-w-xl mx-auto">
            Book your date or get a free consultation with our team — we reply within 24 hours.
          </p>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
              Book Your Date <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center px-10 py-5 border border-ivory/40 text-ivory text-[11px] uppercase tracking-luxe hover:border-gold hover:text-gold transition-all">
              Get A Free Consultation
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
