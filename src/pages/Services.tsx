import { useSeo } from "@/lib/useSeo";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Film, Heart, Plane, Sparkles, Baby, Award, Gift, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { WEDDING } from "@/lib/site";

const SERVICES = [
  { icon: Camera, t: "Wedding Photography", d: "Candid storytelling and traditional coverage for every ritual.", event: "Wedding" },
  { icon: Film, t: "Wedding Cinematography", d: "Cinematic films and highlight reels you'll watch forever.", event: "Wedding" },
  { icon: Heart, t: "Pre Wedding", d: "Romantic, location-led shoots designed around your story.", event: "Pre Wedding" },
  { icon: Award, t: "Engagement", d: "An intimate beginning to your wedding story — captured with elegance.", event: "Engagement" },
  { icon: Gift, t: "Reception", d: "Glamorous, cinematic coverage of every speech, dance and smile.", event: "Reception" },
  { icon: Plane, t: "Destination Wedding", d: "Coastal, palace and hill-station weddings — anywhere your love takes you.", event: "Destination" },
  { icon: Sparkles, t: "Maternity", d: "Soft, intimate portraits celebrating the journey to parenthood.", event: "Maternity" },
  { icon: Baby, t: "Baby Shower", d: "Joyful, heartfelt coverage of your baby shower celebrations.", event: "Baby Shower" },
];

export default function ServicesPage() {
  useSeo({
    title: "Services — Wedding Photography, Cinematography & Albums | Team Bee, Coimbatore",
    description: "Wedding photography, cinematic films, pre-wedding, destination, maternity, reception, engagement, album design and drone coverage — by Team Bee Creative Studios, Coimbatore.",
    image: WEDDING[1],
    canonical: "/services",
  });

  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="A Complete Wedding Experience" subtitle="From the first glance to the final celebration — every part of your story, beautifully covered." image={WEDDING[1]} breadcrumb="Services" />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[1400px] grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
              className="group relative bg-card border border-border p-10 hover:border-gold/60 transition-all"
            >
              <s.icon className="h-8 w-8 text-gold mb-6" strokeWidth={1.2} />
              <h3 className="font-serif text-2xl text-ivory mb-3">{s.t}</h3>
              <p className="text-sm text-ivory/65 leading-relaxed mb-6">{s.d}</p>
              <Link to={`/contact?event=${encodeURIComponent(s.event)}`} className="inline-flex items-center gap-2 text-gold text-[10px] uppercase tracking-luxe group-hover:gap-3 transition-all">
                Enquire <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 border-t border-border text-center bg-card/20">
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Custom packages, crafted for your day</h2>
        <p className="text-ivory/75 max-w-2xl mx-auto mb-8">Every wedding is unique. Tell us your dates, venues and vision — we'll design a package built around your story.</p>
        <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
          Request a Quote <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
