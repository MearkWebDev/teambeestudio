import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Team%20Bee%2C%20I%27d%20love%20to%20enquire%20about%20wedding%20photography.`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="rounded-full bg-[#25D366] text-white grid place-items-center shadow-luxe hover:scale-110 transition-transform"
        style={{ height: 52, width: 52 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${SITE.phoneTel}`}
        aria-label="Call"
        className="rounded-full bg-gold text-ink grid place-items-center shadow-gold hover:scale-110 transition-transform"
        style={{ height: 52, width: 52 }}
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
