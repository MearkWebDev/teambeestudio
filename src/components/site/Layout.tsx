import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground dark">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        {eyebrow && (
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-4 reveal">{eyebrow}</div>
        )}
        <h1 className="font-serif text-5xl md:text-7xl text-ivory text-balance reveal max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-ivory/80 max-w-2xl reveal">{subtitle}</p>
        )}
        <div className="hairline w-24 mt-8" />
      </div>
    </section>
  );
}
