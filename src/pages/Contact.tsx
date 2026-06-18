import { useSeo } from "@/lib/useSeo";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMG, SITE } from "@/lib/site";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send } from "lucide-react";

function ContactPage() {
  useSeo({ title: "Contact — Book Wedding Photography in Coimbatore | Team Bee", description: "Book Team Bee Creative Studios for wedding photography and cinematic films in Coimbatore. Call +91 98948 01912 or visit our R.S. Puram studio.", image: IMG.coupleBridge, canonical: "/contact" });
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero eyebrow="Begin Your Story" title="Let's create memories together" subtitle={SITE.tagline} image={IMG.coupleBridge} />

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-[1.1fr_1fr] gap-16">
          <div>
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Enquire</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10">Tell us about your celebration</h2>

            {sent ? (
              <div className="bg-card border border-gold p-10 text-center">
                <div className="font-serif text-3xl text-gold mb-3">Thank you</div>
                <p className="text-ivory/80">We have received your enquiry and will reach out within 24 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Your Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Event Date" name="date" type="date" />
                  <Field label="Event Type" name="type" placeholder="Wedding / Pre-Wedding / Engagement" />
                </div>
                <Field label="Venue / City" name="venue" placeholder="Coimbatore, Pollachi, Nilgiris..." />
                <div>
                  <label className="block text-[11px] tracking-luxe uppercase text-gold mb-3">Your Story</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your celebration, the feel you're after, and anything else we should know."
                    className="w-full bg-transparent border border-border focus:border-gold px-5 py-4 text-ivory placeholder:text-ivory/30 outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all"
                >
                  Send Enquiry <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-10">
            <div>
              <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Studio</div>
              <h3 className="font-serif text-3xl mb-6">Visit us in R.S. Puram</h3>
              <ul className="space-y-5 text-ivory/80">
                <li className="flex gap-4"><MapPin className="h-5 w-5 text-gold mt-1 shrink-0" /><span>{SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.region}</span></li>
                <li><a href={`tel:${SITE.phoneTel}`} className="flex gap-4 hover:text-gold"><Phone className="h-5 w-5 text-gold mt-1" /><span>{SITE.phone}</span></a></li>
                <li><a href={`mailto:${SITE.email}`} className="flex gap-4 hover:text-gold"><Mail className="h-5 w-5 text-gold mt-1" /><span>{SITE.email}</span></a></li>
              </ul>
              <div className="flex gap-3 mt-8">
                <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
                <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Team Bee Creative Studios location"
                src="https://www.google.com/maps?q=R.S.+Puram,+Coimbatore,+Tamil+Nadu+641002&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.5) contrast(1.05)" }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[11px] tracking-luxe uppercase text-gold mb-3">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border border-border focus:border-gold px-5 py-4 text-ivory placeholder:text-ivory/30 outline-none transition-colors"
      />
    </div>
  );
}

export default ContactPage;
