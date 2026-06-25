import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover kenburns"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[11px] tracking-luxe uppercase text-gold mb-4"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl text-ivory text-balance max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-ivory/80 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="hairline w-24 mt-8" />
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-2 text-[10px] tracking-luxe uppercase text-ivory/60"
          >
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">{breadcrumb}</span>
          </motion.nav>
        )}
      </div>
    </section>
  );
}

