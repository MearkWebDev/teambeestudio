import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { SITE, NAV, IMG } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink border-t border-border mt-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-14 w-14 rounded-full bg-ivory flex items-center justify-center overflow-hidden">
              <img src={IMG.logo} alt="" className="h-11 w-11 object-contain" />
            </div>
            <div>
              <div className="font-serif text-xl">Team Bee</div>
              <div className="text-[10px] tracking-luxe uppercase text-gold">Créative Studios</div>
            </div>
          </div>
          <p className="font-script text-2xl text-gold mb-2">{SITE.tagline}</p>
          <p className="text-xs text-muted-foreground italic">{SITE.taglineEn}</p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Explore</h4>
          <ul className="space-y-3">
            {NAV.slice(0, 5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-ivory/70 hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li>Wedding Photography</li>
            <li>Cinematic Wedding Films</li>
            <li>Pre-Wedding Stories</li>
            <li>Engagement Coverage</li>
            <li>Maternity Portraits</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Studio</h4>
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
          <div>© {new Date().getFullYear()} Team Bee Creative Studios. All rights reserved.</div>
          <div className="tracking-wider-2 uppercase">Coimbatore · Tamil Nadu · India</div>
        </div>
      </div>
    </footer>
  );
}
