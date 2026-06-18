import { useSeo } from "@/lib/useSeo";
import { Link } from "react-router-dom";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG } from "@/lib/site";
import { ArrowRight, Camera, Film, Heart, Sparkles, BookOpen, Baby, Plane, Image as ImageIcon } from "lucide-react";

const services = [
  { icon: Camera, t: "Wedding Photography", d: "Complete coverage of your wedding day blending traditional and candid styles." },
  { icon: Heart, t: "Pre-Wedding Photography", d: "Romantic, story-driven shoots at locations that mean something to you." },
  { icon: Sparkles, t: "Engagement Photography", d: "Warm and natural coverage of the very first milestone of your journey." },
  { icon: ImageIcon, t: "Candid Photography", d: "Unposed, real and emotional photography of the genuine moments." },
  { icon: Film, t: "Wedding Films & Highlights", d: "Cinematic films and reels that bring back the sound, motion and feeling." },
  { icon: BookOpen, t: "Albums & Deliverables", d: "Thoughtfully designed photo albums and complete sets, in 45 days." },
  { icon: Baby, t: "Maternity Photography", d: "Soft, intimate portraits celebrating the journey before it begins." },
  { icon: Plane, t: "Destination Weddings", d: "From Nilgiris to anywhere your story takes us — we travel with you." },
];

const steps = [
  { n: "01", t: "Consultation", d: "We listen to your dates, venues, traditions and the feeling you want preserved." },
  { n: "02", t: "Planning", d: "A tailored coverage plan, team allocation and shot list crafted to your events." },
  { n: "03", t: "Shoot Day", d: "A calm, experienced team capturing every moment — quietly, beautifully." },
  { n: "04", t: "Editing", d: "Careful selection, hand-graded colour and cinematic edits in the studio." },
  { n: "05", t: "Delivery", d: "Your complete photos, films and albums delivered in 45 days." },
];

function ServicesPage() {
  useSeo({ title: "Wedding Photography & Film Services Coimbatore | Team Bee", description: "Complete wedding photography, cinematic films, pre-wedding, engagement, candid, maternity and album services. Coimbatore · Tamil Nadu.", image: IMG.weddingGarland, canonical: "/services" });
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Services" title="Every part of your celebration, covered" subtitle="A complete range of wedding photography and film services — designed with care, creativity and consistency." image={IMG.weddingGarland} />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {services.map((s) => (
              <div key={s.t} className="bg-background p-10 hover:bg-card transition-colors">
                <s.icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-serif text-xl mb-3 text-ivory">{s.t}</h3>
                <p className="text-sm text-ivory/65 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 border-t border-border bg-card/30">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Our Process</div>
            <h2 className="font-serif text-4xl md:text-5xl">From first call to final film</h2>
          </div>
          <ol className="relative space-y-px bg-border">
            {steps.map((s) => (
              <li key={s.n} className="bg-background grid grid-cols-[80px_1fr] md:grid-cols-[140px_200px_1fr] gap-8 p-8 md:p-10 items-start">
                <div className="font-serif text-4xl text-gold">{s.n}</div>
                <div className="text-[11px] tracking-luxe uppercase text-ivory/80 pt-3">{s.t}</div>
                <div className="col-span-2 md:col-span-1 text-ivory/70 text-lg font-light leading-relaxed">{s.d}</div>
              </li>
            ))}
          </ol>

          <div className="text-center mt-16">
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export default ServicesPage;
