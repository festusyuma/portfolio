import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";

export function HlsVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(() => {});
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({ capLevelToPlayerSize: true });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    }
  }, [started, src]);

  return (
    <div className="relative aspect-video overflow-hidden bg-bg">
      {started ? (
        <video ref={videoRef} controls playsInline poster={poster} className="size-full object-cover" />
      ) : (
        <button
          type="button"
          onClick={() => setStarted(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 flex size-full cursor-pointer items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        >
          <span className="absolute inset-0 bg-bg/30 transition-colors group-hover:bg-bg/10" />
          <span className="relative flex size-16 items-center justify-center rounded-full border border-ink/20 bg-bg/70 text-ink backdrop-blur transition-all group-hover:scale-105 group-hover:border-signal group-hover:text-signal">
            <svg viewBox="0 0 24 24" className="ml-0.5 size-6" aria-hidden>
              <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
