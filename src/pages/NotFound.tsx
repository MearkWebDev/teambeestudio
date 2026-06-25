import { useSeo } from "@/lib/useSeo";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";

export default function NotFoundPage() {
  useSeo({ title: "Page Not Found — Team Bee Creative Studios", description: "The page you're looking for doesn't exist." });
  return (
    <SiteLayout>
      <section className="min-h-[80vh] grid place-items-center px-6 text-center">
        <div>
          <div className="text-[11px] tracking-luxe uppercase text-gold mb-6">404</div>
          <h1 className="font-serif text-6xl md:text-8xl text-ivory mb-6">Page not found</h1>
          <p className="text-ivory/70 mb-10 max-w-md mx-auto">The page you're looking for may have moved or no longer exists.</p>
          <Link to="/" className="inline-flex items-center px-8 py-4 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold-soft transition-all">
            Back to Home
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
