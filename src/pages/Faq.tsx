import { useSeo } from "@/lib/useSeo";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who are the best wedding photographers in Coimbatore?", a: "Team Bee Creative Studios is among Coimbatore's most trusted wedding photography and cinematic film studios. Since 2017, we have served 500+ couples across Tamil Nadu with candid storytelling, cinematic films and a 45-day delivery promise." },
  { q: "How much does wedding photography cost in Coimbatore?", a: "Investment depends on event days, team size, deliverables and travel. Our wedding photography packages typically start from a premium tier suited to full-day coverage with cinematic films and albums. Share your dates and we will craft a tailored quote." },
  { q: "Do you provide wedding films?", a: "Yes. Cinematic wedding films, highlight reels and full event coverage are core to our work. Every couple receives both photographs and films, edited and graded in-house." },
  { q: "How long does delivery take?", a: "Forty-five days. Your complete photographs, cinematic films and albums are delivered within 45 days of your last event — every time." },
  { q: "Do you cover destination weddings?", a: "Yes. We travel across Tamil Nadu and India — Pollachi, Valparai, Nilgiris, Kodaikanal, Munnar, Goa and beyond — and have shot destination weddings outside India on request." },
  { q: "Why choose Team Bee Creative Studios?", a: "We blend cinematic craft with calm presence on set, deliver on time without compromise, and treat every wedding as a once-in-a-lifetime story worth preserving with care." },
  { q: "What areas around Coimbatore do you serve?", a: "Our studio is in R.S. Puram, Coimbatore. We regularly cover weddings across Coimbatore, Tiruppur, Erode, Salem, Pollachi, Nilgiris and the wider Tamil Nadu region." },
  { q: "Can we customise our package?", a: "Absolutely. Every wedding is different — we tailor coverage, team strength, deliverables and album design to fit your celebration and budget." },
];

function FAQPage() {
  useSeo({ title: "FAQ — Wedding Photography Coimbatore | Team Bee Creative Studios", description: "Answers to the most common questions about wedding photography, cinematic films, pricing, delivery and destination shoots in Coimbatore.", image: IMG.bridePortrait, canonical: "/faq" });
  return (
    <SiteLayout>
      <PageHero eyebrow="Questions, answered" title="Frequently Asked Questions" subtitle="Everything couples ask us before booking — answered honestly." image={IMG.bridePortrait} />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-serif text-xl md:text-2xl text-ivory hover:text-gold text-left py-6">
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
    </SiteLayout>
  );
}

export default FAQPage;
