import { useSeo } from "@/lib/useSeo";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { WEDDING } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Why choose Team Bee Creative Studios?", a: "Established 2009, Team Bee Creative Studios is one of Coimbatore's most trusted wedding photography & cinematic film studios — known for storytelling, premium editing and a 45-day delivery promise." },
  { q: "What services do you offer?", a: "Wedding photography, cinematic wedding films, pre-wedding, engagement, destination, maternity, baby shower, reception, album design and drone coverage." },
  { q: "Which areas in Tamil Nadu do you cover?", a: "Coimbatore, R.S. Puram, Pollachi, Tiruppur, Erode, Salem, Chennai and destination weddings across India and overseas." },
  { q: "How much does wedding photography cost in Coimbatore?", a: "Investment depends on event days, team size, deliverables and travel. Share your dates and we'll craft a tailored quote." },
  { q: "How early should I book my wedding photographer?", a: "We recommend booking 4–8 months in advance to secure your dates, especially during peak Tamil Nadu wedding season." },
  { q: "How long does delivery take?", a: "Every wedding deliverable reaches you within 45 days — edited photos, cinematic films and album drafts included." },
  { q: "Do you travel for destination weddings?", a: "Yes — we cover destinations across Tamil Nadu, India and overseas on request." },
];

export default function FaqPage() {
  useSeo({
    title: "FAQs — Wedding Photography Coimbatore | Team Bee Creative Studios",
    description: "Answers to common questions about wedding photography, films, packages, delivery and bookings with Team Bee Creative Studios, Coimbatore.",
    image: WEDDING[3],
    canonical: "/faq",
    jsonLd: { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  });

  return (
    <SiteLayout>
      <PageHero eyebrow="Questions, Answered" title="Frequently Asked" subtitle="Everything you need to know before working with Team Bee Creative Studios." image={WEDDING[3]} />
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="font-serif text-lg md:text-xl text-ivory hover:text-gold text-left py-6">{f.q}</AccordionTrigger>
                <AccordionContent className="text-ivory/75 text-base leading-relaxed pb-8">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}
