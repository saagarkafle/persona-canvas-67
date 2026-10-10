import { useState, useEffect, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { PHOTOGRAPHS, type Photograph } from "@/data";

export interface PhotographyProps {
  /** Maximum number of photos to display (e.g., 6 on the home page) */
  limit?: number;
  /** Whether to show a link/button leading to the full photography page */
  showViewAll?: boolean;
  /** Whether this is rendered as the full standalone photography page */
  isFullPage?: boolean;
}

export function Photography({
  limit = 6,
  showViewAll = true,
  isFullPage = false,
}: PhotographyProps = {}) {
  const [activePhoto, setActivePhoto] = useState<Photograph | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 9;

  // Filter helper with comprehensive matching for Glasgow, Edinburgh, Scotland, Nepal, etc.
  const matchesTag = (photo: Photograph, tag: string) => {
    if (tag === "All") return true;
    const tagLower = tag.toLowerCase();
    const regLower = (photo.region || "").toLowerCase();
    const locLower = photo.location.toLowerCase();

    if (tagLower === "scotland") {
      return (
        regLower.includes("scotland") ||
        locLower.includes("scotland") ||
        locLower.includes("glasgow") ||
        locLower.includes("edinburgh") ||
        locLower.includes("highland") ||
        locLower.includes("ayr") ||
        locLower.includes("clyde")
      );
    }
    if (tagLower === "nepal") {
      return (
        regLower.includes("nepal") ||
        locLower.includes("nepal") ||
        locLower.includes("kathmandu") ||
        locLower.includes("pokhara") ||
        locLower.includes("kushma") ||
        locLower.includes("boudha") ||
        locLower.includes("dhulikhel")
      );
    }
    return regLower.includes(tagLower) || locLower.includes(tagLower);
  };

  // Extract available filter categories
  const filterTags = useMemo(() => ["All", "Scotland", "Nepal", "UK Coast"], []);

  // Filter photos by tag
  const filteredPhotos = useMemo(() => {
    return PHOTOGRAPHS.filter((p) => matchesTag(p, selectedTag));
  }, [selectedTag]);

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  // Slice photos based on page or home-page limit
  const totalCount = filteredPhotos.length;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const displayedPhotos = useMemo(() => {
    if (!isFullPage) {
      return limit ? filteredPhotos.slice(0, limit) : filteredPhotos;
    }
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredPhotos.slice(start, start + PAGE_SIZE);
  }, [filteredPhotos, isFullPage, limit, currentPage]);

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
    <section id="photography" className={isFullPage ? "py-10 px-6" : "section-padding"}>
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-10">
          <div>
            {isFullPage && (
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors mb-4"
              >
                ← Back to Home
              </Link>
            )}
            <div className="mb-2 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              {isFullPage ? "Photo Archive" : "Visual Stories"}
            </div>
            <h2 className="text-3xl md:text-4xl mb-3 font-serif font-bold">
              {isFullPage ? "Photography & Visual Stories" : "Photography"}
            </h2>
            <p className="max-w-[56ch] text-muted-foreground leading-relaxed">
              {isFullPage
                ? "A personal archive of landscape, documentary, and travel frames captured across Scotland and Nepal. Click any photo to inspect capture metadata and read the story."
                : "When I'm away from code, I spend time exploring landscape and documentary photography. Some frames carry written stories — click any photo to read."}
            </p>
          </div>

          {!isFullPage && showViewAll && (
            <Link
              to="/photography"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline shrink-0 pb-1"
            >
              <span>View Full Gallery ({PHOTOGRAPHS.length})</span>
              <span>→</span>
            </Link>
          )}
        </div>

        {/* Filter Tabs on Full Page */}
        {isFullPage && (
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-border/50">
            <span className="text-xs text-muted-foreground mr-2 font-medium">Filter by region:</span>
            {filterTags.map((tag) => {
              const count = PHOTOGRAPHS.filter((p) => matchesTag(p, tag)).length;
              if (count === 0 && tag !== "All") return null;

              const isActive = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <span>{tag}</span>
                  <span className={`text-[10px] ${isActive ? "opacity-90" : "opacity-60"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedPhotos.map((photo) => (
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

        {/* View All CTA on Home Page */}
        {!isFullPage && showViewAll && (
          <div className="mt-12 flex justify-center">
            <Link
              to="/photography"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent hover:shadow-md"
            >
              <span>Explore Complete Gallery</span>
              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-xs font-semibold text-accent">
                {PHOTOGRAPHS.length}
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        )}

        {/* Pagination on Full Page */}
        {isFullPage && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-border px-3.5 py-1.5 text-xs font-medium text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
            >
              ← Previous
            </button>
            <div className="flex items-center gap-1 px-2 text-xs text-muted-foreground">
              <span>Page</span>
              <strong className="text-foreground">{currentPage}</strong>
              <span>of</span>
              <span>{totalPages}</span>
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-border px-3.5 py-1.5 text-xs font-medium text-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {/* Story & Photo Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-fade-in"
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
                  className="text-2xl font-bold text-foreground mb-3 leading-snug font-serif"
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
                    Captured on location in {activePhoto.location} ({activePhoto.camera}).
                  </p>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>By Sagar Kafle</span>
                <span className="font-mono text-[11px] opacity-75">{activePhoto.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
