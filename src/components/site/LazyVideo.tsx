import { useEffect, useRef, useState, VideoHTMLAttributes } from "react";
import { Play } from "lucide-react";

type Props = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  poster: string;
  hoverPlay?: boolean;
  showPlayButton?: boolean;
};

/**
 * Renders a poster image until the element scrolls into view (or hover),
 * then mounts the <video> with preload="metadata". Massively reduces
 * initial network/CPU cost vs mounting every video on first paint.
 */
export function LazyVideo({ src, poster, hoverPlay = true, showPlayButton = true, className, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!ref.current || mount) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMount(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mount]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-ink ${className ?? ""}`}
      onMouseEnter={() => {
        if (!hoverPlay) return;
        const v = videoRef.current;
        if (v) v.play().catch(() => {});
      }}
      onMouseLeave={() => {
        if (!hoverPlay) return;
        const v = videoRef.current;
        if (v) {
          v.pause();
          v.currentTime = 0;
        }
      }}
    >
      <img
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        style={{ opacity: mount ? 0 : 1 }}
      />
      {mount && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          {...rest}
        />
      )}
      {showPlayButton && (
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="h-16 w-16 rounded-full bg-gold/90 grid place-items-center shadow-gold transition-transform duration-300 hover:scale-110">
            <Play className="h-6 w-6 text-ink fill-ink ml-0.5" />
          </div>
        </div>
      )}
    </div>
  );
}
