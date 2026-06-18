import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SITE, NAV, IMG } from "@/lib/site";

const SERVICES = [
  "Wedding Photography",
  "Wedding Films",
  "Candid Photography",
  "Engagement Photography",
  "Maternity Photography",
  "Destination Weddings",
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-border mt-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="h-24 w-36 rounded-2xl bg-ivory flex items-center justify-center overflow-hidden shadow-gold mb-6">
            <img src={IMG.logo} alt="Team Bee Creative Studios" className="h-20 w-auto object-contain" />
          </div>
          <p className="text-sm text-ivory/70 leading-relaxed">
            Team Bee Creative Studios specializes in wedding photography, cinematic wedding films, candid storytelling, and destination wedding coverage across Tamil Nadu and India. We capture timeless moments and transform them into unforgettable visual stories.
          </p>
          <p className="font-script text-2xl text-gold mt-5">{SITE.tagline}</p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-ivory/70 hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-ivory/70">
            {SERVICES.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>{SITE.address.line1}, {SITE.address.line2}, {SITE.address.region}</span></li>
            <li><a href={`tel:${SITE.phoneTel}`} className="flex gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" />{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex gap-2 hover:text-gold"><Mail className="h-4 w-4 text-gold" />{SITE.email}</a></li>
          </ul>
          <div className="flex gap-3 mt-6">
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="h-9 w-9 grid place-items-center border border-border hover:border-gold hover:text-gold transition-all"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Team Bee Creative Studios. All Rights Reserved.</div>
          <div className="tracking-wider-2 uppercase">Designed by <span className="text-gold">Meark Enterprise Pvt Ltd</span></div>
        </div>
      </div>
    </footer>
  );
}
