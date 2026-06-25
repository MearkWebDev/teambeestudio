import { useSeo } from "@/lib/useSeo";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { SITE, WEDDING } from "@/lib/site";

const EVENT_TYPES = ["Wedding", "Pre Wedding", "Engagement", "Destination", "Maternity", "Baby Shower", "Reception", "Other"];

function normalizeEvent(raw: string | null): string {
  if (!raw) return "Wedding";
  const v = raw.toLowerCase();
  const match = EVENT_TYPES.find((e) => e.toLowerCase() === v);
  if (match) return match;
  if (v.includes("pre")) return "Pre Wedding";
  if (v.includes("dest")) return "Destination";
  if (v.includes("mat")) return "Maternity";
  if (v.includes("baby")) return "Baby Shower";
  if (v.includes("eng")) return "Engagement";
  if (v.includes("rec")) return "Reception";
  if (v.includes("wed")) return "Wedding";
  return "Other";
}

export default function ContactPage() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({ name: "", phone: "", email: "", event: "Wedding", date: "", location: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ev = normalizeEvent(params.get("event"));
    setForm((f) => ({ ...f, event: ev }));
  }, [params]);

  useSeo({
    title: "Contact Team Bee Creative Studios — Wedding Photography Coimbatore",
    description: "Book your wedding photography & cinematic films with Team Bee Creative Studios, Coimbatore. Call, WhatsApp, email or request a free consultation today.",
    image: WEDDING[4],
    canonical: "/contact",
  });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hi Team Bee, I'd like to enquire.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AEvent Type: ${form.event}%0AEvent Date: ${form.date}%0ALocation: ${form.location}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <SiteLayout>
      <PageHero eyebrow="Let's Begin Your Story" title="Get In Touch" subtitle="A short conversation is all it takes. Tell us about your celebration and we'll respond within 24 hours." image={WEDDING[4]} />

      <section className="py-24 px-6">
        <div className="mx-auto max-w-[1300px] grid lg:grid-cols-5 gap-12">
          {/* FORM */}
          <div className="lg:col-span-3 bg-card border border-border p-8 md:p-12">
            <div className="text-[11px] tracking-luxe uppercase text-gold mb-3">Enquiry Form</div>
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Tell us about your day</h2>
            <form className="grid sm:grid-cols-2 gap-5" onSubmit={onSubmit}>
              <div className="sm:col-span-1">
                <label className="text-[10px] tracking-luxe uppercase text-ivory/60">Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full bg-background border border-border px-4 py-3 text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-[10px] tracking-luxe uppercase text-ivory/60">Phone</label>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 w-full bg-background border border-border px-4 py-3 text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[10px] tracking-luxe uppercase text-ivory/60">Email</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full bg-background border border-border px-4 py-3 text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-[10px] tracking-luxe uppercase text-ivory/60">Event Type</label>
                <select value={form.event} onChange={(e) => setForm({ ...form, event: e.target.value })} className="mt-2 w-full bg-background border border-border px-4 py-3 text-ivory focus:outline-none focus:border-gold">
                  {EVENT_TYPES.map((e) => <option key={e}>{e}</option>)}
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="text-[10px] tracking-luxe uppercase text-ivory/60">Event Date</label>
                <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="mt-2 w-full bg-background border border-border px-4 py-3 text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[10px] tracking-luxe uppercase text-ivory/60">Location / Venue</label>
                <input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Coimbatore, Pollachi, Chennai..." className="mt-2 w-full bg-background border border-border px-4 py-3 text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[10px] tracking-luxe uppercase text-ivory/60">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full bg-background border border-border px-4 py-3 text-ivory focus:outline-none focus:border-gold" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
                  <Send className="h-4 w-4" /> Send Enquiry via WhatsApp
                </button>
                {sent && <p className="mt-4 text-sm text-gold">Opening WhatsApp — we'll respond within 24 hours.</p>}
              </div>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border p-8">
              <div className="text-[11px] tracking-luxe uppercase text-gold mb-5">Studio</div>
              <ul className="space-y-4 text-sm text-ivory/80">
                <li className="flex gap-3"><MapPin className="h-5 w-5 text-gold mt-0.5 shrink-0" /><span>{SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.region}</span></li>
                <li><a href={`tel:${SITE.phoneTel}`} className="flex gap-3 hover:text-gold"><Phone className="h-5 w-5 text-gold" />{SITE.phone}</a></li>
                <li><a href={`mailto:${SITE.email}`} className="flex gap-3 hover:text-gold"><Mail className="h-5 w-5 text-gold" />{SITE.email}</a></li>
                <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-gold"><MessageCircle className="h-5 w-5 text-gold" />WhatsApp</a></li>
              </ul>
            </div>
            <div className="aspect-square w-full overflow-hidden border border-border">
              <iframe src={SITE.mapEmbed} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Team Bee Studio location"></iframe>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
