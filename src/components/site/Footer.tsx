import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
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

const PHOTO_LINKS = [
  { to: "/photography?cat=wedding", label: "Wedding" },
  { to: "/photography?cat=pre-wedding", label: "Pre Wedding" },
  { to: "/photography?cat=destination", label: "Destination" },
  { to: "/photography?cat=maternity", label: "Maternity" },
];

const SERVICES = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre Wedding",
  "Destination Wedding",
  "Maternity & Baby Shower",
  "Reception & Engagement",
  "Album Design",
  "Drone Coverage",
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-border mt-32">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 py-20 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <img src={IMG.logo} alt="Team Bee Creative Studios" className="h-20 w-auto object-contain mb-6" />
          <p className="text-sm text-ivory/70 leading-relaxed max-w-md">
            Team Bee Creative Studios — established 2009 in Coimbatore. Cinematic wedding photography, films and storytelling for couples across Tamil Nadu and India. Every story, captured with elegance, authenticity and a 45-day delivery promise.
          </p>
          <p className="font-script text-2xl text-gold mt-5">{SITE.tagline}</p>
          <p className="text-[11px] tracking-wider-2 uppercase text-ivory/50 mt-1">{SITE.taglineEn}</p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-ivory/70 hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mt-7 mb-4">Photography</h4>
          <ul className="space-y-2.5">
            {PHOTO_LINKS.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-ivory/70 hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-2.5 text-sm text-ivory/70">
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
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-gold transition-colors">Terms of Use</Link>
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
