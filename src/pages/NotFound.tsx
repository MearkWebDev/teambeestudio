import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { useSeo } from "@/lib/useSeo";

export default function NotFound() {
  useSeo({ title: "Page Not Found — Team Bee Creative Studios" });
  return (
    <SiteLayout>
      <section className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
        <div className="text-center max-w-lg">
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-4">404</div>
          <h1 className="font-serif text-5xl md:text-6xl text-ivory">Page not found</h1>
          <p className="mt-6 text-ivory/70">The page you are looking for does not exist or has moved.</p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center px-8 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
