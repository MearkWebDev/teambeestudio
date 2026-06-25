import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, MessageCircle, Clock, MapPinned } from "lucide-react";
import { SITE, IMG } from "@/lib/site";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/photography", label: "Photography" },
  { to: "/films", label: "Films" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

const PHOTO_SERVICES = [
  "Wedding",
  "Pre Wedding",
  "Destination",
  "Maternity",
  "Wedding Films",
  "Cinematic Videos",
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-border mt-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        {/* Column 1 — Brand */}
        <div>
          <img src={IMG.logo} alt="Team Bee Creative Studios" className="h-20 w-auto object-contain mb-6" loading="lazy" />
          <p className="text-sm text-ivory/70 leading-relaxed">
            Established 2009 in Coimbatore. Cinematic wedding photography and films for couples across Tamil Nadu and beyond — every story captured with elegance, authenticity and a 45-day delivery promise.
          </p>
          <p className="font-script text-2xl text-gold mt-5">{SITE.tagline}</p>
          <p className="text-[11px] tracking-wider-2 uppercase text-ivory/50 mt-1">{SITE.taglineEn}</p>
          <div className="flex gap-3 mt-6">
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-ivory/70 hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Photography Services */}
        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Photography Services</h4>
          <ul className="space-y-2.5 text-sm text-ivory/70">
            {PHOTO_SERVICES.map((s) => (
              <li key={s} className="hover:text-gold transition-colors">
                <Link to="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>{SITE.address.line1}, {SITE.address.line2}, {SITE.address.region}</span></li>
            <li><a href={`tel:${SITE.phoneTel}`} className="flex gap-2 hover:text-gold transition-colors"><Phone className="h-4 w-4 text-gold" />{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-gold transition-colors"><Mail className="h-4 w-4 text-gold" />{SITE.email}</a></li>
            <li><a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-gold transition-colors"><MessageCircle className="h-4 w-4 text-gold" />WhatsApp</a></li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>Mon – Sun · 9:00 AM – 9:00 PM</span></li>
          </ul>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Team+Bee+Creative+Studios+Coimbatore"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 border border-gold text-gold text-[11px] tracking-luxe uppercase hover:bg-gold hover:text-ink transition-all"
          >
            <MapPinned className="h-4 w-4" /> View on Google Maps
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Team Bee Creative Studios. All Rights Reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
