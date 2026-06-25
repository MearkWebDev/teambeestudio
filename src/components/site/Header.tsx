import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV, SITE, IMG } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-700",
        scrolled || open
          ? "bg-ink/85 backdrop-blur-xl border-b border-border"
          : "bg-gradient-to-b from-ink/40 to-transparent"
      )}
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Team Bee Creative Studios — Home">
          <img src={IMG.logoWhite} alt="Team Bee Creative Studios" className="h-14 md:h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) =>
            n.submenu ? (
              <div
                key={n.to}
                className="relative"
                onMouseEnter={() => setPhotoOpen(true)}
                onMouseLeave={() => setPhotoOpen(false)}
              >
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex items-center gap-1 text-xs uppercase tracking-wider-2 transition-colors hover:text-gold",
                      isActive ? "text-gold" : "text-ivory/85"
                    )
                  }
                >
                  {n.label}
                  <ChevronDown className="h-3 w-3" />
                </NavLink>
                {photoOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="bg-ink/95 backdrop-blur-xl border border-border min-w-[200px] py-3">
                      {n.submenu.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block px-6 py-2.5 text-[11px] uppercase tracking-wider-2 text-ivory/80 hover:text-gold hover:bg-card/60 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-xs uppercase tracking-wider-2 transition-colors hover:text-gold",
                    isActive ? "text-gold" : "text-ivory/85"
                  )
                }
              >
                {n.label}
              </NavLink>
            )
          )}
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
          <nav className="flex flex-col px-6 py-6 gap-3">
            {NAV.map((n) => (
              <div key={n.to}>
                <NavLink
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn("block py-2 text-sm uppercase tracking-wider-2", isActive ? "text-gold" : "text-ivory/85")
                  }
                >
                  {n.label}
                </NavLink>
                {n.submenu && (
                  <div className="pl-4 mt-1 border-l border-border/60 ml-1">
                    {n.submenu.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-[11px] uppercase tracking-wider-2 text-ivory/65 hover:text-gold"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={`tel:${SITE.phoneTel}`} className="text-sm text-gold mt-3">
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
