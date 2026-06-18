import { useSeo } from "@/lib/useSeo";
import { Link } from "react-router-dom";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG } from "@/lib/site";
import { Play, Clock, ArrowRight } from "lucide-react";

const films = [
  { img: IMG.coupleNature, title: "Aishwarya × Karthik", loc: "Coimbatore", dur: "4:32", cat: "Wedding Highlight" },
  { img: IMG.weddingGarland, title: "Divya × Hari", loc: "Pollachi", dur: "3:58", cat: "Cinematic Wedding" },
  { img: IMG.coupleBridge, title: "Sneha × Vignesh", loc: "Valparai", dur: "5:14", cat: "Pre-Wedding Film" },
  { img: IMG.bridePortrait, title: "Meera × Arjun", loc: "R.S. Puram", dur: "6:02", cat: "Wedding Story" },
  { img: IMG.coupleNature, title: "Lakshmi × Surya", loc: "Nilgiris", dur: "4:18", cat: "Destination Film" },
  { img: IMG.coupleBridge, title: "Priya × Arun", loc: "Coimbatore", dur: "3:42", cat: "Couple Story" },
];

function FilmsPage() {
  useSeo({ title: "Cinematic Wedding Films Coimbatore | Team Bee Creative Studios", description: "Cinematic wedding films, highlight reels and full event coverage in Coimbatore. Wedding films that bring sound, motion and emotion back to life.", image: IMG.coupleNature, canonical: "/films" });
  return (
    <SiteLayout>
      <PageHero eyebrow="Cinematic Films" title="A film brings the moment back to life" subtitle="Wedding films crafted to relive the sounds, light and energy of your celebration — for years to come." image={IMG.coupleNature} />

      <section className="px-6 py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.map((f) => (
              <a key={f.title} href="#" className="group relative block overflow-hidden aspect-[4/5]">
                <img src={f.img} alt={f.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-gold/90 backdrop-blur grid place-items-center group-hover:scale-110 transition-transform shadow-gold">
                    <Play className="h-7 w-7 text-ink fill-ink ml-1" />
                  </div>
                </div>
                <div className="absolute top-5 left-5 text-[10px] tracking-luxe uppercase text-gold bg-ink/60 backdrop-blur px-3 py-1.5">
                  {f.cat}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="flex items-center gap-3 text-[10px] tracking-luxe uppercase text-gold mb-2">
                    {f.loc} <span className="opacity-50">·</span> <Clock className="h-3 w-3" /> {f.dur}
                  </div>
                  <div className="font-serif text-2xl text-ivory">{f.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 border-t border-border bg-card/40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">On Time, Every Time</div>
          <h2 className="font-serif text-4xl md:text-5xl">Your film, delivered in 45 days</h2>
          <p className="mt-6 text-ivory/75 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            We understand waiting for your wedding film can feel like waiting forever. That is why every Team Bee couple receives their final films within forty-five days — while the memories are still fresh.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-10 py-5 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
            Book Your Film <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

export default FilmsPage;
