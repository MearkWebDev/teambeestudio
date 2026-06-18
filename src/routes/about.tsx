import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG, SITE } from "@/lib/site";
import { ArrowRight, Heart, Clock, Award, Camera } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Team Bee Creative Studios | Coimbatore Wedding Photographers" },
      { name: "description", content: "Since 2017, Team Bee Creative Studios has captured weddings across Coimbatore and Tamil Nadu. Cinematic storytelling, candid moments, 45-day delivery." },
      { property: "og:title", content: "About Team Bee Creative Studios" },
      { property: "og:description", content: "Our story, our promise, our craft — since 2017." },
      { property: "og:image", content: IMG.coupleNature },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Story · Est. 2017" title="Stories told the way they deserve" subtitle="A creative studio built on emotion, craft and the quiet honesty of real moments." image={IMG.bridePortrait} />

      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <div className="text-[11px] tracking-luxe uppercase text-gold">Our Story</div>
            <div className="space-y-6 text-ivory/80 leading-relaxed text-lg font-light">
              <p>Since 2017, Team Bee Creative Studios has been dedicated to capturing life's most meaningful moments and transforming them into stories that last forever. What began as a passion for visual storytelling has grown into a creative studio known for preserving emotions with authenticity, quality and cinematic excellence.</p>
              <p>Over the years, weddings have become one of the most important parts of our journey. We believe a wedding is not just a celebration — it is a once-in-a-lifetime story filled with emotions, traditions, laughter and unforgettable memories.</p>
              <p>From the smallest candid moments to the grandest celebrations, our team works with attention to every detail, creating films and photographs that allow couples and families to relive their special day for years to come.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-4xl text-center">
          <Clock className="h-10 w-10 text-gold mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-serif text-4xl md:text-5xl text-ivory">The 45-Day Promise</h2>
          <p className="mt-6 text-ivory/75 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            While wedding deliverables are often delayed for months, we challenge ourselves to maintain both quality and speed. Every Team Bee couple receives their full set of photographs and films within 45 days — because memories deserve to be relived without waiting.
          </p>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center mb-16">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Mission · Vision · Values</div>
            <h2 className="font-serif text-4xl md:text-5xl">What guides every frame</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { icon: Heart, t: "Mission", d: "To turn the most personal moments of your life into stories you can hold, watch and relive — without compromise." },
              { icon: Award, t: "Vision", d: "To be remembered as the studio that gave Tamil Nadu its most honest, cinematic and timeless wedding films." },
              { icon: Camera, t: "Values", d: "Authenticity, craft, calm presence on set, and an obsession with delivering on time, every time." },
            ].map((v) => (
              <div key={v.t} className="bg-background p-12">
                <v.icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.2} />
                <h3 className="font-serif text-3xl mb-4">{v.t}</h3>
                <p className="text-ivory/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 border-t border-border">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-4xl text-gold mb-6">{SITE.tagline}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ivory">Let's begin your story</h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-10 py-5 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
            Reach the Studio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
