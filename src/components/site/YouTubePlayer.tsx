import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { ytEmbed, ytOembed, ytWatch } from "@/lib/site";

type Status = "checking" | "playing" | "blocked";

/**
 * Validates a YouTube video via oEmbed before rendering the iframe.
 * If the video is private, removed, or has embedding disabled,
 * auto-opens the watch page in a new tab and shows a fallback button.
 */
export function YouTubePlayer({ id, title }: { id: string; title: string }) {
  const [status, setStatus] = useState<Status>("checking");
  const openedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    setStatus("checking");
    openedRef.current = false;

    fetch(ytOembed(id))
      .then((r) => {
        if (cancelled) return;
        if (r.ok) setStatus("playing");
        else triggerBlocked();
      })
      .catch(() => {
        if (!cancelled) triggerBlocked();
      });

    function triggerBlocked() {
      setStatus("blocked");
      if (!openedRef.current) {
        openedRef.current = true;
        window.open(ytWatch(id), "_blank", "noopener,noreferrer");
      }
    }

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (status === "playing") {
    return (
      <iframe
        key={id}
        src={ytEmbed(id)}
        title={title}
        className="w-full h-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <div className="w-full h-full grid place-items-center bg-black text-center px-6">
      <div className="max-w-md">
        <div className="text-ivory/90 font-serif text-xl mb-3">
          {status === "checking" ? "Loading film…" : "This video cannot be embedded."}
        </div>
        {status === "blocked" && (
          <>
            <p className="text-ivory/60 text-sm mb-6">Opening on YouTube…</p>
            <a
              href={ytWatch(id)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-ink text-[11px] uppercase tracking-luxe hover:bg-gold/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> Watch on YouTube
            </a>
          </>
        )}
      </div>
    </div>
  );
}
