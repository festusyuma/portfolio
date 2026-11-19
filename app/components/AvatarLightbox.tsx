import { useRef } from "react";

export function AvatarLightbox({ src, alt }: { src: string; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`View larger photo of ${alt}`}
        className="group relative shrink-0 cursor-zoom-in overflow-hidden rounded-md border border-line transition-colors hover:border-signal focus-visible:border-signal focus-visible:outline-none"
      >
        <img src={src} alt={alt} className="size-11 object-cover transition-transform group-hover:scale-105" />
      </button>

      <dialog
        ref={dialog}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        className="m-auto max-h-[90dvh] w-[min(90vw,460px)] overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <figure className="overflow-hidden rounded-xl border border-line bg-surface font-mono shadow-2xl shadow-black/60">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5 text-xs">
            <span className="text-faint">avatar.jpg</span>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close"
              className="rounded border border-line px-2 py-0.5 text-dim transition-colors hover:border-signal hover:text-signal"
            >
              esc
            </button>
          </div>
          <img src={src} alt={alt} className="block aspect-square w-full object-cover" />
          <figcaption className="px-4 py-3 text-xs text-dim">{alt}</figcaption>
        </figure>
      </dialog>
    </>
  );
}
