import { useState, useEffect } from "react";
import { PHOTOGRAPHS, type Photograph } from "@/data";

export function Photography() {
  const [activePhoto, setActivePhoto] = useState<Photograph | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      }
    };
    if (activePhoto) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto]);

  return (
    <section id="photography" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-12">
          <div>
            <div className="mb-2 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              Visual Stories
            </div>
            <h2 className="text-3xl md:text-4xl mb-3">Photography</h2>
            <p className="max-w-[56ch] text-muted-foreground leading-relaxed">
              When I'm away from code, I spend time exploring landscape and street photography.
              Some frames carry written stories and memories behind them — click any photo to read.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOGRAPHS.map((photo) => (
            <article
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden cursor-pointer transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary/40">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Floating location badge */}
                <div className="absolute top-3 left-3 rounded-full bg-background/85 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-foreground shadow-sm">
                  📍 {photo.location}
                </div>

                {photo.story && (
                  <div className="absolute bottom-3 right-3 rounded-full bg-accent text-accent-foreground px-3 py-1 text-[11px] font-medium shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>📖</span> Read Story
                  </div>
                )}
              </div>

              {/* Photo Caption & Info */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
                    <span>{photo.year}</span>
                    <span className="font-mono text-[11px]">{photo.camera}</span>
                  </div>
                  <h3
                    className="text-base font-semibold text-foreground group-hover:text-accent transition-colors mb-1.5"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {photo.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {photo.caption}
                  </p>
                </div>

                {photo.story && (
                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-accent font-medium">
                    <span>Story: {photo.story.title}</span>
                    <span>→</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Story & Photo Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl flex flex-col md:flex-row animate-fade-up"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close photo view"
              className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-md transition-colors hover:bg-background hover:text-accent shadow-md"
            >
              ✕
            </button>

            {/* Photo Column */}
            <div className="md:w-1/2 bg-black/90 flex flex-col justify-between overflow-hidden relative">
              <div className="h-full min-h-[260px] md:min-h-full flex items-center justify-center p-2">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="max-h-[50vh] md:max-h-[85vh] w-full object-contain"
                />
              </div>

              {/* Photo technical metadata bar */}
              <div className="p-4 bg-background/90 backdrop-blur-md border-t border-border flex flex-wrap items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">📍 {activePhoto.location}</span>
                <span className="font-mono text-[11px]">{activePhoto.camera}</span>
              </div>
            </div>

            {/* Story / Blog Post Column */}
            <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[85vh] bg-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs mb-3">
                  <span className="rounded-full bg-accent/15 px-2.5 py-0.5 font-semibold text-accent">
                    Photo Essay
                  </span>
                  {activePhoto.story && (
                    <span className="text-muted-foreground">
                      ⏱ {activePhoto.story.readTime}
                    </span>
                  )}
                  <span className="text-muted-foreground">• {activePhoto.year}</span>
                </div>

                <h3
                  className="text-2xl font-bold text-foreground mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {activePhoto.story?.title || activePhoto.title}
                </h3>

                <p className="text-xs italic text-muted-foreground mb-6 pb-4 border-b border-border">
                  "{activePhoto.caption}"
                </p>

                {/* Story Paragraphs */}
                {activePhoto.story ? (
                  <div className="space-y-4 text-sm text-foreground/90 leading-relaxed font-sans">
                    {activePhoto.story.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Captured on location in {activePhoto.location} with {activePhoto.camera}.
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>By Sagar Kafle</span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="text-accent hover:underline font-medium"
                >
                  Close viewer ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
