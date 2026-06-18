import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE, IMG } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/90 backdrop-blur-xl border-b border-border"
          : "bg-gradient-to-b from-ink/60 to-transparent"
      )}
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-full bg-ivory flex items-center justify-center overflow-hidden shadow-gold">
            <img src={IMG.logo} alt="Team Bee Creative Studios logo" className="h-10 w-10 object-contain" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg text-ivory">Team Bee</div>
            <div className="text-[10px] tracking-luxe uppercase text-gold">Créative Studios</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-xs uppercase tracking-wider-2 text-ivory/80 hover:text-gold transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-wider-2 text-ivory/90 hover:text-gold"
          >
            <Phone className="h-3.5 w-3.5" /> {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 border border-gold/60 text-gold text-[11px] uppercase tracking-luxe hover:bg-gold hover:text-ink transition-all"
          >
            Enquire
          </Link>
          <button
            className="lg:hidden p-2 text-ivory"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-ink/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="text-sm uppercase tracking-wider-2 text-ivory/85"
              >
                {n.label}
              </Link>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="text-sm text-gold mt-2">
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
