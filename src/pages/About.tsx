import { useSeo } from "@/lib/useSeo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { WEDDING, SITE } from "@/lib/site";
import mrShanAsset from "@/assets/mr-shan.jpg.asset.json";
const mrShan = mrShanAsset.url;

const TIMELINE = [
  { year: "2009", title: "Established", body: "Team Bee Creative Studios was founded with a single belief — every moment deserves to be remembered beautifully." },
  { year: "Journey", title: "A Studio Built on Trust", body: "What began as a passion for capturing emotions grew into a creative studio built on trust, creativity and a vision to preserve memories with elegance." },
  { year: "Weddings", title: "The Heart of Our Story", body: "Among countless beautiful journeys, weddings became the heart of our work — a collection of emotions, a bond of love, a journey of families coming together." },
  { year: "Experience", title: "Hundreds of Stories", body: "From the first glance to the final celebration, we capture every smile, every emotion and every little detail that makes each story unique." },
  { year: "Mission", title: "Cinematic Memories", body: "To transform once-in-a-lifetime moments into cinematic films and photographs that allow couples and families to relive their happiest memories for generations." },
  { year: "45 Days", title: "The Delivery Promise", body: "We built a professional workflow that ensures every wedding deliverable reaches you within 45 days — with the same passion, perfection and care." },
  { year: "Vision", title: "Timeless Treasures", body: "To create unforgettable experiences, capture priceless emotions and turn every beautiful moment into a timeless treasure." },
];

export default function AboutPage() {
  useSeo({
    title: "About Team Bee Creative Studios — Wedding Photographers in Coimbatore Since 2009",
    description: "Established 2009 in Coimbatore. Cinematic wedding photography, films and storytelling with a 45-day delivery promise. Our story, mission and vision.",
    image: WEDDING[7],
    canonical: "/about",
  });

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`Established ${SITE.established}`}
        title="Our Story"
        subtitle="Since 2009 — turning precious moments into timeless stories through the art of visual storytelling."
        image={WEDDING[7]}
        breadcrumb="About"
      />

      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-4xl md:text-5xl text-gold mb-4">{SITE.tagline}</p>
          <p className="text-[11px] tracking-luxe uppercase text-ivory/60 mb-12">{SITE.taglineEn}</p>
          <p className="font-serif text-2xl md:text-3xl text-ivory/90 leading-relaxed italic text-balance">
            "Every story begins with a moment — a smile, a feeling, a memory that deserves to live forever."
          </p>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-lg text-ivory/75 leading-relaxed">
            What started as a passion for capturing emotions has grown into a creative studio built on trust, creativity and the vision of preserving memories with elegance, authenticity and cinematic excellence.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6 border-t border-border bg-card/20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Our Journey</div>
            <h2 className="font-serif text-4xl md:text-6xl">A timeline of stories</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {TIMELINE.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-16 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left [direction:ltr]"}`}>
                  <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">{step.year}</div>
                  <h3 className="font-serif text-3xl text-ivory mb-4">{step.title}</h3>
                  <p className="text-ivory/70 leading-relaxed">{step.body}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-ink md:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-6xl grid md:grid-cols-5 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 group"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/30 -z-10 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" />
              <div className="relative aspect-[3/4] overflow-hidden bg-card shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
                <img
                  src={mrShan}
                  alt="Mr. Shan — Founder & Lead Photographer, Team Bee Creative Studios, Coimbatore"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1500ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-3"
          >
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Founder</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Led by Mr. Shan</h2>
            <p className="text-ivory/75 leading-relaxed mb-4">
              With years of experience and countless stories preserved, our journey continues with one purpose — to create unforgettable experiences, capture priceless emotions, and turn every beautiful moment into a timeless treasure.
            </p>
            <p className="text-ivory/75 leading-relaxed">
              We understand that one of the biggest challenges in the wedding industry is delivering memories on time without compromising quality. That's why we built a workflow that ensures every wedding deliverable reaches you within 45 days.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 px-8 py-4 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all">
              Work With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
